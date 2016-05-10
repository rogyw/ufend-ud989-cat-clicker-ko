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

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

ko.applyBindings(new ViewModel());
