<template>
  <div class="dashboard-layout">
    <aside class="dashboard-sidebar">
      <div class="sidebar-header p-16">
        <img src="@/assets/logo.png" alt="Logo" class="h-32" />
      </div>
      <nav class="sidebar-nav">
        <router-link to="/dashboard" class="nav-item">
          <i class="fas fa-home"></i>
          <span>대시보드</span>
        </router-link>
        <router-link to="/profile" class="nav-item">
          <i class="fas fa-user"></i>
          <span>프로필</span>
        </router-link>
        <router-link to="/settings" class="nav-item">
          <i class="fas fa-cog"></i>
          <span>설정</span>
        </router-link>
      </nav>
    </aside>
    <main class="dashboard-main">
      <header class="dashboard-header">
        <div class="header-left">
          <h1 class="text-xl font-bold">{{ pageTitle }}</h1>
        </div>
        <div class="header-right">
          <button class="btn btn-primary">
            <i class="fas fa-plus"></i>
            새로 만들기
          </button>
        </div>
      </header>
      <div class="dashboard-content">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'DashboardLayout',
  props: {
    pageTitle: {
      type: String,
      default: '대시보드'
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-layout {
  display: flex;
  min-height: 100vh;
}

.dashboard-sidebar {
  width: 240px;
  background-color: var(--gray-900);
  color: white;
}

.sidebar-header {
  border-bottom: 1px solid var(--gray-800);
}

.sidebar-nav {
  padding: 16px;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: var(--gray-400);
  border-radius: 6px;
  margin-bottom: 8px;
  transition: all 0.2s;

  &:hover {
    background-color: var(--gray-800);
    color: white;
  }

  i {
    margin-right: 12px;
  }
}

.dashboard-main {
  flex: 1;
  background-color: var(--gray-100);
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background-color: white;
  border-bottom: 1px solid var(--gray-200);
}

.dashboard-content {
  padding: 24px;
}
</style> 