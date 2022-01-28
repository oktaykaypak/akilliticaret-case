<template>
  <footer>
    <div class="container">
      <div class="row p-5 justify-content-between">
        <div v-for="item in footerNavItems" :key="item.name" class="items">
          <h6>{{ item.header }}</h6>
          <ol class="mt-3">
            <li v-for="link in item.links" :key="link.title">
              {{ link.title }}
            </li>
          </ol>
        </div>
        <div class="items">
          <h6>Bizi Takip Edin</h6>
          <div class="row mt-3">
            <div class="col-12">
              <i class="bi bi-facebook mr-2"></i>
              <i class="bi bi-twitter mr-2"></i>
              <i class="bi bi-youtube mr-2"></i>
              <i class="bi bi-instagram mr-2"></i>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-12">
              <small> E-Bultene abone olun, guncellemeleri kacirmayin. </small>
            </div>
          </div>
          <div class="row">
            <div class="col-12 d-flex">
              <input
                type="text"
                class="w-100"
                placeholder="E-Posta Adresiniz"
              />
              <button class="btn btn-primary">
                <i class="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="row align-items-center justify-content-between">
        <small> copyright © 2022 Karma - Kirmizi </small>
        <img style="width: 100px" src="@/assets/img/a-logo.png" alt="" />
      </div>
    </div>
  </footer>
</template>

<script>
import footerNav from '../../utils/footer'
export default {
  name: 'FooterComponent',
  data() {
    return {
      footerNavItems: footerNav,
    }
  },
}
</script>

<style></style>
