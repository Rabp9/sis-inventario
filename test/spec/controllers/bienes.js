'use strict';

describe('Controller: BienesCtrl', function () {

  // load the controller's module
  beforeEach(module('sisInventarioApp'));

  var BienesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BienesCtrl = $controller('BienesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BienesCtrl.awesomeThings.length).toBe(3);
  });
});
