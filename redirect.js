// public/redirect.js
(function() {
  if (window.location.protocol === 'http:') {
    const redirectTo = 'https://www.' + window.location.hostname + window.location.pathname + window.location.search;
    window.location.href = redirectTo;
  } else if (window.location.hostname === 'aroneenergy.com') {
    const redirectTo = 'https://www.aroneenergy.com' + window.location.pathname + window.location.search;
    window.location.href = redirectTo;
  }
})();
