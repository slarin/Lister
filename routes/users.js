const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// User model
const User = require('../models/User');

// Login
router.get('/login', (req, res) => res.render('login'));

// Register
router.get('/register', (req, res) => res.render('register'));

// Register Handler
router.post('/register', (req, res) => {

  const { name, email, password, password2 } = req.body;
  let errors = [];

  // Error handler
  if(!name||!email||!password||!password2) {
    errors.push({ msg: 'Please fill in all the fields'});
  }
  if(password != password2) {
    errors.push({ msg: 'Passwords do not match'});
  }
  if(password.length < 6) {
    errors.push({ msg: 'choose a longer password'});
  }
  if(errors.length > 0){
    res.render('register', {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    User.findOne({ email: email })
      .then(user => {
        if(user) {
          errors.push({ msg: 'Email is already registered'})
          window.alert(errors);
          res.render('register', {
            errors,
            name,
            email,
            password,
            password2
          });
        } else {
            const newUser = new User({
              name,
              email,
              password
            });
           
           //Password
           bcrypt.genSalt(10, (err, salt) => 
            bcrypt.hash(newUser.password, salt, (err, hash) => {
             if(err) throw err;

             newUser.password = hash;
             newUser.save()
              .then(user => {
                res.flash('success_msg', 'Registered! Log in.');
                res.redirect('/users/login');
              })
              .catch(err => console.log(err));
           }))
        }
      });
  }
});

// Login handler
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

// Logout handler
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'you are logged out');
  res.redirect('/users/login');
});


module.exports = router;