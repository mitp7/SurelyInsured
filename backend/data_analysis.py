import pandas as pd
import math

table = pd.read_csv('HazardousDrivingAreas.csv')

# Return the (num_entries) closest entries to the location (lat, lng)
def nearby_entries(lat, lng, num_entries=100):
    return table.loc[((table.Latitude-lat)**2 + (table.Longitude-lng)**2).sort_values().index][:num_entries]

# Returns the mean severity score and number of incidents for the nearest locations to (lat, lng)
def get_location_data(lat, lng):
    nearby_table = nearby_entries(lat, lng)
    return {'MeanSeverityScore': nearby_table.SeverityScore.mean(), 
            'MeanNumIncidents': nearby_table.IncidentsTotal.mean()}

metrics = get_location_data(43, -79)
print(metrics)