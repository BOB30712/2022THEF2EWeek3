<template>
    <div class="Grad-bg position-relative">
        <div class="Certificate position-absolute top-50 start-50 translate-middle">
            <div id="chart3" class="Certificate-content position-relative">
                <div class="position-absolute bg-white" style="top:5%;left:50%;z-index: 10; transform: translate(-50%, -50%);">
                    <img src="../assets/img/image-logo.png" alt="">
                </div>
                <img class="position-absolute" style="top:43px;left: 50px;" :src="gradchar" alt="">
                <div class="Certificate-detail">
                    <p>結業證書</p>
                    <p>{{userName}}君</p>
                    <p>於{{year}}年{{month}}月{{Day}}日參加六角學院<br>Scrum 新手培訓營，經測驗合格，<br>特發給結業證書以資證明。</p>
                </div>
                <div class="president d-flex justify-content-center align-items-center">
                    <p class="mb-0 me-3">校長</p>
                    <img src="../assets/img/廖洧杰.png" alt="">
                </div>
                <div class="company w-100 position-absolute bottom-0 start-0">
                    <p class="mb-0">六角學院波利馬資訊科技有限公司</p>
                    <p>中華民國{{year}}年{{month}}月{{Day}}日</p>
                </div>
            </div>
        </div>
        <div class="w-100 position-absolute bottom-0 start-0 d-flex justify-content-around align-items-end">
            <div>
                <img class="me-4" src="../assets/img/職員1-grad.png" alt="">
                <img src="../assets/img/職員3-grad.png" alt="">
            </div>
            <div>
                <img class="me-4" src="../assets/img/職員2-grad.png" alt="">
                <img src="../assets/img/職員4-grad.png" alt="">
            </div>
        </div>
        <div class="position-absolute" style="top:10%;right: 8%;">
            <img style="cursor: pointer;" @click="this.$router.push('/')" src="../assets/img/回首頁.png" alt="">
            <img style="cursor: pointer;" @click.prevent="toImage" src="../assets/img/截圖.png" alt="">
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import html2canvas from 'html2canvas'
export default {
  data () {
    return {
      gradchar:'',
      userName: '',
      userChar: '',
      year:'',
      month:'',
      Day:''
    }
  },
  methods: {
    toImage () {
      html2canvas(document.getElementById('chart3')).then(function(canvas) {
        var a = document.createElement('a');
        a.href = canvas.toDataURL("image/png");
        a.download = '畢業證書.jpg';
        a.click();
      })
    }
  },
  mounted () {
    const time = new Date();
    this.year = time.getFullYear()-1911;
    this.month = time.getMonth()+1;
    this.Day = time.getDate();
    this.userName = localStorage.getItem('userName')
    this.userChar = localStorage.getItem('userChar')
    if(this.userChar=='Char1'){
        this.gradchar = require('../assets/img/主角1-grad.png')
    }else{
        this.gradchar = require('../assets/img/主角2-grad.png')
    }
  }
}
</script>

<style>
.Grad-bg{
    background-image: url('../assets/img/工作區域.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size:cover;
    overflow: hidden;
    height: 100vh;
    padding-top: 100px;
    color: #8E7E74;
    font-weight: 500;
}
.Certificate{
    width: 705px;
    height: 95vh;
    padding: 28px 31px;
    background-color: #FFFFFF;
    border-radius: 30px;
    box-shadow: 0px 4px 30px rgba(116, 48, 48, 0.4);
}
.Certificate-content{
    width: 100%;
    height: 100%;
    font-size: 32px;
    border: 11px solid #FFF8BA;
}
.president{
    font-size: 32px;
}
.Certificate-detail{
    margin-top: 96px;
    font-size: 32px;
}
</style>
