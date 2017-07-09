'use strict';

describe('Service: generatorService', function () {

  // load the service's module
  beforeEach(module('recordsureApp'));

  var generatorService,
    scope;

  beforeEach(inject(function ($rootScope, _generatorService_) {
    generatorService = _generatorService_;


  }));

  it('should exist', function () {
    expect(generatorService).toBeDefined();
  });

  it('should generate unique ID', function () {
    expect(generatorService.generate().length).toBe(14);
  });

  it('should have `#` as the first character', function () {
    expect(generatorService.generate().substr(0,1)).toBe('#');
  });


});