<template>
  <div id="collab">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-5 mr-3 collab-col-1 col-10">
          <h5 class="mb-4 p-2">about us</h5>
          <h1 class="mb-4">We do design, code & develop.</h1>
          <p>
            Nulla et velit gravida, facilisis quam a, molestie ante. Mauris
            placerat suscipit dui, eget maximus tellus blandit a. Praesent non
            tellus sed ligula commodo blandit in et mauris. Quisque efficitur
            ipsum ut dolor molestie pellentesque.
          </p>
          <p>
            Nulla pharetra hendrerit mi quis dapibus. Quisque luctus, tortor a
            venenatis fermentum, est lacus feugiat nisl, id pharetra odio enim
            eget libero.
          </p>
        </div>
        <div class="col-md-4 collab-col-2 p-5 col-12" ref="aboutus">
          <h2 class="mb-5">Get a free Keystroke quote now</h2>
          <input type="text" placeholder="Name" /> <br />
          <input type="text" placeholder="Email" /> <br />
          <input type="text" placeholder="Company" /> <br />
          <input type="text" placeholder="Phone" class="mb-4"/> <br />
          <button @mouseover="btnO($event)" @mouseout="btnOu($event)">
            Get Pricing Now &nbsp;&nbsp; <i class="fas fa-caret-right"></i>
          </button>
          <div class="mt-4 d-flex flex-wrap callus justify-content-center align-items-center">
            <div class="">Or call us now</div>
            <div><i class="far fa-phone-alt"></i> (123) 456 7890</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "collab",
  data() {
    return {
      scrolltest:true,
    };
  },
  methods: {
    btnO(e) {
      e.target.className += "btnO";
    },
    btnOu(e) {
      e.target.className += " btnOu";
    },
  },
  mounted() {
    this.observer = new IntersectionObserver(entries => {
      if (entries[0].intersectionRatio > 0 && this.scrolltest) {
         this.$refs['aboutus'].classList.value +=" shadowCollab";
        this.scrolltest=false;
      }
    });
    
    this.observer.observe(this.$refs.aboutus);
  },
};
</script>

<style lang="scss">
@import "../assets/stylesButtonFade.css";
@media only screen and (max-width:576px){
#collab {  
  h5{
    width: 40.5% !important;
  }
   .collab-col-1 {
    margin-right: 0 !important;
  }
  .collab-col-2{
    padding: 2rem !important;
  }
}
}
#collab {
  padding: 7.5rem 0;
  .collab-col-1 {
    h5 {
      font-size: 14px;
      font-family: Poppins;
      font-weight: 300;
      color: rgb(140, 212, 140);
      background-color: #e8faf5;
      width: 16%;
      text-align: center;
    }
    h1 {
      font-size: 51px;
      font-weight: 500;
      font-family: Poppins;
    }
    p {
      font-size: 20px;
      color: rgb(163, 160, 160);
      font-family: Poppins;
      font-weight: 300;
    }
    margin-right: 7rem;
  }
  .shadowCollab{
    box-shadow: -50px 15px 60px rgb(230, 230, 230);
    }
  .collab-col-2 {
      transition: all 1s linear;

    span {
      transform:  none
    }
    
    input {
      appearance: none;
      outline: none;
      border-width: 0px 0px 1px;
      border-color: #dadada;
      font-size: 15px;
      text-align: left;
      letter-spacing: 0px;
      color: #323a47;
      padding-bottom: 5px;
      width: 100%;
      margin-bottom: 2rem;
      &::placeholder {
        font-size: 18px;
      }
    }
    h2 {
      font-size: 35px;
    }
    button {
      width: 100%;
    }
    .callus div:first-child {
      color: rgb(107, 105, 105);
      font-size: 15px;
      margin-right: 1rem;
    }
    .callus div:last-child {
      font-size: 22px;
      font-weight: bold;
      &:hover{
          cursor: pointer;
          color:#744af6;
      }
    }
  }
}
</style>