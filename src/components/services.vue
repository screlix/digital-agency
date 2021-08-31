<template>
  <div id="services" ref="services">
    <div class="container text-center">
      <div class="row mb-4">
        <div class="col">
          <h6 class="mb-3 p-2 m-auto">what we can do for you</h6>
        </div>
        <h1 class="mb-4">Services we can help you with</h1>
        <p class="mb-3 w-50 m-auto">
          In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in
          egestas ipsum. Mauris in mi ac tellus.
        </p>
      </div>
      <div class="row service-cards">
        <div ref="servDiv" class="col-md-4 col-12" v-for="(el,index) in serviceDataArray" :key="index" id="servicesHover" >
        <serviceCard :clr="el.clr" :pic="el.pic" :title="el.title" />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import serviceCard from '../components/serviceCard.vue'
import VanillaTilt from "vanilla-tilt";

export default {
    components:{serviceCard},
     mounted() {
    VanillaTilt.init(this.$refs.servDiv,{
		max: 8,
		speed: 200
	});
  },
    data(){
        return{
            serviceDataArray:[
                {
                    title:'Design',
                pic:'design-icon.png',
                clr:'#744AF6'
                },
                {
                    title:'Development',
                pic:'development-icon.png',
                clr:'#5BCC9F'
                },
                {
                    title:'Online marketing',
                pic:'online-marketing-icon.png',
                clr:'#54CDF9'
                },
                {
                    title:'Business',
                pic:'online-marketing-icon.png',
                clr:'#FACC48'
                },
                {
                    title:'Technology',
                pic:'design-icon.png',
                clr:'#1479F6'
                },
                {
                    title:'Content strategy',
                pic:'design-icon.png',
                clr:'#F18959'
                }
            ]
        }
    }
};
</script>

<style lang="scss">
@media only screen and (max-width: 576px) {
  #services {
    h6{
    width: 60.5% !important;
  }
  p{
    width: 90.5% !important;
  }
  }
}
#services {
  padding: 6rem 0;
  h6 {
    font-weight: 200;
    color: rgb(144, 212, 144);
    background-color: #e8faf5;
    width: 15.5%;
  }
  h1 {
    font-size: 50px;
  }
  p {
    font-size: 19px;
    font-family: Poppins;
    font-weight: 300;
    color: rgb(136, 136, 136);
  }
  #servicesHover{
  
  }
}
</style>
