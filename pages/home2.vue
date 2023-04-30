<template>
    <NuxtLayout :name="layout">
        <SiteAlert />
    </NuxtLayout>
      
   
</template>
<script>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "siteLayout",
});
</script>
