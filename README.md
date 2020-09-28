# Pitching App Flask

## Description 

A pitch posting social site for the youth. This application takes advantage of Pythons Flask Microframework and react. 

An app that allows people to add one minute pitches, then other members can upvote, comment or downvote the pitch 

### Author

#### [Lennox Omondi](https://linkedin.com/in/lenomosh)


## User Stories
As user I would like to:

* As a user, I would like to see the pitches other people have posted.
* As a user, I would like to vote on the pitch they liked and give it a downvote or upvote.
* As a user, I would like to be signed in for me to leave a comment
* As a user, I would like to receive a welcoming email once I sign up.
* As a user, I would like to view the pitches I have created in my profile page.
* As a user, I would like to comment on the different pitches and leave feedback.
* As a user, I would like to submit a pitch in any category.
* As a user, I would like to view the different categories.


## Setup Instructions
### React Setup Instructions
- create a new directory
- `git init` and run `git remote add origin git@github.com:lenomosh/pitching-app.git` id you are using SSH or `https://github.com/lenomosh/pitching-app.git`
- `git pull origin front`
- run `yarn` or `npm install`
- finally serve via `yarn start` or `npm start`

### Flask Setup Instruction
- create a new directory
- `git init` and run `git remote add origin git@github.com:lenomosh/pitching-app.git` id you are using SSH or `https://github.com/lenomosh/pitching-app.git`
- `git pull origin back`
- From the project directory run `conda create --prefix=./env` or `python -m venv virtual`
- Run `source activate ./env` for conda or `source virtual/bin/activate`
- Run `pip install -r requirements.txt`
- open `run.py` and change `create_app` argument to `development`
- run `export EMAIL_USER='your_username'`
- run `export EMAIL_PASSWORD='your_email_password'`
- if you wish to run the app on production, you have to export the database url by running `export DATABASE_URL='your_database_url'`
- run the app either via `flask run` or `python run.py runserver`

## LICENSE
[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

Copyright (c) 2020 Lennox Omondi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
