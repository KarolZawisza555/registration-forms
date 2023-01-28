<template>
  <q-card bordered class="my-card bg-grey-1">
    <q-card-section>
      <div class="row items-center no-wrap">
        <div class="col">
          <div class="text-h4">REGISTRATION FORM </div>
          <div class="text-subtitle1">by Karol Zawisza</div>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <div>
        <TransitionGroup name="list" tag="ul">
          <q-btn v-for="item in usedLibrary" :key="item.label" size="xl" class="q-ma-sm q-pa-md mw-200" v-bind="item">
            <q-badge color="blue" floating>{{ item.version }}</q-badge>
          </q-btn>
        </TransitionGroup>
      </div>
    </q-card-section>
    <q-separator></q-separator>
    <q-card-actions>
      <q-space />
      <q-space />
      <q-btn flat to="agreement">Next</q-btn>
      <!-- <router-link>Next</router-link> -->
      <q-space />
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      usedLibrary: [
        { label: 'quasar', url: "https://quasar.dev/", version: "2.6.0", color: "primary", "text-color": "white" },
      ],
      listLibrary: [
        { label: 'i18n', url: "https://vue-i18n.intlify.dev/", version: "9.0.0", color: "black", "text-color": "white" },
        { label: 'Vuelidate', url: "https://vuelidate.js.org/", version: "0.7.7", color: "green", "text-color": "white" },
        { label: 'VueUse', url: "https://vueuse.org/", version: "9.11", color: "green", "text-color": "white" },
        { label: 'Axios', url: "https://axios-http.com/docs/", version: "0.7.7", color: "red", "text-color": "white" },
        { label: 'Vue Router', url: "https://router.vuejs.org/", version: "4.00", color: "green", "text-color": "white" },
        { label: 'GitHub', url: "https://github.com/", version: "1", color: "black", "text-color": "white" },
        { label: 'Vuex', url: "https://vuex.vuejs.org/", version: "4.0.1", color: "green", "text-color": "white" },
        { label: 'vue', url: "https://vuejs.org/", version: "3.0.0", color: "green", "text-color": "white" },
      ],
    }
  },
  methods: {
    addItemToForList() {
      if (this.listLibrary.length) this.usedLibrary.push(this.listLibrary.pop())
    },
  },
  created() {
    this.interval = setInterval(() => this.addItemToForList(), 1000);
  },
})
</script>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(80px);
}
</style>
