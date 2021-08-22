from flask import Flask, request, jsonify
from werkzeug.wrappers import response
import data_analysis_hazards, data_analysis_idling, data_analysis_service

GLOBAL_DATA_HAZARDS = data_analysis_hazards.get_global_data()
GLOBAL_DATA_IDLING = data_analysis_idling.get_global_data()
GLOBAL_DATA_SERVICE = data_analysis_service.get_global_data()

DECIMAL_PLACES = 2

app = Flask(__name__)

def risk_assessment(relative_mean):
    # Should insurance prices increase, decrease, or stay the same as a result of the new data?
    if relative_mean <= 0.8:
        return 'decrease'
    elif relative_mean <= 1.2:
        return 'remain the same'
    else:
        return 'increase'

@app.route('/')
def base():
    return '<h1>The coolest insurance platform on the planet.</h1> This is where the server is hosted. Go to the <a href="http://173.35.205.120:3000/landing">client</a>.'

@app.route('/getdata', methods=['GET'])
def get_data():
    lat, lng = float(request.args.get('lat')), float(request.args.get('lng'))
    print(lat, lng)
    res = data_analysis_hazards.get_location_data(lat, lng)
    res.update(GLOBAL_DATA_HAZARDS)

    relative_num_incidents = round(res['MeanNumIncidents'] / res['GlobalMeanNumIncidents'] - 1, 2)
    relative_severity_score = round(res['MeanSeverityScore'] / res['GlobalMeanSeverityScore'] - 1, 2)
    res.update({'RelativeNumIncidents': relative_num_incidents, 'RelativeSeverityScore': relative_severity_score})

    res.update({'RelativeNumIncidentsConclusion': 'Your location has {}% {} traffic incident rates than the global mean.'.format(abs(relative_num_incidents*100), ('higher' if relative_num_incidents > 0 else 'lower'))})
    res.update({'RelativeSeverityScoreConclusion': 'Your location has {}% {} severe incidents than the global mean.'.format(abs(relative_severity_score*100), ('more' if relative_severity_score > 0 else 'less'))})

    # Include general risk assessment (low/medium/high), ultimate conclusion, 2 more metrics
    res.update(data_analysis_idling.get_location_data(lat, lng))
    res.update(GLOBAL_DATA_IDLING)
    relative_idling = round(res['MeanCumulativeDailyIdleTime'] / res['GlobalMeanCumulativeDailyIdleTime'] - 1, 2)
    res.update({'RelativeMeanCumulativeDailyIdleTime': relative_idling})
    res.update({'RelativeMeanCumulativeDailyIdleTimeConclusion': 'Cars in your location tend to idle for {}% {} time on average.'.format(abs(relative_idling*100), ('more' if relative_idling > 0 else 'less'))})

    res.update(data_analysis_service.get_location_data(lat, lng))
    res.update(GLOBAL_DATA_SERVICE)
    relative_service_time = round(res['MeanServiceTime'] / res['GlobalMeanServiceTime'] - 1, 2)
    res.update({'RelativeMeanServiceTime': relative_service_time})
    res.update({'RelativeMeanServiceTimeConclusion': 'Cars in your area tend to take {}% {} time to be serviced.'.format(abs(relative_service_time*100), 'more' if relative_service_time > 1 else 'less')})

    relative_mean = (relative_service_time + relative_idling + relative_num_incidents + relative_severity_score)/4

    res.update({'UltimateConclusion': 'Insurance rates are likely to {}.'.format(risk_assessment(relative_mean))})

    res = jsonify(res)
    res.headers.add('Access-Control-Allow-Origin', '*')
    return res

if __name__ == '__main__':
    app.run(debug=True, port=5001, host='0.0.0.0')