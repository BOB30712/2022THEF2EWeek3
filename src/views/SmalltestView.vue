<template>
    <div class="smalltest-bg position-relative d-flex flex-column align-items-center">
        <div class="dialog-dir">
            <p>哈囉~{{userName}}。</p>
            <p>我是開發 A 組的 PO，小敏。</p>
            <p>PO也就是<span class="accent-color">產品負責人(Product Owner)。</span></p>
            <p>產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出產品待辦清單(Product Backlog)唷！</p>
            <p>剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。既然你都來了，<span class="accent-color">來試試看調整產品優先度，排出產品待辦清單吧！</span></p>
            <div class="d-flex justify-content-end">
                <button @click.prevent="moveOut" type="button" class="startexam me-5">開始試煉<i class="bi bi-skip-start-fill"></i></button>
            </div>
        </div>
        <div class="dialog-topic mb-5">
            <div class="d-flex align-items-center justify-content-center w-100 h-100">
                <p class="mb-0">請把需求放到產品待辦清單，並調整待辦的優先度順序。公司也推薦使用<img class="mx-3 mb-1" src="../assets/img/Jira-logo.png" alt="">來做任務的管理喔！</p>
            </div>
        </div>
        <div class="dialog-exam position-relative pt-3">
            <p class="fw-bold">產品待辦清單 ProductBacklog</p>
            <p style="color:#CFC8C4;font-size:20px;">優先度高<i class="bi bi-arrow-up"></i></p>
            <div style="top:50%;left: -30%;" class="candidate position-absolute  translate-middle">
                <div data-id="1" class="product text-nowrap d-flex align-items-center justify-content-center">會員系統（登入、註冊、管理)）</div>
            </div>
            <div style="top:30%;left: 120%;" class="candidate2 position-absolute  translate-middle">
                <div data-id="2" class="product text-nowrap d-flex align-items-center justify-content-center">後台職缺管理功能（資訊上架、下架、顯示應徵者資料）</div>
            </div>
            <div style="top:70%;left: 120%;" class="candidate3 position-absolute  translate-middle">
                <div data-id="3" class="product text-nowrap d-flex align-items-center justify-content-center">前台職缺列表（缺詳細內容、點選可發送應徵意願）</div>
                <div data-id="4" class="product text-nowrap d-flex align-items-center justify-content-center">應徵者的線上履歷編輯器</div>
            </div>
            <div style="height: 300px;" class="productBacklog d-flex flex-column justify-content-center align-items-center">
                <div data-id="0"  class="product2 dsahblock"></div>
                <div data-id="0"  class="product2 dsahblock"></div>
                <div data-id="0"  class="product2 dsahblock"></div>
                <div data-id="0"  class="product2 dsahblock"></div>
            </div>
            <p style="color:#CFC8C4;font-size:20px;">優先度低<i class="bi bi-arrow-down"></i></p>
            <div class="d-flex justify-content-center">
                <button @click="opendialog" type="button" class="finishExam">我完成了</button>
            </div>
        </div>
        <img class="emp2-1 position-absolute" src="../assets/img/職員2-1.png" alt="">
        <div class="emp2-name position-absolute">
            <p class="mb-0">小敏</p>
        </div>
        <div class="Smalltest-big-dialog position-absolute top-0 start-0" style="width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);;">
          <div class="Smalltest-dialog position-absolute top-50 start-50 translate-middle">
            <div style="text-align:start;">
              <p class="mb-5 fw-bold">
                <span v-if="!testisOK||!error">嘿!{{userName}}</span>
                <span v-else>恭喜你/妳啊!{{userName}}</span></p>
              <p class="mb-5 fw-bold">
                <span v-if="!testisOK">尚未完成題目喔</span>
                <span v-else-if="!error">順序有錯喔，在試試看吧</span>
                <span v-else>太棒了!前往下一步吧</span>
              </p>
              <div class="d-flex justify-content-end">
                <button v-if="testisOK&&error" @click="this.$router.push('/GradView')" class="Smalltest-OK">下一步<i class="bi bi-skip-start-fill"></i></button>
                <button v-else-if="!error" @click.prevent="closedialog" class="Smalltest-OK">讓我再試試<i class="bi bi-skip-start-fill"></i></button>
              </div>
            </div>
          </div>
          <img class="emp2-1 position-absolute" src="../assets/img/職員2-1.png" alt="">
          <div class="emp2-name position-absolute">
              <p class="mb-0">小敏</p>
          </div>
        </div>
    </div>
    <modal ref='testmodal'></modal>
</template>

<script>
/* eslint-disable */
import modal from '@/components/TestModal.vue'
import { gsap } from 'gsap'
import Sortable from 'sortablejs'
export default {
  data () {
    return {
      one:4,
      userName: '',
      ansArray:['1','2','3','4'],
      dataArray:[],
      testisOK: false,
      error:false,
    }
  },
  components: {
    modal
  },
  methods: {
    isEqual(arr1,arr2){
      this.testisOK = true
        if(arr1.join('')==arr2.join('')){
            this.error = true
        }else{
            this.error = false
        }
    },
    opendialog () {
      const timeline = gsap.timeline()
      timeline.to('.emp2-1',{ yPercent: '0' })
      timeline.to('.emp2-name',{ display: 'block' }, '<')
      timeline.to('.Smalltest-big-dialog', { display: 'block' })
    },
    closedialog () {
      const timeline = gsap.timeline()
      timeline.to('.emp2-name',{ display: 'none' })
      timeline.to('.emp2-1',{ yPercent: '100' })
      timeline.to('.Smalltest-big-dialog', { display: 'none' })
    },
    closedsahblock (num) {
      if(num>4){
        var SecondPara = document.querySelector(`.dsahblock`)
        SecondPara.remove()
      }
    },
    moveOut () {
      const timeline = gsap.timeline()
      timeline.to('.dialog-dir', { yPercent: '-200', duration: 2 })
      timeline.to('.dialog-dir', { display: 'none' })
      timeline.to('.dialog-topic', { display: 'block' })
      timeline.to('.emp2-1',{ yPercent: '100', duration: 1.5 })
      timeline.to('.emp2-name',{ display: 'none' }, '<')
      timeline.to('.dialog-topic', { yPercent: '0', duration: 1.5 })
      timeline.to('.dialog-exam', { yPercent: '0', duration: 1.5 }, '<')
    }
  },
  mounted () {
    this.userName = localStorage.getItem('userName')
    gsap.to('.dialog-topic', { yPercent: '-2000' })
    gsap.to('.dialog-exam', { yPercent: '200' })
    const candidateDOM = document.querySelector(".candidate");
    const candidateDOM2 = document.querySelector(".candidate2");
    const candidateDOM3 = document.querySelector(".candidate3");
    const productBacklogDOM = document.querySelector(".productBacklog")
    var candidate = Sortable.create(candidateDOM, {
        group: "shart"
    })
    var candidate2 = Sortable.create(candidateDOM2, {
        group: "shart"
    })
    var candidate3 = Sortable.create(candidateDOM3, {
        group: "shart"
    })
    var productBacklog = Sortable.create(productBacklogDOM, {
        group: "shart",
        dataIdAttr: 'data-id',
        onChange: () => {
          let order = productBacklog.toArray()
          this.dataArray = order
          this.one = order.length
          this.closedsahblock (this.one)
          this.isEqual(this.dataArray,this.ansArray)
          console.log(this.dataArray.join(''),this.ansArray.join(''))
        },
        onAdd: () => {
          let order = productBacklog.toArray()
          this.dataArray = order
          this.one = order.length
          this.closedsahblock (this.one)
          this.isEqual(this.dataArray,this.ansArray)
          console.log(this.dataArray.join(''),this.ansArray.join(''))
        }
    })
  }
}
</script>

<style>
.bg-test{
    display: none;
    height: 100vh;
    width: 100%;
    top:0px;
    left: 0px;
    z-index: 40;
    background-color: rgba(0, 0, 0, 0.5);;
}
.accent-color{
    color: #FFAC89;
}
.smalltest-bg{
    background-image: url('../assets/img/工作區域.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size:cover;
    overflow: hidden;
    height: 100vh;
    padding-top: 100px;
}
.dialog-dir{
    width: 1000px;
    height: 721px;
    background-color: white;
    color: #8E7E74;
    border-radius: 30px;
    opacity: 0.95;
    padding: 80px 50px;
    text-align: start;
    font-size: 32px;
    box-shadow: 0px 4px 30px rgba(116, 48, 48, 0.4);
}
.startexam{
    border: 3px solid #FFFFFF;
    background-color: #FFAC89;
    color: #FFFFFF;
}
.dialog-topic{
    display: none;
    width: 1300px;
    height: 140px;
    font-size: 24px;
    background-color: white;
    color: #8E7E74;
    opacity: 0.95;
    border-radius: 30px;
    box-shadow: 0px 4px 30px rgba(116, 48, 48, 0.4);
}
.dialog-exam{
    width: 688px;
    height: 874px;
    font-size: 24px;
    background-color: white;
    color: #8E7E74;
    opacity: 0.95;
    border-radius: 30px;
    box-shadow: 0px 4px 30px rgba(116, 48, 48, 0.4);
}
.product{
    border:1px solid #8E7E74;
    background-color: #D7FFAE;
    width: 600px;
    height: 76px;
    margin-bottom: 15px;
    font-size: 20px;
}
.product2{
    border:2px dashed #CFC8C4;
    background-color: white;
    width: 600px;
    height: 76px;
    margin-bottom: 15px;
    font-size: 20px;
}
.productBacklog{
    width: 100%;
}
.emp2-name{
    bottom:35%;
    right:7%;
    z-index: 20;
    background-color: white;
    box-shadow: 0px 4px 30px rgba(116, 48, 48, 0.4);
    border-radius: 30px;
    padding: 10px 53px;
    font-size: 24px;

}
.emp2-1{
    bottom:0%;
    right:10%;
    z-index: 10;
}
.finishExam{
    background-color: #FFAC89;
    font-weight: 900;
    font-size: 40px;
    color: white;
    border-radius: 30px;
    padding: 15px 174px;
    border: 0px solid black;
}
.Smalltest-big-dialog{
  display: none;
}
.Smalltest-dialog{
  width: 834px;
  height: 381px;
  background-color: #FFFFFF;
  color: #8E7E74;
  font-size: 32px;
  padding: 80px 140px;
  box-shadow: 0px 4px 30px rgba(116, 48, 48, 0.4);
  border-radius: 30px;
  z-index: 5;
}
.Smalltest-OK{
  background-color: transparent;
  border: 3px solid #CFC8C4;
  border-radius: 10px;
  color: #CFC8C4;
}
.Smalltest-OK:hover{
  border: 3px solid #8E7E74;
  color: #8E7E74;
}
</style>
