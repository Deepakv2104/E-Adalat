import { useParams ,useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import NewCivilCaseCard from "./NewCivilCaseCard";

function CaseDetailsRoute({isViewMode}) {
  const { caseId } = useParams();
  console.log(caseId);
  const [caseData, setCaseData] = useState(null);
 
  useEffect(() => {
    // Fetch case data from Firebase based on caseId
    const fetchCaseData = async () => {
      try {
        const caseDocRef = doc(firestore, "CivilCases", caseId);
        const caseDocSnapshot = await getDoc(caseDocRef);

        if (caseDocSnapshot.exists()) {
          const data = caseDocSnapshot.data();
          setCaseData(data);
        } else {
          // Handle case not found
        }
      } catch (error) {
        console.error("Error fetching case data: ", error);
      }
    };

    fetchCaseData();
  }, [caseId]);

  return (
    <div>
      <NewCivilCaseCard caseData={caseData} isViewMode={false} />
    </div>
  );
}

export default CaseDetailsRoute;
