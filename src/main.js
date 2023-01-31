import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendar, faSortDesc, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

library.add(faCalendar, faUser, faSortDesc, faFacebook, faInstagram, faTwitter);


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
