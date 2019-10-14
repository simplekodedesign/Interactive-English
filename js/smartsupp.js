var _smartsupp = _smartsupp || {};
_smartsupp.key = '934510693726559cd73bbfe8fad0045123d3a32c';

window.smartsupp || (function (d) {
    var s, c, o = smartsupp = function () { o._.push(arguments) }; o._ = [];
    s = d.getElementsByTagName('script')[0]; c = d.createElement('script');
    c.type = 'text/javascript'; c.charset = 'utf-8'; c.async = true;
    c.src = 'https://www.smartsuppchat.com/loader.js?'; s.parentNode.insertBefore(c, s);
})(document);

smartsupp('on', 'rendered', function() {
  console.log('rendered');
  // smartsupp('theme:options', {
  //    panelWidth: 350,
  //    panelHeight: 550
  // });
  smartsupp('variables', {
    userId: {
      label: 'CONSULTAS MENSUAL ',
      value: 2
    },
    role: {
      label: 'Customer status',
      value: 'VIP'
    },
    orderedPrice: {
      label: 'Customer spending',
      value: '100 EUR'
    }
  });
  // Set logo inside chat box, which is displayed by default when no agent is connected.
  // smartsupp('chat:avatar', 'http://lorempixel.com/100/100/people');
  //Set pre-filled message in chat box (text is not sent).
  smartsupp('chat:message', 'Holaaaaa, can you help me with...');
  // colors
  // smartsupp('theme:colors', {
  //   widget: '#c0392b',
  //   primary: '#c0392b'
  // });
});

// smartsupp('theme:options', {
// panelWidth: 350,
// panelHeight: 550
// });
