# Newsletter
Newsletter is a blogger Widget. A full-featured newsletter plugin for Bloogger which fulfils all visitor.

# How to use

1. Add this following code below to `<body>` Tag:
```html
<div class="td-newsletter td-content-horiz-center td-fix-index">
   <div class="td-fix-index">
      <div class="td-image-wrap"><img src="https://demo.tagdiv.com/newspaper_crypto/wp-content/uploads/tdn_pic_2.png"></div>
      <div class="td-info-wrap">
            <h3 class="td-title">Subscribe to our newsletter</h3>
            <p class="td-descr">To be updated with all the latest news, offers and special announcements.</p>
         <form class="td-form" action="http://feedburner.google.com/fb/a/mailverify?uri=EasilyLearn" method="post" name="mc-embedded-subscribe-form" target="_blank">
            <div class="td-input-wrap"><input type="email" name="email" placeholder="Your email address"></div>
            <div class="td-btn-wrap"><button type="submit" name="subscribe">Subscribe</button></div>
         </form>
      </div>
   </div>
</div>
```
3. Add this Css code above to `</head>` Tag:
  ```css
  <style>
  @import url('https://fonts.googleapis.com/css?family=Roboto');
.td-content-horiz-center {
    text-align: center;
}
@media (max-width: 1018px) and (min-width: 768px) {
  .td-newsletter {
      border: 1px solid #eee;
  }
}
.td-newsletter {
    border: 1px solid #eee;
}
.td-fix-index {
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
}
.td-image-wrap {
    background-color: #fff7c1;
    text-align: center;
    line-height: 0;
}
.td-info-wrap {
    padding: 30px 20px 38px;
}
.td-title {
    font-size: 22px!important;
    line-height: 2;
    font-weight: 900;
    margin-top: 0;
    margin-bottom: 13px;
    font-family: roboto,sans-serif;
    color: #111;
}
.td-descr {
    font-size: 14px;
    line-height: 1.5;
    color: #666;
    margin-top: 0;
    margin-bottom: 21px;
    font-family: Verdana,Geneva,sans-serif;
}
.td-newsletter .td-form {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.td-newsletter .td-input-wrap {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.td-newsletter input {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-right: 0;
    padding-left: 12px;
    padding-right: 12px;
    height: 42px;
    font-size: 12px;
    -webkit-transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    line-height: 21px;
    color: #444;
    border: 1px solid #e1e1e1;
    width: 100%;
    max-width: 100%;
    padding: 3px 9px;
    font: inherit;
    margin: 0;
}
.td-btn-wrap {
    min-width: 100px;
}
.td-newsletter button {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    background-color: #f3b700;
    -webkit-appearance: none;
    outline: 0;
    width: 100%;
    height: 42px;
    padding: 0 18px;
    color: #fff;
    border: 0;
    font-size: 12px;
    -webkit-transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    overflow: visible;
    align-items: flex-start;
    text-align: center;
}</style>
```
## License

MIT, see [LICENSE](https://github.com/Venkatesh-Smart-007/Newspaper-8/blob/master/LICENSE)

----------


## Support me with a star
