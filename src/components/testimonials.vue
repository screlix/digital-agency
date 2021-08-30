<template>
  <div id="testimonials">
    <div class="container">
      <div class="row mb-5">
        <div class="col-lg-6 text-center m-auto">
          <h5 class="m-auto p-2 mb-3">testimonials</h5>
          <h1 class="mb-4">From getting started</h1>
          <p>
            In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in
            egestas ipsum. Mauris in mi ac tellus.
          </p>
        </div>
      </div>
      <div class="row m-auto d-flex justify-content-center" @mouseover="mouseOc" @mouseleave="mouseLc($event)" id="testi1">
        <div class="col-md-5 testi1 p-4 m-2">
          <div
            class="card mb-3"
            style="border: none; backgroundcolor: transparent"
          >
            <div class="row d-flex align-items-center">
              <div class="col-lg-2 col-6">
                <div class="card-img m-1">
                  <img :src="url1" alt="" width="70px" />
                </div>
              </div>
              <div class="col-lg-8 col-9">
                <div class="card-body">
                  <h3 class="card-title">{{ name }}</h3>
                  <p class="card-text">{{ title }}</p>
                </div>
              </div>
              <div class="col-lg-2 col-1"><i class="fas fa-quote-right"></i></div>
            </div>
          </div>
          <p id="pContent">{{ content }}</p>
          <a href="javascript:void(0)">Read Project Case Study</a>
        </div>
        <div class="col-lg-5 testi1 p-4 m-2" @mouseover="mouseOc" @mouseleave="mouseLc($event)" id="testi2">
          <div
            class="card mb-3"
            style="border: none; backgroundcolor: transparent"
          >
            <div class="row d-flex align-items-center">
              <div class="col-lg-2">
                <div class="card-img m-1">
                  <img :src="url2" alt="" width="70px" />
                </div>
              </div>
              <div class="col-lg-8 col-9">
                <div class="card-body">
                  <h3 class="card-title">{{ name }}</h3>
                  <p class="card-text">{{ title }}</p>
                </div>
              </div>
              <div class="col-lg-2 col-1"><i class="fas fa-quote-right"></i></div>
            </div>
        </div>
          <p id="pContent">{{ content }}</p>
          <a href="javascript:void(0)">Read Project Case Study</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testHo:true,
      url1: "http://axilthemes.com/themes/keystroke/wp-content/uploads/2020/03/client-01-1.jpg",
      url2: "http://axilthemes.com/themes/keystroke/wp-content/uploads/2020/03/client-02-1.jpg",
      name: "Martha Maldonado",
      title: "Executive Chairman @ Google",
      content:
        "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit.",
    };
  },
  methods:{
      mouseOc(){
        $(".testi1").removeClass("active");
      }, 
  },
  mounted() {
    $(".testi1:first-child").addClass("active");
  },
};
</script>

<style lang="scss">
@media only screen and (max-width: 776px){
  #testimonials {
    img{
      margin-bottom: 1rem !important;
    }
    .card-title{
      font-size: 15px !important;
    }
    .card-text{
      font-size: 15px !important;
    }
.card-body{
  padding: 0 !important;
}
  }
}
#testimonials {
  padding: 5rem 0;
  background-color: #fafafb;

  h5 {
    width: 115px;
    color: #9461f7;
    background-color: #ece3fa;
    font-family: Poppins;
    font-weight: 400;
    font-size: 15px;
  }
  p {
    color: rgb(129, 127, 127);
  }
  .active {
    background-color: white;
    box-shadow: -20px 20px 30px rgb(231, 229, 229);
  }
  .testi1 {
    &:hover {
      background-color: white;
      box-shadow: -20px 20px 30px rgb(231, 229, 229);
      a {
        color: #9461f7;
        text-decoration: underline 1.5px;
      }
    }
    .card {
      background-color: transparent;
    }
    cursor: pointer;
    transition: all 0.2s linear;

    #pContent {
      font-size: 23px;
      color: rgb(116, 116, 116);
      margin-bottom: 1.3rem;
    }
    a {
      color: black;
      text-decoration: none;
      font-weight: bold;
      transition: all .3s ease;
    }
    img {
      box-shadow: -5px 5px 20px rgb(192, 191, 191);
    }
    i {
      color: #bff0e0;
      font-size: 55px;
      opacity: 0.6;
    }
  }
}
</style>