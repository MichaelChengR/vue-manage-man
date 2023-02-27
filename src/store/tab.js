import Cookie from "js-cookie"
export default{
    state:{
        isCollapse:false,    //菜单默认展开
        tabList:[
            {
                path:"/",
                name:"home",
                label:"首页",
                icon:"s-home",
                url:"Home/Home",
            },
        ], //面包屑数据
        menu:[]
    },
    mutations:{
        //修改菜单的方法
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        },
        //更新面包屑的按钮
        selectMenu(state,value){
            //console.log(value,'value');
            if(value.name!=='home'){
                const index= state.tabList.findIndex(item=>item.name===value.name)
                if(index===-1){
                    state.tabList.push(value)
                }
            }
        },
        //删除指定的tag
        closeTag(state,item){
            //console.log(item,'item');
            const index= state.tabList.findIndex(value=>value.name===item.name)
            state.tabList.splice(index,1)
        },
        //设置menu数据
        setMenu(state,val){
            state.menu=val
            Cookie.set('menu',JSON.stringify(val))
        },
        //动态注册路由
        addMenu(state,router){
            //判断缓存里面是否有数据
            if (!Cookie.get('menu')) 
            return
                const menu=JSON.parse(Cookie.get('menu'))
                state.menu=menu

                const menuArray=[]
                menu.forEach(item => {
                    if (item.children) {
                        item.children= item.children.map(item => {
                            item.component=()=>import(`../views/${item.url}`)
                            return item
                        })
                    menuArray.push(...item.children)
                    }else{
                        item.component=()=>import(`../views/${item.url}`)
                        menuArray.push(item)
                    }
                })
                //console.log(menuArray);
            //动态添加路由 
              menuArray.forEach(item => {
                router.addRoute('Main',item)
              })
        }
    }
}