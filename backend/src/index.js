const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const http = require('http');
const cors = require('cors');
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);
setupWebsocket(server);
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-5x62b.mongodb.net/omnistck10?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
app.use(cors());
app.use(express.json());
app.use(routes);




server.listen(3334);


