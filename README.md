# Ember Templating Lab: Flatiron Book Store

## Objectives

1. Define routes that return a collection of model data.
2. Build Handlebars template that renders that model data using Handlebars helpers like `{{each}}` and `{{if}}`. 
3. Build a controller that responds to a user's interaction with the DOM. 

## Overview

In this lab we'll be building out the Flatiron Ember Bookstore––a fabulous website in which users can browse real books that really exist. We want our user to be able to toggle between viewing a list of books that display just book titles, and viewing the list of books with all of the details for each book. Check out the demo below:

<iframe width="640" height="480" src="https://www.youtube.com/embed/PYGfibSk1wc" frameborder="0" allowfullscreen></iframe>

In order to get this working, we'll build a controller that responds to the user's click of the "View Book Details" button by firing an action to show or hide the book details. 

## Instructions

### Part I: Routes and Route Handlers

* In `app/router.js`, define the `/books` route. 
* Create a file, `app/routes/books.js` and define your route handler to return a model that is the following collection of data:

```javascript
[
  {title: "A Concise History of Programming", author: "H.G. Wells", description: "What if 'The Time Machine' was based on a true story?"},
  {title: "A Brief History of the Time War", author: "The Master", description: "Get *my* side of the story."},
  {title: "A Wrinkle in Time", author: "Madeline L'Engle", description: "Some kids end up in a parallel universe I think? It's been a while but also some religious undertones maybe?"}
]
```

### Part II: Templates

* In `app/templates/application.hbs`, make the string of text `"View all of our amazing books"` a link to the `/books` page. 
* In `app/templates/books.hbs`, use the `{{each}}` helper to iterate over all of the books in the `model` and render the appropriate book attribute in the `<li>`s provided. 

At this point, you probably have a page that looks something like this:

![](http://readme-pics.s3.amazonaws.com/ember-book-store.png)

But, we need to display *only* the list of book titles, and allow our user to show or hide the details of those books when the click the "View Book Details" button. In order to get this feature working, we'll use a controller action, together with some conditional logic and Handlebars helpers. 

### Part III: Controller Actions

Here's how this will work: We'll set use a property on our view, `showDetails` and we'll use some conditional logic on our template, if `showDetails` is set to true, we'll display the details of each book, otherwise, we won't. Then, we'll build a controller action, `viewMore`, that will fire when the user clicks the "View Book Details" button. This action will toggle the `showDetails` property. Let's get started!

* First, wrap the `<li>`s that contain the book details in an `{{if}}` Handlebars helper. `{{if}}` `showDetails` is true, display the book author and description. 
* Then, generate a books controller with `ember g controller books` in the command line. 
* Give that controller an action, `viewMore`, the toggles the `showDetails` property. 
* Attach that action to the the "View Book Details" button like this:

```javascript
<button class="btn btn-info" {{action 'viewMore'}}> View Book Details</button>
```

Now, when a user clicks that button, the `viewMore` action is triggered, which toggles the value of the `showDetails` property, displaying or not displaying our book details appropriately. 

Good job!














