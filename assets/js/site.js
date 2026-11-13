// Builds email links at page load so the addresses never appear whole in the HTML,
// which keeps most address-harvesting bots from collecting them.
// Without JavaScript, each link falls back to "name [at] keystone-ms.com" and points to the Contact page.
(function () {
  var domain = ["keystone-ms", "com"].join(".");
  var links = document.querySelectorAll("a[data-user]");
  for (var i = 0; i < links.length; i++) {
    var address = links[i].getAttribute("data-user") + "@" + domain;
    links[i].setAttribute("href", "mailto:" + address);
    links[i].textContent = address;
  }
})();
