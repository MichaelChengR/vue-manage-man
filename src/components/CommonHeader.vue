<template>
  <div class="header-container">
        <div class="left-content">
            <el-button style="margin-right: 20px;" @click="handeMenu" icon="el-icon-menu" size="mini"></el-button>
            <!-- 面包屑 -->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path}">{{item.label}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="right-content">
        <el-dropdown @command="handleClick">
            <span class="el-dropdown-link">
                <img class="user" src="../assets/images/user.png" alt="头像">
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item command="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        </div>
  </div>
</template>
<script>
import {mapState} from "vuex";
import Cookie from "js-cookie";
export default {
  data() {
    return {}
  },
  methods:{
    handeMenu(){
        this.$store.commit('collapseMenu')
    },
    handleClick(command){
        if (command==='logout') {
            //登出清除token和menu
            Cookie.remove('token')
            Cookie.remove('menu')
            //跳转到主页
            this.$router.push('/login')
        }
    }
  },
  computed:{
    ...mapState({
        tags:state => state.tab.tabList
    })
  }
}
</script>
<style lang="less">
.header-container{
    padding: 0 20px;
    background-color: #5f5f5f;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text{
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
    }
    .left-content{
        display: flex;
        align-items: center;
        .el-breadcrumb__item{
            ::v-deep(.el-breadcrumb__inner){
                font-weight: normal;
                &.is-link {
                    color: #666
                }
            }
            &:last-child {
                .el-breadcrumb__inner {
                    color: #fff
                }
            }
        }
    }
    .right-content{
        .user{
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
}

</style>
