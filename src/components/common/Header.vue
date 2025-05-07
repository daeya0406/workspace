<template>
  <header class="flex justify-between align-center px-24 py-16 bg-primary600 text-white">
    <!-- 좌측 네비 -->
    <nav class="flex align-center gap-16">
      <router-link to="/" exact class="body1 text-white" active-class="font-bold">
        Dashboard
      </router-link>
      <router-link to="/issue" class="body1 text-white" active-class="font-bold">
        Issue
      </router-link>
    </nav>
    <!-- 우측 로고나 사용자 메뉴 등 -->
    <div class="body2">내용</div>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped lang="scss">
// scoped 로 감싸되, 글로벌 유틸리티는 그대로 사용 가능합니다.
</style>
