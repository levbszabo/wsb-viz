# WSB-VIZ Analyzing r/WallStreetBets

This repository contains the frontend of a data analytics pipeline. To gain insight on the evolving nature of the popular
reddit forum r/WallStreetBets all forum comments were collected and analyzed to provide up to date statistics regarding forum
activity over the last week. 

www.wsb-viz.com

Tools Used:

### Backend: Python, Reddit Streaming API, Pub/Sub, DataFlow, BigQuery
### Frontend: React
### Visualization: Tableau
### Cloud: Google Cloud Platform

The overall analytics process was as follows: 

1. All forum comments were streamed on a Linux VM using a Python API and placed into a Google Pub/Sub managed message service.
2. Using a GCP Dataflow job the buffered messages were transformed from a json format and placed into the BigQuery analytic database.
3. Daily queries regarding frequent stock mentions (cross referenced with NYSE) and overall hourly traffic were scheduled using BigQuery.
4. Query results were connected to Tableau public to construct a dashboard
5. React application was created to embed the dashboard and other information.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
React dashboard components based on template provided by Creative Tim 
https://github.com/creativetimofficial/material-dashboard-react
