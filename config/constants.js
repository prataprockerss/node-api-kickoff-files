const
  API_SERVER_PATH = 'http://www.example.com/',
  path = require('path'),
  express = require('express')
module.exports = {
  API_ENDPOINT : {
    login: API_SERVER_PATH+'login'
  },
  MESSAGES: {
    _404 : 'Page not found',
    errormsg: 'Error Message'
  },
  DB_CONFIG: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sample'
  },
  PAGE_LIST: [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Form',
      link: '/form'
    },
    {
      title: 'Docs',
      link: '/docs'
    }
  ],
}