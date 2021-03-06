const CustomErrorBaseClass = require('./customErrorBaseClass');

class AuthenticationError extends CustomErrorBaseClass {
  constructor(message) {
    super(message);
  }
}

class UnAuthRouteAccess extends AuthenticationError {
  constructor(message) {
    super(message);
    this.statusCode = 401;
    this.cause = 'UnAuthRouteAccess (Forbidden Error)';
  }
}

module.exports = {
  AuthenticationError,
  UnAuthRouteAccess,
};
