let init = require('./core/_init');
let close = require('./core/_close');
const express = require('express');

init(express());
close();