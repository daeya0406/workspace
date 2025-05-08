<template>
  <div class="sub-layout">
    <Header />
    <div class="layout-container">
      <main class="main-content">
        <slot></slot>
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'SubLayout',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.sub-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.layout-container {
  flex: 1;
  display: flex;
  margin-top: 80px;
  min-height: calc(100vh - 80px);
  position: relative;
}

.main-content {
  flex: 1;
  padding: 2rem;
  background-color: #f8f9fa;
}

@media (max-width: 768px) {
  .layout-container {
    flex-direction: column;
  }

  .main-content {
    padding: 1rem;
  }
}
</style> 