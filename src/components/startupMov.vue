<template>
  <div id="startupMov">
    <div class="container text-center">
      <div class="row text-center mb-5">
        <div class="col-lg-6 m-auto">
          <h5 class="p-2 m-auto mb-4">experts in field</h5>
          <h1 class="mb-3">Design startup movement</h1>
          <p>
            In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in
            egestas ipsum. Mauris in mi ac tellus.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3" v-for="el, index in startupmovArr" :key="index">
          <startupMovCo :transf="el.transf" :ico="el.ico" :bck="el.bck" :nbr="el.nbr" :pp="el.pp"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import startupMovCo from "./startupMovCo.vue";
export default {
  components: { startupMovCo },
  data() {
    return {
      startupmovArr: [
        {
          ico: "http://axilthemes.com/themes/keystroke/wp-content/uploads/2020/03/shape-01.png",
          bck: "#EFE7FD",
          nbr: 50,
          pp: "Years of operation",
        },
        {
          ico: "http://axilthemes.com/themes/keystroke/wp-content/uploads/2020/03/shape-02.png",
          bck: "#FDF2ED",
          nbr: 360,
          pp: "Projects deliverd",
          transf:'3'
        },
        {
          ico: "http://axilthemes.com/themes/keystroke/wp-content/uploads/2020/03/shape-03.png",
          bck: "#E8F9FE",
          nbr: 600,
          pp: "Specialist",
        },
        {
          ico: "http://axilthemes.com/themes/keystroke/wp-content/uploads/2020/03/shape-04.png",
          bck: "#E8FAF5",
          nbr: 64,
          pp: "Years of operation",
          transf:'3'
        },
      ],
    };
  },

};
</script>

<style lang="scss">
@media screen and (max-width: 776px) {
  #startupMov {
  padding: 6rem 0 10rem;
  h5 {   
    width: 40% !important;
  }
}
.col-lg-3:nth-of-type(3){
  #startupMovCo{
    margin-top: 6.3rem !important;
  }
 }
}
#startupMov {
  padding: 6rem 0 10rem;
  h5 {
    color: rgb(140, 212, 140);
    background-color: #e8faf5;
    font-size: 14.5px;
    font-family: Poppins;
    font-weight: 300;
    width: 21%;
    text-align: center;
  }
}
h1 {
  font-size: 49px;
}
p {
  font-size: 18px;
  color: rgb(150, 148, 148);
  font-family: Poppins;
  font-weight: 300;
}
</style>