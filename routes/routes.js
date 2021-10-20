/*
    TODO: REMAINING CHECKLIST
    - Figure out how to get the data to display onto the page of notes.html (even though its collecting in db.json)
    - Figure out why the notes WILL display after a refresh, but not in real time. I feel like I need to tweak the index.js file, but I'm not sure 
    - Figure out how to delete the data from both the front-end and backend
    - After everything is working locally, check with tutor on the right way to host app on Heroku
*/

// TODO: REQUIRE NECESSARY DEPENDANCIES
const fs = require('fs');
const path = require('path');

// TODO: SET UP EXPORT MODULE TO READ/WRITE DATA FROM THE FILE SYSTEM

module.exports = app => {


    fs.readFile("db/db.json","utf8", (err, data) => {
        // account for error handling
        if (err) throw err;

        // create a variable that knows how to translate notes that will get submitted in the input form
        let notes = JSON.parse(data);
    
        // create route to capture notes
        // TODO: Consult tutor about reasoning for saying "/api/notes" rather than "routes/notes"
        app.get("/api/notes", function(req, res) {
            res.json(notes);
        });

        // create route to post notes
        app.post("/api/notes", function(req, res) {
            // create a variable to receive the new note
            let newNote = req.body;
            // add the new note to the database (ds.json)
            notes.push(newNote);
            // this function is defined below and will do a writeFile instead of readFile
            updateNotesDB();
            return console.log("The following note has been added: " +newNote.title);
        });

        // create a route that captures the notes with newly defined id that comes from UUID
        // TODO: Consult tutor on how exactly to use UUID to ensure I'm doing things right
        app.get("/api/notes/:id", function(req,res) {
            res.json(notes[req.params.id]);
        });

        // TODO: Get the route that will display notes onto notes.html page
        app.get('/notes', function(req,res) {
            res.sendFile(path.join(__dirname, "../public/notes.html"));
        });

        // TODO: Get the route for index.html (double-check this syntax with tutor)
        app.get('*', function(req,res) {
            res.sendFile(path.join(__dirname, "../public/index.html"));
        });

        // TODO: Create function to update db.json when new news have been added
        function updateNotesDB() {
            fs.writeFile("db/db.json",JSON.stringify(notes,'\t'),err => {
                if (err) throw err;
                return true;
            });
        } // end updateNotesDB

    }); // end fs.readFile

} // end/module.exports