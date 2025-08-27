const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    res.send("Tá quase na hora de ir dormir...")
})

app.listen(port, () => {
    console.log(`Executando na porta: ${port}`)
})
