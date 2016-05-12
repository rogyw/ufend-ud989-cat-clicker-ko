"use strict";

// set jshint to ignore console, alert, etc
/* jshint devel: true */
// set jshint to ignore external global ko
/* global ko: false */


var Cat = function(data) {

    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observableArray(data.nicknames);

    this.clickLevel = ko.computed(function() {
        var count = this.clickCount();
        if (count < 10) {
            return "Newborn";
        } else if (count < 20) {
            return "Infant";
        } else if (count < 100) {
            return "Teen";
        } else if (count < 200) {
            return "Adult";
        } else if (count < 300) {
            return "Senior";
        } else {
            return "Grandparent";
        }
    }, this);
};

var ViewModel = function() {

    //self represents the ViewModel this (Some developers use that instead of self)
    var self = this;

    this.currentCat = ko.observable(new Cat({
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
        nicknames: [
            { name: "sweetie" },
            { name: "oscar" },
            { name: "bertie" }
        ]
    }));

    // Solution 1:
    this.incrementCounter = function() {
        //uses this within binding context
        this.clickCount(this.clickCount() + 1);
    };

    // Solution 2:
    // Example alternative function using self to reference ViewModel for use within binding context
    this.increaseCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

};

ko.applyBindings(new ViewModel());
