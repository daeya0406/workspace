<template>
  <div class="flex flex-column min-h-screen">
    <Header />

    <main class="flex-1 p-24">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';

export default {
  name: 'DefaultLayout',
  components: { Header, Footer }
};
</script>

<style scoped lang="scss">
/* flex-column, flex-1 유틸이 필요하다면
   utilities/_utilities.scss 에 아래처럼 추가하세요:

   .flex-column { flex-direction: column !important; }
   .flex-1 { flex: 1 1 auto !important; }
*/
</style>
