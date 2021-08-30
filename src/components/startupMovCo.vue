<template>
  <div
    ref="startupMovRef"
    id="startupMovCo"
    :style="{ transform: 'translateY(' + transf + 'rem)' }"
  >
    <div :style="{ backgroundColor: bck }" class="mb-4 pt-3 pb-3 m-auto">
      <img :src="ico" alt="" class="" />
    </div>
    <h1 class="mb-1">
      <span>{{ nbrr }}+</span>
    </h1>
    <p class="">{{ pp }}</p>
  </div>
</template>

<script>
export default {
  name: "startupMovCo",
  props: ["ico", "bck", "nbr", "pp", "transf"],
  data() {
    return {
      nbrr: 0,
      prjMoTest: true,
    };
  },
  computed: {},
  methods: {
    prjMoTestF: function () {
      if (this.nbr > 100) {
        var ty = setInterval(() => {
          this.nbrr = this.nbrr + 3;
          if (this.nbrr == this.nbr) clearInterval(ty);
        }, 1);
      } else {
        var ty = setInterval(() => {
          this.nbrr = this.nbrr + 1;
          if (this.nbrr == this.nbr) clearInterval(ty);
        }, 14);
      }
    },
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio > 0 && this.prjMoTest) {
        this.prjMoTestF();
        this.prjMoTest = false;
      }
    });
    this.observer.observe(this.$refs.startupMovRef);
  },
};
</script>

<style lang="scss">
#startupMovCo {
  /*background-image: white;*/
  box-shadow: -20px 20px 30px rgb(224, 224, 224);
  padding: 4rem 1rem;
  div {
    border-radius: 6rem;
    width: 60px;
    img {
      height: 20px;
    }
  }
  h1 {
    font-size: 46px;
    font-weight: bold;
  }
  p {
    font-family: Poppins;
    color: rgb(138, 136, 136);
    font-weight: 300;
    font-size: 18px;
  }
}
</style>