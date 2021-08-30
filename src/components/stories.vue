<template>
  <div id="stories" ref="stories">
    <div class="container">
      <div class="row mb-5 rowf1S">
        <div class="col-lg-6 m-auto text-center">
          <h6 class="m-auto mb-3 p-2">whats going on</h6>
          <h1 class="mb-3">Latest stories</h1>
          <p>
            In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in
            egestas ipsum. Mauris in mi ac tellus.
          </p>
        </div>
      </div>
      <div class="row m-auto d-flex justify-content-center"  
          ref="storiesAnim"
      >
        <div
          style=""
          class="col-lg-8 col-10 m-4"
          v-for="(el, index) in storyArr"
          :key="index"
        >
          <story
            :title="el.title"
            :content="el.content"
            :img="el.img"
            :class="el.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import story from "./story.vue";
export default {
  components: { story },
  data() {
    return {
      storyArr: [
        {
          title: "Lifestyle",
          content:
            "You can now listen to the entire library of Design Better books for free",
          img: "http://axilthemes.com/themes/keystroke/wp-content/uploads/2020/04/blog-image-three-410x452.jpg",
          name:'stor0'
        },
        {
          title: "Design",
          content:
            "How developers are taking the guesswork out of animation coding",
          img: "http://axilthemes.com/themes/keystroke/wp-content/uploads/2020/04/blog-image-four-410x452.jpg",
          name:'stor1'
        },
      ],
      storybtnAct:false,
    };
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio > 0) {
        $('.stor0').addClass('story0');
        $('.stor1').addClass('story1');
      }
    });
    this.observer.observe(this.$refs.storiesAnim);
  },
};
</script>

<style lang="scss">
#stories {
  background-color: #fafafb;
  padding: 6rem 0;
  .rowf1S {
    h6 {
      font-family: Poppins;
      font-weight: 300;
      background-color: #e4f5fb;
      color: #79defa;
      width: 150px;
    }
    p {
      font-family: Poppins;
      font-weight: 300;
      color: rgb(122, 122, 122);
      font-size: 18px;
    }
  }
}
 .story0 {
    animation: story0Anim 1s linear;
  }
  .story1 {
    animation: story1Anim 1s linear;
  }
@keyframes story0Anim {
  from {
    transform: translateX(-6rem);
    opacity: 0;
  }
  to {
    transform: translateX(0rem);
    opacity: 1;
  }
}
@keyframes story1Anim {
  from {
    transform: translateX(6rem);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>