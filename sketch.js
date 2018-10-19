// ManiaScript


// SETUP FUNCTION - Runs once at beginning of program
function setup() {
	createCanvas(225, 800);

	// Initialize the beatmap using a var called gamemap or whatever you want to call it. This loads the notes of the beatmap and the NoteBuilder
	gamemap = new Beatmap();
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	background(0);
	noStroke();

	// Draw the lanes
	drawLanes();
	// Draw the hitzones
	drawHitZones();
	// Draw the beatmap we initialized in setup
	gamemap.show();
}

// Add bars between each lane for a e s t h e t i c
function drawLanes() {
	fill(80);
	rect(0, 0, 5, height);
	rect(55, 0, 5, height);
	rect(110, 0, 5, height);
	rect(165, 0, 5, height);
	rect(220, 0, 5, height);
}

// Draw light blue hit zone boxes. stupid way of doing it (not using variables) because its gonna be a pain in the bum when i implement the collision detection
// of the notes with zones
function drawHitZones() {
	fill(153, 204, 255);
	rect(5, height - 40, 50, 40);
	rect(60, height - 40, 50, 40);
	rect(115, height - 40, 50, 40);
	rect(170, height - 40, 50, 40);
}