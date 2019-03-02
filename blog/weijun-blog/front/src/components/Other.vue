<template>
    <div class="layout">
        <Layout>
            <myHeader></myHeader>
            <Content class="content-style">
                <Breadcrumb :style="{height: '20px'}">
                </Breadcrumb>
                <Card :style="{marginTop: '20px'}">
                    <div class="group">
                        <h3>demo1：<a target='_blank' href="https://VergilWang1.github.io">个人练习网页</a></h3>
                        <h3>demo2：<a target='_blank' href="https://weijunw.gitee.io/golden_miner/">常用插件以及前端特效</a></h3>
                        <!-- <h3><a target='_blank' href="">大鲨鱼：</a></h3> -->
                        <!-- <h3><a target='_blank' href="">大鲨鱼：</a></h3> -->
                    </div>
                    <router-view/>
                </Card>
            </Content>
            <Footer class="layout-footer-center"></Footer>
        </Layout>
    </div>
</template>
<script>
    import myHeader from './common/header'
    export default {
        name: "Other",
        components: {
            myHeader
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
.group{
    padding: 15px;
}
</style>