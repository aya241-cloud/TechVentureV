<template>
    <div class="max-sm:!h-530">
        <HeroSection1 title="A Propos de nous !" currentPage="A Propos"/>
        <AboutSection1 />
        <CompanyOverview />
        <BrochureSection/>

    </div>
</template>
<script setup>
import HeroSection1 from '@/components/specific/HeroSection1.vue'
import AboutSection1 from '@/components/specific/AboutSection1.vue'
import CompanyOverview from '@/components/specific/CompanyOverview.vue'
import BrochureSection from '@/components/specific/BrochureSection.vue'
</script>