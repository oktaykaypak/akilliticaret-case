<template>
  <div id="bb">
    <ol>
      <li>
        <nuxt-link to="/">
          <span property="name">Anasayfa</span>
        </nuxt-link>
        <meta property="position" content="1" />
      </li>
      <li v-for="(crumb, index) in crumbs" :key="index">
        <nuxt-link :to="crumb.path">
          <span>{{
            $route.fullPath === crumb.path && title !== null
              ? title
              : crumb.title
          }}</span>
        </nuxt-link>
        <meta property="position" :content="index + 2" />
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumb',
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')
      const crumbs = []
      let path = ''
      params.forEach((param) => {
        path = `${path}/${param}`
        const match = this.$router.match(path)
        if (match.name !== null) {
          crumbs.push({
            title: param.replace(/-/g, ' '),
            ...match,
          })
        }
      })
      return crumbs
    },
  },
}
</script>

<style lang="scss" scoped></style>
