<template>
    <div class="layout">
        <Layout>
            <myHeader></myHeader>
            <Content class="content-style">
                <Breadcrumb :style="{height: '20px'}">
                </Breadcrumb>
                <Card :style="{marginTop: '20px'}">
                    <div>
                        <Button type="default" @click="$router.go(-1)">
                            返回
                        </Button>
                        <h1 style="text-align:center">{{blog.title}}</h1>
                        <div class="quillWrapper">
                            <div class="ql-container ql-snow">
                            <div class="ql-editor"> 
                                <div v-html="blog.content"> </div>     
                            </div>
                            </div>
                            <div class="ui items">
                            <div class="item cursor-pointer">
                                <div class="middle aligned content" style="text-align:center">
                                <transition name="yes"  >
                                    <div class="header" @click="supportA" v-if="isSupport"><Icon type="md-heart-outline" size='24'/>点个赞呗</div>
                                </transition>
                                    <transition name="no">
                                    <div class="header" v-if="disSupport"><Icon type="md-heart" size='24'/>已赞！</div>
                                </transition>
                                </div>        
                            </div>
                            </div>
                            <div>
                                <span>上一篇:<a v-if="uptitle!='无'"  @click="scrollup">《{{uptitle}}》</a><span v-else>无</span></span>
                                <span style="float:right">下一篇:<a v-if="nexttitle!='无'"  @click="scrollnext">《{{nexttitle}}》</a><span v-else>无</span></span>
                            </div>
                            <div class="comment-scope">
                                <h3>评论区</h3>
                                <textForm :commentData='commentData' @dataChange='dataChange'></textForm>
                            </div>   
                        </div>
                        <vue-editor style="display:none"></vue-editor>
                    </div>
                </Card>
            </Content>
            <Footer class="layout-footer-center"></Footer>
        </Layout>
    </div>
</template>
<script>
import myHeader from "./common/header";
import textForm from "./common/textForm";
import { VueEditor } from 'vue2-editor'
import { GetOneArticle, GetComment, AddComment, LikeArticle, AddCommentArticle, AddLook } from '../axios/api' 
export default {
    name: "Article",
    components: {
        myHeader,
        VueEditor,
        textForm
    },
    data(){
        return {
            blog: {
                title: '1',
                content: 'content'
            },
            isSupport: true,
            disSupport: false,
            uptitle: '',
            nexttitle: '',
            commentData: [
                {
                    auther: 'auther',
                    content: 'content',
                    time: '12:00',
                }
            ]
        }
    },
    created(){
        this.init();
    },
    methods: {
        init(){
            this.isSupport = true,
            this.disSupport = false,
            console.log(this.$route.params.id);
            GetOneArticle(this.$route.params.id).then((res) => {
                // console.log(res);
                this.blog = res.data[0];
            })
            GetOneArticle(Number(this.$route.params.id) - 1).then((res) => {
                // console.log("id-1",res);
                this.uptitle = res.data[0] ? res.data[0].title : '无';
                console.log('this.uptitle',this.uptitle);
            })
            GetOneArticle(Number(this.$route.params.id) + 1).then((res) => {
                // console.log("id+1",res);
                this.nexttitle = res.data[0] ? res.data[0].title : '无'
            })
            GetComment(Number(this.$route.params.id)).then((res) => {
                console.log('res',res);
                this.commentData = res.data
                
            })
            AddLook(Number(this.$route.params.id)).then((res) => {
                console.log('look',res);
            })
        },
        supportA(){
            this.isSupport = false;
            this.disSupport = true;

            LikeArticle(Number(this.$route.params.id)).then((res) => {
                console.log('res',res);
            })
        },
        scrollup(){
            let id = this.$route.params.id - 1;
            if(this.uptitle != '无'){
                this.$router.push({path:'/article/'+id})
                this.init();
            }
        },
        scrollnext(){
            let id = Number(this.$route.params.id) + 1;
            if(this.nexttitle != '无'){
                this.$router.push({path:'/article/'+id})
                this.init();
            }
        },
        dataChange :function(...data){
            console.log('article',data[0]);
            AddComment(data[0]).then((res) => {
                console.log('res',res);
                if(res.data){
                    let id = Number(this.$route.params.id);
                    AddCommentArticle(id).then( res => {
                        console.log(res);
                        this.$router.push({path:'/article/'+id})
                        this.init();
                    })
                    
                    
                }
            })
            
        }
    },
    watch: {
        '$route' (to, from) {

        },
    }
};
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
a{
    color: #515a6e;
}
.cursor-pointer{
    cursor: pointer;
}
.comment-scope{
    margin-top: 20px;
}
</style>