const http = require('http')
const path = require('path')
const fs = require('fs')
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-type': 'text/html; charset=utf-8'
        })
        if (req.url === '/') {
            fs.readFile(path.join(__dirname, 'views', 'index.html'), 'utf-8',
                (err, content) => {
                    if (err) throw err
                    res.end(content)
                }
            )
        }
        if (req.url === '/about') {
            fs.readFile(path.join(__dirname, 'views', 'about.html'), 'utf-8',
                (err, content) => {
                    if (err) throw err
                    res.end(content)
                }
            )
        }
        if (req.url === '/api/users') {
            res.writeHead(200, {
                'Content-type': 'text/json'
            })

            const users = [
                {
                    name: 'Dilshod',
                    age: 28
                },
                {
                    name: 'Rukhshona',
                    age: 24
                }
            ]

            res.end(JSON.stringify(users))
            // fs.readFile(path.join(__dirname, 'views', 'users.html'), 'utf-8',
            //     (err, content) => {
            //         if (err) throw err

            //     }
            // )
        }

    } else if (req.method === 'POST') {
        const body = []
        res.writeHead(200, {
            'Content-type': 'text/html; charset=utf-8'
        })
        req.on('data', (data) => {
            body.push(Buffer.from(data))
        })
        req.on('end', () => {
            const message = body.toString().split('=')[1]
            res.end(`
                <h1> Your message: ${message} </h1>
            `)
        })

    }
})

server.listen(3000, () => {
    console.log('server is runnig...');
})