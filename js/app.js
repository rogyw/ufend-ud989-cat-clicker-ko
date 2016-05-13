"use strict";

// set jshint to ignore console, alert, etc
/* jshint devel: true */
// set jshint to ignore external global ko
/* global ko: false */

var initialCats = [{
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
    nicknames: ['Sweetie', 'Oscar', 'Bertie', 'TabTab', 'T-bone', 'Mr. T', 'Tabitha Tab Tabby Catty Cat']
}, {
    clickCount: 0,
    name: 'Shadow',
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
    nicknames: ['Follower', 'Shaddy', 'Shooby']
}, {
    clickCount: 0,
    name: 'Scaredy',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
    nicknames: ['Squid', 'Casper']
}, {
    clickCount: 0,
    name: 'Tiger',
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
    nicknames: ['Tigger']
}, {
    clickCount: 0,
    name: 'MilkyBar',
    imgSrc: 'img/9648464288_2516b35537_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
    nicknames: ['Milky']
}];

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

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

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

    this.makeCurrent = function(clickedCat) {
        self.currentCat(clickedCat);
    };

};

ko.applyBindings(new ViewModel());
