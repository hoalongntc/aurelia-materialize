# aurelia-materialize

This is materialize-css plugin of aurelia.

## How to use

1. Install plugin with jspm:

  ```shell
  jspm install hoalongntc/aurelia-materialize
  ```
2. Register plugin in your `main.js`

  ```shell
  ...
  aurelia.use.plugin('aurelia-materialize');
  ...
  ```
3. Start coding

## Javascript components

Javascript components are now available as `customAttribute`:

1. SizeNav: `md-size-nav`

  ``` 
  <nav>
    <ul class="right hide-on-med-and-down">
      <li><a href="#!">First Sidebar Link</a></li>
      <li><a href="#!">Second Sidebar Link</a></li>
    </ul>
    <ul id="slide-out" class="side-nav">
      <li><a href="#!">First Sidebar Link</a></li>
      <li><a href="#!">Second Sidebar Link</a></li>
    </ul>
    <a md-size-nav href="#" data-activates="slide-out" class="button-collapse"><i class="mdi-navigation-menu"></i></a>
  </nav>
  ```