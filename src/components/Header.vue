<template>
  <header class="header" :class="{ 'header-hidden': isHeaderHidden, 'header-scrolled': isScrolled }">
    <div class="container">
      <div class="header__content">
        <router-link to="/" class="header__logo">
          <span class="logo-text">Company</span>
        </router-link>
        
        <nav class="nav" :class="{ 'active': isMenuOpen }">
          <router-link to="/" class="nav-link" @click="closeMenu">홈</router-link>
          <router-link to="/about" class="nav-link" @click="closeMenu">소개</router-link>
          <router-link to="/services" class="nav-link" @click="closeMenu">서비스</router-link>
          <router-link to="/portfolio" class="nav-link" @click="closeMenu">포트폴리오</router-link>
          <router-link to="/contact" class="nav-link" @click="closeMenu">문의하기</router-link>
        </nav>

        <button class="menu-toggle" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isScrolled: false,
      isHeaderHidden: false,
      lastScrollY: 0,
      isMenuOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const currentScrollY = window.scrollY
      
      // 스크롤 위치에 따른 헤더 표시/숨김
      if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
        this.isHeaderHidden = true
      } else {
        this.isHeaderHidden = false
      }
      
      // 스크롤 위치에 따른 헤더 스타일 변경
      this.isScrolled = currentScrollY > 50
      
      this.lastScrollY = currentScrollY
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : ''
    },
    closeMenu() {
      this.isMenuOpen = false
      document.body.style.overflow = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 1000;

  &.header-hidden {
    transform: translateY(-100%);
  }

  &.header-scrolled {
    height: 70px;
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
}

.header__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.header__logo {
  .logo-text {
    font-size: 24px;
    font-weight: bold;
    color: #135ce6;
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
      text-shadow: 0 2px 4px rgba(19, 92, 230, 0.2);
    }
  }
}

.nav {
  display: flex;
  gap: 2rem;
  
  .nav-link {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    padding: 0.5rem 0;
    position: relative;
    transition: all 0.3s ease;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #135ce6;
      transition: width 0.3s ease;
    }
    
    &:hover {
      color: #135ce6;
      
      &::after {
        width: 100%;
      }
    }
    
    &.router-link-active {
      color: #135ce6;
      
      &::after {
        width: 100%;
      }
    }
  }
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 1001;
  
  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: #333;
    transition: all 0.3s ease;
  }
  
  &.active {
    span {
      &:first-child {
        transform: translateY(8px) rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:last-child {
        transform: translateY(-8px) rotate(-45deg);
      }
    }
  }
}

@media (max-width: 768px) {
  .nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    padding: 6rem 2rem 2rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    transition: all 0.3s ease;
    box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
    
    &.active {
      right: 0;
    }
  }
  
  .menu-toggle {
    display: flex;
  }
  
  .header {
    &.header-scrolled {
      height: 80px;
    }
  }
}
</style> 