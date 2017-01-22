'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /events when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/events");
  });


  describe('events', function() {

    beforeEach(function() {
      browser.get('index.html#!/events');
    });


    it('should render events when user navigates to /events', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('locations', function() {

    beforeEach(function() {
      browser.get('index.html#!/venues');
    });


    it('should render venues when user navigates to /venues', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
