const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.disable('x-poweed-by')

app.get('*', (req,res) => {
    res.send(`Open your dev tools and examine your headers; ` +
     `you'll notice there is no  x-powered-y heder!`)
})

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`))