<template>
  <header>
    <div class="desk">
      <section id="info">
        <div class="container">
          <div class="row">
            <div class="col-6">
              <i class="bi bi-facebook mr-2"></i>
              <i class="bi bi-twitter mr-2"></i>
              <i class="bi bi-youtube mr-2"></i>
              <i class="bi bi-instagram mr-2"></i>
            </div>
            <div class="col-6 text-right">
              <nuxt-link to="#">Yardim</nuxt-link>
              <nuxt-link to="/blog">Blog</nuxt-link>
            </div>
          </div>
        </div>
      </section>
      <section class="mt-3">
        <div class="container">
          <div class="row">
            <div class="col-2 logo">
              <nuxt-link to="/">
                <img src="@/assets/img/logo.png" class="w-100" alt="" />
              </nuxt-link>
            </div>
            <div class="col-6 d-flex" id="search">
              <input
                v-model="search"
                type="text"
                placeholder="Ne Aramistiniz..."
              />
              <button class="btn btn-primary">
                <i class="bi bi-search"></i>
              </button>
            </div>
            <div
              class="col-2 d-flex align-items-center justify-content-center c-pointer"
            >
              <div class="icon-user mr-2">
                <i class="bi bi-person"></i>
              </div>
              <div class="text d-flex flex-column mr-4">
                Giris Yap <small>veya uye ol</small>
              </div>
              <div class="icon"><i class="bi bi-chevron-down"></i></div>
            </div>
            <div class="col-2 d-flex align-items-center c-pointer">
              <div class="icon-user mr-2">
                <i class="bi bi-cart"></i>
              </div>
              <div class="text d-flex flex-column mr-4">
                Sepet <small>0,00TL</small>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="menu mt-3" id="nav">
        <div class="container">
          <div class="row justify-content-start">
            <div
              v-for="item in menuItems"
              :key="item.name"
              class="menu-item"
              :title="item.title"
            >
              <nuxt-link :to="item.url">
                {{ item.title }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="mobile">
      <section id="info">
        <div class="container">
          <div class="row">
            <div class="col-6">
              <i class="bi bi-facebook mr-2"></i>
              <i class="bi bi-twitter mr-2"></i>
              <i class="bi bi-youtube mr-2"></i>
              <i class="bi bi-instagram mr-2"></i>
            </div>
            <div class="col-6 text-right">
              <nuxt-link to="#">Yardim</nuxt-link>
              <nuxt-link to="/blog">Blog</nuxt-link>
            </div>
          </div>
        </div>
      </section>
      <section class="my-3">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-8 logo">
              <nuxt-link to="/">
                <img src="@/assets/img/logo.png" class="w-100" alt="" />
              </nuxt-link>
            </div>
            <div
              class="col-4 text-right"
              @click="isActive = true"
              style="font-size: 20px"
            >
              <i class="bi bi-list"></i>
            </div>
            <div class="m-menu" :class="{ open: isActive }">
              <div class="row justify-content-between align-items-center">
                <div class="col-3 mr-2">
                  <i class="bi bi-person mr-3"></i><i class="bi bi-cart"></i>
                </div>
                <div class="col-2 text-right" @click="isActive = false">
                  <i class="bi bi-x-lg"></i>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12 d-flex" id="search">
                  <input
                    v-model="search"
                    type="text"
                    placeholder="Ne Aramistiniz..."
                  />
                  <button class="btn btn-primary">
                    <i class="bi bi-search"></i>
                  </button>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12 d-flex flex-column">
                  <span
                    v-for="item in menuItems"
                    :key="item.name"
                    class="m-menu-item"
                    :title="item.title"
                    @click="isActive = false"
                  >
                    <nuxt-link :to="item.url">
                      {{ item.title }}
                    </nuxt-link></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </header>
</template>

<script>
import menu from '../../utils/menu'
export default {
  name: 'HeaderComponent',
  data() {
    return {
      menuItems: menu,
      search: '',
      isActive: false,
    }
  },
  beforeMount() {
  },
}
</script>

<style></style>
