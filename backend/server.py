from flask import Flask, request, jsonify
from werkzeug.wrappers import response
import data_analysis_hazards, data_analysis_idling

GLOBAL_DATA_HAZARDS = data_analysis_hazards.get_global_data()
GLOBAL_DATA_IDLING = data_analysis_idling.get_global_data()

DECIMAL_PLACES = 2

app = Flask(__name__)

@app.route('/')
def base():
    return '<h1>The coolest insurance platform on the planet.</h1> This is where the server is hosted. Go to the <a href="http://173.35.205.120:3000/landing">client</a>.'

@app.route('/getdata', methods=['GET'])
def get_data():
    lat, lng = float(request.args.get('lat')), float(request.args.get('lng'))
    print(lat, lng)
    res = data_analysis_hazards.get_location_data(lat, lng)
    res.update(GLOBAL_DATA_HAZARDS)

    relative_num_incidents = res['MeanNumIncidents'] / res['GlobalMeanNumIncidents']
    relative_severity_score = res['MeanSeverityScore'] / res['GlobalMeanSeverityScore']
    res.update({'RelativeNumIncidents': relative_num_incidents, 'RelativeSeverityScore': relative_severity_score})

    res.update({'RelativeNumIncidentsConclusion': 'Your location has {}% {} traffic incident rates than the global mean.'.format(abs(round((1-relative_num_incidents)*100, 2)), ('higher' if relative_num_incidents > 1 else 'lower'))})
    res.update({'RelativeSeverityScoreConclusion': 'Your location has {}% {} severe incidents than the global mean.'.format(abs(round((1-relative_severity_score)*100, 2)), ('more' if relative_severity_score > 1 else 'less'))})

    # Include general risk assessment (low/medium/high), ultimate conclusion, 2 more metrics
    res.update(data_analysis_idling.get_location_data(lat, lng))
    res.update(GLOBAL_DATA_IDLING)
    relative_idling = res['MeanCumulativeDailyIdleTime'] / res['GlobalMeanCumulativeDailyIdleTime']
    res.update({'RelativeMeanCumulativeDailyIdleTime': 'Cars in your location tend to idle for {}% {} time on average.'.format(abs(round((1-relative_idling)*100, 2)), ('more' if relative_idling > 1 else 'less'))})

    res = jsonify(res)
    res.headers.add('Access-Control-Allow-Origin', '*')
    return res

if __name__ == '__main__':
    app.run(debug=True, port=5001, host='0.0.0.0')