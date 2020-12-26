const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


// App Config
const app = express();

// middlewares
const middlewares = [
    morgan('dev'),
    cors(),
    express.urlencoded({ limit: '15mb', extended: true }),
    express.json({ limit: '15mb' })
]
app.use(middlewares);

// Import Routers 
const blogRouter = require('./routes/blogRouter');

// App Routes
app.use('/api', blogRouter);


// Database Connection
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    const port = server.address().port;
    console.log(`SERVER IS RUNNING ON PORT ${port} AND SERVER MODE ON ${process.env.NODE_ENV}`);

    if (process.env.NODE_ENV === 'production') {
        console.log('Live Database Connection Successfully Done');
    } else {
        mongoose.connect('mongodb://localhost:27017/event-app-server', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
            .then(() => console.log('Local Database Connection Successfully Done'))
            .catch(err => console.error(err))
    }
})