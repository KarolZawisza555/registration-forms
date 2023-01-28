<template>
  <q-card bordered class="my-card bg-grey-1">
    <q-card-section>
      <div class="row items-center no-wrap">
        <div class="col">
          <div class="text-h4">Agreement </div>
        </div>
      </div>
    </q-card-section>
    <q-card-section class="card-space items-center">
      <transition name="rotate">
        <q-scroll-area v-if="showScroll" visible :thumb-style="thumbStyle" :content-style="contentStyle"
          :content-active-style="contentActiveStyle" class="q-ma-sm" style="height: 500px; ">
          <p class="q-ma-md">
            {{ lorem }}
          </p>
        </q-scroll-area>
      </transition>
    </q-card-section>
    <q-separator></q-separator>
    <q-card-actions>
      <q-space />
      <q-space />
      <q-btn flat to="/">Back</q-btn>
      <q-btn flat>Next</q-btn>
      <q-space />
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue';
import 'vue-transitions-css';


export default defineComponent({
  name: 'AgreementPage',
  data() {
    return {
      showScroll: false,
      contentStyle: {
        backgroundColor: 'rgba(0,0,0,0.02)',
        color: '#555'
      },
      contentActiveStyle: {
        backgroundColor: '#fff',
        color: 'black'
      },
      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: '0.75'
      },
      lorem: `Lorem ipsum dolor sit amet. Et sapiente fugiat est nobis reiciendis in ducimus officia et
        enim laborum ut voluptatum quas ut eaque doloremque ea voluptatem veniam. Qui obcaecati aperiam 33
        accusamus impedit et galisum deleniti qui cumque enim ut cumque voluptas sit repudiandae autem.
        Aut corporis iste aut quia ratione aut rerum excepturi qui quia corrupti? Et inventore impedit
        et dignissimos ipsa qui corporis ipsa qui sunt odit qui reiciendis galisum?Eum consequatur
        enim in dolorem quibusdam non perspiciatis consectetur. Nam quia officia est delectus consequatur
        vel vitae eius et molestias reiciendis quo ducimus enim quo dolores corporis. Hic necessitatibus
        quia At pariatur recusandae est quia nihil quo totam consequatur. Ut veritatis dolorem sit
        recusandae corrupti ex eius rerum qui sunt quos et harum mollitia id nesciunt quos.
        Et nemo consequatur aut consectetur ipsa qui enim impedit est fuga iusto. Qui reiciendis
        dolor ut Quis incidunt et voluptas error eos obcaecati eveniet ea ipsum exercitationem!
        Et iste galisum eum voluptatibus velit et soluta itaque? Sit inventore nihil est aliquid
        aspernatur rem repudiandae rerum. Et quia quos ut perferendis veritatis non galisum
        voluptas sed accusamus consectetur et laboriosam iste ut saepe autem. Cum dolorum corporis est
        provident laboriosam aut similique illo. Rem minima doloremque et repellendus magni non cupiditate
        facilis et perspiciatis quisquam sed quos facere et galisum molestias sed porro deleniti! Est fugit
        autem hic quas aliquam id autem iste et possimus maxime ut libero numquam.Quo galisum voluptas
        et quia optio et iure totam est dignissimos tenetur At facilis perspiciatis qui tempore molestiae.
        Sed consequatur molestiae et alias sequi et accusamus accusamus 33 ducimus facere ut beatae harum
        Aut corporis iste aut quia ratione aut rerum excepturi qui quia corrupti? Et inventore impedit
        et dignissimos ipsa qui corporis ipsa qui sunt odit qui reiciendis galisum?Eum consequatur
        enim in dolorem quibusdam non perspiciatis consectetur. Nam quia officia est delectus consequatur
        vel vitae eius et molestias reiciendis quo ducimus enim quo dolores corporis. Hic necessitatibus
        quia At pariatur recusandae est quia nihil quo totam consequatur. Ut veritatis dolorem sit
        recusandae corrupti ex eius rerum qui sunt quos et harum mollitia id nesciunt quos.
        Et nemo consequatur aut consectetur ipsa qui enim impedit est fuga iusto. Qui reiciendis
        dolor ut Quis incidunt et voluptas error eos obcaecati eveniet ea ipsum exercitationem!
        Et iste galisum eum voluptatibus velit et soluta itaque? Sit inventore nihil est aliquid
        aspernatur rem repudiandae rerum. Et quia quos ut perferendis veritatis non galisum
        voluptas sed accusamus consectetur et laboriosam iste ut saepe autem. Cum dolorum corporis est
        provident laboriosam aut similique illo. Rem minima doloremque et repellendus magni non cupiditate
        facilis et perspiciatis quisquam sed quos facere et galisum molestias sed porro deleniti! Est fugit
        autem hic quas aliquam id autem iste et possimus maxime ut libero numquam.Quo galisum voluptas
        et quia optio et iure totam est dignissimos tenetur At facilis perspiciatis qui tempore molestiae.
        Sed consequatur molestiae et alias sequi et accusamus accusamus 33 ducimus facere ut beatae harum
        Aut corporis iste aut quia ratione aut rerum excepturi qui quia corrupti? Et inventore impedit
        et dignissimos ipsa qui corporis ipsa qui sunt odit qui reiciendis galisum?Eum consequatur
        enim in dolorem quibusdam non perspiciatis consectetur. Nam quia officia est delectus consequatur
        vel vitae eius et molestias reiciendis quo ducimus enim quo dolores corporis. Hic necessitatibus
        quia At pariatur recusandae est quia nihil quo totam consequatur. Ut veritatis dolorem sit
        recusandae corrupti ex eius rerum qui sunt quos et harum mollitia id nesciunt quos.
        Et nemo consequatur aut consectetur ipsa qui enim impedit est fuga iusto. Qui reiciendis
        dolor ut Quis incidunt et voluptas error eos obcaecati eveniet ea ipsum exercitationem!
        Et iste galisum eum voluptatibus velit et soluta itaque? Sit inventore nihil est aliquid
        aspernatur rem repudiandae rerum. Et quia quos ut perferendis veritatis non galisum
        voluptas sed accusamus consectetur et laboriosam iste ut saepe autem. Cum dolorum corporis est
        provident laboriosam aut similique illo. Rem minima doloremque et repellendus magni non cupiditate
        facilis et perspiciatis quisquam sed quos facere et galisum molestias sed porro deleniti! Est fugit
        autem hic quas aliquam id autem iste et possimus maxime ut libero numquam.Quo galisum voluptas
        et quia optio et iure totam est dignissimos tenetur At facilis perspiciatis qui tempore molestiae.
        Sed consequatur molestiae et alias sequi et accusamus accusamus 33 ducimus facere ut beatae harum
        Aut corporis iste aut quia ratione aut rerum excepturi qui quia corrupti? Et inventore impedit
        et dignissimos ipsa qui corporis ipsa qui sunt odit qui reiciendis galisum?Eum consequatur
        enim in dolorem quibusdam non perspiciatis consectetur. Nam quia officia est delectus consequatur
        vel vitae eius et molestias reiciendis quo ducimus enim quo dolores corporis. Hic necessitatibus
        quia At pariatur recusandae est quia nihil quo totam consequatur. Ut veritatis dolorem sit
        recusandae corrupti ex eius rerum qui sunt quos et harum mollitia id nesciunt quos.
        Et nemo consequatur aut consectetur ipsa qui enim impedit est fuga iusto. Qui reiciendis
        dolor ut Quis incidunt et voluptas error eos obcaecati eveniet ea ipsum exercitationem!
        Et iste galisum eum voluptatibus velit et soluta itaque? Sit inventore nihil est aliquid
        aspernatur rem repudiandae rerum. Et quia quos ut perferendis veritatis non galisum
        voluptas sed accusamus consectetur et laboriosam iste ut saepe autem. Cum dolorum corporis est
        provident laboriosam aut similique illo. Rem minima doloremque et repellendus magni non cupiditate
        facilis et perspiciatis quisquam sed quos facere et galisum molestias sed porro deleniti! Est fugit
        autem hic quas aliquam id autem iste et possimus maxime ut libero numquam.Quo galisum voluptas
        et quia optio et iure totam est dignissimos tenetur At facilis perspiciatis qui tempore molestiae.
        Sed consequatur molestiae et alias sequi et accusamus accusamus 33 ducimus facere ut beatae harum
        Aut corporis iste aut quia ratione aut rerum excepturi qui quia corrupti? Et inventore impedit
        et dignissimos ipsa qui corporis ipsa qui sunt odit qui reiciendis galisum?Eum consequatur
        enim in dolorem quibusdam non perspiciatis consectetur. Nam quia officia est delectus consequatur
        vel vitae eius et molestias reiciendis quo ducimus enim quo dolores corporis. Hic necessitatibus
        quia At pariatur recusandae est quia nihil quo totam consequatur. Ut veritatis dolorem sit
        recusandae corrupti ex eius rerum qui sunt quos et harum mollitia id nesciunt quos.
        Et nemo consequatur aut consectetur ipsa qui enim impedit est fuga iusto. Qui reiciendis
        dolor ut Quis incidunt et voluptas error eos obcaecati eveniet ea ipsum exercitationem!
        Et iste galisum eum voluptatibus velit et soluta itaque? Sit inventore nihil est aliquid
        aspernatur rem repudiandae rerum. Et quia quos ut perferendis veritatis non galisum
        voluptas sed accusamus consectetur et laboriosam iste ut saepe autem. Cum dolorum corporis est
        provident laboriosam aut similique illo. Rem minima doloremque et repellendus magni non cupiditate
        facilis et perspiciatis quisquam sed quos facere et galisum molestias sed porro deleniti! Est fugit
        autem hic quas aliquam id autem iste et possimus maxime ut libero numquam.Quo galisum voluptas
        et quia optio et iure totam est dignissimos tenetur At facilis perspiciatis qui tempore molestiae.
        Sed consequatur molestiae et alias sequi et accusamus accusamus 33 ducimus facere ut beatae harum
        Aut corporis iste aut quia ratione aut rerum excepturi qui quia corrupti? Et inventore impedit
        et dignissimos ipsa qui corporis ipsa qui sunt odit qui reiciendis galisum?Eum consequatur
        enim in dolorem quibusdam non perspiciatis consectetur. Nam quia officia est delectus consequatur
        vel vitae eius et molestias reiciendis quo ducimus enim quo dolores corporis. Hic necessitatibus
        quia At pariatur recusandae est quia nihil quo totam consequatur. Ut veritatis dolorem sit
        recusandae corrupti ex eius rerum qui sunt quos et harum mollitia id nesciunt quos.
        Et nemo consequatur aut consectetur ipsa qui enim impedit est fuga iusto. Qui reiciendis
        dolor ut Quis incidunt et voluptas error eos obcaecati eveniet ea ipsum exercitationem!
        Et iste galisum eum voluptatibus velit et soluta itaque? Sit inventore nihil est aliquid
        aspernatur rem repudiandae rerum. Et quia quos ut perferendis veritatis non galisum
        voluptas sed accusamus consectetur et laboriosam iste ut saepe autem. Cum dolorum corporis est
        provident laboriosam aut similique illo. Rem minima doloremque et repellendus magni non cupiditate
        facilis et perspiciatis quisquam sed quos facere et galisum molestias sed porro deleniti! Est fugit
        autem hic quas aliquam id autem iste et possimus maxime ut libero numquam.Quo galisum voluptas
        et quia optio et iure totam est dignissimos tenetur At facilis perspiciatis qui tempore molestiae.
        Sed consequatur molestiae et alias sequi et accusamus accusamus 33 ducimus facere ut beatae harum
        et tempora incidunt.`,
    }
  },
  created() {
    this.interval = setInterval(() => this.showScroll = true, 200);
  },
})
</script>

<style>
.my-card {
  min-width: 200px;
  width: 100%;
  max-width: 900px;
}

.card-space {
  min-height: 600px;
  height: 100%;
  max-height: 800px;

}

@keyframes rotate {
  0% {
    opacity: 0;
    transform: scale(0.1) rotate(-30deg);
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
