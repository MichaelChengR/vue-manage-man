<template>
  <div class="tags">
    <el-tag
    v-for="(item, index) in tags"
    :key="item.path"
    :closable="item.name !== 'home'"
    :effect="$route.name===item.name ? 'dark':'plain'"
    @click="changeMenu(item)"
    @close="handleClose(item,index)"
    size="small">
    {{ item.label }}
  </el-tag>
  </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex';
export default {
    name:'CommonTag',
  data() {
    return {}
  },
  computed:{
    ...mapState({
        tags:state=>state.tab.tabList
    })
  },
  methods:{
    ...mapMutations(['closeTag']),
    changeMenu(item){
      this.$router.push({ name: item.name })
    },
    //删除tags
    handleClose(item,index){
        this.closeTag(item)
        const mylength =this.tags.length
        // 删除之后的跳转逻辑
        if (item.name !== this.$route.name) {
                return
            }
            // 删除的最后一项
            if (index === mylength) {
                this.$router.push({
                    name: this.tags[index - 1].name
                })
            } else {
                this.$router.push({
                    name: this.tags[index].name
                })
            }
    }
  },
}
</script>
<style lang="less" scoped>
.tags{
  padding: 20px;
  .el-tag{
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
