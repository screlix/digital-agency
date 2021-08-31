<template>
  <div id="story" :ref="name">
    <div class="card1 row">
      <div id="imgdivS" class="col-lg-4 col-md-8">
        <img :src="require('@/assets/'+img)" alt="" />
      </div>
      <div class="col-lg-6 col-md-8">
        <h6 class="mb-4 p-2 mt-4">{{ title }}</h6>
        <h4 class="mb-3">{{ content }}</h4>
        <p>
          Quisque eget erat augue. Cras gravida enim nulla, a dictum erat
          fringilla at.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      String,
    },
    content: {
      String,
    },
    img: {
      String,
    },

  },
  watch: {
   
  },
};
</script>

<style lang="scss">
#story {
  #imgdivS {
    padding: 0% !important;
    img {
      width: 100%;
    }
  }
  .card1 {
    border-right: 4px #744af6 solid;
    background-color: white;
  }
  h6 {
    background-color: rgb(96, 190, 96);
    color: white;
    width: 90px;
    text-align: center;
  }
  p {
    font-size: 17px;
  }
}
/* -------- */

</style>