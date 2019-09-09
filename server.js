// **** connect and run server ***** //
const express = require('express');
const ConnectDB = require('./config/db');
const app = express();

// Connect Database
ConnectDB();

// init middleware
app.use(express.json({ extened: false }));

app.get('/', (req, res) => res.send('API Running'));

// define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
