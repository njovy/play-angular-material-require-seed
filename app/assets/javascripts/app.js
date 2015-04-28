define(['angular', 'home', 'user', 'dashboard'], function(angular) {
  'use strict';

  // We must already declare most dependencies here (except for common), or the submodules' routes
  // will not be resolved
  return angular.module('app', ['yourprefix.home', 'yourprefix.user', 'yourprefix.dashboard']);
});
