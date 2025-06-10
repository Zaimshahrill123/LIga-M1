import { realtimeDB, dbRef, onValue, update } from "./firebase.js";

function loadStats() {
    const statsRef = dbRef(realtimeDB, 'stats');
    onValue(statsRef, (snapshot) => {
        const data = snapshot.val();
        let html = '';
        for (let key in data) {
            html += `<tr>
                <td>${data[key].player}</td>
                <td>${data[key].team}</td>
                <td>${data[key].goals}</td>
                <td><button class='btn btn-sm btn-primary' onclick='updateGoals("${key}")'>+</button></td>
            </tr>`;
        }
        document.getElementById("statsTable").innerHTML = html;
    });
}

document.addEventListener("DOMContentLoaded", loadStats);
