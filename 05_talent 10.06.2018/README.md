# HTML
* HTML VS HTML5 (canvas, form validition, etc...)
* what is xhtml
* html5 - web worker, local storage, session storage


# CSS
* css VS css3
* flex box: https://yoksel.github.io/flex-cheatsheet/#order

# BOOTSTRAP
* cdn (uses cache) vs local file (why to use, and when)
* Grid system - IMPORTANT
* Tables
* Images , Media object , Responsive embed
* Helper classes
* Responsive utilities
* Glyphicons
* Dropdowns , List group
* Buttons: Button groups , Button dropdowns
* Forms & Input groups
* Navs , Navbar , Breadcrumbs , Pagination
* Labels , Badges , Alerts , Wells
* Jumbotron , Thumbnails , Panels
* Page header
* Progress bars

# JQUERY    
https://oscarotero.com/jquery/
## Explain what the following code will do:
```javascript
$( "div#first, div.first, ol#items > [name$='first']" )
```

This code performs a query to retrieve any <div> element with the id first, plus all <div> elements with the class first, plusall elements which are children of the <ol id="items"> element and whose name attribute ends with the string "first". This is an example of using multiple selectors at once. The function will return a jQuery object containing the results of the query.

## The code below is for an application that requires defining a click handler for all buttons on the page, 
## including those buttons that may be added later dynamically.
## What is wrong with this code, and how can it be fixed to work properly even with buttons that are added later dynamically?


```javascript
// define the click handler for all buttons
$( "button" ).bind( "click", function() {
    alert( "Button Clicked!" )
});

/* ... some time later ... */

// dynamically add another button to the page
$( "html" ).append( "<button>Click Alert!</button>" );
```


The button that is added dynamically after the call to bind() will not have the click handler attached. This is because the bind()method only attaches handlers to elements that exist at the time the call to bind() is made.
This problem is solved with functions that use “event bubbling” to match events on both current and future elements. In the past, this was done by replacing bind() with live(). live() was deprecated in jQuery 1.7 though. delegate() works similarly to live() but also provides control over how far an event must bubble up the DOM.
However, the recommended method is to use on(), which can behave like bind(), live(), or delegate() depending on syntax. The following code attaches the handler to all current and future buttons:

```javascript
// define the click handler for all buttons
$( document ).on( "click", "button", function() {
    alert( "Button Clicked!" )
});

/* ... some time later ... */

// dynamically add another button to the page
$( "html" ).append( "<button>Click Alert!</button>" );
```






