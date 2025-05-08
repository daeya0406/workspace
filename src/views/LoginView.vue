<template>
  <AuthLayout>
    <div class="login-form">
      <h1 class="text-2xl font-bold mb-24">로그인</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group mb-16">
          <label class="form-label">이메일</label>
          <input type="email" class="form-control" v-model="email" required />
        </div>
        <div class="form-group mb-24">
          <label class="form-label">비밀번호</label>
          <input type="password" class="form-control" v-model="password" required />
        </div>
        <button type="submit" class="btn btn-primary w-full">로그인</button>
      </form>
      <div class="mt-16 text-center">
        <router-link to="/signup" class="text-primary-600">회원가입</router-link>
      </div>
    </div>
  </AuthLayout>
</template>

<script>
import AuthLayout from '@/layouts/AuthLayout.vue'

export default {
  name: 'LoginView',
  components: {
    AuthLayout
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      // 임시 로그인 처리
      localStorage.setItem('token', 'dummy-token');
      this.$router.push('/dashboard');
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  width: 100%;
}

.form-group {
  margin-bottom: 16px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

.form-control {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--gray-300);
  border-radius: 6px;
  
  &:focus {
    outline: none;
    border-color: var(--primary-600);
    box-shadow: 0 0 0 2px rgba(var(--primary-600-rgb), 0.1);
  }
}
</style> 