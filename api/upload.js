var qiniu = require("qiniu");
//需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = 'wiAnYrcL-BEkNP11B-AhZGFJ_Csk4yONPcWse6oH';
qiniu.conf.SECRET_KEY = 'i4iusN2TKhVB6lulvU9CPDIWE-Oo7Bd2K0y7lLvo';
//要上传的空间
bucket = 'exam-system-manage';
//上传到七牛后保存的文件名
key = 'libraryInfo';

//构建上传策略函数
function uptoken(bucket, key) {
    var putPolicy = new qiniu.rs.PutPolicy(bucket + ":" + key);
    return putPolicy.token();
}
//生成上传 Token
token = uptoken(bucket, key);
//要上传文件的本地路径
filePath = './libraryInfo'
//构造上传函数
function uploadFile(uptoken, key, localFile) {
    var extra = new qiniu.io.PutExtra();
    qiniu.io.putFile(uptoken, key, localFile, extra, function (err, ret) {
        console.log(111)
        if (!err) {
            // 上传成功， 处理返回值
            console.log(ret.hash, ret.key, ret.persistentId);
        } else {
            // 上传失败， 处理返回代码
            console.log(err);
        }
    });
}
//调用uploadFile上传
uploadFile(token, key, filePath);