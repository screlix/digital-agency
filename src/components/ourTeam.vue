<template>
  <div id="ourTeam">
    <div class="container">
      <div class="row d-flex justify-content-center" ref="teamTrRef">
        <transition name="teamTr">
          <div v-if="teamTrShow" class="col-lg-5 col-10 mb-4 mt-3">
          <img :src="require('@/assets/'+url1)" alt=""/>
          </div>
        </transition>
        <transition name="teamTr2">
          <div v-if="teamTrShow" class="col-lg-4 col-11 mllT">
          <h5 class="p-2 text-center mb-4">team intro</h5>
          <h1 class="mb-4">
            Alone we can do so little; together we can do so much.
          </h1>
          <p class="mb-5">
            Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
            lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam
            tristique libero.
          </p>
          <div>
            <button
              class=""
              @mouseover="btnO($event)"
              @mouseout="btnOu($event)"
            >
              Our Team &nbsp;&nbsp; <i class="fas fa-caret-right"></i>
            </button>
            <a href="javascript:void();">Careers</a>
          </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamTrTest:true,
      teamTrShow:false,
      url1: "team-group.png",
    };
  },
  methods: {
    btnO(e) {
      e.target.className = "";
      e.target.className += "btnO ";
    },
    btnOu(e) {
      e.target.className += "btnOu ";
    },
  },
  mounted(){
      this.observer = new IntersectionObserver(entries => {
      if (entries[0].intersectionRatio > 0 && this.teamTrTest) {
        this.teamTrShow=true;
        this.teamTrTest=false;
      }
    });
    this.observer.observe(this.$refs.teamTrRef);

  }
};
</script>

<style lang="scss">
@import "../assets/stylesButtonFade.css";
.teamTr-enter{
  opacity: 0;
  transform: translateX(-5rem);
}
.teamTr-leave-to{
  opacity: 0;
  transform: translateX(0rem);
}
.teamTr2-enter{
  opacity: 0;
  transform: translateX(5rem);
}
.teamTr2-leave-to{
  opacity: 0;
  transform: translateX(0rem);
}
.teamTr-enter-active, 
.teamTr-leave-active,
.teamTr2-enter-active, 
.teamTr2-leave-active {
  transition: all 1s linear;
}
@media only screen and (max-width:576px){
  .mllT{
    margin-left:0 !important;
  }
   h1 {
    font-size: 45px !important;
  }
  p{
    font-size: 18px !important;
  }
}
#ourTeam {
  padding:7rem 0 !important;
  padding: 6rem 0;
  a {
    color: black;
    font-weight: 500;
    transition: all 0.3s ease;
    font-size: 17px;
    &:hover {
      color: #744af6;
    }
  }
  img{
    width: 100%;
  }
  button {
    margin-right: 3rem;
  }
  h5 {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 300;
    width: 90px;
    background-color: #e8faf5;
    color: #6ad8ae;
  }
  p {
    font-size: 19px;
  }
  h1 {
    font-family: Poppins;
    font-weight: 500;
  }
  .mllT{
    margin-left: 5rem;
  }
}
</style>