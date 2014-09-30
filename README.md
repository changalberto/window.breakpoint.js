window.breakpoint.js
====================

A simple custom window resize event. The breakpoint event is fired at each defined breakpoint very much like mediaqueries are triggered. This custom event is great purpose for hybrid responsive/adaptive designs, where javascript functionality needs to be enabled or disabled at different breakpoints.


Usage
-----
Default Options:

```JavaScript
window.breakpoints = {
  sm: [0, 639],
  md: [640, 959],
  lg: [960, 3200]
};

```
You can define your own custom breakpoint by defining your own window.breakpoints object at the start. Example:
```JavaScript
window.breakpoints = {
  xs: [0, 320],
  sm: [321, 639],
  md: [640, 959],
  lg: [960, 3200]
};

```

```Javascript
window.addEventListener('breakpoint', function(e){
  switch(e.breakpoint){
    case 'sm':
      // Javascript for Small devices
    break;
    case 'md':
      // Javascript for Medium devices
    break;
    case 'lg':
      // Javascript for large devices
    break;
  }
}, false);
```
