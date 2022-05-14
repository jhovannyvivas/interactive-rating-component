# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Interactive rating component](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./img/Captura.JPG)
![](./img/Captura2.JPG)


Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

I made the folder for the project. Inside I put an html, css and js file. I also put a folder just for the images. Spend two days to do everything.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Javascript](https://www.javascript.com/) - JS library
- [Bootstrap](https://getbootstrap.com/) - React framework


### What I learned


Practice the information of javascript, html and css. I focused on the project being done quickly. I also applied css grid to reinforce my knowledge.


I seem to have decreased the amount of divs I use

```html
        <div class="agradecimiento" id="agradecimiento_id">
            <img src="./img/illustration-thank-you.svg" alt="">
            <p>You selected <span id="numeroSeleccionado_id">4</span> of 5</p>
            <h2>Thank you!</h2>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
```

Implementing colors as variables gives order

```css
:root {
    --White : hsl(0, 0%, 100%);
    --light-grey: hsl(217, 12%, 63%);
    --medium-grey: hsl(216, 12%, 54%);
    --dark-blue: hsl(213, 19%, 18%);
    --very-dark-blue: hsl(216, 12%, 8%);
    --orange: hsl(25, 97%, 53%);

}

I practice grid css

.agradecimiento {
    width: 90vw;
    height: 380px;
    border-radius: 20px;
    background-image: radial-gradient(circle at 50% -20.71%, var(--dark-blue) 10%,var(--very-dark-blue) 80%);
    padding: 25px;
    display: none;
    grid-template-columns: 1;
    grid-template-rows: 4 ;
    align-items: center;
}

The function hides the evaluation box and shows the thanks

```
```js
function submit() {
    evaluacion.style.display = "none";
    agradecimiento.style.display = "grid";
}

```


### Continued development

The area that I have to improve is the use of pseudo classes and elements


### Useful resources

- [MDN](https://developer.mozilla.org/) - css and html documentation
- [gradient generator](https://angrytools.com/gradient/) - generate gradients.



## Author

- Frontend Mentor - [@jhovannyvivas](https://www.frontendmentor.io/profile/jhovannyvivas)
- Twitter - [@hiovani_](https://twitter.com/hiovani_)



## Acknowledgments

Implementing bootstrap helped.
