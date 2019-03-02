<template>
    <Menu mode="horizontal" :active-name="activeName">
        <MenuItem name="1">
            <router-link to='/'>
                首页
            </router-link>
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                文章管理
            </template>
            <MenuGroup title="分类">
                <MenuItem name="3-1">
                    <router-link to=''>JavaScript</router-link>
                </MenuItem>
                <MenuItem name="3-2">
                    <router-link to=''>node</router-link>
                </MenuItem>
                <MenuItem name="3-3">
                    <router-link to=''>Python</router-link>
                </MenuItem>
            </MenuGroup>
            <MenuGroup title="编辑">
                <MenuItem name="3-4">
                    <router-link to='/write'>写文章</router-link>
                </MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="2">
            <router-link to='/other'>
                其他
            </router-link>
        </MenuItem>
        <MenuItem name="2">
            <router-link to='/about'>
                关于我
            </router-link>
        </MenuItem>
    </Menu>
</template>
<script>
    export default {
        name: "myHeader",
        data(){
            return {
                activeName: 1
            }
        },
        created: function(){
            // console.log(this.$route.path);
            // if(this.$route.path == "/about"){
            //     console.log(1);
            // }else if(this.$route.path == "/home"){
            //     console.log(2);
            // }
        },
        methods: {
            toAbout: function(){
                this.$router.push({path: '/about'});
            },
            toHome: function(){
                this.$router.go({path: '/about'})
            }
        }
    }
</script>
<style scoped>
a{
    color: #515a6e;
}
</style>