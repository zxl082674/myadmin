<!--  -->
<template>
  <div class="">
    <div class="myadmin-home">
      <div class="home-header">
        <div class="header-left">
          <!-- 面包屑 -->
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/dashboard' }"
              >首页</el-breadcrumb-item
            >
            <!-- <el-breadcrumb-item :to="{ path: '/dashboard' }">数据管理</el-breadcrumb-item> -->
          </el-breadcrumb>
        </div>
        <div class="header-right">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
             <img class="header-right-profile" src="../assets/profile.jpg" alt="">
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="index">首页</el-dropdown-item>
              <el-dropdown-item command="exit">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { exit } from "@/api/api"
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
      handleCommand:async function(command){
        //   console.log(command);
        if(command==="index"){
            this.$router.push("dashboard");
        }else if(command==="exit"){
            let result=await exit();
            // console.log(result);
            if(result.status===1){
                this.$message("退出成功");
                this.$router.push("/")
            }
        }
      }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
    .home-header{
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #eff2f7;
        padding: 10px;
        .header-right-profile{
            height: 36px;
            width: 36px;
            border-radius: 50%;
        }
    }
</style>