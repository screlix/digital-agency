<template>
  <div id="clients">
    <div class="container">
      <div class="row m-auto d-flex justify-content-center align-items-center">
        <div class="col-lg-4 mb-3">
          <h6 class="p-2 mb-4">top clients</h6>
          <h1 class="mb-3">We’ve built solutions for...</h1>
          <p>Nulla facilisi. Nullam in magna id dolor blandit rutrum eget.</p>
        </div>
        <div class="col-lg-7 col-12">
            <table>
                <tr>
                    <td v-for="el,index in clientss" :key="index"><img :src="require('@/assets/brands/'+el)" alt=""></td>
                </tr>
                <tr>
                    <td v-for="el,index in clientss2" :key="index"><img :src="require('@/assets/brands/'+el)" alt=""></td>
                </tr>
            </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            clientss:[
                "brand-01.png", 
                "brand-02.png", 
                "brand-03.png" 
            ], 
            clientss2:[
                "brand-04.png", 
                "brand-05.png", 
                "brand-06.png"
            ]
        }
    }
};
</script>

<style lang="scss">
@media only screen and (max-width:566px){
    #clients{
            padding: 6rem 0 !important;

         table{
        tr{
            td{                
                padding: 1.2rem !important;
            }
        }
    }
    img{
        width: 100% !important;
    }
    }
}
#clients{
    padding: 10rem 0;
    h6{
        font-family: Poppins;
        font-weight: 300;
        background-color: #FDF2ED;
        color: #F28D5E;
        width: 105px;
    }
    p{
        font-family: Poppins;
        font-weight: 300;
        color: rgb(136, 136, 136);
        font-size: 20px;
    }
    table{

        border-collapse: collapse;
        border-style: hidden;
        tr{
            td{
                border: 1px rgb(238, 238, 238) solid;
                padding: 4rem;
            }
        }
    }
    img{
        cursor: pointer;
        transition: all .2s linear;
        &:hover{
            transform: scale(1.2);
        }
    }
}
</style>