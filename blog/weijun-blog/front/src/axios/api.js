import $http from 'axios'

//获取所有文章
export const GetArticles = () => $http.get('/api/getArticles');
// 获取分页的文章
export const GetArticlesPage = id => $http.get('/api/getArticlesPage/' + id);
// 获取单个文章
export const GetOneArticle = id => $http.get('/api/getOneArticle/' + id);
//写文章
export const AddArticle = data => $http.post('/api/addArticle', data);
//获取文章的所有评论
export const GetComment = id => $http.get('/api/getComment/' + id);
//添加评论
export const AddComment = data => $http.post('/api/addComment', data)
//点赞
export const LikeArticle = id => $http.get('/api/likeArticle/' + id)
//添加一条评论
export const AddCommentArticle = id => $http.get('/api/addCommentArticle/' + id)
//观看一次
export const AddLook = id => $http.get('/api/addLook/' + id)
//删除文章
export const DeleteArticle = data => $http.post('/api/deleteArticle', data);
