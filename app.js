var CookieStand = function(place, minCustHour, maxCustHour, avgCookiesCust)
{
  this.place = place;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookiesCust = avgCookiesCust;
  this.cookiesByHourList = [];

  this.randCustHour = function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour +1)) + this.minCustHour; 
  };  
  this.totalCookiesHour = function() {
    return Math.floor(this.randCustHour() * this.avgCookiesCust);
  };
  this.getCookiesPerHour = function() {
    for(var i = 0; i < 8; i++) {
        this.cookiesByHourList.push(this.totalCookiesHour());
    }
  };
  this.totalCookiesDay = function() {
    var dailyCookies = 0; 
    for(var i = 0; i < this.cookiesByHourList.length; i++) {
      dailyCookies = dailyCookies + this.cookiesByHourList[i];
    }
    return dailyCookies;
  };
  this.makeTableRow = function() {
    var tab = document.getElementById('table');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.textContent = this.place;
    tr.appendChild(td);

    for (var j = 0; j < this.cookiesByHourList.length; j++) {
      td = document.createElement('td');
      td.textContent = this.cookiesByHourList[j];
      tr.appendChild(td);
    }
    var tdTotal = document.createElement('td');
    tdTotal.textContent = this.totalCookiesDay();
    tr.appendChild(tdTotal);
    tab.appendChild(tr);  
  };

  this.getCookiesPerHour();
  this.makeTableRow();
}

var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2, 'pi');
var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2, 'se');
var southcenter = new CookieStand('Southcenter Mall', 11, 38, 1.9, 'so');
var bellevueSquare = new CookieStand('Bellevue Square', 3, 24, 2.6, 'be');
var alki = new CookieStand('Alki', 3, 24, 2.6, 'al');
var northgate = new CookieStand('Northgate', 12, 44, 3.6, 'no');
var tacoma = new CookieStand('Tacoma', 5, 9, 20.7, 'ta');

var addForm = document.getElementById('addForm');

var handleAddForm = function(event) {
  event.preventDefault();
  if (!event.target.place.value || !event.target.minCust.value || !event.target.maxCust.value || !event.target.avCookies.value) {
    return alert('no empty fields allowed');
  }
var newPlace = new CookieStand(event.target.place.value, event.target.minCust.value, event.target.maxCust.value, event.target.avCookies.value);
console.log(newPlace);

event.target.place.value = null;
event.target.minCust.value = null;
event.target.maxCust.value = null;
event.target.avCookies.value = null;
};

addForm.addEventListener('submit', handleAddForm);