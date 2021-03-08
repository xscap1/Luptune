/* eslint-disable */
<template>
  <div id="app"  style="
    overflow-x: hidden;
    width: 100%;
  ">
    <div id="navbg" v-show="$route.name == 'Home'" class="bg-foodBg">
      <section class="container px-4 mx-auto">
        <nav class="">
          <div class="">
            <div class="relative flex items-center justify-between h-20">
              <div id="hammenu" class="absolute inset-y-0 right-0 flex items-center">
                <!-- Mobile menu button-->


                <button onclick="document.getElementById('id01').style.display='block'" class="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-beige bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">

                  <!-- Icon when menu is closed. -->
                  <!--
                    Heroicon name: menu

                    Menu open: "hidden", Menu closed: "block"
                  -->
                  <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <!-- Icon when menu is open. -->
                  <!--
                    Heroicon name: x

                    Menu open: "block", Menu closed: "hidden"
                  -->

                  <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>


                  <div class="ml-5"
                  style="
                    position : relative;
                    z-index: 101;
                  ">

                  <div id="id01" class="modal">

                  <div class="modal-content animate rounded rounded-lg border-none bg-marine-dark">
                  <div>
                    <span onclick="document.getElementById('id01').style.display='none'" class="text-3xl text-gray-300 font-bold flex justify-end pr-2 text-beige" title="Close Modal">&times;</span>
                  </div>



                  <div class="mt-10 pb-16">
                    <ul class="text-center space-y-4 text-white font-thin">


                      <li onclick="document.getElementById('id01').style.display='none'">
                          <router-link to="/"><p>Accueil</p></router-link>
                      </li>

                      <div class="container mx-auto px-12">
                        <div class="border-b border-beige">
                        </div>
                      </div>

                      <li onclick="document.getElementById('id01').style.display='none'">
                          <router-link to="/fonctionnalites"><p>Fonctionnalités</p></router-link>
                      </li>

                      <div class="container mx-auto px-12">
                        <div class="border-b border-beige">
                        </div>
                      </div>

                      <li onclick="document.getElementById('id01').style.display='none'">
                          <router-link to="/devis"><p>Estimation de devis</p></router-link>
                      </li>

                      <div class="container mx-auto px-12">
                        <div class="border-b border-beige ">
                        </div>
                      </div>

                      <li onclick="document.getElementById('id01').style.display='none'"><button type="button" name="button" v-on:click="goToContact" class="font-thin">Contact</button></li>
                    </ul>
                  </div>


                  </div>
                  </div>
                </div>

              </div>



              <div class="flex-shrink-0 flex items-center">
                <router-link to="/"><img class="h-12 md:h-16 mt-0 w-auto" src="./assets/v1.png" alt="Accueil Luptune"></router-link>
                <div class="pr-2">
                </div>

                  <!--<h1 class="bg-gradient-to-l from-green-400 to-blue-900 font-semibold text-lg tracking-wide text-white rounded-full px-4"> Lup<span class="">tune</span></h1>-->
                  <h2 class="text-black text-2xl tracking-wider font-mono " alt="Logo Luptune">Lup<span class="text-darkblue font-bold">tune</span></h2>

                </div>

              <div class="flex-1 flex items-center sm:items-stretch justify-end">


                <div class="hidden lg:block md:hidden sm:ml-6">
                  <div class="flex space-x-6">
                    <router-link to="/" class="text-beige bg-marine-dark border rounded-full border-marine-dark hover:bg-beige hover:text-black hover:shadow-md px-3 py-2 md:py-4 rounded-md text-sm font-medium">Accueil</router-link>
                    <router-link to="/fonctionnalites" class="text-beige bg-marine-dark border rounded-full border-marine-dark hover:bg-beige hover:text-black hover:shadow-md px-3 py-2 md:py-4 rounded-md text-sm font-medium">Fonctionnalités</router-link>
                    <router-link to="/devis" class="text-beige bg-marine-dark border rounded-full border-marine-dark hover:bg-beige hover:text-black hover:shadow-md px-3 py-4 rounded-md text-sm font-medium">Estimation de devis</router-link>
                    <a href="#contact" class="text-beige bg-marine-dark border rounded-full border-marine-dark hover:bg-beige hover:text-black hover:shadow-md px-3 py-2 md:py-4 rounded-md text-sm font-medium">Contact</a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </nav>
      </section>






    </div>
    <div id="navbg" v-show="$route.name != 'Home'" class="bg-gradient-to-l from-beige to-marine-dark">
      <section class="container px-4 mx-auto">
        <nav class="">
          <div class="">
            <div class="relative flex items-center justify-between h-20 ">
              <div id="hammenu" class="absolute inset-y-0 right-0 flex items-center">
                <!-- Mobile menu button-->


                <button onclick="document.getElementById('id02').style.display='block'" class="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-beige bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">

                  <!-- Icon when menu is closed. -->
                  <!--
                    Heroicon name: menu

                    Menu open: "hidden", Menu closed: "block"
                  -->
                  <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <!-- Icon when menu is open. -->
                  <!--
                    Heroicon name: x

                    Menu open: "block", Menu closed: "hidden"
                  -->

                  <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>


                  <div class="ml-5"
                  style="
                    position : relative;
                    z-index: 101;
                  ">

                  <div id="id02" class="modal">

                  <div class="modal-content animate rounded rounded-lg border-none bg-marine-dark">
                  <div>
                    <span onclick="document.getElementById('id02').style.display='none'" class="text-3xl text-gray-300 font-bold flex justify-end pr-2 text-beige" title="Close Modal">&times;</span>
                  </div>



                  <div class="mt-10 pb-16">
                    <ul class="text-center space-y-4 text-white font-thin">


                      <li onclick="document.getElementById('id02').style.display='none'">
                          <router-link to="/"><p>Accueil</p></router-link>
                      </li>

                      <div class="container mx-auto px-12">
                        <div class="border-b border-beige">
                        </div>
                      </div>

                      <li onclick="document.getElementById('id02').style.display='none'">
                          <router-link to="/fonctionnalites"><p>Fonctionnalités</p></router-link>
                      </li>

                      <div class="container mx-auto px-12">
                        <div class="border-b border-beige">
                        </div>
                      </div>

                      <li onclick="document.getElementById('id02').style.display='none'">
                          <router-link to="/devis"><p>Estimation de devis</p></router-link>
                      </li>

                      <div class="container mx-auto px-12">
                        <div class="border-b border-beige ">
                        </div>
                      </div>

                      <li onclick="document.getElementById('id02').style.display='none'"><button type="button" name="button" v-on:click="goToContact" class="font-thin">Contact</button></li>

                    </ul>
                  </div>


                  </div>
                  </div>
                </div>

              </div>



              <div class="flex-shrink-0 flex items-center">
                <router-link to="/"><img class="h-12 md:h-16 mt-0 w-auto" src="./assets/v1.png" alt="Accueil Luptune"></router-link>
                <div class="pr-2">
                </div>

                  <!--<h1 class="bg-gradient-to-l from-green-400 to-blue-900 font-semibold text-lg tracking-wide text-white rounded-full px-4"> Lup<span class="">tune</span></h1>-->
                  <h2 class="text-white text-2xl tracking-wider font-mono " alt="Logo Luptune">Lup<span class="text-beige font-bold">tune</span></h2>

                </div>

              <div class="flex-1 flex items-center sm:items-stretch justify-end">


                <div class="hidden lg:block md:hidden sm:ml-6">
                  <div class="flex space-x-6">
                    <router-link to="/" class="text-beige bg-marine-dark border rounded-full border-marine-dark hover:bg-beige hover:text-black hover:shadow-md px-3 py-2 md:py-4 rounded-md text-sm font-medium">Accueil</router-link>
                    <router-link to="/fonctionnalites" class="text-beige bg-marine-dark border rounded-full border-marine-dark hover:bg-beige hover:text-black hover:shadow-md px-3 py-2 md:py-4 rounded-md text-sm font-medium">Fonctionnalités</router-link>
                    <router-link to="/devis" class="text-beige bg-marine-dark border rounded-full border-marine-dark hover:bg-beige hover:text-black hover:shadow-md px-3 py-4 rounded-md text-sm font-medium">Estimation de devis</router-link>
                    <a href="#contact" class="text-beige bg-marine-dark border rounded-full border-marine-dark hover:bg-beige hover:text-black hover:shadow-md px-3 py-2 md:py-4 rounded-md text-sm font-medium">Contact</a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </nav>
      </section>






    </div>
    <router-view />


    <!-- footer -->
    <section class="bg-marine-dark hidden md:hidden lg:block">

      <footer class="container border-t px-4 mx-auto p-4 text-sm ">

        <div class="flex flex-wrap items-center justify-between flex-col lg:flex-row w-full lg:w-auto">

        </div>

        <div class="flex flex-wrap items-center justify-between flex-col lg:flex-row w-full lg:w-auto">

          <p class="text-white">© 2021 Luptune</p>
            <a href="https://www.facebook.com/luptune"  target="_blank" class="ml-2"><img class="w-5" src="./assets/fb.png"/></a>
            <a href="https://www.instagram.com/luptunedev" target="_blank" class="ml-2"><img class="w-5" src="./assets/ig.svg"/></a>

          <div class="mx-auto lg:mx-0 lg:ml-auto text-center">
            <router-link to="/mentions-legales" class="inline-block mt-0 ml-8 text-gray-300 hover:bg-gray-700 hover:text-beige px-3 py-2 rounded-md text-sm font-medium">Mentions légales </router-link>
            <router-link to="/politique-de-confidentialite" class="inline-block mt-0 ml-8 text-gray-300 hover:bg-gray-700 hover:text-beige px-3 py-2 rounded-md text-sm font-medium">Politique de confidentialité </router-link>
            <router-link to="/conditions-generales-de-ventes" class="inline-block mt-0 ml-8 text-gray-300 hover:bg-gray-700 hover:text-beige px-3 py-2 rounded-md text-sm font-medium">CGV</router-link>
          </div>
        </div>
      </footer>
    </section>

    <section class="bg-marine-dark block lg:hidden">
      <footer class="container border-t px-4 mx-auto flex flex-wrap items-center justify-center p-4 text-sm ">

        <div class="flex justify-center">
          <ul class="text-white text-center">
            <li class="inline-block mt-0 text-gray-300 px-3 py-2 rounded-md text-sm font-semibold text-beige">© 2021 Luptune</li>
            <li class="inline-block mt-0 px-1 py-2">
              <div class="flex flex-wrap">
                <a href="https://www.facebook.com/luptune"  target="_blank" class=""><img class="w-5" src="./assets/fb.png"/></a>
                <a href="https://www.instagram.com/luptunedev" target="_blank" class="ml-5"><img class="w-5" src="./assets/ig.svg"/></a>
              </div>
            </li>
            <li><router-link to="/mentions-legales" class="inline-block mt-0 text-gray-300 hover:bg-gray-700 hover:text-beige px-3 py-2 rounded-md text-sm font-medium">Mentions légales </router-link></li>
            <li><router-link to="/politique-de-confidentialite" class="inline-block mt-0 text-gray-300 hover:bg-gray-700 hover:text-beige px-3 py-2 rounded-md text-sm font-medium">Politique de confidentialité </router-link></li>
            <li><router-link to="/conditions-generales-de-ventes" class="inline-block mt-0 text-gray-300 hover:bg-gray-700 hover:text-beige px-3 py-2 rounded-md text-sm font-medium">CGV</router-link></li>
          </ul>
        </div>
      </footer>
    </section>
  </div>

</template>



<style>


/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  padding-top: 60px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* Add Zoom Animation */
.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s
}

@-webkit-keyframes animatezoom {
  from {-webkit-transform: scale(0)}
  to {-webkit-transform: scale(1)}
}

@keyframes animatezoom {
  from {transform: scale(0)}
  to {transform: scale(1)}
}


</style>
<script>


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

  export default {
    mode: 'production',
    name: 'app',
    el: '#hammenu',
    data: () => ({
      isVisible: true,

    }),
    methods: {
      goToContact() {
        document.getElementById('contact').scrollIntoView();
      }
    }
  }
</script>
