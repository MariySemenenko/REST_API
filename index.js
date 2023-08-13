const express = require("express")

const routes = require("./routes/contact")


const app = express()

app.use('/api', routes)//якщо запити починаються з API то переходимо на routes

app.use((req, res, next) => {
    res.status(404).send({message: "Not found"})
})

app.use((error, req, res, next) => {
    console.error(error)
    res.status(500).send({message: "Internal server error"})
})

app.listen(8080, () => {
    console.log('Running on port 8080')
})