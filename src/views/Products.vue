<template>
  <div class="card">
    <div class="card-header">
      {{ title }}
    </div>
    <div class="card-body">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div v-for="product in products" class="col" :key="product.getId()">
          <div class="card">
            <img alt="Vue logo" src="../assets/logo.png" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ product.getName() }}</h5>
              <p class="card-text">{{ product.getPrice() }}</p>
              <router-link :to="'/products/'+product.getId()" class="btn btn-primary">
                Check this product
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import ProductDAO from '../models/ProductDAO';
import Product from '../models/Product';

export default class Products extends Vue {
  title = 'List of Products';

  descripton = 'Best application';

  team = 'Daniel Correa';

  products:Product[] = [];

  public async beforeMount() {
    this.products = await ProductDAO.getProducts();
  }
}
</script>
