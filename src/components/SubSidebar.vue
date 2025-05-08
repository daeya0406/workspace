<template>
  <aside class="sub-sidebar" :class="{ 'collapsed': isCollapsed }">
    <div class="sidebar__header">
      <button class="sidebar__toggle" @click="toggleSidebar">
        <i class="fas" :class="isCollapsed ? 'fa-chevron-right' : 'fa-chevron-left'"></i>
      </button>
    </div>
    
    <div class="sidebar__content">
      <div class="sidebar__section">
        <h3 class="sidebar__title" v-show="!isCollapsed">메인</h3>
        <router-link to="/dashboard" class="sidebar__link">
          <i class="fas fa-chart-line"></i>
          <span>대시보드</span>
        </router-link>
        
        <router-link to="/layout-guide" class="sidebar__link">
          <i class="fas fa-code"></i>
          <span>레이아웃 가이드</span>
        </router-link>
      </div>

      <div class="sidebar__section">
        <h3 class="sidebar__title" v-show="!isCollapsed">서비스</h3>
        <router-link to="/about" class="sidebar__link">
          <i class="fas fa-building"></i>
          <span>회사 소개</span>
        </router-link>
        
        <router-link to="/services" class="sidebar__link">
          <i class="fas fa-cogs"></i>
          <span>서비스</span>
        </router-link>
        
        <router-link to="/portfolio" class="sidebar__link">
          <i class="fas fa-briefcase"></i>
          <span>포트폴리오</span>
        </router-link>
      </div>

      <div class="sidebar__section">
        <h3 class="sidebar__title" v-show="!isCollapsed">설정</h3>
        <router-link to="/settings" class="sidebar__link">
          <i class="fas fa-cog"></i>
          <span>설정</span>
        </router-link>
        
        <router-link to="/contact" class="sidebar__link">
          <i class="fas fa-envelope"></i>
          <span>문의하기</span>
        </router-link>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SubSidebar',
  data() {
    return {
      isCollapsed: false
    }
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed
    }
  }
}
</script>

<style lang="scss" scoped>
.sub-sidebar {
  width: 250px;
  height: 100%;
  background-color: #fff;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 900;
  overflow-y: auto;
  
  &.collapsed {
    width: 60px;
    
    .sidebar__link {
      padding: 1rem;
      justify-content: center;
      
      span {
        display: none;
      }
    }
  }
}

.sidebar__header {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  z-index: 1;
}

.sidebar__toggle {
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #f5f5f5;
    color: #135ce6;
  }
  
  i {
    font-size: 1rem;
  }
}

.sidebar__content {
  padding: 1rem 0;
}

.sidebar__section {
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
}

.sidebar__title {
  padding: 0 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.sidebar__link {
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  color: #666;
  text-decoration: none;
  transition: all 0.3s ease;
  
  i {
    width: 20px;
    margin-right: 1rem;
    font-size: 1.1rem;
  }
  
  span {
    font-size: 0.95rem;
    font-weight: 500;
  }
  
  &:hover {
    background-color: #f5f5f5;
    color: #135ce6;
  }
  
  &.router-link-active {
    background-color: #f0f4ff;
    color: #135ce6;
    border-right: 3px solid #135ce6;
  }
}

@media (max-width: 768px) {
  .sub-sidebar {
    width: 60px;
    
    .sidebar__link {
      padding: 1rem;
      justify-content: center;
      
      span {
        display: none;
      }
    }
  }
}

// 스크롤바 스타일링
.sub-sidebar {
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
}
</style> 