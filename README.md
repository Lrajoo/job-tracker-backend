## Job Tracker

Production URL : [https://master.dk46b70snttgs.amplifyapp.com](https://master.dk46b70snttgs.amplifyapp.com)

## Description (a)

This app displays a list cards showing the current job boards in the market with the job board logo, description and rating.
Upon clicking on a job board, user will be directed to page showing a table listing all the opportunities available through that job board.
Each record has the listed fields ID, Job Title, Company Name, Job URL. User can view the job source metrics as well, the table display each job board along with the number of opportunities that exist. The backend reads the CSV file containing 20,000 records and resolves the source based on the company name, job URL and job board name. All strings are converted to lower case before checking. Each opportunity will check if it is a company website but a job board will take precedence, if unable to determine a source, unknown is assigned.

## Source resolution (b)

job-tracker-backend/src/util/jobSourceResolver.js

Check if the company name exists in the job URL,
Yes => then it checks if any of the job board names exists in the job URL
Yes => source is the job board
No => source is the company website
No => check if the job board name exists in the job URL
Yes => source is the job board
No => source is Unknown

Resolver code: [https://github.com/Lrajoo/job-tracker-backend/blob/main/src/util/jobSourceResolver.js](https://github.com/Lrajoo/job-tracker-backend/blob/main/src/util/jobSourceResolver.js)

## Technologies (c)

Frontend
Framework: React
Router: react-router-dom
State Management: MobX
UI Framework: Ant Design
HTTP client: Axios
Deployment: AWS Amplify

Backend
Framework: Express
Database: MongoDB
CSV Parser: csv-parser
Deployment: Heroku

## Production URL (d)

Home URL : [https://master.dk46b70snttgs.amplifyapp.com](https://master.dk46b70snttgs.amplifyapp.com)

## Procssed CSV structed (e)

Google Drive Link: [https://drive.google.com/file/d/1mKgV182biLO5OsY1yOgjcTBR9TvZGKm5/view?usp=sharing](https://drive.google.com/file/d/1mKgV182biLO5OsY1yOgjcTBR9TvZGKm5/view?usp=sharing)

## Job Opportunity Metrics (f)

Metrics URL : [https://master.dk46b70snttgs.amplifyapp.com/metrics](https://master.dk46b70snttgs.amplifyapp.com/metrics)
