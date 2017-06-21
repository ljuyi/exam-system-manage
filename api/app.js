var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var writeFile = require('./writeFile')
var fs = require('fs')

app.use(bodyParser())

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.send(200);/*让options请求快速返回*/
    else next();
});

app.get('/', function (req, res) {
    res.send('Hello world!');
});
app.get('/libraryInfo', function(req, res) {
    fs.readFile('./libraryInfo.json', (err, data) => {
        if (err) {
            console.log(err)
        } else {
           res.send(JSON.stringify(JSON.parse(data)))
        }
    })
})
app.get('/subjectInfo', function(req, res) {
    fs.readFile('./subjectInfo.json', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send(data)
        }
    })
})
app.post('/libraryUpdate', (req, res) => {
    if (req.body.data) {
        //能正确解析 json 格式的post参数
        res.send({ "status": "success", "name": req.body.data.name, "age": req.body.data.age });
        writeFile('./libraryInfo.json', JSON.stringify(req.body.data))
    } else {
        //不能正确解析json 格式的post参数
        var body = '', jsonStr;
        req.on('data', function (chunk) {
            body += chunk; //读取参数流转化为字符串
        });
        req.on('end', function () {
            //读取参数流结束后将转化的body字符串解析成 JSON 格式
            try {
                jsonStr = JSON.parse(body);
                console.log(jsonStr)
            } catch (err) {
                jsonStr = null;
            }
            jsonStr ? writeFile('./test.txt', jsonStr) : res.send({ "status": "error" });
        });
        console.log(jsonStr)
    }
})

app.listen(4000, () => {
    console.log('服务器启动成功')
})