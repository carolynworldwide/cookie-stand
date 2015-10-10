'use strict';

var CookieStand = function Store(place, minCustHour, maxCustHour, avgCookiesCust, domName) {
  this.place = place;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookiesCust = avgCookiesCust;  
  this.cookiesByHourList = [];
  this.domName = domName;

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
    
  this.makeTable = function() {
    var tab = document.getElementById('table');
      var tr = document.createElement('tr');
      tr.textContent = this.place;
      tab.appendChild(tr);
      for (var j = 0; j < this.cookiesByHourList.length; j++) {
        var td = document.createElement('td');
        td.textContent = this.cookiesByHourList[j];
        tr.appendChild(td);
      }
      var tdTotal = document.createElement('td');
      tdTotal.textContent = this.totalCookiesDay();
      tr.appendChild(tdTotal);
    };

  
  this.getCookiesPerHour();
  this.makeTable();
  //this.makeUL = function() {
   // this.totalCookiesDay(); 
    // connect the list to the HTML; this is where your list will appear
    // var awesomeList = document.getElementById(this.domName);
    
    // for(var i = 0; i < this.cookiesByHourList.length; i++) {
    //    // Create the list item:
    //   var item = document.createElement('li');
    //   // Set its contents:
    //   item.appendChild(document.createTextNode((i+10) + ':00 ' + this.cookiesByHourList[i] + ' cookies'));
    //   // Add it to the list:
    //   awesomeList.appendChild(item);
    // }
    // var item = document.createElement('li');
    // item.appendChild(document.createTextNode('Total: ' + this.totalCookiesDay() + ' cookies'));
    // awesomeList.appendChild(item);
    // return awesomeList;

    //var totalData = document.createElement('td');
    //totalData.appendChild(document.createTextNode(total));
    //hour.appendChild(totalData);
  //}
    //makeTable(this.place, this.minCustHour, this.maxCustHour, this.avCookiesPerHour);
  // };
}

var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2, 'pi');
var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2, 'se');
var southcenter = new CookieStand('Southcenter Mall', 11, 38, 1.9, 'so');
var bellevueSquare = new CookieStand('Bellevue Square', 3, 24, 2.6, 'be');
var alki = new CookieStand('Alki', 3, 24, 2.6, 'al');
var northgate = new CookieStand('Northgate', 12, 44, 3.6, 'no');
var tacoma = new CookieStand('Tacoma', 5, 9, 20.7, 'ta');



// pikePlace.makeUL();
// seaTac.makeUL();
// southcenter.makeUL();
// bellevueSquare.makeUL();
// alki.makeUL();
// northgate.makeUL();
// tacoma.makeUL();

var addButton = document.getElementById('addButton');

var handleAddButton = function(event) {
  event.preventDefault();
  var place = document.getElementById('place').value;
  var minCust = document.getElementById('minCust').value;
  var maxCust = document.getElementById('maxCust').value;
  var avCookies = document.getElementById('avCookies').value;
  console.log(place, minCust, maxCust, avCookies);
};

addButton.addEventListener('click', handleAddButton);

