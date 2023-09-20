import React, { useEffect, useMemo, useRef, useState } from "react";
import { MeetingProvider, useMeeting, useParticipant } from "@videosdk.live/react-sdk";
import ReactPlayer from "react-player";
import { authToken, createMeeting } from "../API";
import "../styles/VideoMeeting.css";

// Component to join or create a meeting
function JoinScreen({ getMeetingAndToken }) {
  const [meetingId, setMeetingId] = useState(null);

  const onClick = async () => {
    await getMeetingAndToken(meetingId);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Meeting Id"
        onChange={(e) => setMeetingId(e.target.value)}
      />
      <button onClick={onClick}>Join</button>
      {" or "}
      <button onClick={onClick}>Create Meeting</button>
    </div>
  );
}

// Component to display individual participant details
function ParticipantView({ participantId }) {
  const {
    webcamStream,
    micStream,
    webcamOn,
    micOn,
    isLocal,
    displayName
  } = useParticipant(participantId);
  const micRef = useRef(null);

  const videoStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current && micOn && micStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(micStream.track);
      micRef.current.srcObject = mediaStream;
      micRef.current.play().catch((error) => console.error("Error in playing audio", error));
    } else if (micRef.current) {
      micRef.current.srcObject = null;
    }
  }, [micStream, micOn]);

  return (
    <div>
      <p>
        Participant: {displayName} | Webcam: {webcamOn ? "ON" : "OFF"} | Mic: {micOn ? "ON" : "OFF"}
      </p>
      <audio ref={micRef} autoPlay playsInline muted={isLocal} />
      {webcamOn && (
        <ReactPlayer
          playsinline
          pip={false}
          light={false}
          controls={false}
          muted={true}
          playing={true}
          url={videoStream}
          height={"300px"}
          width={"300px"}
          onError={(err) => console.log("Participant video error", err)}
        />
      )}
    </div>
  );
}

// Control buttons for the meeting
function Controls() {
  const { leave, toggleMic, toggleWebcam } = useMeeting();

  return (
    <div>
      <button onClick={leave}>Leave</button>
      <button onClick={toggleMic}>Toggle Mic</button>
      <button onClick={toggleWebcam}>Toggle Webcam</button>
    </div>
  );
}

// Main meeting view
function MeetingView({ meetingId, onMeetingLeave }) {
  const [joined, setJoined] = useState(null);
  const { join, participants } = useMeeting({
    onMeetingJoined: () => setJoined("JOINED"),
    onMeetingLeft: onMeetingLeave
  });

  const joinMeeting = () => {
    setJoined("JOINING");
    join();
  };

  return (
    <div className="container">
      <h3>Meeting Id: {meetingId}</h3>
      {joined === "JOINED" ? (
        <div>
          <Controls />
          {[...participants.keys()].map((participantId) => (
            <ParticipantView key={participantId} participantId={participantId} />
          ))}
        </div>
      ) : joined === "JOINING" ? (
        <p>Joining the meeting...</p>
      ) : (
        <button onClick={joinMeeting}>Join</button>
      )}
    </div>
  );
}

// Main App component
function VideoMeeting() {
  const [meetingId, setMeetingId] = useState(null);

  const getMeetingAndToken = async (id) => {
    const meetingId = id ? id : await createMeeting({ token: authToken });
    setMeetingId(meetingId);
  };

  const onMeetingLeave = () => {
    setMeetingId(null);
  };

  return authToken && meetingId ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name:"Aman"
      }}
      token={authToken}
    >
      <MeetingView meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
    </MeetingProvider>
  ) : (
    <JoinScreen getMeetingAndToken={getMeetingAndToken} />
  );
}

export default VideoMeeting;