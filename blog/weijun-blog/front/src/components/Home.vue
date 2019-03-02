<template>
    <div class="layout">
        <Layout>
            <myHeader></myHeader>
            <Content class="content-style">
                <Breadcrumb :style="{height: '20px'}">
                </Breadcrumb>
                <Card :style="{marginTop: '20px'}" v-for="card in allCards">
                    <div>
                        <p class="margin15">
                            <span class="ivu-avatar">
                                <img :src="card.header_img?card.header_img:imgUrl" />
                            </span>
                            <span class="margin-left-30">{{card.name}}</span>
                            <span class="margin-left-30">{{card.send_time | formatTime}}</span>
                        </p>
                        <a class="text-default" @click="toPage(card.id)">
                            <h2>{{card.title}}</h2>
                            <p v-html="$options.filters.processStr(card.content)"></p>
                        </a>
                        <p class="margin15">
                            <span>
                                <Icon type="ios-eye" size="24"/>{{card.look}}
                            </span>
                            <span class="margin-left-30">
                                <Icon type="md-chatboxes" size="20"/>{{card.comment_num}}
                            </span>
                            <span class="margin-left-30">
                                <Icon type="md-heart" size="20"/>{{card.a_like}}
                            </span>
                            <Button type="default" @click="deleteArticle(card)">
                                删除
                            </Button>
                        </p>
                    </div>
                </Card>
                <div class="pages">
                    <Page :total="pnum" show-elevator @on-change='onChangePage'/>
                </div>
            </Content>
            <Footer class="layout-footer-center"></Footer>
        </Layout>
    </div>
</template>
<script>
    import imgUrl from '../assets/img/header.jpg'
    import myHeader from './common/header'
    import { GetArticles, GetArticlesPage, DeleteArticle } from '../axios/api'
    import { processStr } from '../filters'
    export default {
        name: "Home",
        components: {
            myHeader
        },
        data(){
            return {
                allCards: [],
                imgUrl,
                pnum: 10
            }
        },
        created(){
            console.log('page',this.$route.query.pid);
            
            this.init();
        },
        methods: {
            init(){
                let pid = this.$route.query.pid ? this.$route.query.pid : 1;
                GetArticles().then( res => {
                    // this.allCards = res.data;
                    console.log('res.data.length',res.data.length);
                    this.pnum = Math.ceil(res.data.length / 5) * 10
                }).catch( err => {
                    console.log(err);
                })
                GetArticlesPage(pid).then( res => {
                    this.allCards = res.data;
                    console.log('res',res.data);
                }).catch( err => {
                    console.log(err);
                })
            },
            toPage: function(id){
                this.$router.push({name: 'Article', params: {id}});
            },
            onChangePage: function(pid){
                console.log(pid);
                this.$router.push({path: 'home?pid=' + pid});
                this.init();
            },
            deleteArticle: function(card){
                console.log(this.$route.fullPath);
                DeleteArticle({id: card.id}).then( res =>{
                    console.log("delete", res);
                    this.init();
                }).catch( err => {
                    console.log('err', err);
                })
            }
        },
        filters: {
            processStr
        },
        watch: {

        }
    }
</script>
<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
.pages{
    margin: 15px 0;
    text-align: right;
}
</style>