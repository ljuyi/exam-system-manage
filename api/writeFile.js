var fs = require('fs')

function writeFile(path, body) {
    fs.writeFile(path, body, (err) => {
        if (err) {
            console.log(err)
        }
    })
}
module.exports = writeFile