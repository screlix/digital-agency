<template>
  <div id="header" class="mb-4">
    <div class="">
      <img src="../assets/logo.png" alt="logo" />
    </div>
    <div class="menu" @click="openMenuLis">
      <i class="fal fa-stream"></i>
    </div>
    <div class="menuList" ref="menuBtnL">
      <ul>
        <li @click="openMenuLis('home')"><i class="fad fa-chevron-right"></i> Home</li>
        <li @click="openMenuLis('services')"><i class="fad fa-chevron-right"></i> Services</li>
        <li @click="openMenuLis('casestudy')"><i class="fad fa-chevron-right"></i> Case study</li>
        <li @click="openMenuLis('projects')"><i class="fad fa-chevron-right"></i> Projects</li>
        <li @click="openMenuLis('pricingplan')"><i class="fad fa-chevron-right"></i> Pricing Plan</li>
        <li @click="openMenuLis('clients')"><i class="fad fa-chevron-right"></i> Clients</li>
        <li @click="openMenuLis('stories')"><i class="fad fa-chevron-right"></i> Stories</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    openMenuLis(test){
var x = document.querySelectorAll("li");
for (let i = 0; i < x.length; i++) {
  x[i].classList.toggle("textRotate");
}
      var cl1 = 'fas fa-times';
     document.querySelector('.menuList').classList.toggle("menuBtnLClas");   
     document.querySelector('.menu').classList.toggle("menuBtnClas");
     document.body.classList.toggle('bodyDisScrol');
     if(test!=null){
        document.getElementById(test).scrollIntoView({
        behavior: "smooth"
      })
     }
    //window.alert("eds");
    }
  }
};
</script>

<style lang="scss">
/*.fadeMenu-enter, 
.fadeMenu-leave-to{

}*/
@media only screen and (max-width:576px){
  #header {
    padding-left: 1rem !important;
   div:nth-of-type(1) {
    background-color: transparent;
    flex: 1;
    img {
      height:43px !important;
    }
  }
    .menuList {
/*right: -100rem;*/
    ul{
      padding: 4rem !important;
      li{
        font-size: 25px !important;
      }
    }
   }
    .menu {
    font-size: 22px !important;
        padding-bottom: 0.7rem !important;
        width: 45px !important;
  }
  }
}
#header {
  display: flex;
  padding: 2rem;
  background-color: transparent;
  div:nth-of-type(1) {
    background-color: transparent;
    flex: 1;
    img {
      height: 60px;
    }
  }
  .menu {
    transition: all .3s linear;
    z-index:2000;
    box-shadow: 0 0 22px rgb(235, 232, 232);
    cursor: pointer;
    position: fixed;
    right: 2rem;
    width: 60px;
    border-radius: 3.5rem;
    background-color: rgb(0, 0, 0);
    font-size: 30px;
    text-align: center;
    padding-bottom: 0.8rem;
    color: white;
    i {
      vertical-align: bottom;
    }
  }
  .menuList {
    position: fixed;
    top: 0;
    right: -100rem;
    transition: right .8s ease 0s;
/*right: -100rem;*/
    ul{
      padding: 5rem;
      li{
        user-select: none;
        list-style-type: none;
        font-family: Poppins;
        color: white;
        margin-bottom: .5rem;
        font-size: 40px;
        font-weight: 500;
        cursor: pointer;
        &:hover{
           color: #744af6;
           font-size: 45px;
        }
      }
    }
    width: 100vw;
    height: 100vh;
    background-color: #090312;
    z-index: 1000;
  }
 .menuBtnLClas{
  right: 0px;
}
 .menuBtnClas{
  color: black;
  box-shadow: none;
  background-color: white;
 }
 .textRotate{
  animation: textRotateAn 1s;
 }
}
.bodyDisScrol{
  max-height: 100% !important;
   overflow-y: hidden !important;
}
@keyframes textRotateAn{
  from{
    transform-origin: left;
    transform: rotate(80deg)
  }
  to{
    transform: rotate(0deg);
  }
}
</style>