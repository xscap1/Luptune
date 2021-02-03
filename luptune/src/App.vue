/* eslint-disable */
<template>
  <div id="app">
    <div id="navbg" v-show="$route.name == 'Home'" class="bg-foodBg">
      <section class="container px-4 mx-auto">
        <nav class="">
          <div class="">
            <div class="relative flex items-center justify-between h-20">
              <div id="hammenu" class="absolute inset-y-0 right-0 flex items-center">
                <!-- Mobile menu button-->


                <button v-on:click="isVisible = !isVisible" class="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-beige bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">

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


                  <div  v-show="!isVisible" class="ml-5 bg-white rounded-xl border border-gray-300"
                  style="
                    position : relative;
                    z-index: 101;
                  ">
                    <div class="pt-16 md:pt-20 space-y-1">
                      <br/>
                      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                      <router-link to="/" class="border-b border-gray-300  text-gray-500 hover:bg-gray-700 hover:text-beige block px-3 py-2 rounded-md text-base font-medium">Accueil</router-link>
                      <router-link to="/fonctionnalites" class="border-b border-gray-300  text-gray-500 hover:bg-gray-700 hover:text-beige block px-3 py-2 rounded-md text-base font-medium">Fonctionnalités</router-link>
                      <router-link to="/devis" class="border-b border-gray-300   text-gray-500 hover:bg-gray-700 hover:text-beige block px-3 py-2 rounded-md text-base font-medium">Estimation de devis</router-link>

                      <a href="#contact" class="text-gray-500 hover:bg-gray-700 hover:text-beige block px-3 py-2 rounded-md text-base pb-2 font-medium">Contact</a>
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


                <button v-on:click="isVisible = !isVisible" class="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-beige bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">

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


                  <div  v-show="!isVisible" class="ml-5 bg-white rounded-xl border border-gray-300"
                  style="
                    position : relative;
                    z-index: 101;
                  ">
                    <div class="pt-16 md:pt-20 space-y-1">
                      <br/>
                      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                      <router-link to="/" class="border-b border-gray-300  text-gray-500 hover:bg-gray-700 hover:text-beige block px-3 py-2 rounded-md text-base font-medium">Accueil</router-link>
                      <router-link to="/fonctionnalites" class="border-b border-gray-300  text-gray-500 hover:bg-gray-700 hover:text-beige block px-3 py-2 rounded-md text-base font-medium">Fonctionnalités</router-link>
                      <router-link to="/devis" class="border-b border-gray-300   text-gray-500 hover:bg-gray-700 hover:text-beige block px-3 py-2 rounded-md text-base font-medium">Estimation de devis</router-link>

                      <a href="#contact" class="text-gray-500 hover:bg-gray-700 hover:text-beige block px-3 py-2 rounded-md text-base pb-2 font-medium">Contact</a>
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
    <section class="bg-marine-dark">


      <footer class="container border-t px-4 mx-auto flex flex-wrap items-center justify-between p-4 text-sm ">
        <div class="w-full lg:w-auto lg:mr-6 mb-4 lg:mb-0 text-center text-white">© 2021 Luptune</div>
        <div class="flex flex-col lg:flex-row items-center w-full lg:w-auto">
          <div class="mx-auto lg:mx-0 lg:ml-auto">
            <router-link to="/mentions-legales" class="inline-block mt-0 ml-8 text-gray-300 hover:bg-gray-700 hover:text-beige px-3 py-2 rounded-md text-sm font-medium">Mentions légales </router-link>
            <router-link to="/politique-de-confidentialite" class="inline-block mt-0 ml-8 text-gray-300 hover:bg-gray-700 hover:text-beige px-3 py-2 rounded-md text-sm font-medium">Politique de confidentialité </router-link>
            <router-link to="/conditions-generales-de-ventes" class="inline-block mt-0 ml-8 text-gray-300 hover:bg-gray-700 hover:text-beige px-3 py-2 rounded-md text-sm font-medium">CGV</router-link>
          </div>
        </div>
      </footer>
    </section>
  </div>

</template>


<script>




  export default {
    mode: 'production',
    name: 'app',
    el: '#hammenu',
    data: () => ({
      isVisible: true,

    })
  }
</script>
