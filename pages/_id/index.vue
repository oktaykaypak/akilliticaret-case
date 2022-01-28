<template>
  <div>
    <section id="breadc" class="breadc">
      <div class="container">
        <BreadC />
      </div>
    </section>
    <section v-if="isNullPage" class="mt-5">
      <div class="container">
        <!-- jumbotron  -->
        <div class="row">
          <div class="col-12 d-flex justify-content-center align-items-center">
            <h4 class="mr-1">{{ pageName() }}</h4>
            kategorisi icerigindeki urunler listelenmektedir.
          </div>
        </div>
        <!-- Filter Sorter -->
        <div class="row align-items-center mt-2">
          <div class="col-6">
            <div class="row">
              <div class="col-6">
                <select v-model="selectedSort">
                  <option
                    v-for="sort in sortList"
                    :key="sort.type"
                    :value="sort"
                  >
                    {{ sort.title }}
                  </option>
                </select>
              </div>
              <div class="col-6">
                <select>
                  <option>Tum Urunler</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-12 d-flex justify-content-end">
                <div class="list-icon mr-2">
                  <i class="bi bi-grid-fill"></i>
                </div>
                <div class="list-icon">
                  <i class="bi bi-hdd-stack-fill"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Product area -->
      </div>
    </section>
    <section v-else class="mt-5">
      <div class="row">
        <div class="col-12 d-flex justify-content-center align-items-center">
          <h4 class="mr-1">{{ pageName() }}</h4>
          kategorisine henuz urun eklenmemistir.
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import menu from '../../utils/menu'
export default {
  name: 'CategoryPage',

  data() {
    return {
      isNullPage: false,
      selectedSort: {
        type: 'priceAsc',
        sort: 'asc',
        key: 'price',
        title: 'Fiyata Gore Artan',
      },
      sortList: [
        {
          type: 'priceAsc',
          sort: 'asc',
          key: 'price',
          title: 'Fiyata Gore Artan',
        },
        {
          type: 'priceDesc',
          sort: 'desc',
          key: 'price',
          title: 'Fiyata Gore Azalan',
        },
        {
          type: 'nameAsc',
          sort: 'asc',
          key: 'name',
          title: 'A - Z ye isme gore',
        },
        {
          type: 'nameDesc',
          sort: 'desc',
          key: 'name',
          title: 'Z - A ya isme gore',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      products: (state) => state.products.products,
    }),
  },
  beforeMount() {
    const payload = { page: 0 }
    this.getProduct(payload)
  },

  methods: {
    ...mapActions({ getProduct: 'products/getProduct' }),
    pageName() {
      const name = menu.find((x) => x.url === this.$route.path)
      name.url === '/beyaz-esya'
        ? (this.isNullPage = true)
        : (this.isNullPage = false)
      return name.title
    },
  },
}
</script>

<style></style>
