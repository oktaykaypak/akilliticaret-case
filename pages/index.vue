<template>
  <div class="container">
    <section class="mb-5 pb-5">
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="1920"
        img-height="1080"
        interval="3000"
      >
        <b-carousel-slide
          caption="Mukemmel Beyaz Esya Indirimleri"
          img-src="@/assets/img/1.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Acaip Beyaz Esya Indirimleri"
          img-src="@/assets/img/2.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Fennaa Beyaz Esya Indirimleri"
          img-src="@/assets/img/3.jpg"
        ></b-carousel-slide>
      </b-carousel>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>
