/*
    TODO: REMAINING CHECKLIST
    - Figure out how to delete the data from both the front-end and backend
*/

// REQUIRE NECESSARY DEPENDANCIES
const fs = require('fs');
const path = require('path');

// SET UP EXPORT MODULE TO READ/WRITE DATA FROM THE FILE SYSTEM
module.exports = app => {

    // TODO: NOTE TO CANDRA: The previous approach defined the readFile prior to creating the routes. It's important to establish the routes FIRST and read/write AFTER because everything is asynchronous and won't want to wait.

    // create route to capture notes
    app.get("/api/notes", function (req, res) {

        // START READING THE FILE, IMPORTANT: so line 20 is like a URL address, it's listening to app.get("whatever-is-here")
        fs.readFile("db/db.json", "utf8", (err, data) => {
            // account for error handling
            if (err) throw err;
            // This is sort of like an ending statement, similar to a return, so it should be the last thing done
            res.json(JSON.parse(data));
        }); // end fs.readFile

    });

    // create route to post notes
    app.post("/api/notes", function (req, res) {
        // create a variable to receive the new note
        let newNote = req.body;

        // Read what exists in the fake database (JSON FILE)
        fs.readFile("db/db.json", "utf8", (err, data) => {
            // account for error handling
            if (err) throw err;

            // Read the JSON, store the variable, append it, then write it
            let storedNotes = JSON.parse(data);

            // add the new note to the database (ds.json)
            storedNotes.push(newNote);
            updateNotesDB(storedNotes);
            // this is a full stop for the readFile. I wrote it as a boolean just to ensure that it was working.
            res.send(true);

        }); // end fs.readFile

        // return console.log("The following note has been added: " + newNote.title);
    });

    // TODO: Attempt new route that adds IDs
    app.get("/api/notes/:id", function (req, res) {
        console.log("Not sure how to approach this just yet, but will continue to investigate");
    });

    // Should receive a query parameter that contains the id of a note to delete. 
    // To delete a note, I'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
    // At present, this route isn't doing anything, so it will require further investigation post-assignment
    app.delete("/api/notes/:id", function (req, res) {
        console.log("Not sure how to delete this just yet, but will continue to investigate");
        /*
        TODO: Continue exploration on how to handle delete action. Currently, this is how index.js handles delete:
        const handleNoteDelete = (e) => {
            e.stopPropagation();

            const note = e.target;
            const noteId = JSON.parse(note.parentElement.getAttribute('data-note')).id;

            if (activeNote.id === noteId) {
                activeNote = {};
            }

            deleteNote(noteId).then(() => {
                getAndRenderNotes();
                renderActiveNote();
            });
        };
        */
    });

    // Get the route that will display notes onto notes.html page
    app.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // Get the route that will return index.html
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // Create function to update db.json when new notes have been added (adding async because it didn't post in insomnia but DID post to the db.json)
    function updateNotesDB(notes) {
        fs.writeFile("db/db.json", JSON.stringify(notes, '\t'), err => {
            if (err) throw err;
            return true;
        });
    } // end updateNotesDB

} // end/module.exports