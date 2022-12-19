# Tienda Del Amazonas

## About

This is a Node/Express backend-application that allows users to create and track a simple online inventory. A view engine is implemented with JSX templates in order to generate a simple static site that serves as a user interface. Data is stored via MongoDB online.

[GitHub Repository](https://github.com/glnewton/storeApp)

[Live Site](https://tienda-del-amazonas.onrender.com/)

[Requirements](./docs/Requirements.txt)

![Example 1 - Show Page](./docs/sampleMatrix.jpg)

![Example 2 - Index Page](./docs/sampleMatrix.jpg)

[Timeline](doc/ProjectBreakdown.md)

## Requirements

- [ ] *MVP* - Minimum Viable Product Your App Must Posess All 7 RESTful Routes
- [ ] *Index Page*: Your app should have an index page where
    - all the products are displayed
    - the images link to the product's show page
    - and there should be a link to add a new product.
- [ ] *Show Page*: Your show page should display a product with
    - a link back to the products
    - a link to edit the product (goes to the edit page)
    - a delete button that deletes
    - If the quantity of your item is zero, the show page should say 'OUT OF STOCK' instead of saying how many are remaining. (Hint: conditionals in jsx).
    - On the edit page, make sure you can set the quantity to zero if you want so that you can test if this is working.
    - The BUY button should also not be rendered if the quantity of the item is zero
- [ ] *New  Page*:
    - Render forms and submit to the appropriate routes.
- [ ] *Edit  Page*:
    - Render forms and submit to the appropriate routes.
- [ ] *Redirects*
    - The create route should redirect to the index
    - The delete route should redirect to the index
    - The update route will redirect back to the product's show page.
- [ ] Technical Requirements:
    - Your app MUST run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong
    - Must contain all 7 Restful Routes.
    - Must be styled and look like a store.
    - You MUST have a well documented README file in your repo. PLEASE add this README.md file on your own NOT through GitHub... Trust me...  
    - In lieu of presentations, you MUST create a video (on YouTube, Vimeo, etc...) of you showcasing your application and code. This video needs to be in your README file, and must be at least 3 minutes long.

## Screenshots

![Gameplay Screenshot 1](./images/gamePlayScreenshot1.jpg)

![Gameplay Screenshot 2](./images/gamePlayScreenshot2.jpg)

![Desktop View Screenshot 1](./docs/desktopView.jpg)

![Mobile View Screenshot 1](./docs/mobileView.png)

## Build Status

Project is a statically deployed via Render and is connected to the GitHub Repository to redploy on new commits/pushes.

## Code Style

Elements of both functional programming and object-oriented programming are used in this project.

## Design

Color Palette from: https://coolors.co/104547-4b5358-25b5af-727072-af929d

## Technologies, Language Features & Libraries Used

- HTML
- CSS
- JavaScript
- CSS Library: Bootstrap (buttons mainly)
- JS Features: 
    - Classes
    - Modules

## Features

1. Built with HTML, CSS and JavaScript
2. DOM-based 
3. Hosted on GitHub Pages

## Project Structure

## Routes

|      URL      |   HTTP Verb   |     Action    |   Notes & Examples  |
| ------------- | ------------- | ------------- | ------------- |
| /products/    |      GET      |	  index	    |   INDEX when a user types localhost:3000/products in browser this route shows a list or index of all products |
| /products/new	|      GET	    |      new	    |   NEW when a user types localhost:3000/products/new in browser this route shows the user a form to create a NEW fruit | 
| /products/:id	|     DELETE	|    destroy	|   DELETE initiates a delete request through a form submission with action = http://localhost:3000/products/:idOfProductand allows the application the ability to delete a product |
| /products/:id	|      PUT	    |     update	|   UPDATE initiates a put request through a form submission with action = http://localhost:3000/products/:idOfProductand allows the application the ability to Update data about a product |
| /products	    |      POST	    |     create	|   CREATE initiates a post request through a form submission with action = http://localhost:3000/products/and allows the application the ability to Createa product |
| /products/:id/edit | 	    GET	|      edit	    |   EDIT when a user types localhost:3000/products/:idOfProduct/edit in browser shows the user a form to edit a product |
| /products/:id	|      GET	    |      show	    |   SHOW when a user types localhost:3000/products/:idOfProductshows the user an Individual fruit in the browser |


## Installation Instructions

**Step 1: Clone (or fork) the repository**

Run the following code in your terminal to download the code:

`git clone https://github.com/glnewton/word-puzzle.git`

![Installation Screenshot 1](./docs/installation1.jpg)

**Step 2: Run NPM Install to install necessary packages**

![Installation Screenshot 2](./docs/installation2.jpg)

**Step 3: Run NPM Start to locally run the start scripts fo CRA (Create-React-App)**

![Installation Screenshot 3](./docs/installation3.jpg)

![Installation Screenshot 4](./docs/installation4.jpg)

## App Mechanics:

1. Two Players (User vs PC )
2. Win State
3. Lose State
4. Multiple Rounds
5. Exit Game
6. Play Again

## Additional Features

- Responsive mobile design
- Animation(s)
    - Flashing Background Color

## Known Issues:

- Edge case that errors exist on some diagonal searches for partial words (matrix out of bounds error?).
- I give the position of the start of the word, but is the position of the matrix and submatrix (X is the sub matrix (row) and starts from zero in the upper left hand corner. Y is the position in the row starting at zero from the left.)
- I do not yet cite the end position of the word
- Clicking Reset Board generates a random array and it can be searched ONCE. It then defaults back to the given array imported via the data.js file
PARROT is not found in the array. I believe it was a translation error as LORO is found and is the masculine translation of PARROT.

## Roadmap

- Add modal introduction and ending
- Add speed, weakness, and special attack to creatures
- Add additional animations
    1. Fade In/Out
    2. Border Flashing
    3. Shaking Image
    4. Screen Dimming
    5. Health Bar
- Refactor with TypeScript

## Acknowledgements

- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs

- https://github.com/mdn/express-locallibrary-tutorial

- https://github.com/Viveckh/Veniqa

- https://github.com/KasperKain/PerScholas-Fruits

- To Cycle 28

- To the apprentices

- To G,T,K,M et al

## Disclaimer

I am not affliated with any of the above and all work used is for educational and demonstration purposes only. No profit is generated from this project.

## Resources

- https://medium.com/@meakaakka/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3

## License

MIT License

MIT © [Gary Newton]()