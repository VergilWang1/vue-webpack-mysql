<template>
    <div>
        <div class="commen-box" v-if="commentData.length > 0">
            <div class="commen-box-one" v-for="com in commentData">
                <div>{{com.username}} : {{com.comment}}</div>
                <div class="text-right">{{com.comment_time | formatTime}}</div>
            </div>
        </div>
        <div v-else style="margin-left: 20px;">
            暂无评论
        </div>
        <div class="form-con">
            <Form :model="formItem" label-position="top">
                <FormItem label="昵称">
                    <Input v-model="formItem.username" placeholder="Enter name"/>
                </FormItem>
                <FormItem label="内容">
                    <Input v-model="formItem.comment" type="textarea" :autosize="{minRows: 4,maxRows: 5}" placeholder="Enter something..."></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="submitForm">提交</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>
<script>
export default {
    props: ['commentData'],
    data(){
        return {
            formItem: {
                user_id: 0,
                reply_user_id: 0,
                reply_article_id: 0,
                username: '',
                comment_time: new Date(),
                comment: ''
            }
        }
    },
    methods: {
        submitForm: function(){
            this.formItem.comment_time = new Date();
            this.formItem.reply_article_id = this.$route.params.id;
            // console.log('textForm',this.formItem);
            this.$emit('dataChange', this.formItem)
        }
    }
}
</script>
<style>
    .commen-box{
        border-radius: 5px;
        border: 1px solid #dcdee2;
        padding: 20px;
    }
    .commen-box-one{
        padding: 20px 0 5px 0;
        border-bottom: 1px solid #dcdee2;
    }
    .text-right{
        text-align: right;
    }
    .form-con{
        margin-top: 15px;
    }
</style>


