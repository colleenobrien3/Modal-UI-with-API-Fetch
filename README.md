# Modal UI with API Fetch

For this project, I was given an interactive UI modal template mockup to recreate using HTML and CSS. I wrote the basic structure in HTML but added most of the features, along with the functionality, with Vanilla JavaScript. I used the JavaScript fetch method to pull data from the online API ['The Rick and Morty API.'](https://rickandmortyapi.com/) Then, I used a for loop to iterate through the response character objects and create a box for each character. Each of these boxes has it's own pop-up box with a hidden display. When you click on the character's box, the pop-up box's class is toggled, and it is dipslayed.

## Built With

- HTML
- CSS
- Vanilla JavaScript

## Getting Started

Go to https://colleenobrien3.github.io/UI-Element-Project/ to view the webpage. Click on a character's image to trigger an event listener that pulls up that character's bio information in a pop-up modal box. Click inside the box again to close it. Resize the page to see it's responsiveness.

## Goals

Next, I hope to create functionality for closing the box by clicking anywhere outside of the box instead of just inside of the box. I will need to implement an event listener on the rest of the page. Perhaps I will make a div around the pop up box with display equal to zero and z index less than the modal, and give it an event listener that closes the modal.
