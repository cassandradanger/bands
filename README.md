# bands

file serving project

For this project, we will be creating a Band Name Generator application! A combination of words will appear once a user clicks the image to form a cool band name!

To start, you will need to create an index.html file that contains the clickable image.

We will also need to link up our app.js, stylesheet.css, bootstrap and jquery files.

We will then create a data.json file and create an object that contains arrays - at least 2. Each index in this array will contain a word that will comprise part of the band name. Provide at least 5 words per array.

The next step is to create a "get" request in our app.js. Upon clicking the image on the DOM, the "get" request to the data.json file will fire off.

With the data received from that get request, we can perform a randomization function to grab a random fortune from the returned object. We will then append that fortune to the DOM.

HARD MODE: Add jQuery animation to the band names

PRO MODE: Instead of grabbing the data from one json file, create 3 different json files and pull the data from each one to form the band name.
