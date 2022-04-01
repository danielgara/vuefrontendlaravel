<template>
  <div class="card">
    <div class="card-header">
      {{ product.getName() }}
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col">
          <img alt="Vue logo" src="../assets/logo.png" class="card-img-top" />
        </div>
        <div class="col">
          <p class="card-text">{{ product.getName() }} - {{ product.getPrice() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import ProductDAO from '../models/ProductDAO';
import Product from '../models/Product';

export default class ShowProduct extends Vue {
  product:Product = new Product(0, '', 0);

  public async beforeMount() {
    const id = this.$route.params.id.toString();
    this.product = await ProductDAO.getProduct(id);
  }
}
</script>
