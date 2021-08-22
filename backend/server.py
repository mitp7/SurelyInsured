from flask import Flask, request, jsonify
from werkzeug.wrappers import response
from data_analysis import get_location_data


app = Flask(__name__)

@app.route('/')
def base():
    return '<h1>The coolest insurance platform on the planet.</h1> This is where the server is hosted. Go to the client:'

@app.route('/getdata', methods=['GET'])
def get_data():
    lat, lng = int(request.args.get('lat')), int(request.args.get('lng'))
    print(lat, lng)
    response = jsonify(get_location_data(lat, lng))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == '__main__':
    app.run(debug=True, port=5001, host='0.0.0.0')