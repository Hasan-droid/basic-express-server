'use strict'
require('dotenv').config();

const myserver=require('./server');


myserver.start(process.env.PORT || 3000)