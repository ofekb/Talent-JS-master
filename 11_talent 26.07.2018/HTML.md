
### Comments
Commenting sections of HTML is also very helpful in seeing the groups.
```html
    <div class="banner-group">

      <div class="banner">…</div>

      <div class="intro">
        <p>Intro</p>

        <div class="sub-intro">
          Sub intro
        </div> <!-- End .sub-intro -->
      </div> <!-- End .intro -->

    </div> <!-- End .banner-group -->
```
The above example uses whitespace and comments to add clarity. Notice I’ve comment the three closing `</div>` 
tags—without the comments it’s just three tags in a row without much understanding of their purpose.


<section class="cheat-section push">


---
# Semantic HTML tags
## Header

*   <div class="cheat-head" tabindex="0">

    `<title>`

    </div>

    *   Shown in the browser tab & search results.

    *   Should be unique for _every_ page on the site.

*   <div class="cheat-head" tabindex="0">

    `<link href="…" rel="stylesheet">`

    </div>

    *   For linking CSS and other resources like feeds.

    *   `href` is the path the file.

    *   `rel` has different values for other resources.


## Body

*   <div class="cheat-head" tabindex="0">

    `<header>`

    </div>

    *   When inside `<body>` it’s the website masthead.

    *   When inside `<article>` it’s the most important information.

*   <div class="cheat-head" tabindex="0">

    `<footer>`

    </div>

    *   When inside `<body>` it’s the website footer.

    *   When inside `<article>` it’s the least important information.

*   <div class="cheat-head" tabindex="0">

    `<main>`

    </div>

    *   Primary content of the page.

*   <div class="cheat-head" tabindex="0">

    `<nav>`

    </div>

    *   Defines a group a navigation links.

*   <div class="cheat-head" tabindex="0">

    `<article>`

    </div>

    *   A piece of content that’s independent.

    *   Could be removed from this website and still make sense.

*   <div class="cheat-head" tabindex="0">

    `<section>`

    </div>

    *   A group in a series of related content pieces.

*   <div class="cheat-head" tabindex="0">

    `<aside>`

    </div>

    *   Secondary content not required to understand the main content.


<section class="cheat-section push">

## List

*   <div class="cheat-head" tabindex="0">

    `<ul>`

    </div>

    *   An unordered list—the order of items isn’t important.

    *   Can only have `<li>` elements as direct children.
 ```html
 <ol>
              <li>Mercury</li>
              <li>Venus</li>
              <li>Earth</li>
              <li>Mars</li>
</ol>
 ```
*   <div class="cheat-head" tabindex="0">

    `<ol>`

    </div>

    *   An ordered list—the order of the items is important.

    *   Could be alphabetical, numerical, best to worst, etc.

    *   Can only have `<li>` elements as direct children.
 ```html
 <ul>
              <li>Tyrannosaurus</li>
              <li>Spinosaurus</li>
              <li>Velociraptor</li>
</ul>
 ```
*   <div class="cheat-head" tabindex="0">

    `<li>`

    </div>

    *   A single list item.

    *   Must be inside a `<ul>` or `<ol>`.

    *   Can have most other elements inside it.

*   <div class="cheat-head" tabindex="0">

    `<dl>`

    </div>

    *   A description list—a grouping of terms and definitions.

    *   Words & definitions, titles & summaries, data points, etc.

    *   Can only have `<dt>` and `<dd>` elements as direct children.

*   <div class="cheat-head" tabindex="0">

    `<dt>`

    </div>

    *   Description title, the term of the item.

    *   Must come before the `<dd>`.

*   <div class="cheat-head" tabindex="0">

    `<dd>`

    </div>

    *   Description definition, the data, or text of the item.

    *   Can be multiple `<dd>` tags underneath one `<dt>`.
    ```html
    <dl>
              <dt>Length</dt>
              <dd>2.3 m</dd>
              <dt>Weight</dt>
              <dd>4 tonnes</dd>
</dl>
```


<section class="cheat-section push">

## Text

*   <div class="cheat-head" tabindex="0">

    `<a href="…">`

    </div>

    *   For making hyperlinks.

    *   `href` is the path to where the link should go.

*   <div class="cheat-head" tabindex="0">

    `<h1>`

    </div>

    *   The _most_ important piece of content on the page.

    *   On the homepage this should be the company’s name.

    *   On inside pages this should be the page title.

*   <div class="cheat-head" tabindex="0">

    `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`

    </div>

    *   Content headings, each a sub-heading of the one above.

    *   The `<h2>` is a sub-heading of `<h1>`, `<h3>` a sub-heading of `<h2>`, etc.

*   <div class="cheat-head" tabindex="0">

    `<p>`

    </div>

    *   A generic paragraph of text.

*   <div class="cheat-head" tabindex="0">

    `<blockquote>`

    </div>

    *   A large, stand alone quote from another source.

*   <div class="cheat-head" tabindex="0">

    `<cite>`

    </div>

    *   A citation for another source, often used with quotations.

    *   A person’s name, a URL, a book, a movie title, etc.

*   <div class="cheat-head" tabindex="0">

    `<q>`

    </div>

    *   A small quotation embedded within other content.

*   <div class="cheat-head" tabindex="0">

    `<em>`

    </div>

    *   A string of emphasized, slightly more important text.

    *   Screen readers will change their voice for this text.

*   <div class="cheat-head" tabindex="0">

    `<strong>`

    </div>

    *   A string of highly emphasized, much more important text.

    *   Screen readers will change their voice for this text.

*   <div class="cheat-head" tabindex="0">

    `<ins datetime="…">`

    </div>

    *   Content that was inserted after the document was published.

    *   `datetime` defines when it was added.

*   <div class="cheat-head" tabindex="0">

    `<del datetime="…">`

    </div>

    *   Content that was deleted after the document was published.

    *   `datetime` defines when it was removed.

*   <div class="cheat-head" tabindex="0">

    `<abbr title="…">`

    </div>

    *   An acronym or abbreviation, like “HTML”, “CSS”, etc.

    *   `title` contains the expanded version, like “Hypertext Markup Language”.

*   <div class="cheat-head" tabindex="0">

    `<dfn>`

    </div>

    *   A definition of a term on the page.

    *   Should only be used once of the term.

*   <div class="cheat-head" tabindex="0">

    `<mark>`

    </div>

    *   Used to highlight a piece of text for reference.

    *   The keywords in a search results page, the current navigation item.

*   <div class="cheat-head" tabindex="0">

    `<i>`

    </div>

    *   Defines technical term, a ship name, a book title, a thought, sarcasm, another language.

*   <div class="cheat-head" tabindex="0">

    `<b>`

    </div>

    *   Defines a keyword, like product name in a review, a lead sentence in a paragraph.

*   <div class="cheat-head" tabindex="0">

    `<s>`

    </div>

    *   Content that’s no longer relevant to the document.

    *   Consider if the `<del>` element is better suited first.

*   <div class="cheat-head" tabindex="0">

    `<u>`

    </div>

    *   Labels the text as having a non-textual annotation.

    *   A misspelled word, a Chinese proper name, etc.

*   <div class="cheat-head" tabindex="0">

    `<small>`

    </div>

    *   Represents side comments and fine print.

*   <div class="cheat-head" tabindex="0">

    `<address>`

    </div>

    *   Contact information, email, tel, postal address, etc.

*   <div class="cheat-head" tabindex="0">

    _Blockquotes_

    </div>

    *   <blockquote>
              <p>Dinosaurs may be extinct from the face of the planet, but they are alive and well in our imaginations.</p>
              <footer>— <cite>Steve Miller</cite></footer>
            </blockquote>

*   <div class="cheat-head" tabindex="0">

    _Addresses_

    </div>

    *   <address>
              Jet Propulsion Laboratory
              <br>4800 Oak Grove Drive
              <br>Pasadena, California
              <br>91109
            </address>

*   <div class="cheat-head" tabindex="0">

    _Text edits_

    </div>

    *   <p>Launchpad 39A owned by <del datetime="2014-04-14">NASA</del> <ins datetime="2014-04-14">SpaceX</ins></p>

</section>


<section class="cheat-section push">

## Images & media

*   <div class="cheat-head" tabindex="0">

    `<img src="…" alt="…">`

    </div>

    *   Embeds an image that’s important to the content.

    *   `src` is a path to the image file.

    *   `alt` describes the image if it cannot be seen.

*   <div class="cheat-head" tabindex="0">

    `<figure>`

    </div>

    *   Embeds annotated images, illustrations, photos, code, etc.

    *   Could be moved out of place and would still make sense.

*   <div class="cheat-head" tabindex="0">

    `<figcaption>`

    </div>

    *   For adding a caption/annotation to the `<figure>`.

    *   Must be inside a `<figure>` element—cannot stand alone.

*   <div class="cheat-head" tabindex="0">

    `<picture>`

    </div>

    *   Responsive image insertion—allows developers to provide different images for different contexts.

*   <div class="cheat-head" tabindex="0">

    `<video poster="…" autoplay loop muted controls>`

    </div>

    *   For embedding movies into a website.

    *   `poster` is the path to an image that’s displayed before the video plays.

    *   `autoplay` will hint the video to start automatically.

    *   `loop` triggers whether the video should repeat or not.

    *   `muted` can be added to not play sound by default.

    *   `controls` shows or hides the browser’s player buttons.

*   <div class="cheat-head" tabindex="0">

    `<audio autoplay loop muted controls>`

    </div>

    *   For embedding sounds into a website.

    *   `autoplay` will hint the audio to start automatically.

    *   `loop` triggers whether the audio should repeat or not.

    *   `muted` can be added to not play sound by default.

    *   `controls` shows or hides the browser’s player buttons.

*   <div class="cheat-head" tabindex="0">

    `<source>`

    </div>

    *   Must be inside `<picture>`, `<video>` or `<audio>` to define the different versions of content.

    *   For example, in video it gives paths to the MP4 and WEBM formats.

*   <div class="cheat-head" tabindex="0">

    `<track>`

    </div>

    *   Used to pair captions, chapters, etc. with `<video>` elements.

*   <div class="cheat-head" tabindex="0">

    _Basic images_

    </div>

    *   <img src="images/dino.jpg" alt="An beautiful, long-necked Brontosaurus">

*   <div class="cheat-head" tabindex="0">

    _Figures & captions_

    </div>

    *   Use only if there’s a caption.

    *   <figure>
              <img src="images/dino-small.jpg" alt="">
              <figcaption>So many dinosaurs I can’t even count!</figcaption>
            </figure>

*   <div class="cheat-head" tabindex="0">

    _Responsive images_

    </div>

    *   See [Responsive & retina images for details](/topics/responsive-retina-images/).

    *   <picture>
              <source media="(min-width: 60em)" srcset="images/dino-wide.jpg">
              <source media="(min-width: 38em)" srcset="images/dino-rectangle.jpg">
              <img src="images/dino-small.jpg" alt="All the dinosaurs!">
            </picture>

</section>



<section class="cheat-section push">

## Data & code

*   <div class="cheat-head" tabindex="0">

    `<sub>`

    </div>

    *   Defines text as being subscript.

*   <div class="cheat-head" tabindex="0">

    `<sup>`

    </div>

    *   Defines text as being superscript.

*   <div class="cheat-head" tabindex="0">

    `<var>`

    </div>

    *   Represents a variable in math or programming.

*   <div class="cheat-head" tabindex="0">

    `<time datetime="…">`

    </div>

    *   Marks some text as a time or date.

    *   `datetime` defines the machine readable version.

*   <div class="cheat-head" tabindex="0">

    `<data value="…">`

    </div>

    *   Marks elements as being a numerical piece of information.

    *   `value` provides the machine readable version.

*   <div class="cheat-head" tabindex="0">

    `<meter value="…" min="…" max="…">`

    </div>

    *   Represents a single number in a range of numbers.

    *   `value` is the current number.

    *   `min` is the minimum number.

    *   `max` is the maximum number.

*   <div class="cheat-head" tabindex="0">

    `<progress value="…" min="…" max="…">`

    </div>

    *   Represents the current position in a series of steps.

    *   `value` is the current position.

    *   `min` is the minimum position.

    *   `max` is the maximum position.

*   <div class="cheat-head" tabindex="0">

    `<code>`

    </div>

    *   Defines a piece of text as a code sample.

*   <div class="cheat-head" tabindex="0">

    `<pre>`

    </div>

    *   A piece of text that has a specific formatting, where tabs, whitespaces, etc. should be maintained.

*   <div class="cheat-head" tabindex="0">

    `<kbd>`

    </div>

    *   Something a user should type into their computer.

*   <div class="cheat-head" tabindex="0">

    `<samp>`

    </div>

    *   Something a user should see output from a computer.

*   <div class="cheat-head" tabindex="0">

    _Time_

    </div>

    *   Apollo 11 landed on the moon <time datetime="1969-07-20T20:18">July 20, 1969</time>

*   <div class="cheat-head" tabindex="0">

    _Data_

    </div>

    *   Argentinosaurus weighted approximately <data value="90">90 tonnes</data>

*   <div class="cheat-head" tabindex="0">

    _Maths_

    </div>

    *   E = mc<sup>2</sup>

</section>


<section class="cheat-section push">

## Meaningless tags

*   <div class="cheat-head" tabindex="0">

    `<div>`

    </div>

    *   Inherits meaning from its children.

    *   Divides content into logical groups, when no other tag is better suited.

    *   Has restrictions on what elements it can be inside.

*   <div class="cheat-head" tabindex="0">

    `<span>`

    </div>

    *   Inherits meaning from its children.

</section>




<section class="cheat-section push">

## Be careful

*   <div class="cheat-head" tabindex="0">

    `<br>`

    </div>

    *   Creates a line break that’s significant to the content.

    *   Useful in poems and addresses where the division of lines is important.

    *   _Do not use to create space in a design—use margins and padding._

*   <div class="cheat-head" tabindex="0">

    `<hr>`

    </div>

    *   Represents a thematic break in the content.

    *   For example, a scene change or topic change.

    *   _Do not use to create a horizontal line—use CSS borders._

*   <div class="cheat-head" tabindex="0">

    `<button>`

    </div>

    *   Represents a interactive, clickable button.

    *   Should be used in forms and with JavaScript.

    *   _Do not use to link to another page—use the `<a>` tag._

*   <div class="cheat-head" tabindex="0">

    `<wbr>`

    </div>

    *   Presents an opportunity for the browser to add a line-break if necessary.

    *   Groups strings of text, when no other tag is better suited.

</section>

<section class="cheat-section push">

## Links

*   <div class="cheat-head" tabindex="0">

    _Links that go nowhere_

    </div>

    *   The `href` always needs a value—`#` means nowhere.

    *   <a href="#">Nowhere</a>

*   <div class="cheat-head" tabindex="0">

    _Links on the same page_

    </div>

    *   Add an `id=""` to the element to jump to, refer to that inside the `href`

    *   <a href="#herbivores">See the herbivores</a>

            <h2 id="herbivores">Herbivores</h2>

*   <div class="cheat-head" tabindex="0">

    _Links to other files_

    </div>

    *   Just write the name of the HTML file, also include any folders its inside.

    *   <a href="dinos.html">Dinosaurs</a>

            <!-- or in another folder -->
            <a href="herbivores/stegosaurus.html">Stegosaurus</a>

*   <div class="cheat-head" tabindex="0">

    _Links to other websites_

    </div>

    *   Always start with `https://` or less ideally `http://`

    *   <a href="https://www.wikipedia.org/">Wikipedia</a>

            <!-- Adding `rel="external"` for outward-bound sites is good -->
            <a href="https://www.wikipedia.org/" rel="external">Wikipedia</a>

*   <div class="cheat-head" tabindex="0">

    _Links to phone numbers_

    </div>

    *   Start with `tel:`, use international format

    *   <a href="tel:+18005552368">Call Me!</a>

    *   Also send a text message with `sms:`

    *   <a href="sms:+18005552368&body=Who%20ya%20gonna%20call">Call Me!</a>

            <!-- or without a default number -->
            <a href="sms:&body=Who%20ya%20gonna%20call">Call Me!</a>

*   <div class="cheat-head" tabindex="0">

    _Links to email addresses_

    </div>

    *   Pops open a new email message, start with `mailto:`

    *   <a href="mailto:hey@thomasjbradley.ca">Thomas</a>

            <!-- Add a subject too -->
            <a href="mailto:hey@thomasjbradley.ca?subject=How%20are%20you?">Thomas</a>

            <!-- Even a default body -->
            <a href="mailto:hey@thomasjbradley.ca?subject=How%20are%20you?&body=Hey%20Thomas">Thomas</a>

    *   `%20` is used to escape spaces—[See more percent-encoding examples](https://en.wikipedia.org/wiki/Percent-encoding)

</section>


<section class="cheat-section push">

## Date/time formats

<div class="block gutter-1-2 push italic">

Apply to the `datetime=""` attribute of the `<time>`, `<del>` & `<ins>` elements.

</div>

*   <div class="cheat-head" tabindex="0">

    _Year_

    </div>

    *   Format: `YYYY`

    *   Example: `1963`

*   <div class="cheat-head" tabindex="0">

    _Year, month_

    </div>

    *   Format: `YYYY-MM`

    *   Example: `1963-11`

    *   _Nov. 1963_

*   <div class="cheat-head" tabindex="0">

    _Year, month, day_

    </div>

    *   Format: `YYYY-MM-DD`

    *   Example: `1963-11-23`

    *   _Nov. 23, 1963_

*   <div class="cheat-head" tabindex="0">

    _Year, week_

    </div>

    *   Format: `YYYY-Wdd`

    *   Example: `1963-W47`

    *   _1936, the week of Nov. 18–24_

*   <div class="cheat-head" tabindex="0">

    _Hour, minute_

    </div>

    *   Format: `HH:MM`

    *   Example: `17:16`

    *   _5:16 PM_

*   <div class="cheat-head" tabindex="0">

    _Hour, minute, second_

    </div>

    *   Format: `HH:MM:SS`

    *   Example: `17:16:20`

    *   _5:16:20 PM_

*   <div class="cheat-head" tabindex="0">

    _Hour, minute, second, millisecond_

    </div>

    *   Format: `HH:MM:SS.sss`

    *   Example: `17:16:20.258`

    *   _5:16:20.258 PM_

*   <div class="cheat-head" tabindex="0">

    _UTC timezone_

    </div>

    *   Format: `Z`

    *   Example: `Z`

    *   _UTC timezone_

*   <div class="cheat-head" tabindex="0">

    _Timezone offsets_

    </div>

    *   Format: `±HH:MM`

    *   Example: `-05:00`

    *   _Eastern Standard Time, Daylight Savings_

*   <div class="cheat-head" tabindex="0">

    _Year, month, day, hour, minute_

    </div>

    *   Format: `YYYY-MM-DDTHH:MM`

    *   Example: `1963-11-23T17:16`

    *   _Nov. 23, 1963 at 5:16 PM_

*   <div class="cheat-head" tabindex="0">

    _Year, month, day, hour, minute, second_

    </div>

    *   Format: `YYYY-MM-DDTHH:MM:SS`

    *   Example: `1963-11-23T17:16:20`

    *   _Nov. 23, 1963 at 5:16:20 PM_

*   <div class="cheat-head" tabindex="0">

    _Year, month, day, hour, minute, second, millisecond_

    </div>

    *   Format: `YYYY-MM-DDTHH:MM:SS.sss`

    *   Example: `1963-11-23T17:16:20.258`

    *   _Nov. 23, 1963 at 5:16:20.258 PM_

*   <div class="cheat-head" tabindex="0">

    _Year, month, day, hour, minute, UTC_

    </div>

    *   Format: `YYYY-MM-DDTHH:MMZ`

    *   Example: `1963-11-23T17:16Z`

    *   _Nov. 23, 1963 at 5:16 PM UTC_

*   <div class="cheat-head" tabindex="0">

    _Year, month, day, hour, minute, timezone_

    </div>

    *   Format: `YYYY-MM-DDTHH:MM±HH:MM`

    *   Example: `1963-11-23T12:16-05:00`

    *   _Nov. 23, 1963 at 12:16 AM EST_

*   <div class="cheat-head" tabindex="0">

    _Year, month, day, hour, minute, second, timezone_

    </div>

    *   Format: `YYYY-MM-DDTHH:MM:SS±HH:MM`

    *   Example: `1963-11-23T12:16:20-05:00`

    *   _Nov. 23, 1963 at 12:16:20 AM EST_

*   <div class="cheat-head" tabindex="0">

    _Year, month, day, hour, minute, second, millisecond, timezone_

    </div>

    *   Format: `YYYY-MM-DDTHH:MM:SS.sss±HH:MM`

    *   Example: `1963-11-23T12:16:20.258-05:00`

    *   _Nov. 23, 1963 at 12:16:20.258 AM EST_

*   <div class="cheat-head" tabindex="0">

    _Period of days_

    </div>

    *   Format: `PddD`

    *   Example: `P686D`

    *   _686 days_

*   <div class="cheat-head" tabindex="0">

    _Period of days, hours_

    </div>

    *   Format: `PddDhhH`

    *   Example: `P686D23H`

    *   _686 days, 23 hours_

*   <div class="cheat-head" tabindex="0">

    _Period of days, hours, minutes_

    </div>

    *   Format: `PddDhhHmmM`

    *   Example: `P686D23H18M`

    *   _686 days, 23 hours, 18 minutes_

*   <div class="cheat-head" tabindex="0">

    _Period of days, hours, minutes, seconds_

    </div>

    *   Format: `PddDhhHmmMssS`

    *   Example: `P686D23H18M14S`

    *   _686 days, 23 hours, 18 minutes, 14 seconds_

*   <div class="cheat-head" tabindex="0">

    _Period of days, hours, minutes, seconds, milliseconds_

    </div>

    *   Format: `PddDhhHmmMss.sssS`

    *   Example: `P686D23H18M14.400S`

    *   _686 days, 23 hours, 18 minutes, 14 seconds, 400 milliseconds_

*   <div class="cheat-head" tabindex="0">

    _Exact date example_

    </div>

    *   <time datetime="1963-11-23T12:16:20Z">Premiere of the most important TV show of all time!</time>

*   <div class="cheat-head" tabindex="0">

    _Simple time period_

    </div>

    *   <time datetime="P365D6H8M">Earth’s orbital period</time>

*   <div class="cheat-head" tabindex="0">

    _Range of time periods_

    </div>

    *   Opossum gestation period: <time datetime="P12D">twelve</time> to <time datetime="P13D">thirteen</time> days.

</section>



---

<div itemprop="articleBody">

Covering creating Cascading Style Sheets, attaching them to your HTML, and basic targeting and styling of websites.

* * *

## [§](#creating-a-css-file)Creating a CSS file

A CSS file isn’t anything special, it’s just a basic plain-text file like HTML.

In your code editor, just create a new file, and save it with the extension `.css`. Name the file whatever you want—following our [naming conventions](/topics/naming-conventions/).

_It’s always a good idea to put your CSS into a `css` folder, for better organization._

![](folder-structure.jpg)

### [§](#attaching-a-css-file)Attaching a CSS file

After creating and saving the CSS file, we just need to link the CSS and HTML files together so the browser knows where to look for the CSS file.

In the `head` of the HTML document, add a `link` tag:

    <head>
      ⋮
      <link href="css/main.css" rel="stylesheet">
    </head>

The `link` element is used to associate different types of documents to your HTML, primarily CSS, but also blog feeds, help documents, licenses, etc.

*   `href` — this attribute is used to point to the location of the CSS file. _The path to the CSS file must point into the correct folder._
*   `rel` — this attribute is used to define this item as a `stylesheet`.

## [§](#anatomy-of-css)Anatomy of CSS

The parts of CSS are very simple, but allow complex designs.

![](css-parts.png)

*   `rule set` — a grouping of CSS styles that design a certain set of elements
*   `declaration` — a single line of CSS that adds some design
*   `selector` — the targeted item in your HTML document to design
*   `property` — the type of design you want to add, like `color`, `border`
*   `value` — how to change the design property

**Links**

*   [CSS Terms and Definitions](http://www.impressivewebs.com/css-terms-definitions/)

* * *

## [§](#targeting-things-in-html)Targeting things in HTML

To style something in CSS you first need to target the element then apply some new design styles.

### [§](#targeting-by-html-element)Targeting by HTML element

When you know the name of the HTML element you want to design, you can simply target it directly—called an **element selector**.

    /* This would target the <html> element */
    html {
      /* background-color, spelled American, would change the background of the element */
      background-color: red;
      /* Since we are applying background-color to the <html> element we’d style the whole page */
    }

    /* This would target every single <p> tag */
    p {
      /* color, spelled American, would change the text colour of the element */
      color: green;
    }

Targeting by tag means that you’re targeting every single element of that kind in your document.

### [§](#targeting-multiple-elements-at-once)Targeting multiple elements at once

If you’d like to style more than one element the same way you can use a comma to separate the tag names.

    /* Target the <h1> tags, the <h2> tags, and the <h3> tags */
    h1, h2, h3 {
      color: white;
    }

### [§](#targeting-child-elements)Targeting child elements

If you’d like to target an element because it’s inside something else you can use a **descendant selector**.

    <header>
      <h1>Dinosaurs!</h1>
      <p>Dinosaurs are super amazing ancient land animals.</p>
      <p>Whoa! dinosaurs are like totally rad!</p>

      <div>
        <p>Can you believe they actually existed!?</p>
      </div>
    </header>

In your CSS if you wrote: `header p`, you’d select every `p` tag inside a `header` element.

    /* Would select every <p> tag inside a <header> tag */
    header p {

    }

    /* Target every <p> tag, inside a <div> tag, that is inside a <header> tag */
    header div p {

    }

The child selector allows a little more precision, looking at the HTML above, say we wanted to get just the `p` tags outside the `div`.

Using the `>` symbol—**the child selector**—we select only direct children of another tag.

    /* Target a <p> tags that is directly inside a <header> tag */
    header > p {

    }

This wouldn’t select the other `p` tag because it’s also inside a `div`.

If we only want to get the `p` tag immediately after the `h1` we can use the **adjacent selector**, a `+` symbol.

    /* Target every <p> tag that is immediately beside an <h1> */
    h1 + p {

    }

This CSS selector would only select the first `p` tag, but not the second `p` tag.

### [§](#naming-and-classes)Naming and classes

If we want to be extremely specific about what element we select we can assign a name to the HTML tag—called a **class**.

    <ol>
      <li>Spinosaurus</li>
      <li>Tyrannosaurus</li>
      <li class="veloci">Velociraptor</li>
    </ol>

We can add a new attribute to any HTML element we want, the `class` attribute, and completely make up a name—following our [naming conventions](/topics/naming-conventions/).

Now that we have given the element a class, we can target that class directly in our CSS:

    /* The period on this line denotes that we are targeting a class name */
    .veloci {

    }

Classes aren’t really unique though, we can assign them to other HTML elements too.

    <h2 class="veloci">Brachisaurus</h2>

Now both elements would get the same CSS.

But, an element can actually have more than one class on it:

    <h2 class="veloci dino">Brachisaurus</h2>

Now the `h2` element has both the `veloci` class **and** the `dino` class. _The reason we can’t have a space in our class names is because the space is used to separate multiple classes on the same element._

### [§](#styling-by-number)Styling by number

We can also style elements based on their location and number: whether they’re first, last, odd, even, etc.

    <ul>
      <li>Dimetrodon</li>
      <li>Pterasaur</li>
      <li>Mammoth</li>
      <li>Sabertooth Tiger</li>
      <li>Humans</li>
    </ul>

We can select different `li` elements based on their position in the unordered list.

    /* Target every <li> tag that is the first element inside a <ul> */
    /* Dimetrodon */
    ul li:first-child {}

    /* Target every <li> tag that is the last element inside a <ul> */
    /* Humans */
    ul li:last-child {}

    /* Target every even numbered <li> tag inside a <ul> */
    /* Pterasaur, Sabertooth Tiger */
    ul li:nth-child(even) {}

    /* Target every odd numbered <li> tag inside a <ul> */
    /* Dimetrodon, Mammoth, Humans */
    ul li:nth-child(odd) {}

    /* Target the 4th <li> tag inside a <ul> */
    /* Sabertooth Tiger */
    ul li:nth-child(4) {}

**Links**

*   **[MDN: CSS selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors)**
*   [CSS Tricks: How nth-child Works](https://css-tricks.com/how-nth-child-works/)
*   [SitePoint: Understanding :nth-child Pseudo-class Expressions](http://www.sitepoint.com/web-foundations/understanding-nth-child-pseudo-class-expressions/)
*   **[Nth-child tester](https://css-tricks.com/examples/nth-child-tester/)**
*   [Nth Master](http://nthmaster.com/)

* * *

## [§](#css-colours)CSS colours

There are many ways to specify colours in CSS: by keyword, hex codes, RGB(A), and HSL(A), are a few.

### [§](#keywords)Keywords

There are a bunch of colour keywords build into CSS:

    h1 {
      color: red;
      color: green;
      color: lightgrey;
      color: hotpink;
    }

**Links**

*   [MDN: Color keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Color_keywords)

### [§](#hex-codes)Hex codes

Hexadecimal colour codes are an RGB colour system made of 6 digits.

    h1 {
      color: #000000; /* Black */
      color: #ffffff; /* White */
      color: #ff0000; /* Red */
      color: #ffff00; /* Yellow */
      color: #cccccc; /* Light grey */
      color: #6afbcb; /* Some random colour */
    }

Each pair of numbers represents part of the colour: the first two numbers are red, second two green, and last two are blue. So this colour: `#ff0000` means maximum red, no green, and no blue.

#### [§](#understanding-hexadecimal)Understanding hexadecimal

The hexadecimal system is a little different from our common number system. Normally we use the decimal system, with ten digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9—all numbers in our common system consist only of these digits.

The hexadecimal system has sixteen digits to work with: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f—0 is the smallest and f is the largest.

When there are 3 pairs of numbers, like `#ffffff`, or `#ccff00` we can simplify the hex code.

*   `#ffffff` becomes `#fff`
*   `#ccff00` becomes `#cf0`
*   `#000000` becomes `#000`

### [§](#rgb)RGB

The RGB colour system is similar to hex, just specified a different way. Also, it has the ability to have semi-transparent colours, which the hex system does not.

You can specify the red, green, and blue component of the colour:

    h1 {
      color: rgb(0, 0, 0); /* Black */
      color: rgb(255, 255, 255); /* White */
      color: rgb(255, 0, 0); /* Red */
      color: rgb(255, 255, 0); /* Yellow */
      color: rgb(200, 200, 200); /* Light grey */
      color: rgb(124, 65, 99); /* Some random colour */
    }

#### [§](#rgb-semi-transparency)RGB semi-transparency

The best thing about the RGB system is that some colours can be specified with semi-transparency by adding another number.

    h1 {
      background-color: rgba(0, 0, 0, 0.5); /* 50% transparent black */
      background-color: rgba(255, 0, 0, 0.75); /* 75% opaque red */
    }

### [§](#hsl)HSL

HSL (Hue, Saturation, Lightness) is another colour system we can use in CSS that has a different way of specifying colours. It’s based on the circular colour wheel where we choose a colour by the degrees of rotation in the wheel.

    h1 {
      color: hsl(0, 0%, 0%); /* Black */
      color: hsl(0, 100%, 100%); /* White */
      color: hsl(0, 100%, 50%); /* Red */
      color: hsl(53, 100%, 50%); /* Yellow */
      color: hsl(0, 0%, 78%); /* Light grey */
      color: hsl(167, 38%, 59%); /* Some random colour */
    }

*   The first number is the hue in degrees of rotation from the colour wheel: 0 is red, going around the circle through the rainbow to 360.
*   The second number is the saturation: the lower the number the more grey the colour is, the higher colour the more intense the colour is.
*   The third number is the lightness: the lower the number the darker the colour and higher numbers are lighter colours.

#### [§](#hsl-semi-transparency)HSL semi-transparency

Just like RGB, we can also have a fourth number that provides a semi-transparency.

    h1 {
      background-color: hsla(0, 0%, 0%, 0.5); /* 50% transparent black */
      background-color: hsla(0, 100%, 50%, 0.75); /* 75% opaque red */
    }

_The HSL colour system is great because it’s really easy to adjust the colour right in code without having to go into a design tool._

**Links**

*   [MDN: Color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
*   [MDN: Color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Color_keywords)
*   **[HSL Color Picker](http://hslpicker.com/)**
*   [Six Revisions: Introduction to CSS Colors](http://sixrevisions.com/css/css-colors/)
*   [Colors in CSS](http://hugogiraudel.com/2012/11/27/css-colors/)
*   [HTML Color Codes](http://htmlcolorcodes.com/)

* * *

## [§](#css-units)CSS units

CSS provides a bunch of different units for sizes and lengths, e.g. `width: 100px;`

*   **px** — pixels `100px` is exactly 100 pixels in all situations

*   **em** — based on the font-size of the parent (or current element) `1em` is 1 × the parent element’s size `0.5em` is 0.5 × the parent element’s size [☛ Refer to CSS typography](/topics/basic-typography#font-sizing-units-rem-vs-em-vs-px)

*   **rem** — based on the font-size set in the `html` element `1.5rem` is 1.5 × the `html` element’s font size [☛ Refer to CSS typography](/topics/basic-typography#font-sizing-units-rem-vs-em-vs-px)

*   **%** — a percentage of the parent element `100%` is to whole width of the parent element If the parent element is `50%` wide, and this element is `50%` wide, then it only takes up `25%` of the original grand parent element

*   **vh** — like percentage, but based on the height of the window `100vh` is the whole height of the window `50vh` is half the height of the window

*   **vw** — like percentage, but based on the width of the window

* * *



<div itemprop="articleBody">

CSS provides lots of control over typography on your website—here’s some of the basics.

* * *

## [§](#styling-the-font)Styling the font

When styling the font in CSS there’s a bunch of properties we can use to control the style.

### [§](#font-family)Font family

The `font-family` property is used to style the typeface used in your website.

Most computers have a few default fonts that we can almost guarantee to be there: Arial, Verdana, Georgia, Courier, Times New Roman, Comic Sans, and maybe a few more.

    html {
      font-family: Georgia;
    }

The above property will change all the text in the website to Georgia—assuming it’s installed on the computer—because we’ve targeted the `html` element.

We really can’t guarantee that Georgia will be installed on the person’s computer, so it’s a good idea to provide a stylistic backup: `serif`, `sans-serif`, `monospace`, `cursive`.

    html {
      /* Try to load Georgia, if it doesn't exist load another serif font */
      font-family: Georgia, serif;
    }

When specifying a font family that has a space in its name we must surround it with quotes:

    html {
      font-family: "Comic Sans MS", sans-serif;
    }

**Links**

*   [Common fonts to all versions of Windows & Mac equivalents](http://www.ampsoft.net/webdesign-l/WindowsMacFonts.html)

### [§](#font-properties)Font properties

Here’s a bunch of other font properties we can use to adjust our typography.

    h1 {
      font-size: 2rem;
      font-weight: bold;
      font-style: italic;

      /*
        On the web a loose line-height has been shown to be more readable
        1.5 is good for body copy
      */
      line-height: 1.5;
    }

*   `font-size` — for adjusting the size of the font: a single number with a unit (`rem` [the best choice], `em`, `px`)
*   `font-weight` — for adjusting the boldness: `bold` or `normal`
*   `font-style` — for adjusting the italics: `italic` or `normal`
*   `line-height` — for adjusting the line-height: a single number, a multiplier that multiplies the font-size

### [§](#font-shorthand)Font shorthand

For fonts, we can actually specify a bunch of CSS properties on a single line in a more compact manner, called shorthand.

    html {
      /* font: font-style (optional) font-weight font-size/line-height font-family; */
      font: normal 1rem/1.5 Georgia, serif;
    }

### [§](#text-decorations)Text decorations

There are a bunch of decorative things we can do to our text.

    p {
      text-transform: uppercase;
      text-decoration: line-through;
      text-align: center;
      text-indent: 1em;

      /* text-shadow: horizontal-offset vertical-offset blur-radius colour */
      text-shadow: 2px -4px 6px red;
    }

*   `text-transform` — change capitalization: `uppercase`, `lowercase`, `capitalize` It’s a good idea to use CSS to make all caps instead of writing it directly in HTML for accessibility reasons.
*   `text-decoration` — add line-decorations: `none`, `underline`, `line-through`, `overline` The only things in a website that should be underlined are links.
*   `text-align` — alignment of the text: `left`, `center` (American spelling), `right`, `justify`
*   `text-indent` — indent the first line of text like traditionally printed materials
*   `text-shadow` — adding a shadow to the text: specified like this: `text-shadow: horizontal-offset vertical-offset blur-radius colour`

### [§](#font-sizing-units-rem-vs-em-vs-px)Font sizing units: rem vs. em vs. px

There are lost of different units to use while choosing a font-size—pixels are the easiest to understand but not the most accessible for users.

One important fact to remember about designing on the web is that many things are just recommendations—especially font sizes. Browsers provide a way for users to adjust the default font size of text: if users prefer bigger fonts they can change it, if users prefer smaller fonts they can change it.

Setting our font-sizes in pixels takes away control from our users. If our users have poor vision they can no longer enlarge their font size.

Rems and ems are a great solution that allow relative font sizes. They are basically multipliers on top of the base font size set in the browser.

*   `2rem` means: “take the default font size and multiply it by 2, making it bigger”
*   `0.5rem` means: “take the default font size and multiply it by 0.5, making it smaller”

#### [§](#rem-vs-em)Rem vs. em

*   The `rem` unit is always based on the font-size of the `html` element
*   The `em` unit is always based on the font-size of the parent element

    <p>Some text.</p>

    <div>
      <p>Some inner text.</p>
    </div>

1.  If we set `font-size: 2em` on the `p` tag by default they’ll both be the same: calculated as `base-font-size × 2`
2.  If we then set `font-size: 3rem` on the `div`, the inner `p` tag will now be different, larger: `base-font-size × 3 (from the div) × 2`
3.  But if I change the font size on all `p` tags to `2rem` then the inner `p` tag will be exactly `2rem` and will not compound on the parent’s font size.

_So, overall, I usually use `rem` when sizing fonts because it’s the easiest to keep consistent._

* * *

## [§](#styling-links)Styling links

Styling links in websites is not really different from other elements, but they must be styled directly, and don’t inherit certain properties from their parent elements.

    a {
      color: darkgreen;

      /*
        Be careful when removing the underline from links
        Make sure there is still enough contrast to understand the text as a link
      */
      text-decoration: none;
    }

Links have a bunch of states that we can also style when a user interacts.

    a,
    a:link {
      color: darkgreen;
    }

    a:visited {
      color: limegreen;
    }

    a:hover {
      color: orange;
    }

    a:focus {
      color: blue;
    }

    a:active {
      color: red;
    }

*   `:link` — for styling the default link state
*   `:visited` — for styling the link after it’s been visited by the user
*   `:hover` — for styling the link when the mouse is sitting over it
*   `:focus` — for styling the link when the keyboard has tab-focused it
*   `:active` — for styling the link when the mouse button is pressed down on it

_It’s important that these link states go in this direction: link, visited, hover, focus, active. There’s a fun a mnemonic to remember the order: “Lord Vader’s Handle Formerly Anakin”._

**Links**

*   [Six Revisions: CSS Link Pseudo-classes](http://sixrevisions.com/css/link-pseudo-classes/)

* * *

## [§](#styling-lists)Styling lists

When we create lists in HTML the brower applies default CSS to them:

*   For `ul` lists we get bullets
*   For `ol` lists we get numbers

But, those are just the defaults and we can completely overwrite those bullets and numbers with the `list-style-type` property.

    ul, ol {
      list-style-type: decimal; /* Simple numbers (1, 2, 3, etc.) */
      list-style-type: lower-alpha; /* Lowercase letters (a, b, c, d, etc.) */
      list-style-type: lower-roman; /* Lowercase Roman numerals (i, ii, iii, etc.) */
      list-style-type: lower-greek; /* Lowercase Greek letters (α, β, ɣ, etc.) */
      list-style-type: disc; /* The default filled bullet (•)*/
      list-style-type: circle; /* Add empty circle bullets (◦) */
      list-style-type: square; /* Add square shaped bullets (■) */
      list-style-type: none; /* Remove all bullets and numbers */
    }

**Links**

*   [MDN: list-style-type](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type)

* * *

## [§](#web-fonts-and-custom-typefaces)Web fonts and custom typefaces

Beyond the core web fonts for font family we can use custom typefaces that get downloaded to our computers and used to display the website.

_The fonts must be properly licensed for the web—the ones installed currently on your computer are not._

There are lots of different services for Web Fonts—Google Fonts is a simple one to start with and uses open fonts that are licensed for any situation.

**[☛ Follow this tutorial to see how to use Google Fonts](/topics/google-fonts/)**

**Links**

*   **[Google Fonts](http://www.google.com/fonts)**
*   **[Font Squirrel](http://www.fontsquirrel.com/)** — has a great font generator and packaging tool
*   [Adobe Typekit](https://typekit.com/)

* * *


<article class="tutorial unit [ xs-1 s-1 m-1 l-3-4 ] pad-t-1-2" id="article">

# Everything is a box

<div itemprop="articleBody">

Every single thing you target with CSS, every single HTML element, is a box. The boxes line up beside each other, above each other, and below each other.

_Even though everything is a box and should be thought of as a box, that doesn’t mean it needs to look like a box—we can change the style of each box._

* * *

## [§](#the-box-model)The box model

The box model is the name of part of the layout system browsers use when rendering your website. It’s a system that describes how each of the properties of a box interact with each other and how they interact with other boxes.

![](box-model.png)

1.  A box with no content isn’t visible, so content is the first layer
2.  Outside content is the `padding`, pushing the edge of the box away from the content
3.  Outside the padding is the `border`, the background colour stops here
4.  Outside the box is the `margin`, a transparent layer pushing other boxes away

### [§](#margin--padding)Margin & padding

The `margin` and `padding` properties are used to put space around your box, either outside the box or inside the box.

*   `margin` — adds spacing outside of the box, pushing other boxes away
*   `padding` — adds spacing inside the box, pushing the content away from the border; the background colour is visible within the padding

    div {
      /* Will push other boxes 10 pixels away on all 4 sides */
      margin: 10px;
      /* Will push the content away from the box edge on all 4 sides */
      padding: 12px;
    }

Since boxes have four sides, there are four different margins and paddings that can be changed.

*   For margin, we have `margin-top`, `margin-right`, `margin-bottom`, `margin-left`.
*   For padding, we have `padding-top`, `padding-right`, `padding-bottom`, `padding-left`.

#### [§](#margin--padding-shorthand)Margin & padding shorthand

We can specify margin and padding using the properties listed above, but often it’s easier to use the shorthand version.

_Everything below applies equally to the padding shorthand._

    div {
      /* margin: top right bottom left; */
      margin: 10px 12px 8px 6px;
    }

Inside the shorthand `margin` declaration we can specify up to 4 values, each representing a side of the box.

For the order, we start at the top of the box and make our way clockwise around the box.

![](box-model-margin-order.png)

We can then start leaving off numbers from the end of the value list and the browser will match the opposing side’s value for any missing numbers.

    div {
      /*
        Since the left margin is missing, the browser will use the right value
        margin: top right/left bottom;
      */
      margin: 10px 12px 8px;

      /*
        Since the bottom margin is missing, the browser will use the top value
        margin: top/bottom right/left;
      */
      margin: 10px 12px;
    }

#### [§](#margin-collapsing)Margin collapsing

Margins have some weird behavior when it comes to their top and bottom values. The bottom value of one box can collapse into the top value of the next—the browser choosing only the highest of the two.

    .box-1 {
      margin-bottom: 15px;
    }

    .box-2 {
      margin-top: 25px;
    }

The distance between these boxes will _not_ be `40px`—but instead the browser will pick the bigger of the two and choose it. So the margin between these boxes is `25px`.

![](box-model-margin-collapse.png)

### [§](#width--height)Width & height

Both `width` and `height` can be assigned to boxes. Usually we want widths set in some sort of relative measurement, like `%` or `em`.

Try to avoid using height—use other methods, like padding, instead. It’s especially important to be careful with height when working with text. If you user changes the font size in their browser, the whole layout could bust apart if there is a fixed height.

    div {
      /* Will be 30% the width of the parent element */
      width: 30%;
      /* Width based on the font-size */
      width: 35em;
    }

#### [§](#what-units-to-use)What units to use

You’ll grow an intuition as to when to use each unit, but here are a couple of ideas:

*   `%` — use percents for elements that should grow with the size of the browser, e.g columns, images
*   `em` — use ems for elements that should grow with the size of the text, e.g. line-lengths
*   `px` — use pixels for things that should never change size, e.g. logos, icons

#### [§](#minimum--maximum-values)Minimum & maximum values

For both width and height we can provide minimum and maximum values instead of fixed values.

*   `min-width` — force the box to be at least this wide, but can grow wider
*   `min-height` — force the box to be at least this tall, but can grow taller
*   `max-width` — force the box to never exceed this width, but can get narrower than it
*   `max-height` — force the box to never exceed this height, but can get shorter than it

    article {
      /*
        Force the box to be at least 10em high
        If the text needs more space, the box can still grow
        Much better than using `height`
      */
      min-height: 10em;
    }

    p {
      /*
        Force the paragraph to never exceed a width of 35em
        It’s a good way to control line-length
      */
      max-width: 35em;
    }

#### [§](#when-to-use-height)When to use height

There aren’t too many reasons to use `height`, `min-height` I use often, but I can usually create a whole website without ever touching the `height` property.

One example that is a good use of `height` is to make a box the same height as the browser window, for large banners and hero graphics.

    header {
      /* Would make the head the same height as the browser window */
      height: 100vh;
    }

### [§](#adjusting-layout-math-with-border-box)Adjusting layout math with border box

The default box model layout system in websites doesn’t work very well with responsive and flexible websites. It’s best to change to a newer layout system so everything works more smoothly.

The newer layout system is called “Border Box” and changes the math used when calculating widths and heights of boxes.

![](box-model-border-box.png)

*   With the default box model, the `padding` and `border` add onto the `width` of the box, making it wider
*   With border box, the `padding` and `border` are inside the `width` of the box, so the total width is the same as the value of `width`

For responsive and flexible designs this is extremely helpful. If you want a column to be 30% wide, you don’t have to subtract with width of the padding to make it exactly that wide.

So, to change your box model, add these lines of code to the very top of your website:

    html {
      box-sizing: border-box;
    }

    *, *::before, *::after {
      box-sizing: inherit;
    }

**I add this code to the top of every single website I create.**

* * *

## [§](#box-decorations)Box decorations

There are lots of different decorations you can apply to a box.

### [§](#background-colour)Background colour

The most basic decoration is `background-color`, which just applies a colour to the background, behind the padding.

    header {
      background-color: #000; /* Solid black */
      background-color: rgba(0,0,0,0.5); /* Semi-transparent black */
    }

### [§](#border)Border

Border puts a line around the box, outside the background colour. The line can be solid, dashed, dotted, or an image.

The most basic `border` has 3 values: `width`, `style`, `color`:

    header {
      /* Apply the same border to all 4 sides of the box */
      border: 3px solid #000;
    }

*   `width` — a measurement to describe the thickness of the border
*   `style` — what kind of border: `solid`, `dashed`, `dotted`, `double`, etc.
*   `color` — any colour for the border, including semi-transparent ones

If you want to style a specific side of a border, you can target it directly with `border-top`, `border-bottom`, `border-left`, `border-right`.

    nav {
      border-bottom: 4px solid pink;
    }

Each of the inner values also have their own properties like: `border-style`, `border-color`, `border-bottom-color`, etc.

    header {
      /* Applies border to all 4 sides */
      border: 3px solid #000;
      /* Overwrites bottom color */
      border-bottom-color: pink;
      /* Overwrites right width */
      border-right-width: 1px;
    }

**Links**

*   [MDN: Border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
*   [MDN: Border-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style)

### [§](#border-radius)Border radius

The `border-radius` property allows you to add rounded corners to your boxes.

    a {
      /* Add 8px rounding to all 4 corners */
      border-radius: 8px;
    }

You could also specify the `border-radius` in other units:

*   `em` — the border radius would change with the font size
*   `%` — of the box itself: using 50% would make a circle/oval

If you want to specify only certain corners, add more values, like `margin` and `padding`:

    a {
      /* Top left, bottom right & top right, bottom left */
      border-radius: 8px 10px;
      /* Top left & top right, bottom left & bottom right */
      border-radius: 8px 10px 6px;
      /* Top left & top right & bottom right & bottom left*/
      border-radius: 8px 10px 6px 12px;
    }

**Links**

*   [MDN: Border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)

### [§](#box-shadow)Box shadow

Box shadow allows you to add a drop shadow to the box itself, where `text-shadow` adds to the text inside the box.

    div {
      box-shadow: 2px 4px 5px rgba(0,0,0,0.5);
    }

When specifying `box-shadow` there’s four values to write out:

*   `horizontal offset` — how far to shift the shadow left and right: positive numbers move right, negative move left
*   `vertical offset` — how far to shift the shadow up and down: positive numbers move down, negative move up
*   `blur radius` — how blurry the edge of the shadow will be, the bigger the number the lighter the shadow; `0` would make a crisp edge
*   `spread` — _(optional);_ how much bigger the shadow is than the box
*   `color` — any colour you want, including semi-transparency

    div {
      /* Specifying `inset` inside the declaration will make the shadow inside the box */
      box-shadow: inset 0 0 5px rgba(0,0,0,0.5);
    }

You can also specify multiple shadows on the box using a comma:

    div {
      box-shadow: 2px 4px 5px black, -2px -4px 5px red;
    }

**Links**

*   [MDN: Box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

**[☛ Decorations with images are covered in the “Using images” tutorial](/topics/using-images/)**

* * *

## [§](#video-list)Video list

1.  [Box model: margin & padding](https://www.youtube.com/watch?v=1PxUbAFQKoY&index=1&list=PLWjCJDeWfDdeEM254gHVHz26yswh59Hih)
2.  [Box model: collapsing top & bottom margins](https://www.youtube.com/watch?v=4nGZ8OULcY0&index=2&list=PLWjCJDeWfDdeEM254gHVHz26yswh59Hih)
3.  [Box model: width and height](https://www.youtube.com/watch?v=VEWSy3Gjybo&index=3&list=PLWjCJDeWfDdeEM254gHVHz26yswh59Hih)
4.  [Box model: adjusting layout math with border box](https://www.youtube.com/watch?v=jG9sDpBJfqY&index=4&list=PLWjCJDeWfDdeEM254gHVHz26yswh59Hih)

## [§](#supplemental-links)Supplemental links

*   [MDN: Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model)
*   [Opening the Box Model](http://learn.shayhowe.com/html-css/opening-the-box-model/)
*   [Learn Layout](http://learnlayout.com/)

</div>

</article>



<article class="cheatsheet">

<header class="cheatsheet-header push">

<div class="wrapper relative pad-t pad-b gutter-1-2">

# Boxes & borders cheat sheet

</div>

</header>

<div class="simple-nav-wrap push" id="groups">

<nav class="wrapper gutter-1-2">

1.  [The Box Model](#the-box-model)
2.  [Box dimensions](#box-dimensions)
3.  [Colours & borders](#colours-borders)
4.  [Box sizing systems](#box-sizing-systems)
5.  [Display & layout](#display-layout)

</nav>

</div>

<section class="cheat-section push">

## The Box Model

*   <div class="cheat-head" tabindex="0">

    _The CSS Box Model_

    </div>

    *   ![An illustration of the box-model properties](box-model.svg)

    *   Starting at the content and working out:

    *   • `padding` — space between the content & box edge; `background-color` fills behind this space.

    *   • `border` — line around the edge of the box.

    *   • `margin` — space outside the box, pushing other boxes away; can see through margin to what’s behind.

*   <div class="cheat-head" tabindex="0">

    _Margin & padding number order_

    </div>

    *   ![An illustration of the margin/padding value system](margin-padding-order.svg)

    *   `margin` & `padding` can take 1–4 values.

    *   With 4 values, we start at the top and continue clockwise around the box.

    *   /* 10px on all four sizes of the box */
            margin: 10px;
            /* 10px top/bottom; 12px left/right */
            margin: 10px 12px;
            /* 10px top; 12px left/right; 14px bottom */
            margin: 10px 12px 14px;
            /* 10px top; 12px right; 14px bottom; 16px left */
            margin: 10px 12px 14px 16px;

    *   _The same system applies completely to `padding`_

</section>

<section class="cheat-section push">

## Box dimensions

*   <div class="cheat-head" tabindex="0">

    `margin`

    </div>

    *   Create space outside the box, pushing other boxes.

    *   /* See above for examples of the value system */
            margin: 1.125em;
            margin: 1.125em 1em;

    *   Target each side individually: `margin-top`, `margin-right`, `margin-bottom`, `margin-left`

    *   margin-top: .875em;
            margin-bottom: 0;

*   <div class="cheat-head" tabindex="0">

    _negative margins_

    </div>

    *   Because margins are outside of a box they can actually have negative numbers.

    *   Instead of pushing other boxes away, negative margins pull the box in a specific direction.

    *   margin-left: -5rem;

    *   Will pull the box to the left by `5em` and can cause elements to overlap.

*   <div class="cheat-head" tabindex="0">

    `padding`

    </div>

    *   Create space inside the box, pushing text away from the edge.

    *   /* See above for examples of the value system */
            padding: 1em;
            margin: 1em .8em;

    *   Target each side individually: `padding-top`, `padding-right`, `padding-bottom`, `padding-left`

    *   padding-left: 1em;
            padding-right: .875em;

*   <div class="cheat-head" tabindex="0">

    `width`

    </div>

    *   Control the horizontal space of a box.

    *   width: 100px;
            width: 50%; /* of the element its inside */
            width: 100vw; /* Full width of the window */

*   <div class="cheat-head" tabindex="0">

    `height`

    </div>

    *   Controls the vertical space of a box.

    *   **Setting a height should be avoided at all costs.**

    *   Let the content inside the box dictate the height.

    *   height: 25px; /* BAD! */

*   <div class="cheat-head" tabindex="0">

    `min-width`

    </div>

    *   Make a box be at least a certain width, but can expand.

    *   min-width: 100px;

*   <div class="cheat-head" tabindex="0">

    `min-height`

    </div>

    *   Make a box at least a certain height, but can expand.

    *   _This is infinitely better than just `height`_

    *   min-height: 12em;
            min-height: 75vh; /* 75% height of the window */

*   <div class="cheat-head" tabindex="0">

    `overflow`

    </div>

    *   Control how elements that break out the edges of the box are dealt with.

    *   One of: `visible`, `hidden`, `scroll`, `auto`

    *   overflow: hidden; /* Chop off everything */
            overflow: auto; /* Introduce a scrollbar if necessary */

    *   Also contorl a single direction: `overflow-x`, `overflow-y`

    *   overflow-x: hidden;
            overflow-y: scroll;

*   <div class="cheat-head" tabindex="0">

    `calc()`

    </div>

    *   Sometimes we can’t calculate a value ahead of time because it depends on something the browser knows but we don’t, e.g. adding `em` + `px` together.

    *   width: calc(100vw - 10px);
            padding-left: calc(1.4em + 24px);

    *   **Always have a space around the math operator!**

    *   width: calc(100vw-10px); /* Not gonna work */

</section>

<section class="cheat-section push">

## Colours & borders

*   <div class="cheat-head" tabindex="0">

    `color`

    </div>

    *   Set the colour of the text.

    *   color: red;
            color: #fff;

*   <div class="cheat-head" tabindex="0">

    `background-color`

    </div>

    *   Set the colour of the box, behind the text.

    *   background-color: orange;
            background-color: #e2e2e2;

            /* Semi-transparent colour */
            background-color: rgba(0, 0, 0, .5);

*   <div class="cheat-head" tabindex="0">

    `border-width`

    </div>

    *   Control the thickness of the stroke around a box.

    *   border-width: 12px;

            /* Or use em if you want it to scale with the text size */
            border-width: .1em;

*   <div class="cheat-head" tabindex="0">

    `border-color`

    </div>

    *   Set the colour of the box stroke.

    *   border-color: indigo;
            border-color: #f33;

*   <div class="cheat-head" tabindex="0">

    `border-style`

    </div>

    *   Set the visual appearance of the line.

    *   Possible values: `solid`, `dashed`, `dotted`, `double`, `groove`, `ridge`, `inset`, `outset`

    *   border-style: solid;
            border-style: dotted;

*   <div class="cheat-head" tabindex="0">

    `border` shorthand

    </div>

    *   A short form version for setting the three border properties.

    *   `border:`

    *   • `border-width`

    *   • `border-style`

    *   • `border-color`

    *   border: 3px solid black;
            border: 4px dotted green;

*   <div class="cheat-head" tabindex="0">

    _Borders on single sides_

    </div>

    *   Target each side of the box using `border-*` properties.

    *   `border-top`, `border-right`, `border-bottom`, `border-left`

    *   border-top: 3px solid indigo;
            border-bottom: 3px solid indigo;

    *   There’s also all the other singular properties like `border-top-width`, `border-bottom-style` but I rarely use those.

*   <div class="cheat-head" tabindex="0">

    `border-radius`

    </div>

    *   Make the corners of the box slightly rounded.

    *   border-radius: 4px;
            border-radius: .3em;

    *   Control each side differently, start on top-left, go clockwise around.

    *   border-radius: 4px 6px 10px 12px;

    *   Do ovals using a `/` to separate the different axes

    *   border-radius: 4px/10px;

    *   [Border-radius generator.](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Background_and_Borders/Border-radius_generator)

*   <div class="cheat-head" tabindex="0">

    `opacity`

    </div>

    *   Make the whole box and all its content semi-transparent.

    *   A number between `0` & `1`

    *   opacity: .5;
            opacity: .2;

*   <div class="cheat-head" tabindex="0">

    `box-shadow`

    </div>

    *   Create a drop-shadow behind the box.

    *   Requires at least 3 values:

    *   `box-shadow:`

    *   • `horizontal-offset`

    *   • `vertical-offset`

    *   • optionally: `blur-radius`

    *   • optionally: `spread-radius`

    *   • `color`

    *   box-shadow: 2px 2px black;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, .5);
            box-shadow: 2px 2px 10px 4px rgba(0, 0, 0, .5);

            /* Move the shadow inside the box with inset */
            box-shadow: inset 2px 2px black;

    *   [Box-shadow generator.](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Background_and_Borders/Box-shadow_generator)

*   <div class="cheat-head" tabindex="0">

    _Multiple box-shadows_

    </div>

    *   Separate each box-shadow with a comma.

    *   box-shadow: 2px 0 red, -2px 0 green;

*   <div class="cheat-head" tabindex="0">

    `outline`

    </div>

    *   Like a border, but outside border, doesn’t take up space, will overlap surrounding elements.

    *   outline: 3px solid black;

    *   `outline-offset` — will push the outline away from the box edge.

    *   outline-offset: 2px;

</section>

<section class="cheat-section push">

## Box sizing systems

*   <div class="cheat-head" tabindex="0">

    `box-sizing: content-box`

    </div>

    *   **Do not use `content-box`**

    *   The default box calculation math puts the padding & border outside the width set in CSS.

    *   This causes all sorts of confusing math solutions on responsive sites and just makes our coding life annoying.

    *   _Example calculation:_

    *   /*
              Total width of box is 130px:
              100px + 10px (left) + 10px (right) + 5px (left) + 5px (right) = 130px
            */
            .box {
              width: 100px;
              padding: 10px;
              border-width: 5px;
            }

*   <div class="cheat-head" tabindex="0">

    `box-sizing: border-box`

    </div>

    *   **Always use `border-box`**

    *   Simplifies the responsive math by making the width of a box, as set in CSS, not change by adding padding and border.

    *   **Always include this snipped of CSS!**

    *   /* This snipped of CSS should always be included */
            html {
              box-sizing: border-box;
            }

            *, *::before, *::after {
              box-sizing: inherit;
            }

    *   _Example calculation:_

    *   /*
              Total width of box is: 100px, defined by width
            */
            .box {
              width: 100px;
              padding: 10px;
              border-width: 5px;
            }

*   <div class="cheat-head" tabindex="0">

    _Border box vs. content box_

    </div>

    *   ![An illustration of border-box vs. content-box](box-sizing.svg)

</section>

<section class="cheat-section push">

## Display & layout

<div class="block gutter-1-2 push italic">

See the [CSS layout cheat sheet](/topics/css-layout-cheat-sheet/) for more detail.

</div>

*   <div class="cheat-head" tabindex="0">

    `display: inline`

    </div>

    *   Flows content together, fitting on the same line if possible.

    *   `margin`, `padding`, `width` **don’t work**.

*   <div class="cheat-head" tabindex="0">

    `display: block`

    </div>

    *   Takes up a whole line by itself.

    *   `margin`, `padding`, `width` **do work.**

*   <div class="cheat-head" tabindex="0">

    `display: inline-block`

    </div>

    *   A hybrid between `block` & `inline`: fits on the same line, allows `padding`, `width`, etc.

*   <div class="cheat-head" tabindex="0">

    `display: none`

    </div>

    *   Completely hide the element from the page.

    *   Set to another `display` value to make it visible again.

</section>

</article>


<article class="tutorial unit [ xs-1 s-1 m-1 l-3-4 ] pad-t-1-2" id="article">

# Flow & display

<div itemprop="articleBody">

Browsers use “The Flow” to display elements on the page—understanding flow and display are critical to laying out websites.

* * *

## [§](#browser-rendering)Browser rendering

When a browser renders your website it reads the HTML from the top to the bottom. The browser tries to place each box beside the previous box, unless something prevents it. Very similar to how words wrap in text editors like MS Word.

![](browser-render.gif)

Elements may bump to the next line when:

*   there’s not enough space
*   CSS causes it, using the `display` property
*   or a `<br>` tag

**Links**

*   [Gecko reflow visualization](https://www.youtube.com/watch?v=ZTnIxIA5KGw)

* * *

## [§](#the-display-property)The display property

The `display` property in CSS is one way to change the flow and rendering process of the browser.

There are four major values for display that are used regularly: `inline`, `block`, `inline-block`, `none`.

    p {
      /* This is the default setting for paragraphs specified by the browser */
      display: block;
    }

    a {
      display: inline-block;
    }

### [§](#inline-elements)Inline elements

Every element is an inline level element—unless some CSS is applied to it.

**In the browser many elements have their display property changed to something else—use your developer tools to see.**

![](display-inline.png)

Inline level elements have the following properties:

*   They allow other elements to fit beside them on the same line
*   They take up only as much width as needed
*   `width`, `margin`, `padding` don’t really work

#### [§](#some-common-inline-level-elements)Some common inline level elements

*   `span`
*   `a`
*   `strong`, `em`, `b`, `i`
*   `cite`
*   `time`, `data`, `ins`, `del`

### [§](#block-elements)Block elements

In the browser’s default CSS there’s a bunch of elements that are specified as `block`—use your developer tools to see.

![](display-block.png)

Block level elements have the following properties:

*   They take up their own line, anything that comes after goes onto the next line
*   They take up the whole width of its parent element, by default
*   `width`, `margin`, `padding` work as expected

#### [§](#some-common-block-level-elements)Some common block level elements

*   `div`
*   `h1` – `h6`
*   `p`
*   `ul`, `ol`, `dl`, `li`
*   `blockquote`
*   `figure`, `figcaption`
*   `header`, `footer`, `nav`
*   `article`, `section`

### [§](#hybrid-inline-block-elements)Hybrid inline-block elements

The inline-block elements are a hybrid of both block and inline, inheriting certain properties from each of them.

Inline-block elements have the following properties:

*   They fit beside other elements on the same line _(from inline)_
*   They take up only as much space as needed _(from inline)_
*   `width`, `margin`, `padding` work as expected _(from block)_

#### [§](#some-common-inline-block-level-elements)Some common inline-block level elements

*   `img`
*   `button`

### [§](#hiding-elements-with-display-none)Hiding elements with display none

The fourth `display` value commonly used is `none`, this will completely hide the element from the screen and any other accessibility tools.

    h1 {
      /* This element will not be shown on the screen, nor take up any space */
      display: none;
    }

### [§](#using-the-display-property)Using the display property

You can apply the display property to absolutely any element you want to make it behave any way you want.

    span {
      /* Make span act exactly the same way as a div */
      display: block;
    }

    div {
      /* Make div act exactly the same way as a span */
      display: inline;
    }

    a {
      /* Allow the link to have padding, making it a bigger hit area */
      display: inline-block;
      padding: 0.5em 0.75em;
    }

#### [§](#making-a-horizontal-navigation-bar)Making a horizontal navigation bar

Using the display properties to our advantage, we can very easily make a horizontal navigation bar.

Here’s the HTML I would use for navigation:

    <nav>
      <ul>
        <li><a href="#">Dinosaurs</a></li>
        <li><a href="#">Meat-eaters</a></li>
        <li><a href="#">Plant-eaters</a></li>
      </ul>
    </nav>

Because of the browser’s default CSS, the `li` tags stack, one on top of each other, making a vertical list.

We want to make a horizontal list, so we need to change the display property of the `li` elements.

    nav li {
      display: inline;
    }

Adding `display: inline` will allow the browser to render the `li` elements on the same line, beside each other.

Next up, we probably want to style the links, maybe make them larger hit areas.

    nav a {
      display: inline-block;
      padding: 0.5em 0.75em;
    }

Adding `display: inline-block` to the `a` tags allows us to give them padding.

* * *

## [§](#centering-elements)Centering elements

There are a couple different ways to centre elements in HTML and CSS, and it’s completely dependent on what their `display` property is set to and whether you center the element itself or to it’s parent element.

### [§](#centering-display-inlineinline-block--text)Centering display inline/inline-block & text

![](centering-inline.png)

Using `text-align: center` on inline/inline-block elements can affect them in two ways:

1.  If applied to the element itself, the text inside it will be centered
2.  If applied to the parent element, the inline elements and the text inside them will be centered.

In our navigation above, if we did this:

    nav ul {
      text-align: center;
    }

Then all the `li` elements inside would centre themselves within the `ul`. And all the text inside those `li` elements would centre itself inside the `li` tags.

**Text align affects text and inline/inline-block elements.**

### [§](#centering-display-block)Centering display block

![](centering-block.png)

Using `text-align: center` on a block level element will only affect the content inside it, but will not move the element box itself to the centre of it’s parent.

If we have a paragraph, with a width, and want it to centre within its parent, we use automatic margins.

    p {
      max-width: 25em;
      margin-left: auto;
      margin-right: auto;
    }

*   `auto` — tells the browser to automatically calculate a margin that’s the same on the left and right.

This would allow the `p` tag to centre its whole box element within its parent element.

**Auto margins affect boxes that have a defined width.**

* * *

## [§](#flexbox)Flexbox

Flexbox is a new, extremely powerful way of controlling layout in browsers, but unfortunately it needs lots of extra code to be completely browser compatible.

With flexbox you can do lots of different centering and alignment like things. It also completely replaces the inline/block model above.

**Links**

*   [**Flexy Boxes**](http://the-echoplex.net/flexyboxes/)
*   [**What the flexbox!?**](http://flexbox.io/)
*   [**Flexbox Froggy**](http://flexboxfroggy.com/)
*   [**Test CSS Flexbox Rules Live**](http://flexbox.help/)
*   [CSS Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
*   [Flexbox in 5 minutes](http://flexboxin5.com/)
*   [Flexbox Adventures](http://chriswrightdesign.com/experiments/flexbox-adventures/)
*   [The Ultimate Flexbox Cheat Sheet](http://www.sketchingwithcss.com/samplechapter/cheatsheet.html)
*   [Dive into Flexbox](http://bocoup.com/weblog/dive-into-flexbox/)
*   [Flexbugs](https://github.com/philipwalton/flexbugs)
*   [Flexbox Cheatsheet Cheatsheet](http://jonibologna.com/flexbox-cheatsheet/)
*   [Using Flexbox today](http://chriswrightdesign.com/experiments/using-flexbox-today/)
*   [A Visual Guide to CSS3 Flexbox Properties](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)
*   [Using flexbox today](http://www.chriswrightdesign.com/experiments/using-flexbox-today/)
*   [What the flexbox!?](http://flexbox.io/)
*   [18 Excellent Resources for Learning Flexbox](http://sixrevisions.com/css/learn-flexbox/)
*   [`flex-grow` is weird. Or is it?](https://css-tricks.com/flex-grow-is-weird/)
*   [Flexible editor](http://briandiehr.com/#/layout-editor)
*   [The Flexbox Reading List: Techniques And Tools](https://www.smashingmagazine.com/2016/02/the-flexbox-reading-list/)
*   [Flexbox Defense](http://www.flexboxdefense.com/)

* * *

## [§](#video-list)Video list

1.  [Flow & display: introduction](https://www.youtube.com/watch?v=FwQo2P7L9bw&list=PLWjCJDeWfDdc6YKkkrEdYuExcnY05rmwG&index=1)
2.  [Flow & display: details list](https://www.youtube.com/watch?v=-HeiRd22Tcg&list=PLWjCJDeWfDdc6YKkkrEdYuExcnY05rmwG&index=2)
3.  [Flow & display: horizontal navigation](https://www.youtube.com/watch?v=sxO32mTbfUo&list=PLWjCJDeWfDdc6YKkkrEdYuExcnY05rmwG&index=3)
4.  [Flow & display: centering elements](https://www.youtube.com/watch?v=QA5CiOm92Qg&list=PLWjCJDeWfDdc6YKkkrEdYuExcnY05rmwG&index=4)

## [§](#supplemental-links)Supplemental links

*   [Learn Layout](http://learnlayout.com/)
*   [Grid by example](http://gridbyexample.com/)

</div>

</article>

