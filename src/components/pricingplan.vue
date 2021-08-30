<template>
  <div id="pricingplan">
    <div class="container">
      <div class="row m-auto">
        <div class="col-lg-6 m-auto text-center">
          <h5 class="p-2 m-auto">pricing plan</h5>
          <h1 class="mb-4 mt-4">From getting started</h1>
          <p class="text-center">
            In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in
            egestas ipsum. Mauris in mi ac tellus.
          </p>
        </div>
      </div>
      <div class="row mt-5 m-auto d-flex justify-content-center gx-5">
          <div id="pdg" class="col-lg-4" v-for="el, index in pricingCard" :key="index">
              <pricing-co :plan="el.plan" :price="el.price" :features="el.features" />
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import pricingCo from './pricingCo.vue'
export default {
    components:{pricingCo},
  data() {
    return {
      pricingCard: [
        {
          plan: "Small Business",
          price: "$50",
          features: [
            "10 Pages Responsive Website",
            "5 PPC Campaigns",
            "10 SEO Keywords",
            "5 Facebook Camplaigns",
            "2 Video Camplaigns",
          ],
        },
        {
          plan: "Corporate Business",
          price: "$120",
          features: [
            "50 Pages Responsive Website",
            "Unlimited PPC Campaigns",
            "Unlimited SEO Keywords",
            "Unlimited Facebook Camplaigns",
            "Unlimited Video Camplaigns",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@media only screen and (max-width:576px){
  #pricingplan {
    #pdg:nth-of-type(2){
      margin-top: 2rem !important
    }
  }
}
#pricingplan {
    #pdg{
        min-height: 100% !important;
    }
  background-color: #fafafb;
  padding: 6rem 0;
  div.row {
    div:first-child {
      h5 {
        width: 21%;
        background-color: #e4f5fb;
        color: #86d7ee;
        text-align: center;
        font-family: Poppins;
        font-weight: 300;
        font-size: 15px;
      }
      h1 {
        font-size: 52px;
        transition: color 0.3s linear;
        &:hover {
          color: #744af6;
          cursor: pointer;
        }
      }
      p {
        font-family: Poppins;
        font-weight: 300;
        font-size: 18px;
        text-align: start;
        color: rgb(97, 97, 97);
      }
    }
  }
}
</style>