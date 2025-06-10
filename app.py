from flask import Flask, render_template, jsonify
import requests

app = Flask(__name__)

FIREBASE_URL = "https://liga-m-2247a-default-rtdb.firebaseio.com/"

# Fetch data from Firebase
def get_firebase_data(endpoint):
    url = f"{FIREBASE_URL}{endpoint}.json"
    response = requests.get(url)
    return response.json() if response.status_code == 200 else {}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/fixtures')
def fixtures():
    fixtures_data = get_firebase_data("fixtures")
    return render_template('fixtures.html', fixtures=fixtures_data)

@app.route('/live')
def live():
    live_matches = get_firebase_data("live")
    return render_template('live.html', live_matches=live_matches)

@app.route('/players')
def players():
    players_data = get_firebase_data("players")
    return render_template('players.html', players=players_data)

@app.route('/results')
def results():
    results_data = get_firebase_data("results")
    return render_template('results.html', results=results_data)

@app.route('/api/data/<endpoint>')
def api_data(endpoint):
    data = get_firebase_data(endpoint)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
