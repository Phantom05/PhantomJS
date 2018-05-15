'use strict';

// hello PhantomJs library!

/*
[Array Area]
*/

// Delete the target string in Array

Array.prototype.delStr = function (p) {
  var idx = this.indexOf(p);
  if (p.length == this[idx].length) {
    var num = this.splice(idx, 1);
    return num;
  }
};

// Sort method auto sorting "1,11,12,2,3 22,33" Troubleshooting.

Array.prototype.arraySort = function () {
  var allSort = function allSort(p, t) {
    return p - t;
  };
  return this.sort(allSort);
};

// Reverse of arraySort

Array.prototype.reverseArraySort = function () {
  var allSort = function allSort(p, t) {
    return t - p;
  };
  return this.sort(allSort);
};

// Get the maximum value by printing only numbers in an array

Array.prototype.maxNumArray = function () {
  var newArray = [];
  var str = this.forEach(function (t) {
    typeof t == 'number' ? newArray.push(t) : false;
  });
  return newArray.reduce(function (x, y) {
    return Math.max(x, y);
  });
};

//Get values by printing only characters in an array

Array.prototype.onlyStrArray = function () {
  var newArray = [];
  var str = this.forEach(function (t) {
    typeof t == 'string' ? newArray.push(t) : false;
  });
  return newArray;
};

// Extract values that exceed the parameter values in the array

Array.prototype.exceedArray = function (a) {
  var fill = this.filter(function (x) {
    if (!(typeof a == 'number')) {
      console.error('Please enter values only for number types.');
      return false;
    } else {
      return x > a;
    }
  });
  return fill;
};