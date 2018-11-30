let mongoose = require('mongoose');/*连接数据库*/

mongoose.connect('mongodb://localhost:27017/content', { useNewUrlParser: true });

let contentSchema = new mongoose.Schema({
    income: String,
    date: String,
    use: String
})

module.exports = mongoose.model('content', contentSchema);/*别人能访问到*/