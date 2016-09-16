'use strict';

describe('Airport', function(){

  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    plane = jasmine.createSpy('plane');
    weather = new Weather();
    airport = new Airport();
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  describe('under normal conditions', function() {

    beforeEach(function(){
      spyOn(Math,'random').and.returnValue(0);
    });

    it('can clear planes for landing', function() {
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane])
    });

    it('can clear planes for takeoff', function(){
      airport.clearForLanding(plane);
      airport.clearForTakeOff(plane);
      expect(airport.planes()).toEqual([])
    });

  });


  describe('under stormy conditions',function(){

    beforeEach(function(){
      spyOn(Math,'random').and.returnValue(1);
    });

    it('does not clear planes for takeoff', function(){
      expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm');
    });

    it('does not clear planes for landing', function(){
      expect(function(){ airport.clearForLanding(plane); }).toThrowError('cannot land during storm');
    });

  });


});
