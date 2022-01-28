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
          <div class="col-12">
            <small>
              <b>{{ pageName() }}</b>
              &nbsp;kategorisi icerigindeki urunler listelenmektedir.</small
            >
          </div>
        </div>
        <!-- Filter Sorter -->
        <div class="row align-items-center mt-2">
          <div class="col-sm-6">
            <div class="row">
              <div class="col-6">
                <select @change="changeSort()" v-model="selectedSort">
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
          <div class="col-sm-6 lister">
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
        <div class="row mt-3">
          <div
            v-for="item in sortedProducts"
            :key="item.id"
            class="col-sm-3 my-2 product "
            :title="item.name"
          >
            <div class="border p-2 box">
              <div class="row">
                <div class="col-12">
                  <img
                    :src="
                      item.prodImages !== null
                        ? imgPath + item.prodImages
                        : require(`@/assets/img/null.png`)
                    "
                    alt=""
                    class="w-100 img"
                  />
                </div>
              </div>
              <div class="row info">
                <div class="col-12">
                  <div class="row">
                    <div class="col-12 text-center">
                      {{ productNameFilter(item.name) }}
                    </div>
                  </div>
                  <div class="row mt-5">
                    <div class="col-12 text-center price">
                      {{ item.price }}TL
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 text-center">
                      <b>Taksitli Fiyat:</b>
                      <small> 3x{{ (item.price / 3).toFixed(2) }}TL </small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row cla">
                <div class="col-12">
                  <div class="row">
                    <div class="col-12">
                      <input type="number" v-model="quantity" />
                    </div>
                  </div>
                  <div class="row mt-3 text-center">
                    <div class="col-4"><i class="bi bi-cart"></i></div>
                    <div class="col-4"><i class="bi bi-heart"></i></div>
                    <div class="col-4"><i class="bi bi-sliders"></i></div>
                  </div>
                  <div class="row mt-2">
                    <div class="col-12">
                      <button type="button" class="btn btn-primary w-100">
                        Urunu incele <i class="bi bi-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
import _ from 'lodash'
import menu from '../../utils/menu'
export default {
  name: 'CategoryPage',

  data() {
    return {
      isHover: false,
      imgPath: '',
      quantity: 1,
      isNullPage: false,
      sortedProducts: '',
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
  async beforeMount() {
    await this.setAuth()

    const payload = { page: 0 }
    await this.getProduct(payload)

    this.changeSort()
  },

  methods: {
    ...mapActions({
      getProduct: 'products/getProduct',
    }),
    changeSort() {
      const sorted = _.orderBy(
        this.products,
        (o) => o[this.selectedSort.key],
        this.selectedSort.sort
      )
      this.sortedProducts = sorted
      console.log(sorted)
    },
    productNameFilter(name) {
      const text = name
      const splitName = text.split(' ')

      return (
        splitName[0] +
        ' ' +
        splitName[1] +
        ' ' +
        splitName[2] +
        ' ' +
        splitName[3]
      )
    },
    async setAuth() {
      let token
      if (!localStorage.getItem('token')) {
        const payload = {
          userName: process.env.username,
          password: process.env.pass,
        }
        const { data } = await this.$axios.post(`Auth/Login`, payload)
        token = data.data.token
        localStorage.setItem('token', token)
      } else {
        token = localStorage.getItem('token')
      }
      this.$axios.setToken(token, 'Bearer')
    },
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
