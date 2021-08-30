<template>
  <div id="pricingCo" class="p-4">
    <h3>{{ plan }}</h3>
    <h6 class="mb-3">A beautiful, simple website</h6>
    <h1 class="mb-4">{{ price }}<span>/ Monthly</span></h1>
    <button @mouseover="btnO($event)" @mouseout="btnOu($event)">
      Get Started Today &nbsp;&nbsp; <i class="fas fa-caret-right"></i>
    </button>
    <p class="text-center mt-4" id="pprcPp">100% money back guarantee</p>
    <hr class="mb-4"/>
    <ul id="features">
      <li v-for="(el, index) in features" :key="index" class="mb-4">
        <i class="far fa-check m-1"></i> {{ el }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    plan: {
      String,
    },
    price: {
      String,
    },
    features: {
      Array,
    },
  },
  methods:{
       btnO(e) {
      e.target.className += "btnO";
    },
    btnOu(e) {
      e.target.className += " btnOu";
    },
  }
};
</script>

<style lang="scss">
@import '../assets/stylesButtonFade.css';
#pricingCo {
    height: 100%;
    transition: all .2s linear;
    &:hover{
        box-shadow:-15px 15px 25px rgb(238, 238, 238);
    }
  background-color: white;
  span {
    font-size: 16px;
    color: rgb(150, 150, 150);
  }

  h6 {
    color: rgb(138, 136, 136);
    font-family: Poppins;
    font-weight: 300;
    font-size: 15px;
  }
  #pprcPp{
      color: rgb(151, 151, 151);
      font-family: Poppins;
    font-weight: 300;
    font-size: 16px;
  }
  h1 {
    color: #5ED19D;
  }
  span {
    font-family: Poppins;
    font-weight: 300;
  }
  ul {
    padding-left: 0;
    li {
      font-family: Poppins;
      font-weight: 300;
      list-style-type: none;
      color: rgb(126, 126, 126);
      font-size: 19px;
      i {
        color: rgb(24, 194, 24);
      }
    }
  }
  hr {
    width: 100%;
  }
  button {
    width: 100%;
  }
}
</style>