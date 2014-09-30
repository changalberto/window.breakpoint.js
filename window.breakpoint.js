'use strict';

(function(){
  // Custom Breakpoint Event
  var event = new CustomEvent('breakpoint', {
        breakpoint: null,
        detail: {
          breakpoint: null
        },
        bubbles: true,
        cancelable: true
      }),
      _timeout = null,
      _breakpoints = {
        sm: [0, 639],
        md: [640, 959],
        lg: [960, 3200]
      },
      _current = null;

  // Resize Handler
  window.onresize = window.onorientationchange = function(){
    // Throttle Resize
    if(!!_timeout) clearTimeout(_timeout);
    _timeout = setTimeout(function(){
      // Custom Breakpoints
      if('breakpoints' in window) _breakpoints = window.breakpoints;
      var breakpoint = (function(){
            var width = window.innerWidth;
            for(var breakpoint in _breakpoints){
              if(width >= _breakpoints[breakpoint][0] && width <= _breakpoints[breakpoint][1]) return breakpoint;
            }
          })();
      if(_current === breakpoint) return;
      window.breakpoint = event.breakpoint = event.detail.breakpoint = _current = breakpoint;
      window.dispatchEvent(event);
    }, 350);
  };

  window.dispatchEvent(new CustomEvent('resize')); // Dispatch Resize Event to Trigger First Event on Start
})();
