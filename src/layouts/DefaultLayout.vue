<template>
  <div>
    <header>
      <h1>My Jira Clone</h1>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style scoped>
header {
  background: #3498db;
  color: #fff;
  padding: 1rem;
}
main {
  padding: 1rem;
}
</style>
