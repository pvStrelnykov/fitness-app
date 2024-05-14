dotenv.config()
import dotenv from 'dotenv'
import express from 'express'
import errorHandler from './middlewares/errorHandler.js'
import notFound from './middlewares/notFound.js'

import router from './routes/index.js'

const PORT = process.env.PORT ?? 3000
const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
app.use('/', router)

app.use(notFound)
app.use(errorHandler)

function start() {
	try {
		app.listen(PORT, () => {
			console.log(`Server has been started on PORT:${PORT}`)
		})
	} catch (e) {
		console.log('Server error: ', e.message)
	}
}
start()
