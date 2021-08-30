<template>
  <div id="casestudyCo" >
    <div class="container d-flex justify-content-center">
      <div class="row d-flex justify-content-center">
        <div class="col-md-6 mb-1">
          <img :src="require(`../assets/${picc}`)" alt="" />
        </div>
        <div class="col-md-4">
          <h5 class="p-2 mb-3">featured case study</h5>
          <h1 class="mb-3">Logo, identity &amp; web design for Uber</h1>
          <p class="mb-4">
            Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
            lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam
            tristique libero at dui sodales, et placerat orci lobortis. Maecenas
            ipsum neque, elementum id dignissim et, imperdiet vitae mauris.
          </p>
          <button class="" @mouseover="btnO($event)" @mouseout="btnOu($event)">
            Read Case Study &nbsp;&nbsp; <i class="fas fa-caret-right"></i>
          </button>
          <div class="d-flex mt-4 align-items-center" ref="studycaseco">
            <div class="mr-3">
              <h2 class="nbrss">{{ fortyx }}%</h2>
              <span>Roi increase</span>
            </div>
            <div class="m-3">
              <hr width="1" size="50" />
            </div>
            <div class="ml-3">
              <h2 class="nbrss">{{ ninety }}K</h2>
              <span>Monthly website visits</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "casestudyCo",
  props: ["picc"],
  data() {
    return {
      fortyx: 0,
      ninety: 0,
      scrollCOC: true,
    };
  },
  methods: {
    btnO(e) {
      e.target.className += "btnO";
    },
    btnOu(e) {
      e.target.className += " btnOu";
    },
     fortyf: function () {
      var ty = setInterval(() => {
        this.fortyx = this.fortyx + 1;
        if (this.fortyx == 45) clearInterval(ty);
      }, 25);
    },
    ninetyf: function () {
      var ty = setInterval(() => {
        this.ninety = this.ninety + 1;
        if (this.ninety == 19) clearInterval(ty);
      }, 55);
    },
  
  },
  mounted() {
    this.observer = new IntersectionObserver(entries => {
      if (entries[0].intersectionRatio > 0 && this.scrollCOC) {
        this.fortyf();
        this.ninetyf();
        this.scrollCOC=false;
      }
    });
    
    this.observer.observe(this.$refs.studycaseco);
  },


};
</script>

<style lang="scss">
@media only screen and (max-width:566px){
  .VueCarousel-pagination .VueCarousel-dot {
  transform: translate(-7.1rem,-2rem) !important;
}
h5{
  margin-top: 1rem;
  width:60% !important;
}
}
.VueCarousel-pagination .VueCarousel-dot {
  background-color: #dfd4ff !important;
  transform: translate(10.8rem, -3rem);
}
.VueCarousel-pagination .VueCarousel-dot--active {
  background-color: #744af6 !important;
}
#casestudyCo {
  @import "../assets/stylesButtonFade.css";
  img {
    width: 95%;
  }
  h5 {
    width: 44%;
    background-color: #e4f5fb;
    color: #86d7ee;
    text-align: center;
    font-family: Poppins;
    font-weight: 300;
    font-size: 15px;
  }
  h1 {
    font-size: 52px;
    transition: color 0.3s linear;
    &:hover {
      color: #744af6;
      cursor: pointer;
    }
  }
  p {
    font-family: Poppins;
    font-weight: 300;
    font-size: 20px;
    text-align: start;
    color: rgb(143, 143, 143);
  }
  .nbrss {
    color: #744af6;
  }
  span {
    font-size: 18px;
    color: rgb(143, 141, 141);
    font-family: Poppins;
    font-weight: 300;
  }
  h2 {
    font-size: 40px;
  }
}
</style>