# Back To Top Button

Floating 'Back To Top' or 'Scroll To Top' is a blogger Widget to add a button that appeares only when user's scroll down the Widget display Scroll To Top Button on the page. Hides when on top, scrolls up smoothly when clicked. This Widget fully enable it for everyone to see! This button is built on jQuery and is designed to be dead easy, without the need to modify any markup or the theme.

## Features

- Hides when on top
- Scrolls up smoothly when clicked
- Latest Model
- Font Awesome Supported

## How to use

1. Add this following code below to `<body>` Tag:
```html
<div class="td-scroll-up">
  <i class="td-icon-menu-up"></i>
</div>
```

2. Add this JavaScript code above to `</body>` Tag:
```js
<script>
// Back To Top
$(function(){
	$(document).on( 'scroll', function(){
		if ($(window).scrollTop() > 400) {
			$('.td-scroll-up').addClass('td-scroll-up-visible');
		} else {
			$('.td-scroll-up').removeClass('td-scroll-up-visible');
		}
	});
	$('.td-scroll-up').on('click', scrollToTop);
});
function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}
</script>
<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
  ```
  
  3. Add this Css code above to `</head>` Tag:
  ```css
  <style>
.td-scroll-up {
    cursor: pointer;
    position: fixed;
    bottom: 4px;
    right: 5px;
    width: 40px;
    height: 40px;
    background-color: #4db2ec;
    z-index: 9999;
    transform: translate3d(0, 70px, 0);
    -webkit-transform: translate3d(0, 70px, 0);
    -moz-transform: translate3d(0, 70px, 0);
    -ms-transform: translate3d(0, 70px, 0);
    -o-transform: translate3d(0, 70px, 0);
    -webkit-transition: transform 0.4s cubic-bezier(0.55, 0, 0.1, 1) 0s;
    -moz-transition: transform 0.4s cubic-bezier(0.55, 0, 0.1, 1) 0s;
    -o-transition: transform 0.4s cubic-bezier(0.55, 0, 0.1, 1) 0s;
    transition: transform 0.4s cubic-bezier(0.55, 0, 0.1, 1) 0s;
}
.td-scroll-up-visible {
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
}
.td-scroll-up .td-icon-menu-up {
    position: relative;
    color: #fff;
    font-size: 20px;
    display: block;
    text-align: center;
    width: 40px;
    top: 7px;
}
[class*="td-icon-"] {
    line-height: 1;
    text-align: center;
    display: inline-block;
}
.td-icon-menu-up:before {
    content: '\f077';
}
[class^="td-icon-"]:before, [class*=" td-icon-"]:before {
    font-family: 'FontAwesome';
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
@font-face {
font-family: 'FontAwesome';
src: url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0');
src:url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'),url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0') format('woff2'),url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0') format('woff'),url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0//fonts/fontawesome-webfont.ttf?v=4.7.0') format('truetype'),url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');
font-weight: normal;
font-style: normal;
</style>
```
## License

MIT, see [LICENSE](https://github.com/Venkatesh-Smart-007/Newspaper-8/blob/master/LICENSE)

Font Awesome, see [LICENSE](https://fontawesome.com/license)

----------


## Support me with a star
