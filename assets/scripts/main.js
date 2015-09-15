/*
  (url: String, callback: Function) -> undefined

  Execute a callback function with the JSON results from the url specified.

  Examples
      var url = "https://api.etsy.com/v2/listings/active.js?api_key=cdwxq4soa7q4zuavbtynj8wx&keywords=tacos&includes=Images,Shop";

      fetchJSONP(url, function(data) {
        // do something with data
      });

      // OR

      function logData(data) {
        console.log(data);
      }

      fetchJSONP(url, logData);
*/
function fetchJSONP(url, callback) {
    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    var script = document.createElement('script');

    window[callbackName] = function(data) {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };

    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
}

var etsyURL = "https://api.etsy.com/v2/listings/active.js?api_key=co3pxaugq0ms80b2f2zrsrix&keywords=whiskey&includes=Images,Shop&sort_on=score";

function logItems(item) {
  var items = item.results;
  console.log(items);
  items.forEach(displayItem);
}

fetchJSONP(etsyURL, logItems);

function displayItem(item) {
  var source = document.querySelector('#item-template').innerHTML;

  var template = Handlebars.compile(source);
  var outputHTML = template(item);

  var itemList = document.querySelector('.item-list');
  itemList.insertAdjacentHTML('beforeend', outputHTML);
}
