var qiniu = require("qiniu");
//需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = 'wiAnYrcL-BEkNP11B-AhZGFJ_Csk4yONPcWse6oH';
qiniu.conf.SECRET_KEY = 'i4iusN2TKhVB6lulvU9CPDIWE-Oo7Bd2K0y7lLvo';
// 要上传的空间
bucket = 'exam-system-manage';
key = 'libraryInfo';
// 构建上传策略函数，设置回调的url以及需要回调给业务服务器的数据
// function uptoken(bucket, key) {
//   var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
//  // putPolicy.callbackUrl = 'http://your.domain.com/callback';
//  // putPolicy.callbackBody = 'filename=$(fname)&filesize=$(fsize)';
//   return putPolicy.token();
// }
// //生成上传 Token
// token = uptoken(bucket, key);
// //要上传文件的本地路径
// filePath = './libraryInfo'
// //构造上传函数
// function uploadFile(uptoken, key, localFile) {
//   var extra = new qiniu.io.PutExtra();
//     qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
//       if(!err) {
//         // 上传成功， 处理返回值
//         console.log(ret.hash, ret.key, ret.persistentId);
//       } else {
//         // 上传失败， 处理返回代码
//         console.log(err);
//       }
//   });
// }
// //调用uploadFile上传
// uploadFile(token, key, filePath);

// 构建bucketmanager对象
// var client = new qiniu.rs.Client();
// //删除资源
// client.remove(bucket, key, function(err, ret) {
//   if (!err) {
//     // ok
//   } else {
//     console.log(err);
//   }
// });
var url = 'http://orc2mim1t.bkt.clouddn.com/libraryInfo';
var policy = new qiniu.rs.GetPolicy();
//生成下载链接url
var downloadUrl = policy.makeRequest(url);
//打印下载的url
console.log(downloadUrl);
