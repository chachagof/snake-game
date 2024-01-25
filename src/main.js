/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faArrowUpLong, faArrowDownLong, faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faArrowUpLong, faArrowDownLong, faArrowLeftLong, faArrowRightLong)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
