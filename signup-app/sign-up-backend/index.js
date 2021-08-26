const express = require('express')
const app = express()
const port = 4000
const router = require('./routes/routes')
const connectDB = require('./db/connect')
const env = require('dotenv')
const cors = require('cors')
// loads the variables into the process.env
env.config()
app.use(express.json())
app.use(cors())
app.use('/api/v1/', router)

const start = async () => {
    try {  
        await connectDB(process.env.DB_URI)
        console.log('Database Connected ');
        app.listen(port, () => console.log(`listening on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()