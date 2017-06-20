var fs = require('fs')

function readFile(path, body) {
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
        }
        body = data
    })
}
module.exports = readFile