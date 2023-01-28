<template>
    <div class="fullscreen bg-green text-white text-center q-pa-md flex flex-center">
        <div>
            <div style="font-size: 10vh">
                Done. :-)
            </div>
            <q-btn class="q-mt-xl" color="white" text-color="green" unelevated to="/" label="Again" no-caps />
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'DonePage'
})
</script>
