<template>
  <div id="projects">
    <div class="container">
      <div class="row m-auto mb-5 rowF1 d-flex align-items-center justify-content-center">
        <div class="col-lg-5 col-md-10 rowf1-col1">
          <h5 class="mb-4 p-2">our projects</h5>
          <h1>Some of our finest work.</h1>
        </div>
        <div class="col-lg-6 col-md-11 text-center">
          <button @click="checkF($event)" ref="firstBprj">All</button>
          <button @click="checkF($event)">Branding</button>
          <button @click="checkF($event)">Design</button>
          <button @click="checkF($event)">Ios</button>
          <button @click="checkF($event)">Web Application</button>
        </div>
      </div>
          <transition-group name="projectCFade" tag="div" class="m-auto row d-flex justify-content-start pb-4">
          <div
            class="col-lg-3 col-10 elePC"
            v-for="(el, index) in newPPaRR"
            :key="index"
          >
            <projectcard
              :pic="el.pic"
              :title="el.title"
              :field="el.field"
            />
          </div>
          </transition-group>
          <div class="row">
            <div class="col-lg-4 col-10 m-auto" ref="projectsBtn">
               <button class="m-auto" @mouseover="btnO($event)" @mouseout="btnOu($event)" ref="projectbtnn">
              Discover More Projects &nbsp;&nbsp; <i class="fas fa-caret-right"></i>
            </button>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
import projectCard from "./projectCard.vue";
export default {
  name: "projects",
  components: { 'projectcard': projectCard },
  data() {
    return {
      projectsArr: [
        {
          pic: "featured-image-04.jpeg",
          title: "Texas Protfolio",
          field: "Web Application",
        },
        {
          pic: "featured-image-03.jpeg",
          title: "Jet Airplane",
          field: "Design Ios",
        },
        {
          pic: "featured-image-04.jpeg",
          title: "All Volees",
          field: "Web Application",
        },
        {
          pic: "portfolio-04-large.jpeg",
          title: "Trendy Design",
          field: "Branding Design",
        },
        {
          pic: "portfolio-05-large.jpeg",
          title: "Rant bike",
          field: "Branding",
        },
        {
          pic: "portfolio-06-large.jpeg",
          title: "Creative Agency",
          field: "Design Ios ",
        },
      ],
      fFF: "All",
      show:false
    };
  },
  computed: {
    newPPaRR() {
      this.show=true;
      if (this.fFF == "All") return this.projectsArr;
      var evr = this.projectsArr.filter((el) => {
        return el.field.includes(this.fFF);
      });
      return evr;
    },
  },
  methods: {
    checkF(e) {
      this.fFF = e.target.innerHTML;
    },
    btnO(e) {
      e.target.className += "btnO";
    },
    btnOu(e) {
      e.target.className += " btnOu";
    },
  },
  mounted(){
    var x = window.scrollX, y = window.scrollY;
    this.$refs["firstBprj"].focus();
    window.scrollTo(x, y);
      this.observer = new IntersectionObserver(entries => {
      if (entries[0].intersectionRatio > 0) {
        this.$refs["projectbtnn"].classList.value='projectsBtnAnim ';
      }
    });
    this.observer.observe(this.$refs.projectsBtn);
  }
};
</script>

<style lang="scss">
@import "../assets/stylesButtonFade.css";

.projectCFade-enter, .projectCFade-leave-to {
  transform: scale(0);
  opacity: 0;
}
.projectCFade-enter-active,
.projectCFade-leave-active {
  transition: all .5s ease;
  
}
@media only screen and (max-width:576px){
  #projects {
  .rowF1 {
    h5 {
      width: 40% !important;
    }
    button{
      padding: 4% !important;
    }
  }
   .elePC{
    margin:0rem 0 2rem 0 !important;
  }
  button{
    padding: 7% !important;
  }
 }
}
#projects {
  padding: 7rem 0;
  background-color: #fafafb;
  .rowF1 {
    h5 {
      color: #639ef1;
      background-color: #e2ebfa;
      font-size: 14.5px;
      font-weight: 300;
      font-family: Poppins;
      width: 21%;
      text-align: center;
    }
    h1 {
      font-size: 52px;
      font-weight: 500;
    }
    button {
      transform: perspective(1000px) rotateX(-1deg) rotateY(-20deg)
        scale3d(1, 1, 1);
      will-change: transform;
      font-weight: 500;
      cursor: pointer;
      padding: 3%;
      outline: none;
      border: none;
      background-color: transparent;
      margin: .8%;
      font-size: 95%;
      &:hover {
        color: #8353f6;
      }
      &:focus {
        box-shadow: 15px 15px 70px rgb(228, 225, 225);
        background-color: white;
        color: #8353f6;
      }
    }
  }
  .elePC{
    margin: 2.4rem;
  }
  button{
    padding: 0.9rem 6rem;
  }
  .projectsBtnAnim{
    animation: projectsBtnAnimm 1.5s ease;
  }
  @keyframes projectsBtnAnimm{
    from{
      opacity: 0;
      transform: translateY(2rem);
    }
    to{
      opacity:1;
      transform: translateY(0);
    }
  }
}
</style>