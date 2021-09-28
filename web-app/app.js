require('dotenv').config(); // Load environment variables from .env file
const Server = require('./models/server.js');
const server = new Server();
server.listen();