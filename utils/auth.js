const withAuth = (req, res, next) => {
    // If the user isn't logged in, redirect them to the login route
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
    //if the user is authenticated call next() to allow them to view page
      next();
    }
  };
  
  module.exports = withAuth;
  