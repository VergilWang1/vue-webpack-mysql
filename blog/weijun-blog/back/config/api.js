const mysql = require("mysql");
const sql = require('./sql.js');
const db = require('./database.js');


// 连接数据池
const pool = mysql.createPool({
    host: db.mysql.host,
    user: db.mysql.user,
    password: db.mysql.password,
    database: db.mysql.database,
    port: db.mysql.port,
    multipleStatements: true    // 多语句查询
});
module.exports = {
    getAllArticles: function(req, res){
        pool.getConnection(function(err, con){
            con.query(sql.article.select, (err, result) => {
                res.json(result)
                con.release();//释放连接池中的数据库连接
            })
        })
    },
    getArticlesPage: function(req, res){
        let pid = req.params.pid;
        let sqlParams = [(pid - 1) * 5, pid * 5];
        pool.getConnection(function(err, con){
            con.query(sql.article.select_limit, sqlParams, (err, result) => {
                res.json(result)
                con.release();//释放连接池中的数据库连接
            })
        })
    },
    getOneArticle: function(req, res){
        pool.getConnection(function(err, con){
            con.query(sql.article.getOne, [req.params.id],(err, result) => {
                if(err){
                    console.log(err);
                }else{
                    res.json(result)
                    con.release();//释放连接池中的数据库连接
                }
            })
        })
    },
    addArticle: function(req, res){
        // console.log(req.body);
        if(req.body.title && req.body.content){
            pool.getConnection(function(err, con){
                let sqlParams = [req.body.title, req.body.content, 1, 1, new Date(), req.body.header_img?req.body.header_img:'', req.body.class?req.body.class:''];
                // console.log(sqlParams);
                con.query(sql.article.add, sqlParams, (err, result) => {
                    if(err){
                        res.json(err)
                        console.log("err: " + err);
                    }else{
                        res.json(result);
                        con.release();//释放连接池中的数据库连接
                    }
                })
            })
        }else{
            res.json({fail: 'true'})
        }
    },
    updateArticle: function(req, res){
        if(req.params.id && req.body.title && req.body.content){
            pool.getConnection(function(err, con){
                let sqlParams = [req.body.title, req.body.content, req.params.id];
                console.log(sqlParams);
                con.query(sql.article.update, sqlParams, (err, result) => {
                    if(err){
                        console.log("err: " + err);
                        res.json("err: " + err);
                    }else{
                        res.redirect('/getArticles');
                        con.release();//释放连接池中的数据库连接
                    }
                })
            })
        }
    },
    deleteArticle: function(req, res){
        console.log(req.body.id);
        if(req.body.id){
            pool.getConnection(function(err, con){
                let sqlParams = [req.body.id];
                con.query(sql.article.delete, sqlParams, (err, result) => {
                    if(err){
                        console.log("err: " + err);
                        res.json("err: " + err);
                    }else{
                        res.json({success: true});
                        con.release();//释放连接池中的数据库连接
                    }
                })
            })
        }
    },
    getComment: function(req, res){
        pool.getConnection(function(err, con){
            let sqlParams = [req.params.id];
            con.query(sql.comment.get, sqlParams, (err, result) => {
                res.json(result);
                con.release();//释放连接池中的数据库连接
            })
        })
    },
    addComment: function(req, res){
        if(req.body.comment && req.body.reply_article_id){
            pool.getConnection(function(err, con){
                let sqlParams = [0, 0, req.body.reply_article_id, req.body.comment, new Date(), req.body.username];
                // console.log(sqlParams);
                con.query(sql.comment.add, sqlParams, (err, result) => {
                    if(err){
                        res.json(err)
                        console.log("err: " + err);
                    }else{
                        res.json({success: 'true'})
                        con.release();//释放连接池中的数据库连接
                    }
                })
            })
        }else{
            res.json({fail: 'true'})
        }
    },
    likeArticle: function(req, res){
        pool.getConnection(function(err, con){
            let sqlParams = [req.params.id];
            con.query(sql.article.add_like, sqlParams, (err, result) => {
                res.json(result);
                con.release();//释放连接池中的数据库连接
            })
        })
    },
    addCommentArticle: function(req, res){
        pool.getConnection(function(err, con){
            let sqlParams = [req.params.id];
            con.query(sql.article.add_comment, sqlParams, (err, result) => {
                res.json(result);
                con.release();//释放连接池中的数据库连接
            })
        })
    },
    addLook: function(req, res){
        pool.getConnection(function(err, con){
            let sqlParams = [req.params.id];
            con.query(sql.article.addLook, sqlParams, (err, result) => {
                res.json(result);
                con.release();//释放连接池中的数据库连接
            })
        })
    },
    // getLikes: function(req, res){
    //     pool.getConnection(function(err, con){
    //         con.query(sql.article.getLike, (err, result) => {
    //             res.json(result)
    //         })
    //     })
    // },
    // addLikes: function(req, res){
    //     pool.getConnection(function(err, con){
    //         let sqlParams = [req.params.id];
    //         con.query(sql.article.delete, sqlParams, (err, result) => {
    //             if(err){
    //                 console.log("err: " + err);
    //                 res.json("err: " + err);
    //             }else{
    //                 res.redirect('/getLikes');
    //             }
    //         })
    //     })
    // }
}

