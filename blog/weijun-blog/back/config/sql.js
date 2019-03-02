const sqlMap = {
    user: {
        select: 'SELECT * FROM `user`',
        add: 'insert into `user` values',
        // delete: ''
    },
    article: {
        // 分页查询
        select: 'SELECT * FROM article',
        select_limit: 'SELECT * FROM article limit ?,?',
        getOne: 'SELECT * FROM article where id = ?',
        add: 'INSERT INTO article VALUES(null, ?, ?, ?, ?, ?, ?, ?, 0)',
        update: 'UPDATE article SET title = ?, content = ? WHERE id = ?',
        delete: 'DELETE FROM article WHERE id = ?',
        add_like: 'UPDATE article SET a_like=a_like+1 where id = ?',
        add_comment: 'UPDATE article SET comment_num=comment_num+1 where id = ?',
        addLook: 'UPDATE article SET look=look+1 where id = ?'
    },
    comment: {
        get: 'SELECT * FROM comment where reply_article_id = ?',
        add: 'INSERT INTO comment VALUES(null, ?, ?, ?, ?, ?, ?)'
    }
}
module.exports = sqlMap;