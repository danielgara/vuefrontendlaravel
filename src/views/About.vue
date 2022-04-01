<template>
  <div class="card">
    <div class="card-header">
      {{ title }}
    </div>
    <div class="card-body">
      <p>{{ description }}</p>
      <p>{{ team }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class About extends Vue {
  title = 'This is an about page'

  descripton = 'Best application'

  team = 'Daniel Correa'
}
</script>
