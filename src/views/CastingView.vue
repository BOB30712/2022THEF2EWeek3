<template>
    <div class="position-relative" style="overflow: hidden;height: 100vh;">
        <p class="chooseChar fw-bold mt-5">請選擇代表你的角色。</p>
        <div class="d-flex justify-content-center align-items-end mb-5">
            <div class="position-relative">
              <img style="width: 220px;height: 382px;"
                  @mouseenter="char1 = require('../assets/img/主角1.png')"
                  @click="chooseChar1"
                  @mouseleave="leaveChar1"
                  :src="char1" alt="">
            </div>
            <div style="width: 268px;height: 10px;"></div>
            <div class="position-relative">
              <img style="width: 220px;height: 410px;"
                  @mouseenter="char2 = require('../assets/img/主角2.png')"
                  @click="chooseChar2"
                  @mouseleave="leaveChar2"
                  :src="char2" alt="">
            </div>
        </div>
        <form @submit.prevent="Next">
            <div class="mb-3 d-flex justify-content-center">
                <input v-model="userName" type="text" class="inputName" placeholder="請輸入您的名字">
            </div>
            <button type="submit" class="defineChar">確定</button>
        </form>
        <div class="Casting-big-dialog position-absolute top-0 start-0" style="width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);;">
          <div class="Casting-dialog position-absolute top-50 start-50 translate-middle">
            <div style="text-align:start;">
              <p class="mb-5 fw-bold">
                <span v-if="userName">你好!{{userName}}</span>
                <span v-else>嘿!菜鳥</span></p>
              <p class="mb-5 fw-bold">
                <span v-if="!userName">不打算報上名嗎？<br></span>
                <span v-if="!userChar">還沒選好性別嗎?</span>
                <span v-if="userChar&&userName">準備好了就開始下一步吧</span>
              </p>
              <div class="d-flex justify-content-end">
                <button v-if="userChar&&userName" @click="this.$router.push('/SmalltestView')" class="Casting-OK">好的<i class="bi bi-skip-start-fill"></i></button>
                <button v-else @click="closeDialog" class="Casting-OK">抱歉<i class="bi bi-skip-start-fill"></i></button>
              </div>
            </div>
          </div>
          <img class="emp2-Casting position-absolute" src="../assets/img/職員2-1.png" alt="">
          <div class="emp2-Casting-name position-absolute">
              <p class="mb-0">? ? ?</p>
          </div>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
  data () {
    return {
      char1: require('../assets/img/主角1-影.png'),
      char2: require('../assets/img/主角2-影.png'),
      choosechar1: false,
      choosechar2: false,
      userName: '',
      userChar: ''
    }
  },
  methods: {
    chooseChar1 () {
      this.char1 = require('../assets/img/主角1.png')
      this.char2 = require('../assets/img/主角2-影.png')
      this.choosechar1 = true
      this.choosechar2 = false
      this.userChar = 'Char1'
      localStorage.setItem('userChar', 'Char1')
    },
    chooseChar2 () {
      this.char1 = require('../assets/img/主角1-影.png')
      this.char2 = require('../assets/img/主角2.png')
      this.choosechar1 = false
      this.choosechar2 = true
      this.userChar = 'Char2'
      localStorage.setItem('userChar', 'Char2')
    },
    leaveChar1 () {
      if (!this.choosechar1) {
        this.char1 = require('../assets/img/主角1-影.png')
      }
    },
    leaveChar2 () {
      if (!this.choosechar2) {
        this.char2 = require('../assets/img/主角2-影.png')
      }
    },
    Next () {
      gsap.to('.Casting-big-dialog', { display: 'block' })
      localStorage.setItem('userName', this.userName)
    },
    closeDialog () {
      gsap.to('.Casting-big-dialog', { display: 'none' })
    }
  }
}
</script>

<style>
.chooseChar{
  font-size: 40px;
  color: #8E7E74;
}
.inputName{
    font-size: 32px;
    border-radius: 30px;
    width: 525px;
    height: 90px;
}
.inputName::placeholder{
  padding-left: 66px;
  color: #CFC8C4;
}
.defineChar{
  width:525px;
  height:90px;
  font-size: 40px;
  background-color:  #FFAC89;
  color:white;
  font-weight: bold;
  border-radius: 30px;
  border: 0px solid black;
}
.emp2-Casting-name{
    bottom:35%;
    right:13%;
    z-index: 20;
    background-color: white;
    box-shadow: 0px 4px 30px rgba(116, 48, 48, 0.4);
    border-radius: 30px;
    padding: 10px 53px;
    font-size: 24px;
}
.emp2-Casting{
    bottom:-5%;
    right:15%;
    z-index: 10;
}
.Casting-big-dialog{
  display: none;
}
.Casting-dialog{
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
.Casting-OK{
  background-color: transparent;
  border: 3px solid #CFC8C4;
  border-radius: 10px;
  color: #CFC8C4;
}
.Casting-OK:hover{
  border: 3px solid #8E7E74;
  color: #8E7E74;
}
</style>
