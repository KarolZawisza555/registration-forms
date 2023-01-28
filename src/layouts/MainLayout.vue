<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-space />
        <q-toolbar-title>
          REGISTRATION FORM
        </q-toolbar-title>
        <!-- TODO add github link -->
        <div>KarolZawisza555</div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="flex flex-center">
        <transition :name="transitionType">
          <router-view />
        </transition>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  data() {
    return {
      transitionList: ['fade', 'rotate'],
      transitionType: "fade"
    }
  },
})
</script>
<style>
.my-card {
  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 800px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes rotate {
  0% {
    opacity: 0;
    transform: scale(0.7) rotate(-10deg);
  }

  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

.rotate-enter-active {
  animation: rotate 0.6s;
}

.rotate-leave-active {
  animation: rotate 0.6s reverse;
}
</style>
