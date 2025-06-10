import { db, storage, collection, addDoc, getDocs, deleteDoc, doc, ref, uploadBytes, getDownloadURL } from "../firebase.js";

async function uploadImage(file, path) {
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
}

async function addTeam() {
    const teamName = document.getElementById("teamName").value.trim();
    const logoFile = document.getElementById("teamLogo").files[0];

    if (!teamName) {
        alert("Please enter a valid team name!");
        return;
    }

    let logoURL = "";
    if (logoFile) {
        logoURL = await uploadImage(logoFile, `team_logos/${logoFile.name}`);
    }

    await addDoc(collection(db, "teams"), { name: teamName, wins: 0, draws: 0, losses: 0, logo: logoURL });
    alert("Team Added!");
    document.getElementById("teamName").value = "";
    document.getElementById("teamLogo").value = "";
    loadTeams();
}

async function deleteTeam(teamId) {
    await deleteDoc(doc(db, "teams", teamId));
    alert("Team Deleted!");
    loadTeams();
}

async function loadTeams() {
    const querySnapshot = await getDocs(collection(db, "teams"));
    let html = "";
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        html += `<tr>
                    <td><img src="${data.logo}" width="50" height="50"> ${data.name}</td>
                    <td>${data.wins}</td>
                    <td>${data.draws}</td>
                    <td>${data.losses}</td>
                    <td><button class="btn btn-danger btn-sm" onclick="deleteTeam('${doc.id}')"><i class="fas fa-trash"></i> Delete</button></td>
                 </tr>`;
    });
    document.getElementById("leagueTable").innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
    loadTeams();
    document.getElementById("addTeamBtn").addEventListener("click", addTeam);
});
