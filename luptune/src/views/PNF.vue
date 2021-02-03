<template>
  <div class="PNF">
    <section class="py-20 px-4 text-center">
      <div class="flex flex-wrap justify-center">
        <h2 class="w-full text-5xl font-semibold font-heading">Oups ! Vous vous êtes perdu </h2>
        <img src="../assets/emoji/think.png" class="mt-6 mb-6 w-20 mx-2" alt="">
      </div>

      <p class="text-gray-400">La page que vous recherchez n'existe pas.</p>
    </section>

    <div class="bg-marine-dark h-10">

    </div>
    <!-- contact -->
    <Contact></Contact>
  </div>



</template>

<script>
import Contact from '../components/Contact';

export default {
  mode: 'production',
  metaInfo() {
    return {
      title: "Luptune - Erreur 404",
      meta: [
        {

        }
      ]
    }
  },
  created () {

  },

  components: {
    Contact
  }
}
</script>
