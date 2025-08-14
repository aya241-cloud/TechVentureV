<template>
    <div class="max-sm:!h-520">
        <HeroSection1 title="Contactez-Nous" currentPage="Contactez-Nous"/>
        <ContactFormSection />
        <ContactSection />

    </div>
</template>
<script setup>
import HeroSection1 from '@/components/specific/HeroSection1.vue'
import ContactFormSection from '@/components/specific/ContactFormSection.vue';
import ContactSection from '@/components/specific/ContactSection.vue';
</script>