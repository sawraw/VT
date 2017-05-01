'use strict'

// const {Order, Product, User} = require('APP/db')

// const {mustBeLoggedIn, forbidden, mustBeAdmin} = require('./auth.filters')

module.exports = require('express').Router()
  .get('/',
    (req, res, next) => {
      res.sendStatus(200);
    })