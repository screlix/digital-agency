<template>
  <div id="App">
    <home />
    <services />
    <casestudy />
     <collab />
    <projects />
     <startupMov />
   <testimonials />
    <our-team />
    <pricingplan />
    <clients />
    <stories />
    <workTo />
    <footerr />
    <div v-show="testbtn == true">
      <button id="topbutton" @click="btntop" ref="topbuttonn">
        <i class="fas fa-sort-up"></i>
        <br />
        top
      </button>
    </div>
  </div>
</template>

<script>
import home from "./components/home.vue";
import services from "./components/services.vue";
import casestudy from "./components/casestudy.vue";
import collab from './components/collab.vue'
import projects from './components/projects.vue'
import startupMov from './components/startupMov.vue'
import testimonials from './components/testimonials.vue'
import OurTeam from './components/ourTeam.vue';
import pricingplan from './components/pricingplan.vue';
import clients from './components/clients.vue'
import stories from './components/stories.vue'
import workTo from './components/workTo.vue'
import footer from './components/footer.vue'
export default {
  data() {
    return {};
  },
  components: { home, services, casestudy, 
  collab, projects, startupMov,
   testimonials, OurTeam,
   pricingplan, clients, stories, 
   workTo, 'footerr':footer },
  computed:{
     testbtn() {
      return this.$store.state.testbtn;
    },
    
  },
  methods: {
    btntop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    handlescroll() {
      if (window.scrollY > 500) this.$store.commit('updatetestbtn', true);
      else this.$store.commit('updatetestbtn', false);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handlescroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handlescroll);
  },
};
</script>

<style lang="scss">

body {
  font-family: "DM Sans", sans-serif;
  height: 100vh;
}

#App {
  width: 100%;
  height: 100%;
  #topbutton {
    position: fixed;
    right: 2rem;
    bottom: 3rem;
    appearance: none;
    background-color: white;
    border: none;
    outline: none;
    padding: 1rem 1.2rem;
    font-size: 15px;
    color: gray;
    box-shadow: 0 0 22px rgb(235, 232, 232);
    i {
      color: #744af6;
      font-size: 16px;
    }
  }
}
</style>