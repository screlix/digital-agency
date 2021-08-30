<template>
  <div id="projectCard">
    <img class="mb-4" :src="require('../assets/' + pic)" alt=""/>
    <h2>{{ title }}</h2>
    <h3>{{ field }}</h3>
  </div>
</template>

<script>
export default {
  name: "projectCard",
  props: {
    pic: {
      type: String,
    },
    title: {
      type: String,
    },
    field: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
#projectCard {
  img {
    width: 112%;
    transition: transform 0.2s linear;
    cursor: pointer;
    &:hover {
      transform: perspective(1000px) rotateX(-1deg) rotateY(-15deg)
        scale3d(1, 1, 1);
      will-change: transform;
    }
  }
  h2{
      font-size: 26px;
      font-weight: 500;
  }
  h3 {
    color: rgb(155, 153, 153);
    font-weight: 300;
    font-size: 18px;
    font-family: Poppins;
  }
}
</style>