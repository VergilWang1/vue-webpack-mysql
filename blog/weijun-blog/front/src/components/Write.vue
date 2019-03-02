<template>
    <div class="layout">
        <Layout>
            <myHeader></myHeader>
            <Content class="content-style">
                <div class="content">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Title</label>
                        <Input v-model="article.title" id="Title" placeholder="Enter Title..." />
                    </div>
                    <!-- <div class="form-group">
                        <label for="exampleInputPassword1">Author</label>
                        <Input id="Author" v-model="article.author" placeholder="Author" />
                    </div> -->
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Categories</label>
                        <Select class="form-control" id="exampleFormControlSelect1" v-model="article.class">
                            <Option v-for="item in classification" :value="item.value"></Option>
                        </Select>
                    </div>
                    <div class="form-group">
                        <vue-editor v-model="article.content"></vue-editor>
                    </div>
                    <div class="form-group">
                        <Button type="info" @click="submitArticle">提交</Button>
                    </div>  
                </div>
            </Content>
            <Footer class="layout-footer-center">footer</Footer>
        </Layout>
    </div>
</template>
<script>
    import myHeader from './common/header'
    import { VueEditor } from 'vue2-editor'
    import { AddArticle } from '../axios/api'
    export default {
        name: "Write",
        components: {
            myHeader,
            VueEditor
        },
        data(){
            return {
                article: {
                    title: '',
                    author: '',
                    classify: '',
                    content: '',
                },
                classification: [
                    {
                        value: 'JavaScript',
                        label: 'New York'
                    },
                    {
                        value: 'Python',
                        label: 'London'
                    },
                    {
                        value: 'nodejs',
                        label: 'Sydney'
                    }
                ],
            }
        },
        created(){
            
            // return AddArticle()
        },
        methods: {
            submitArticle: function(){
                console.log(this.article);
                AddArticle(this.article).then( res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                })
            }
        }
    }
</script>
<style scoped>
.layout-footer-center{
    text-align: center;
}
.content{
    margin: 0 auto;
}
.form-group{
    padding: 10px 0;
}
</style>