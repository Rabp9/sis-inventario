'use strict';

describe('Controller: BienesEditCtrl', function () {

  // load the controller's module
  beforeEach(module('sisInventarioFrontendApp'));

  var BienesEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BienesEditCtrl = $controller('BienesEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BienesEditCtrl.awesomeThings.length).toBe(3);
  });
});
