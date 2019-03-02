<template>
    <div class="layout">
        <Layout>
            <myHeader></myHeader>
            <Content class="content-style">
                <Breadcrumb :style="{height: '20px'}">
                </Breadcrumb>
                <Card :style="{marginTop: '20px'}">
                    <div class="group">
                        <h3>个人简介：</h3>
                        <div>
                            wangweijun,sidjsijsidjsidsidjsidjisdjisdisjdisjdisjd.......
                        </div>
                    </div>
                    <div class="group">
                        <h3>爱好</h3>
                        <div>
                            电影，玩游戏，黑科技
                        </div>
                    </div>
                    <div class="group">
                        <h3>联系</h3>
                        <div>QQ: 1745159983</div>
                        <div>github: <a target='_blank' href="https://github.com/VergilWang1">https://github.com/VergilWang1</a></div>
                        <div>C博客: <a target='_blank' href="https://blog.csdn.net/qq_37705048">https://blog.csdn.net/qq_37705048</a></div>
                        <div>码云git: <a target='_blank' href="https://weijunw.gitee.io/golden_miner/">https://weijunw.gitee.io/golden_miner/</a></div>
                    </div>
                </Card>
            </Content>
            <Footer class="layout-footer-center"></Footer>
        </Layout>
    </div>
</template>
<script>
    import myHeader from './common/header'
    export default {
        name: "About",
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