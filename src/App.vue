<template>
  <div class="app">
    <SubSidebar v-if="showSidebar" ref="sidebar" />
    <component :is="layout" :class="{ 'sidebar-collapsed': isSidebarCollapsed }">
      <router-view />
    </component>
  </div>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import SubLayout from '@/layouts/SubLayout.vue'
import SubSidebar from '@/components/SubSidebar.vue'

export default {
  name: 'App',
  components: {
    DefaultLayout,
    SubLayout,
    SubSidebar
  },
  data() {
    return {
      isSidebarCollapsed: false
    }
  },
  computed: {
    layout() {
      return this.$route.meta.layout || DefaultLayout
    },
    showSidebar() {
      return this.$route.meta.layout === SubLayout
    }
  },
  mounted() {
    if (this.$refs.sidebar) {
      this.$refs.sidebar.$watch('isCollapsed', (newValue) => {
        this.isSidebarCollapsed = newValue
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/layout.scss';

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

#app {
  height: 100%;
}

.app {
  min-height: 100vh;
  display: flex;
}

.sidebar-collapsed {
  margin-left: 60px;
}
</style>
