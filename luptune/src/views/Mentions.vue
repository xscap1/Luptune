<template>

  <div class="Mentions" style="
    overflow-x: hidden;
    width: 100%;
  ">
    <section id="mentions" class="container mx-auto px-4 mt-10">
      <h1 class="text-4xl font-semibold font-heading">MENTIONS LÉGALES</h1>

      <div class="mx-auto">

        <p class="font-semibold mt-4">Informations : </p>
        <p class="">Ce site est édité par Théo POUJOL et Axel RIBES.</p>
        <p class="mb-4">Dont les adresses e-mails personnelles sont : <span class="font-semibold">poujoltheo@gmail.com</span> et <span class="font-semibold">axelribes4@gmail.com</span> </p>
        <p class="mb-4">Dont les numéros téléphoniques personnels sont M. POUJOL: <span class="font-semibold">+33 6 58 92 44 05</span> et M. RIBES: <span class="font-semibold">+33 6 43 40 17 58</span></p>
        <p class="mb-2">Domiciliés aux adresses suivantes:</p>
        <p class="mb-2"> Mr POUJOL: 4 Avenue Jean Bart Résidence Jean Bart 13620 Carry-le-Rouet</p>
        <p class="mb-4">Mr. RIBES: 77 allée du chateau 83136 Forcalqueiret</p>
        <p class="font-semibold">Activité : </p>
        <p>Luptune, entreprise individuelle</p>
        <p>N° RCS : 893 995 704 00010</p>
        <p class="mb-2"> 4 Avenue Jean Bart Résidence Jean Bart 13620 Carry-le-Rouet</p>


        <p class="font-semibold mt-4">Hébergement : </p>
        <p class="">Le site est hébergé par la société OVH Hosting</p>
        <p class="">1801 McGill College Ave. Suite 800 Montreal, Quebec H3A 2N4 Canada</p>
        <p class="">OVH Groupe SAS</p>
        <p class="mb-8">  2, rue Kellermann, 59100 Roubaix.</p>

        <h2 class="text-2xl mb-4 font-semibold font-semibold">Informatique et libertés</h2>

        <p class="mb-4">Aucune information personnelle n'est collectée à votre insu. Les informations que vous nous communiquez lors d’une demande de devis, de renseignements par courrier, par téléphone, par e-mail ou par formulaire sont uniquement destinées au traitement administratif et commercial de votre demande par Théo POUJOL et Axel RIBES.</p>
        <p class="mb-4">Elles ne font l'objet d'aucune cession à des tiers. Théo POUJOL et Axel RIBES  traitent les informations qui vous concernent avec la plus grande confidentialité.</p>
        <p class="mb-4">Conformément à la loi « Informatique et Libertés » n°78-17 du 6 janvier 1978, vous disposez d'un droit d'accès, de rectification et d'opposition aux données personnelles vous concernant. Pour l'exercer, il suffit de nous en faire la demande par écrit aux coordonnées suivantes : luptunecontact@gmail.com.</p>

        <h2 class="text-2xl mb-4 font-semibold font-semibold">Droit d'auteur / Copyright</h2>
        <p class="mb-4">L'ensemble du contenu du présent site Internet, y compris nom de domaine, marques, logo, texte… est la propriété de Théo POUJOL et Axel RIBES, il est protégé par les lois en vigueur de la législation française sur la propriété intellectuelle.</p>
        <p class="mb-4">Aucun élément de ce site ne peut être copié, reproduit, détourné ou dénaturé et ce, sur quelque support que ce soit, sans constituer un acte de contrefaçon au sens des articles L 335-2 et suivants du code de la propriété intellectuelle. </p>

        <h2 class="text-2xl mb-4 font-semibold font-semibold">Accès au site</h2>
        <p class="mb-4">L'utilisateur de ce site reconnaît disposer de la compétence et des moyens nécessaires pour accéder et utiliser ce site. Théo POUJOL et Axel RIBES ne sauraient être tenus responsables des éléments en dehors de leur contrôle et des dommages qui pourraient éventuellement être subis par l'environnement technique de l'utilisateur et notamment, ses ordinateurs, logiciels, équipements réseaux et tout autre matériel utilisé pour accéder ou utiliser le service et/ou les informations.</p>
        <p class="mb-4">Il est rappelé que le fait d'accéder ou de se maintenir frauduleusement dans un système informatique, d'entraver ou de fausser le fonctionnement d'un tel système, d'introduire ou de modifier frauduleusement des données dans un système informatique constitue des délits passibles de sanctions pénales.</p>

        <h2 class="text-2xl mb-4 font-semibold font-semibold">Limitation de responsabilité</h2>
        <p class="mb-4">Théo POUJOL et Axel RIBES s'attachent à transmettre des informations régulièrement mises à jour, notamment sur les actualités ainsi que sur le contenu des articles. Toutefois, des informations erronées ou des omissions peuvent être constatées, suite notamment à des erreurs de saisie ou de mise en page. Si vous en faisiez le constat nous vous invitons à nous le signaler pour que nous puissions procéder à leur rectification.</p>
        <p class="mb-4">Nous nous réservons par ailleurs le droit de modifier les informations ou les éventuelles offres commerciales fournies par le présent site, dans le cadre de nos opérations d'actualisation et de mise à jour des données et ce sans préavis.</p>
        <p class="mb-4">Les liens hypertextes mis en oeuvre au sein du présent site Internet, en direction d'autres sites et/ou de pages personnelles et d'une manière générale vers toutes ressources existantes sur Internet, ne sauraient engager la responsabilité de Théo POUJOL et Axel RIBES.</p>
        <p class="mb-4">De même que Théo POUJOL et Axel RIBES ne pourrons en aucune façon être tenus pour responsable des sites ayant un lien hypertexte avec le présent site et déclinent toute responsabilité quant à leur contenu et à leur utilisation.</p>

      </div>



    </section>

    <div class="bg-marine-dark h-1">

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
      title: "Luptune - Mentions légales",
      meta: [
        {
          name: "description",
          content: "Informatique et libertés, Copyright, accès au site..."
        }
      ]
    }
  },

  created () {
    document.title = "Luptune - Mentions légales"
  },

  components: {
    Contact
  }
}
</script>
