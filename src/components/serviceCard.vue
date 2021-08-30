<template>
  <div id="serviceCard" class="pb-5 m-4 pt-2">
    <div id="affected-card">
    <div id="imgRo" :style="{ backgroundColor: clr }">
      <img :src="pic" alt="?" />
    </div>
    <h2>{{ title }}</h2>
    <p class="m-auto w-75 mb-5 mt-3 ppcSer">
      We design professional looking yet simple websites. Our designs are search
      engine and user friendly.
    </p>
    <a href="javascript:void();" class="">Learn More</a>
  </div>
  </div>
</template>

<script>
export default {
  props: ["pic", "title", "clr"],
};
</script>

<style lang="scss">
.borderDude {
  position: relative;
  z-index: 1;
  border: 0.2rem solid black;
  width: 100%;
  height: 100%;
  transform: translate(-2rem, -2rem);
}
#serviceCard {
  transition: box-shadow .3s linear;
  z-index: 3;
  &:hover {
    transition: 0;
    box-shadow: -13px 13px 35px #d3d0d0;
    border-top: 4px solid #814bf6;
  }

  #imgRo {
    margin: 3rem auto;
    width: 18%;
    border-radius: 10rem;
    img {
      padding:1rem 0;
    }
  }
  .ppcSer {
    color: rgb(150, 148, 148);
    font-size: 17px;
  }
  a {
    color: black;
    text-decoration: none;
    font-weight: 500;
    display: inline-block;
  }
  &:hover a {
    color: #814bf6;
  }
  &:hover h2 {
    color: #814bf6;
  }
  a:after {
    display: block;
    content: "";
    border-bottom: solid 2px #814bf6;
    transform: scaleX(0);
    transition: transform 0.3s linear;
  }
  &:hover a:after {
    transform: scaleX(1);
  }
  a:after {
    transform-origin: 0% 50%;
  }
}
</style>