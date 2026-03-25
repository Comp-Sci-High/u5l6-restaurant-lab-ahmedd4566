// Task 1: Set up server [1 pt]
// Install + import express and mongoose 
 


// Create app instance


// Add middleware to process JSON request body


// Write an async startServer function that
// - connects to MongoDB with your SRV string with a database called restaurant
// - starts the server at port 3000
// - DO NOT ADD ANY ITEMS YET


// call startServer


// Task 2: Define the schema + model for a menu item [2 pts]
// It should have name, cost, and at least 2 more attributes of your choice
// You need at least 1 required, 1 unique, and 1 default that makes sense



// Task 3: Define the model for the MenuItem [1 pt]


// Task 4: Define a POST route at /menu/test that adds a test menu item to the database [2 pt]
// The values for the menu item should be written in the code, NOT in Postman
// Test this route from Postman (make public!) and make sure your test item is in the DB



// Task 5: Define a GET route at /menu that returns all menu items as a JSON [2 pt]



// Task 6: Define a GET route at /menu/value that returns only menu items that cost less than 5 [2 pts]



// Task 7: Define a POST route at /menu/new that adds a new menu item [2 pts]
// The values for the menu item should come from the request body
// Test this route from Postman (make public!) and make sure the user's item is in the DB


