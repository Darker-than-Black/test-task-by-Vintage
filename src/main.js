import Vue from 'vue';
import App from './App.vue';
import { styles } from './assets/scss/style.scss';
import { animate } from './assets/scss/animate.css';
import WrapperSlot from './components/slots/WrapperSlot.vue';
import ArticleContainerSlot from './components/slots/ArticleContainerSlot.vue';
import ContainerSlot from './components/slots/ContainerSlot.vue';
import ColSlot from './components/slots/ColSlot.vue';
import RowSlot from './components/slots/RowSlot.vue';
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAIfAsXmk0gJltyLTA67toOy5-z2ENt12s",
    libraries: "places"
  }
});

Vue.config.productionTip = false;

Vue.use({ styles, animate });
Vue.component( 'wrapper-s', WrapperSlot );
Vue.component( 'a-container-s', ArticleContainerSlot );
Vue.component( 'container-s', ContainerSlot );
Vue.component( 'col-s', ColSlot );
Vue.component( 'row-s', RowSlot );

new Vue({
  render: h => h(App),
}).$mount('#app');
