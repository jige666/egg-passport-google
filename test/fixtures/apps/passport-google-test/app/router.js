'use strict';

module.exports = app => {
  app.get('/', function* () {
    this.body = 'hi, ' + app.plugins.passportGoogle.name;
  });

  app.passport.mount('google');
};
