<template>
  <div class="auth-layout">
    <div class="auth-container">
      <div class="auth-logo mb-32">
        <img src="@/assets/logo.png" alt="Logo" class="h-40" />
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>

<style lang="scss" scoped>
.auth-layout {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-100);
}

.auth-container {
  width: 100%;
  max-width: 400px;
  padding: 32px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.auth-logo {
  text-align: center;
}
</style> 