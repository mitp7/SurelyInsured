from flask import Flask
from data_analysis import get_location_data

app = Flask(__name__)

@app.route('/')
def base():
    return '<h1>The coolest insurance platform on the planet.</h1> This is where the server is hosted. Go to the client:'

@app.route('/getdata', methods=['POST'])
def get_data():
    return get_location_data(45, -79)

if __name__ == '__main__':
    app.run(debug=True, port=5001, host='0.0.0.0')