from flask import Flask, request, jsonify
from werkzeug.wrappers import response
from data_analysis import get_global_data, get_location_data

GLOBAL_DATA = get_global_data()

app = Flask(__name__)

@app.route('/')
def base():
    return '<h1>The coolest insurance platform on the planet.</h1> This is where the server is hosted. Go to the client:'

@app.route('/getdata', methods=['GET'])
def get_data():
    lat, lng = int(request.args.get('lat')), int(request.args.get('lng'))
    print(lat, lng)
    res = get_location_data(lat, lng)
    res.update(GLOBAL_DATA)

    relative_num_incidents = res['MeanNumIncidents'] / res['GlobalMeanNumIncidents']
    relative_severity_score = res['MeanSeverityScore'] / res['GlobalMeanSeverityScore']
    res.update({'RelativeNumIncidents': relative_num_incidents, 'RelativeSeverityScore': relative_severity_score})

    res.update({'RelativeNumIncidentsConclusion': 'Your location has {}% {} traffic incident rates than the global mean.'.format(abs(round((1-relative_num_incidents)*100, 2)), ('higher' if relative_num_incidents > 1 else 'lower'))})
    res.update({'RelativeSeverityScoreConclusion': 'Your location has {}% {} severe incidents than the global mean.'.format(abs(round((1-relative_severity_score)*100, 2)), ('more' if relative_severity_score > 1 else 'less'))})


    res = jsonify(res)
    res.headers.add('Access-Control-Allow-Origin', '*')
    return res

if __name__ == '__main__':
    app.run(debug=True, port=5001, host='0.0.0.0')