<template>
  <div id="casestudy">
    <div class="container">
      <carousel :paginationSize="12" :per-page="1">
        <slide v-for="(el, index) in caseStudyArr" :key="index">
          <casestudyCo :picc="el" />
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import casestudyCo from "./casestudyCo.vue";
export default {
  components: { casestudyCo, Carousel, Slide },
  data() {
    return {
      caseStudyArr: [
        "featured-image-01.jpeg",
        "featured-image-03.jpeg",
        "featured-image-04.jpeg",
      ],
    };
  },
  methods:{
  
    /*handleScroll(){
      this.$emit('handlescroll')
        }*/
  },

};
</script>

<style lang="scss">
#casestudy{
  button:focus { outline: 0}
  background-color: #FAFAFB;
  padding: 7rem 0 4rem;
}
</style>