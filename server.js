// app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const authRoutes = require('./routes/authRoutes');
const pendaftaranRoutes = require('./routes/pendaftaranRoutes');
const pesertaRoutes = require('./routes/pesertaRoutes');
const seminarRoutes = require('./routes/seminarRoutes');
const userRoutes = require('./routes/userRoutes');
const authMiddleware = require('./Middleware/authMiddleware');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Endpoint tanpa token
app.use(authRoutes);

// Endpoint dengan token (authMiddleware digunakan di bawah ini)
app.use(authMiddleware);
app.use(pendaftaranRoutes);
app.use(pesertaRoutes);
app.use(seminarRoutes);
app.use(userRoutes);


const PORT = config.server.port;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});