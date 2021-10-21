# Note Taker 
![badge](https://img.shields.io/badge/license-MIT-brightgreen)

## Description
Note Taker is an application that can be used to write and save notes. This application uses an Express.js back end, and saves and retrieve note data from a JSON file.


## Table of Contents
- [Important URLs](#urls)
- [Foreword](#foreword)
- [Usage](#usage)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mockup](#mock-up)
- [Frameworks](#frameworks)
- [License](#Licensing)

## URLs
- [GitHub Repo URL](https://github.com/candracodes/note-taker)
- [Deployed Heroku Application URL](https://candra-note-taker.herokuapp.com/)

## Foreword

- This application aims to accomplish the following:
  - [Adhere to the Acceptance Criteria](./assets/README.md)
  - Given starter code, this applications then aims to:
  - GET /notes ... which will return the notes.html file.
  - GET * ... which will return the index.html file.
  - GET /api/notes ... which will read the db.json file and return all saved notes as JSON.
  - POST /api/notes ... which receives a new note to save on the request body, adds it to the db.json file, and then returns the new note to the client.

## Usage

- This application is invoked by running `npm start` in the command line.

## User-Story

```md
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance-Criteria

```md
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Mock-Up

* This application should resemble the following screenshots and video walk-through:

![Screenshot 1](./assets/screenshot1.png)
![Screenshot 2](./assets/screenshot2.png)

## Frameworks

The project is created using the following frameworks and packages

- [Node.JS](https://nodejs.org/en/)
- [Express.JS](https://expressjs.com/)

## Licensing
The project is made possible with the following Licensing:
- [MIT](license.txt)

