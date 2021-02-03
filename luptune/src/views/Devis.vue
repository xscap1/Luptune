<template>
  <div class="Devis bg-marine-dark"  style="
    overflow-x: hidden;
    width: 100%;
  ">


  <div class="bg-opacity-0">
    <section class="py-20 px-4 text-center">
      <div class="w-full max-w-2xl mx-auto">
        <span class="text-sm font-semibold text-beige"><h1>ESTIMEZ VOTRE DEVIS</h1></span>
        <h2 class="text-5xl mt-2 mb-6 leading-tight font-semibold font-heading text-white">Un devis à l'estime de votre restaurant</h2>
        <p class="text-indigo-600 font-semibold " href="#">Commencez dès maintenant la numérisation de votre restaurant </p>
      </div>
    </section>
  </div>



    <!-- rappel devis -->
    <div class="">
      <section id="about" class="container mx-auto py-8 px-4 text-center">

        <h2 class="text-4xl mb-2 leading-tight font-semibold font-heading mb-10 text-white">Comment ça marche?</h2>

        <div class="flex flex-wrap justify-center">
          <div class="md:w-1/3 p-8">

            <div class="px-4">
              <span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-beige text-marine-dark">1</span>
            </div>
            <div class="px-4">
              <h3 class="my-4 text-xl font-semibold text-beige">Customisez votre site selon vos envies</h3>
              <p class="text-blueGray-400 leading-loose text-gray-400">Choisissez chaque fonctionnalité souhaitée ainsi que le style de votre site, vous pouvez également ne choisir
              qu'une fonctionnalité que nous ajouterons à votre site déjà existant</p>
            </div>
          </div>

          <div class="md:w-1/3 p-8">

            <div class="px-4">
              <span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-beige text-marine-dark">2</span>
            </div>
            <div class="px-4">
              <h3 class="my-4 text-xl font-semibold text-beige">Estimez votre devis</h3>
              <p class="text-blueGray-400 leading-loose text-gray-400">Vous pourrez voir une estimation en direct du coût du site que vous souhaitez</p>
            </div>
          </div>

          <div class="md:w-1/3 p-8">

            <div class="px-4">
              <span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-beige text-marine-dark">3</span>
            </div>
            <div class="px-4">
              <h3 class="my-4 text-xl font-semibold text-beige">Contactez-nous!</h3>
              <p class="text-blueGray-400 leading-loose text-gray-400">Vous souhaitez plus de précisions ? Vous souhaitez une fonctionnalité non présente sur notre site ? N'attendez
              pas et contactez-nous dès maintenant</p>
            </div>
          </div>

        </div>

        <div class="container mx-auto py-10 px-4 border-b">
        </div>
      </section>
    </div>



    <div class="">
      <section class="container mx-auto px-4 flex flex-wrap py-20">

        <div class="md:w-1/3">
          <div>
            <span class="text-beige font-semibold text-3xl">Style du site</span>
            <div class="mt-2">
              <label class="inline-flex items-center ml-6">
                <input type="checkbox" class="form-checkbox" value="Moderne" v-model="cb_style" @change="uniqueCheck">
                <span class="ml-2 text-white">Moderne</span>
              </label>
              <label class="inline-flex items-center ml-6">
                <input type="checkbox" class="form-checkbox" value="Classique" v-model="cb_style" @change="uniqueCheck">
                <span class="ml-2 text-white">Classique</span>
              </label>
              <br/>

            </div>

          </div>

          <div class="mt-4 mt-10">
            <span class="text-beige font-semibold text-3xl">Fonctionnalités</span>

            <h2 class="text-white font-semibold text-xl mt-5">Services</h2>
            <div class="mt-2">
              <ul>
                <li><label class="inline-flex items-center ml-6 py-1">
                  <input type="checkbox" class="form-checkbox" name="fonc1" value="Commandes en ligne" v-model="cb_devis" @change="addTotal"  >
                  <span class="ml-2 text-white">Commandes en ligne </span>
                  <p class="text-beige ml-1 "> (Click & Collect et paiement en ligne) </p>
                </label></li>
                <li><label class="inline-flex items-center ml-6 py-1">
                  <input type="checkbox"  class="form-checkbox" name="fonc3" value="Gestion fiches clients" v-model="cb_devis" @change="addTotal">
                  <span class="ml-2 text-white" >Gestion fiches clients</span>
                </label></li>
                <li><label class="inline-flex items-center ml-6 py-1">
                  <input type="checkbox" class="form-checkbox" name="fonc4" value="Gestion des réservations" v-model="cb_devis" @change="addTotal">
                  <span class="ml-2 text-white">Gestion des réservations </span>
                </label></li>
                <li><label class="inline-flex items-center ml-6 py-1">
                  <input type="checkbox" class="form-checkbox" name="fonc5" value="Hébergement Web" v-model="cb_devis" @change="addTotal">
                  <span class="ml-2 text-white">Hébergement Web</span>
                  <p class="text-beige ml-1 "> (Cochez si vous n'avez pas de site internet) </p>
                </label></li>
              </ul>
            </div>


            <h2 class="font-semibold text-xl mt-5 text-white">Options</h2>
            <div class="mt-2">
              <ul>
                <li><label class="inline-flex items-center ml-6 py-1">
                  <input type="checkbox" class="form-checkbox" name="op1" value="Avis clients" v-model="cb_devis" @change="addTotal">
                  <span class="ml-2 text-white">Avis clients</span>
                </label></li>

                <li><label class="inline-flex items-center ml-6 py-1">
                  <input type="checkbox" class="form-checkbox" name="op2" value="Partage depuis vos réseaux sociaux" v-model="cb_devis" @change="addTotal">
                  <span class="ml-2 text-white">Partage depuis vos réseaux sociaux</span>
                </label></li>

                <li><label class="inline-flex items-center ml-6 py-1">
                  <input type="checkbox" class="form-checkbox" name="op3" value="Intégration de votre adresse sur carte" v-model="cb_devis" @change="addTotal">
                  <span class="ml-2 text-white">Intégration de votre adresse sur carte </span>
                </label></li>

                <li><label class="inline-flex items-center ml-6 py-1">
                  <input type="checkbox" class="form-checkbox" name="op4" value="Menu en QR Code" v-model="cb_devis" @change="addTotal">
                  <span class="ml-2 text-white">Menu en QR Code </span>
                </label></li>

                <li><label class="inline-flex items-center ml-6 py-1">
                  <input type="checkbox" class="form-checkbox" name="op5" value="Formulaire de contact" v-model="cb_devis" @change="addTotal">
                  <span class="ml-2 text-white">Formulaire de contact </span>
                </label></li>


              </ul>
            </div>
          </div>
        </div>



        <div class="py-10 w-full md:w-2/3 md:py-0 md:pl-10">


          <!-- component -->

            <div class="bg-marine-dark px-4 py-5 border rounded-t sm:px-6">
              <h3 class="text-lg leading-6 font-medium text-white">
                Détail du tarif estimé
              </h3>
              <p class="text-gray-300 text-sm">
                (ce prix est une estimation, beaucoup de paramètres peuvent changer celui-ci se rapproche de la réalité)
              </p>
            </div>
                  <div class="bg-white shadow overflow-hidden sm:rounded-b">
                    <ul class="divide-y divide-gray-250">
                      <li>
                        <a class="block">
                          <div class="px-4 py-4 sm:px-6">
                            <div class="flex items-center justify-between">
                              <p class="text-sm font-thin text-gray-700 truncate font-semibold">
                                Choix
                              </p>
                              <div class="ml-2 flex-shrink-0 flex">
                                <p class="px-2 inline-flex text-xs leading-5 font-semibold ">
                                  Prix
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>


                      <li v-for="item in cb_style" :key="item">
                        <a class="block hover:bg-gray-200">
                          <div class="px-4 py-4 sm:px-6">
                            <div v-for="map in price_map" :key="map" class="flex items-center justify-between">
                              <p v-if="item == map[0]" class="text-sm font-thin text-gray-700 truncate">
                                {{item}}
                              </p>
                              <span v-if="item == map[0]"  class="pr-2 ml-2 flex-shrink-0 flex inline-flex text-xs leading-5 font-semibold text-green-600">
                                {{map[1] + ' €'}}
                              </span>
                            </div>

                          </div>
                        </a>
                      </li>

                      <li v-for="item in cb_devis" :key="item">
                        <a class="block hover:bg-gray-200">
                          <div class="px-4 py-4 sm:px-6">
                            <div v-for="map in price_map" :key="map" class="flex items-center justify-between">
                              <p v-if="item == map[0]" class="text-sm font-thin text-gray-700 truncate">
                                {{item}}
                              </p>
                              <span v-if="item == map[0]"  class="pr-2 ml-2 flex-shrink-0 flex inline-flex text-xs leading-5 font-semibold text-green-600">
                                {{map[1] + ' €'}}
                              </span>
                            </div>

                          </div>
                        </a>
                      </li>

                      <li>
                        <a class="block hover:bg-gray-50">
                          <div class="px-4 py-4 sm:px-6">
                            <div class="flex items-center justify-between">
                              <p class="text-md text-black truncate font-bold">
                                TOTAL ESTIMÉ
                              </p>
                              <div class="ml-2 flex-shrink-0 flex">
                                <p class="px-2 inline-flex text-md leading-5 font-bold rounded-full bg-green-100 text-green-800">
                                  {{total + ' €'}}
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
        </div>

      </section>
      <br/>
      <div class="container mx-auto px-4 border-b">
      </div>
    </div>




    <!-- contact -->


    <div class="bg-marine-dark h-1">

    </div>
    <Contact></Contact>

  </div>
</template>


<script>
import Contact from '../components/Contact';

export default {
  mode: 'production',

  metaInfo() {
    return {
      title: "Luptune - Estimer votre devis",
      meta: [
        {
          name: "Luptune - Estimation de votre devis",
          content: "Estimez le devis du prochain site internet de votre restaurant."
        }
      ]
    }
  },

  created () {

  },

    data() {
      return {
        total : 0,
        mod : false,
        cla : false,
        cb_style: [],
        cb_devis: [],
        price_map : [
          ["Moderne", 700],
          ["Classique", 525],
          ["Commandes en ligne", 1225],
          ["Gestion fiches clients", 210],
          ["Gestion des réservations", 525],
          ["Hébergement Web", 80],
          ["Avis clients", 105],
          ["Partage depuis vos réseaux sociaux", 105],
          ["Intégration de votre adresse sur carte", 105],
          ["Menu en QR Code", 35],
          ["Formulaire de contact", 175]
        ]
      }
    },
  methods: {

    addTotal(e) {


      this.price_map.forEach((option) => {

        if (option[0] == e.target.value) {

          if (e.target.checked) {
            this.total = this.total + option[1];

          }
          else {
            this.total = this.total - option[1];
          }

        }
      });

    },

    uniqueCheck(e) {

      this.cb_style = [];

      if (e.target.checked) {
        this.cb_style.push(e.target.value);

        if (e.target.value == "Moderne") {
          this.total += 700;
          this.mod = true;

          if (this.cla) {
            this.total -= 525;
            this.cla = false;
          }

        }

        else {
          this.total += 525;
          this.cla = true;

          if (this.mod) {
            this.total -= 700;
            this.mod = false;
          }

          this.mod = false;
        }
      }

      else {
        if (e.target.value == "Moderne") {
          if (this.mod) {
            this.total -= 700;
            this.mod = false;
          }
        }

        else {
          if (this.cla) {
            this.total -= 525;
            this.cla = false;
          }
        }

      }

    },



  },

  components: {
    Contact
  }
}


</script>
