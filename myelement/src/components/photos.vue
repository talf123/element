<template>
  <div class="hello1">
      <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello1{
    width: 1000px;
    margin: 0px auto;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(6n) {
    background: url('img/1.jpg') no-repeat center;
    background-size: cover;
    width:500px;
  }
  .el-carousel__item:nth-child(6n+1) {
    background: url('img/2.jpg') no-repeat center;
    background-size: cover;
    width:500px;
  }
  .el-carousel__item:nth-child(6n+2) {
    background: url('img/3.jpg') no-repeat center;
    background-size: cover;
    width:500px;
  }
  .el-carousel__item:nth-child(6n+3) {
   background: url('img/4.jpg') no-repeat center;
   background-size: cover;
   width:500px;
  }
  .el-carousel__item:nth-child(6n+4) {
   background: url('img/5.jpg') no-repeat center;
   background-size: cover;
   width:500px;
  }
  .el-carousel__item:nth-child(6n+5) {
    background: url('img/6.jpg') no-repeat center;
    background-size: cover;
    width:500px;
  }
</style>
