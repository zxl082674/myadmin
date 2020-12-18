<!--  -->
<template>
  <div class="myadmin-dashboard">
    <el-row>
      <el-col :span="4">
        <el-menu
        default-active="dashboard"
        text-color="#ffffff"
        active-text-color="#58a1e8"
        background-color="#1f2d3d"
        :style="{height:'100vh'}"
        router
        >
          <el-menu-item index="dashboard">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <!-- 数据管理 -->
          <el-submenu index="dataManager">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item index="userlist">用户列表</el-menu-item>
            <el-menu-item index="shoplist">商家列表</el-menu-item>
            <el-menu-item index="foodlist">食品列表</el-menu-item>
            <el-menu-item index="orderlist">订单列表</el-menu-item>
            <el-menu-item index="adminlist">管理员列表</el-menu-item>
          </el-submenu>
          <!-- 添加数据 -->
          <el-submenu index="addDate">
            <template slot="title">
              <i class="el-icon-plus"></i>
              <span>添加数据</span>
            </template>
            <el-menu-item index="addshop">添加商铺</el-menu-item>
            <el-menu-item index="addfood">添加食品</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <!-- 右边嵌套路由 -->
      <el-col :span="20">
          <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

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
  methods: {},
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
</style>