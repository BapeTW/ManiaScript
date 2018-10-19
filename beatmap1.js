// Beatmap "file". This is what the game reads in order to display notes. You can create your own if you know how to implement it into the code

// Initialize global scroll speed for the beatmap
let scrollSpeed = 5;

// Initialize an empty array which will hold the data of the notes
let beatmapNote = [];

// Basically the magic where the beatmap is created
class Beatmap {
    constructor() {
        // Place new notes here. Notebuilder(noteLane, noteLength, noteTime (when should the note be displayed), universal scroll speed of the map (or something else if
        // if you change it))
        beatmapNote[0] = new NoteBuilder(1, 200, 120, scrollSpeed);
        beatmapNote[1] = new NoteBuilder(4, 100, 30, scrollSpeed);

    }

    // Place the notes on the map by looping through a for loop for every note in the beatmapNote array. All notes will be loaded into the game at once which might be
    // a performance issue that I might fix later on.
    show() {
        for (let i = 0; i < beatmapNote.length; i++) {
            beatmapNote[i].show();
            // Although all notes are loaded into the game (above the view area of the map) at the beginning of the map, they won't start moving until the framecount
            // of the game is greater than the noteTVal (which is just the veriable for noteTime) which is worked out by this if statement.
            if (beatmapNote[i].noteTVal < frameCount) {
                beatmapNote[i].move();
            }
        }
    }
}