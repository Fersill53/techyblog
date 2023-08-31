router.get('/create', (req, res) => {
    // Make sure the user is logged in? Middleware??
    if(!req.session.loggedIn) {
      return res.redirect('/login');
    }
  
    res.render('create-post');
  });