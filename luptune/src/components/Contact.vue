<script>
  import emailjs from 'emailjs-com';
  export default {
  name: 'ContactezNous',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {

    sendEmail(e) {


      try {
        if (document.getElementById('incheck').checked == false) {
          alert("Vous n'avez pas accepté les CGU et CGV. Veuiller cocher la case correspondante."); //NE FONCTIONNE PAS ENCORE JSP PK PUTAIN DE MERDE
          document.getElementById('inemail').value = "";
          document.getElementById('inselect').value = "Choix";
          document.getElementById('innom').value = "";
          document.getElementById('inprenom').value = "";
          document.getElementById('incheck').checked = false;
          document.getElementById('inarea').value = "";
          return;
        }

        emailjs.sendForm('service_rg4pt3e', 'template_vtutlqe', e.target,
        'user_BKNchsiqeewNfckpiy3OW', {
          user_name: this.user_name,
          user_surname: this.user_surname,
          user_email: this.user_email,
          message: this.message,
          subject: this.subject
        });



        document.getElementById("successAlert").style.opacity = '1';
        setTimeout(function() {
          document.getElementById("contact").insertBefore(document.getElementById("successAlert"), document.getElementById("contact").firstChild);
        }, 2000);

      } catch(error) {
        alert("Votre message n'a pas été transmis. Veuillez nous contacter à luptunecontact@gmail.com pour nous signaler le problème.");
        console.log({error});
      }

      document.getElementById('inemail').value = "";
      document.getElementById('inselect').value = "Choix";
      document.getElementById('innom').value = "";
      document.getElementById('inprenom').value = "";
      document.getElementById('incheck').checked = false;
      document.getElementById('inarea').value = "";

    },

    removeSuccessAlert() {
      document.getElementById("successAlert").style.opacity = '0';
      setTimeout(function() {

        document.getElementById("contact").insertBefore(document.getElementById("successAlert"), document.document.getElementById("contact").firstChild);
      }, 2000);
    },

    removeErrorAlert() {
      document.getElementById("errorAlert").style.opacity = '0';
      setTimeout(function() {
        document.getElementById("contact").insertBefore(document.getElementById("errorAlert"), document.getElementById("contact").firstChild);
      }, 2000);
    }

  }
}
</script>

<template id="tpcontact">



  <section id="contact" class="bg-marine-dark px-4">

    <div id="successAlert" class="py-4" style="

    opacity: 0;
    -webkit-transition: opacity 1000ms linear;
    transition: opacity 1000ms linear;
    margin-bottom : 2vw;
    ">
      <div id="title" class="relative py-3 pl-4 pr-10 leading-normal text-green-700 bg-green-100 rounded-lg container mx-auto px-4" role="alert">
        <p class="font-bold">Succès : <span class="font-normal">Votre message a bien été transmis. </span> </p>

        <span class="absolute inset-y-0 right-0 flex items-center mr-4">
          <svg class="w-4 h-4 fill-current" role="button" v-on:click="removeSuccessAlert" viewBox="0 0 20 20"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
        </span>
      </div>
    </div>

    <h2 id="titlecontact" class="text-4xl mb-10 text-center font-semibold font-heading text-white">Prêt à passer le cap? Contactez notre équipe</h2>
    <div class="w-full max-w-2xl mx-auto mb-12">
      <form id="contactform" class="contact-form" @submit.prevent="sendEmail" >
        <div class="flex mb-4 -mx-2">
          <div class="w-1/2 px-2">
            <input required="" id="inemail" class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="email" placeholder="E-mail *" name="user_email">
          </div>
          <div class="w-1/2 px-2">
            <select id="inselect" required name="subject" class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none">
              <option disabled selected value="Choix">-- Choisissez une option --</option>
              <option value="Question générale" >Question générale</option>
              <option value="Question fonctionnalités" >Question fonctionnalités</option>
              <option value="Devis">Estimation du devis</option>
              <option value ="Autre" >Autre</option>
            </select>
          </div>

        </div>
        <div class="flex mb-4 -mx-2">
          <div class="w-1/2 px-2">
            <input id="innom" required="" class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="text" placeholder="Nom *" name="user_name">
          </div>
          <div class="w-1/2 px-2">
            <input id="inprenom" required="" class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="text" placeholder="Prénom *" name=user_surname>
          </div>
        </div>
        <div class="mb-4"><textarea id="inarea" class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" placeholder="Écrivez-nous votre message ! Nous y répondrons avec beaucoup d'attention." name="message" rows="5"></textarea></div>
        <div class="">
          <input id="incheck" type="checkbox" required name="cgucgv">
          <span class="mt-5 container mx-auto px-4 ml-2 text-white">En cochant cette case, je déclare avoir pris connaissance des conditions générales d'utilisation <router-link to="/politique-de-confidentialite" target="_blank"><b>CGU</b></router-link> et les
            <router-link to="/conditions-generales-de-ventes" target="_blank"><b>CGV</b></router-link>
             du site internet et les accepter.</span>
        </div>

        <div>
          <input class="mt-7 inline-block w-full py-4 px-8 leading-none text-white bg-beige text-marine-dark hover:bg-marine-dark hover:text-beige border border-beige font-semibold rounded shadow" type="submit" value="Envoyer">
        </div>
      </form>
    </div>

    <div class="flex flex-col lg:flex-row lg:justify-center -mx-4">
      <div class="px-4 flex md:items-center flex justify-center">
        <svg class="inline-block w-6 h-6 mr-3 text-beige" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
        <span class="text-white">+33 6 58 92 44 05</span>
      </div>
      <div class="px-4 flex md:items-center flex justify-center">
        <svg class="inline-block w-6 h-6 mr-3 text-beige" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
        <span class="text-white">luptunecontact@gmail.com</span>
      </div>
    </div>
    <div class="bg-marine-dark h-10">

    </div>
  </section>
</template>
