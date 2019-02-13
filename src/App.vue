<template>
    <div>
        <loading v-if="loading"></loading>

        <wrapper-s>
            <contacts></contacts>

            <map-cart></map-cart>

            <contacts-us></contacts-us>
        </wrapper-s>
    </div>
</template>
s
<script>
import Contacts from './components/Contacts.vue';
import MapCart from './components/Map.vue';
import ContactsUs from './components/ContactsUs.vue';
import loading from './components/Loading.vue';
export default {
  name: 'app',
  components: {
      Contacts,
      MapCart,
      ContactsUs,
      loading,
  },
    data() {
      return {
          loading: false,
      }
    },
    created() {
        this.loading = true;
    },
    mounted() {
      let context = this;
        window.addEventListener("load", function() {
            setTimeout(function () {
                context.loading = false;
            }, 500);
        });
    }
}
</script>
