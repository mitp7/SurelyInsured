from flask import Flask, request, jsonify
from data_analysis import get_location_data


app = Flask(__name__)

@app.route('/')
def base():
    return '<h1>The coolest insurance platform on the planet.</h1> This is where the server is hosted. Go to the client:'

@app.route('/getdata', methods=['POST'])
def get_data():
    lat, lng = int(request.args.get('lat')), int(request.args.get('lng'))
    print(lat, lng)
    return jsonify(get_location_data(lat, lng))

if __name__ == '__main__':
    app.run(debug=True, port=5001, host='0.0.0.0')