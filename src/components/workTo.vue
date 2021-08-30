<template>
  <div id="workTo">
    <div class="container">
      <div class="row d-flex">
        <div class="col-lg-8 m-auto text-center">
          <h6 class="p-2 text-center m-auto mb-3">Lets work together</h6>
          <h1 class="mb-4">Need a successful project?</h1>
          <button
            @mouseover="btnO($event)"
            @mouseout="btnOu($event)"
            ref="prjbtncall"
          >
            Estimate Project &nbsp;&nbsp; <i class="fas fa-caret-right"></i>
          </button>
          <div class="d-flex m-auto justify-content-center mt-4 callusW">
            <div>
              <p class="">Or call us now</p>
            </div>
            <div>
              <a href="javascript:void()">
                <i class="far fa-phone-alt"></i>
                (123) 456 7890
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testprjcollb: true,
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
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio > 0 && this.testprjcollb==true) {
        this.$refs["prjbtncall"].classList.value += "prjbtncallAn";
        this.testprjcollb = false;
        setTimeout(()=>{
         this.$refs["prjbtncall"].classList.remove("prjbtncallAn");
        },800)
      }
    });
       this.observer.observe(this.$refs.prjbtncall);
  },
};
</script>

<style lang="scss">
@media only screen and (max-width:576px){
  #workTo {
  padding: 4rem 0;
    .callusW {
      margin-top: 2rem !important;
    p {
      font-size: 14px !important;
      margin-right: 1rem;
    }
    a {
      font-size: 21px !important;
    }
  }
}
}
#workTo {
  background-color: #eef7fe;
  padding: 6rem 0;
  h6 {
    font-family: Poppins;
    font-weight: 300;
    background-color: #dbf3fd;
    color: #67d4f1;
    width: 180px;
  }
  p {
    font-family: Poppins;
    font-weight: 300;
    color: rgb(122, 122, 122);
    font-size: 18px;
  }

  .callusW {
    p {
      font-size: 16px;
      margin-top: 0.5rem;
    }
    a {
      color: black;
      text-decoration: none;
      font-size: 25px;
      font-weight: bold;
      margin-left: 1rem;
      transition: all 0.3s ease;
      &:hover {
        color: #744af6;
      }
    }
  }

}
  .prjbtncallAn {
    animation: prjbtncallAnim .8s linear;
  }
@keyframes prjbtncallAnim {
  from {
    transform: translateY(2rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>