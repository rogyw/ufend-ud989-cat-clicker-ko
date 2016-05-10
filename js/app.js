"use strict";

// set jshint to ignore console, alert, etc
/* jshint devel: true */
// set jshint to ignore external global ko
/* global ko: false */

var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');
    this.nicknames = ko.observableArray([
        { name: "sweetie" },
        { name: "oscar" },
        { name: "bertie" }
    ]);

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

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

ko.applyBindings(new ViewModel());
