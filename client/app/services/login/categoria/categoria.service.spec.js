'use strict';

describe('Service: categoria', function () {

  // load the service's module
  beforeEach(module('uiApp'));

  // instantiate service
  var categoria;
  beforeEach(inject(function (_categoria_) {
    categoria = _categoria_;
  }));

  it('should do something', function () {
    expect(!!categoria).toBe(true);
  });

});
