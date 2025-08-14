<template>
  <section id="faq" class="py-12 bg-[#fdf3ee] max-sm:relative max-sm:!bottom-[-1100px]">
    <div class="container px-4 mx-auto">
      <h2 class="text-4xl !mb-6 text-[#103741] font-bold text-center max-sm:!text-2xl">Questions Fréquemment Posées</h2>
      
      <div class="max-w-3xl mx-auto space-y-4 ">
        <!-- FAQ Items -->
         <div class="space-y-4 bg-[#fdf3ee]">
      <AccordionItem 
        v-for="(item, index) in faqItems" 
        :key="index"
        :title="item.question"
        :content="item.answer"
        :is-open="item.isOpen"
        @toggle="toggleItem(index)"
      />
    </div>
    
    <!-- Repeat for other accordion items -->
  </div>
      </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import AccordionItem from '@/components/specific/AccordionItem.vue';

export default {
  components: { AccordionItem },
  setup() {
    const faqItems = ref([
      {
        question: "Quelle est la tranche d'âge des enfants dans les programmes ?",
        answer: "Le programme est disponible pour deux tranches d'âge : une pour les 8-12 ans et une autre pour les 13-15 ans.",
        isOpen: true
      },
      {
        question: "Vos programmes sont-ils conformes aux normes et vérifiés ?",
        answer: "Oui, tous nos programmes sont vérifiés et conçus selon les normes d'experts.",
        isOpen: false
      },
      {
        question: "Combien de temps dure le programme ?",
        answer: "Nous proposons deux programmes : l'un dure 6 mois, et l'autre dure 9 mois.",
        isOpen: false
      },
      {
        question: "Comment puis-je m'inscrire ?",
        answer: "Vous pouvez vous inscrire via notre site web ou en nous contactant directement par téléphone.",
        isOpen: false
      }
    ]);

    const toggleItem = (index) => {
      // Close all items first
      faqItems.value.forEach((item, i) => {
        if (i !== index) {
          item.isOpen = false;
        }
      });
      // Toggle the clicked item
      faqItems.value[index].isOpen = !faqItems.value[index].isOpen;
    };

    return { faqItems, toggleItem };
  }
}
</script>