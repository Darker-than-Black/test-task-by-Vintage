<template>
     <wrapper-s>
        <contacts></contacts>

         <map-cart></map-cart>

         <contacts-us></contacts-us>
     </wrapper-s>
</template>

<script>
import Contacts from './components/Contacts.vue';
import MapCart from './components/Map.vue';
import ContactsUs from './components/ContactsUs.vue';
export default {
  name: 'app',
  components: {
      Contacts,
      MapCart,
      ContactsUs,
  }
}
</script>

<style lang="scss">
</style>
