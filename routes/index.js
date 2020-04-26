const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

router.get('/', (req, res) => res.render('home'));
router.get('/faq', (req, res) => res.render('faq'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    name: req.user.name
  }));

//Dashboard->Invest
router.get('/invest', ensureAuthenticated, (req, res) => 
  res.render('invest')
);


module.exports = router;