import pandas as pd

table = pd.read_csv('../HazardousDrivingAreas.csv')

# Literally does nothing except return the mean of all the data right now
def mean_severity_score():
    return float(table.SeverityScore.mean())

print(mean_severity_score())