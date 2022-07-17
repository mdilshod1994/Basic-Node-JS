const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//     if (err) throw err
//     console.log('file was created');
// })

// fs.writeFile(path.join(__dirname, 'notes', 'my-notes.txt'), 'Hello world', (err) => {
//     if (err) throw err
//     console.log('file was created');
//     fs.appendFile(path.join(__dirname, 'notes', 'my-notes.txt'), ' Hello from appendFile', (err) => {
//         if (err) throw err
//         console.log('file was changed');
//         fs.readFile(path.join(__dirname, 'notes', 'my-notes.txt'), 'utf-8', (err, data) => {
//             if (err) throw err
//             console.log(data);
//         })
//     })

// })

fs.rename(
    path.join(__dirname, 'notes', 'my-notes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    (err) => {
        if (err) throw err
        console.log('File was renamed');
    }
)