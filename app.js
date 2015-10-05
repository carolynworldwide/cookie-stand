
var pikePlace = {
  location: 'Pike Place Market',
  minCustHour: 17,
  maxCustHour: 88,
  avgCookiesCust: 5.2,
  cookiesByHourList: [],
   
  randCustHour: function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour +1)) + this.minCustHour; 
  },
  totalCookiesHour: function() {
    return Math.floor(this.randCustHour() * this.avgCookiesCust);
  },
  totalCookiesDay: function() {
      var dailyCookies = 0; 
      for(var i = 0; i < 8; i++) {
        this.cookiesByHourList.push(this.totalCookiesHour());
        dailyCookies = dailyCookies + this.totalCookiesHour();
        console.log (i+10);
        console.log (dailyCookies);
      }
    return dailyCookies;
  }
};
  pikePlace.totalCookiesDay();
  function makeUL(array) {

    for(var i = 0; i < array.length; i++) {

        // connect the list to the JS; this is where your list will appear
        var awesomeList = document.getElementById('list1');

        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        awesomeList.appendChild(item);

    // Finally, return the constructed list:
    }
    return awesomeList;
}

