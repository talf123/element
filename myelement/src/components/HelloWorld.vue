<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <h2>Essential Links</h2> -->
    <!-- <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul> -->

<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b"
  style="border-radius:15px; width:90%; margin-left:5%;"
  >
  <el-menu-item index="1"  style="border-radius:15px 0px 0px 15px;">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
  <el-menu-item index="5" v-on:click="dialogFormVisible = true" style="float:right; margin-right:120px;">登录</el-menu-item>
</el-menu>
<div>
<el-dialog title="用户登录" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="姓名" :label-width="formLabelWidth">
    <el-input
    v-model="name"
    placeholder="请输入内容"
    @blur="blurname"
    name='name'>
    </el-input>
    </el-form-item>
    <el-form-item label="密码" :label-width="formLabelWidth">
    <el-input
    placeholder="请输入密码"
    v-model="pwd"
    show-password
    name='pwd'
    @blur="blurpwd">
    </el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" v-on:click="confirm">确 定</el-button>
  </div>
</el-dialog>
</div>
<!-- <div class="input_area">
<el-input
  ref="inputer"
  @change="change"
  minlength="10"
  v-model="input"
  placeholder="请输入内容">
</el-input>
<button @click="shuru">shuru</button>
</div> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      dialogFormVisible: false,
      form: {
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      name: '',
      pwd: '',
      ma: ' '
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      if (key === '2-1') {
        alert('项目1')
      } else if (key === '2-2') {
        alert('项目2')
      } else if (key === '2-3') {
        alert('项目3')
      } else if (key === '2-4-1') {
        alert('项目4-1')
      } else if (key === '2-4-2') {
        alert('项目4-2')
      } else if (key === '2-4-3') {
        alert('项目4-3')
      }
    },
    shuru () {
      console.log(this.$refs.inputer)
      this.$refs.inputer.disabled = true
    },
    blurname () {
      // console.log(this.name)
      if (this.name === '') {
        alert('用户名不能为空!')
      }
    },
    blurpwd () {
      if (this.pwd === '') {
        alert('密码不能为空!')
      }
    },
    confirm () {
      // console.log(this.name)
      if (this.name === '' || this.pwd === '') {
        alert('用户名和密码不能为空！')
      } else {
        window.location.href = 'photos'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
.hello{
  width:auto;
  text-align: center;
}
.input_area {
  margin-bottom: 50px;
}
</style>
