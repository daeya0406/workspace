<template>
  <div class="sub-layout">
    <Header />
    <SubSidebar ref="sidebar" />
    <main class="main-content" :class="{ 'sidebar-collapsed': isSidebarCollapsed }">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SubSidebar from '@/components/SubSidebar.vue'

export default {
  name: 'SubLayout',
  components: {
    Header,
    Footer,
    SubSidebar
  },
  data() {
    return {
      isSidebarCollapsed: false
    }
  },
  mounted() {
    this.$refs.sidebar.$watch('isCollapsed', (newValue) => {
      this.isSidebarCollapsed = newValue
    })
  }
}
</script>

<style lang="scss" scoped>
.sub-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  margin-left: 250px;
  margin-top: 80px;
  padding: 2rem;
  transition: margin-left 0.3s ease;
  
  &.sidebar-collapsed {
    margin-left: 60px;
  }
}

@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
    padding: 1rem;
    
    &.sidebar-collapsed {
      margin-left: 60px;
    }
  }
}
</style> 