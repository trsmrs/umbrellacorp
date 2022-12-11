const express = require('express')
const path = require('path')
const app = express()

// definindo o template engine
app.set('view engine', 'EJS')


// MVC - MODEL - VIEW - CONTROLLER

// definindo os arquivos estáticos - USADO SOMENTE SE NÃO FOR USADO UM TEMPLATE ENGINE
// app.use(express.static(path.join(__dirname, 'views')))

// definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))


// ROTAS
app.get('/',(req, res)=>{
    res.render('index')
})

app.get('/contact',(req, res)=>{
    res.render('contact')
})

app.get('/products', (req, res)=>{
    res.render('products')
})

app.get('/about', (req, res)=>{
    res.render('about')
})

//  404 NOT FOUND
app.use((req, res)=>{
    res.render('404')
})











const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server running on port ${port}`))



