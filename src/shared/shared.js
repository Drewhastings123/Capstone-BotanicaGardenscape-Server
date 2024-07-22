

// Add the encryption
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Add the complicated id
const uuid = require("uuid");

// add the db layer wrapper
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create the backend application layer
const express = require("express");
const app = express();
app.use(express.json());

// add the router
const routes = express.Router();


// export variables
module.exports = {
  bcrypt,
  jwt,
  uuid,
  prisma,
  express,
  app,
  routes,
};
