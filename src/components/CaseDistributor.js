import { collection, getDocs, doc, setDoc } from "@firebase/firestore";
import { firestore } from "../firebase";

const caseDistributor = async (newCase) => {
    try {
        // Retrieve all judges
        console.log(newCase);
        const judgesCollection = collection(firestore, "Judges");
        const judgesSnapshot = await getDocs(judgesCollection);
        const allJudges = judgesSnapshot.docs.map(doc => doc.data());
        console.log("All Judges:", allJudges);

        // Filter judges based on the case criteria
        // Helper function for case-insensitive string comparison
const compareStrings = (str1, str2) => {
    if (!str1 || !str2) return false;
    return str1.trim().toLowerCase() === str2.trim().toLowerCase();
};

const suitableJudges = allJudges.filter(judge => {
    // Compare Case Type

    console.log(judge.caseType, newCase.caseType);
    if (!compareStrings(judge.caseType, newCase.caseType)) return false;
    console.log(judge.specificType, newCase.specificType);
    // Compare Specific Type
    if (!compareStrings(judge.specificType, newCase.specificType)) return false;
console.log(judge.state, newCase.state);
    // Compare State
    if (!compareStrings(judge.state, newCase.state)) return false;
console.log(judge.city, newCase.city);
    // Compare City
    if (!compareStrings(judge.city, newCase.city)) return false;
console.log(judge.court, newCase.court);
    // Compare Court Name
    if (!compareStrings(judge.court, newCase.court)) return false;

    // All comparisons passed, this judge is suitable
    return true;
});


        console.log("Suitable Judges:", suitableJudges);

        if (suitableJudges.length > 0) {
            // Assign the case to the first suitable judge for simplicity
            const assignedJudge = suitableJudges[0];

            // Update the case document with the assigned judge's ID
//             console.log("Firestore instance:", firestore);
// console.log("New Case ID:", newCase.id);

            const caseRef = doc(firestore, "CivilCases", newCase.caseNumber);
            await setDoc(caseRef, {
                ...newCase,
                judgeId: assignedJudge.judgeId,
                judgeAssigned: assignedJudge.fullName
            }, { merge: true });
            
            console.log(`Case ${newCase.caseNumber} assigned to Judge ${assignedJudge.fullName}.`);
        } else {
            console.log("No suitable judge found for the case.");
        }
    } catch (error) {
        console.error("Error in caseDistributor:", error);
    }
};

export default caseDistributor;
