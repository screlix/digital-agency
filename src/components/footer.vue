<template>
  <div id="footer">
      <div class="underfoot container">
    <div class="socialMedia mb-5 d-flex justify-content-center">
      <ul>
        <li><i class="fab fa-facebook-f"></i></li>
        <li><i class="fab fa-twitter"></i></li>
        <li><i class="fab fa-pinterest-p"></i></li>
        <li><i class="fab fa-linkedin-in"></i></li>
        <li><i class="fab fa-instagram"></i></li>
        <li><i class="fab fa-vimeo-v"></i></li>
        <li><i class="fab fa-dribbble"></i></li>
        <li><i class="fab fa-behance"></i></li>
      </ul>
    </div>
    <div
      class="
        mb-4
        getInToplus"
    >
      <div class="getintTo">
        <h1>Get in touch!</h1>
        <p class="mb-4">
          Fusce varius, dolor tempor interdum tristique, dui urna bibendum
          magna, ut ullamcorper purus
        </p>
        <div class="d-flex m-0 flex-wrap">
          <input type="email" placeholder="Email" />
          <button
            @mouseover="btnO($event)"
            @mouseout="btnOu($event)"
            ref="prjbtncall"
          >
            Subscribe &nbsp;&nbsp; <i class="fas fa-caret-right"></i>
          </button>
        </div>
      </div>
      <div class="linee">
        <hr width="1" size="240" />
      </div>
      <div class="Services">
        <h4>Services</h4>
        <ul>
          <li>Logo & Branding</li>
          <li>Website Development</li>
          <li>Mobile App Development</li>
          <li>Search Engine Optimization</li>
          <li>Pay-Per-Click</li>
          <li>Social Media Marketing</li>
        </ul>
      </div>
      <div class="Resources">
        <h4>Resources</h4>
        <ul>
          <li>Blog</li>
          <li>Case Study</li>
          <li>Portfolio</li>
          <li>Team pages</li>
        </ul>
      </div>
      <div class="Support">
        <h4>Support</h4>
        <ul>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
        </ul>
      </div>
    </div>
    <div class="">
        <hr/>
    </div>
    <div class="footerBotm d-flex justify-content-center flex-wrap">
      <div class="mr-5">
        <p>
          Copyright © 2020 Creative Agency by <b style="font-weight:400;color:black">(screlix)</b> find me on github. All
          rights reserved
        </p>
      </div>
      <div>
        <ul>
          <li><a href="javascript:void()">Terms of Use</a></li>
          <li><a href="javascript:void()">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  methods: {
    btnO(e) {
      e.target.className += "btnO";
    },
    btnOu(e) {
      e.target.className += " btnOu";
    },
  },
};
</script>

<style lang="scss">
@import "../assets/stylesButtonFade.css";
@media only screen and (max-width:576px){
  #footer {
  padding-top: 5rem;
  .socialMedia {
    ul {
      padding-left: 0 !important;
      li {
        font-size: 19px !important;
        margin: 10px !important;
      }
    }
  }
   .getInToplus {
     justify-content: flex-start !important;
     .linee{
       display: none;
     }
    .getintTo {
      width: 100% !important;
      button{
        width: 100% !important;
        margin-left: 0 !important;
      }
      input {
        margin:0 !important;
        width: 100% !important;
      }
    }
    h4{
        margin-bottom: 1rem;
    }
    ul {
      padding: 0 !important;
      li {
        list-style-type: none;
        color: rgb(151, 151, 151);
        margin: 0.7rem 0;
        font-size: 16.6px;
        font-family: Poppins;
        font-weight: 300;

        &:hover {
          color: #744af6;
          cursor: pointer;
        }
      }
    }
  }
    .footerBotm {
    ul {
              padding-left: 0 !important;
      li {
        margin: 0 !important;
        margin-right: 10px !important; 
      }
    }
    p{
      text-align: center !important;
      margin: 0 !important;
      margin-bottom: .6rem !important;
      font-size: 15px !important;
    }
  }
 }
}
#footer {
  background: url(http://axilthemes.com/themes/keystroke/wp-content/themes/keystroke/assets/images/bg/bg-image-6.png);
  padding-top: 7rem;
  .socialMedia {
    ul {
      li {
        list-style-type: none;
        display: inline;
        font-size: 33px;
        margin: 0 2.3rem;
        cursor: pointer;
        color: rgb(148, 148, 148);
        &:hover {
          color: #744af6;
        }
      }
    }
  }
  .getInToplus {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items:center;
    
    div {
      margin: 2rem;
    }
    .getintTo {
      width: 35%;
      button {
        margin: 1rem;
        min-width: 175px !important;
      }
      input {
        border: none;
        outline: none;
        border-bottom: 2px solid rgb(182, 182, 182);
        margin-right: 1.5rem;
        width: 220px;
        height: 10%;
        padding-top: 1rem;
        padding-bottom: 0.5rem;
      }
      p {
        width: 90%;
        font-size: 18px;
      }
    }
    h4{
        margin-bottom: 1rem;
    }
    ul {
      padding: 0 !important;
      li {
        list-style-type: none;
        color: rgb(151, 151, 151);
        margin: 0.7rem 0;
        font-size: 16.6px;
        font-family: Poppins;
        font-weight: 300;

        &:hover {
          color: #744af6;
          cursor: pointer;
        }
      }
    }
  }
  .footerBotm {
      .flexrowFoot{
         
      }
    ul {
      li {
        list-style-type: none;
        display: inline;
        margin: 0.6rem;
        a {
          text-decoration: none;
          color: rgb(148, 148, 148);
          &:hover {
            color: #744af6;
          }
        }
      }
    }
    p{
        margin-right: 16rem;
        font-family: Poppins;
        font-weight: 300;
        font-size: 15px;
        color: rgb(124, 124, 124);
    }
  }
}
</style>