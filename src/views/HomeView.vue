<template>
  <DefaultLayout>
    <div class="home-page">
      <!-- 히어로 섹션 -->
      <section class="hero">
        <div class="container">
          <h1 class="hero-title">혁신적인 디지털 솔루션</h1>
          <p class="hero-subtitle">최신 기술과 전문성을 바탕으로 최고의 서비스를 제공합니다</p>
          <div class="hero-buttons">
            <router-link to="/contact" class="btn btn-primary">문의하기</router-link>
            <router-link to="/services" class="btn btn-outline">서비스 보기</router-link>
          </div>
        </div>
      </section>

      <!-- 서비스 섹션 -->
      <section class="services">
        <div class="container">
          <h2 class="section-title">서비스</h2>
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon">
                <i class="fas fa-laptop-code"></i>
              </div>
              <h3>웹 개발</h3>
              <p>최신 웹 기술을 활용한 반응형 웹사이트 개발</p>
            </div>
            <div class="service-card">
              <div class="service-icon">
                <i class="fas fa-mobile-alt"></i>
              </div>
              <h3>모바일 앱</h3>
              <p>iOS와 Android를 위한 네이티브 앱 개발</p>
            </div>
            <div class="service-card">
              <div class="service-icon">
                <i class="fas fa-paint-brush"></i>
              </div>
              <h3>UI/UX 디자인</h3>
              <p>사용자 중심의 직관적인 디자인</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 최근 프로젝트 섹션 -->
      <section class="recent-projects">
        <div class="container">
          <h2 class="section-title">최근 프로젝트</h2>
          <ProjectSlider />
        </div>
      </section>

      <!-- 문의하기 섹션 -->
      <section class="contact">
        <div class="container">
          <div class="contact-content">
            <div class="contact-info">
              <h2>프로젝트를 시작하세요</h2>
              <p>당신의 비즈니스를 위한 최적의 솔루션을 제안해 드립니다.</p>
              <router-link to="/contact" class="btn btn-primary">문의하기</router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import ProjectSlider from '@/components/ProjectSlider.vue'

export default {
  name: 'HomeView',
  components: {
    DefaultLayout,
    ProjectSlider
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  .hero {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://via.placeholder.com/1920x1080');
    background-size: cover;
    background-position: center;
    color: white;
    padding: 160px 0;
    text-align: center;
  }

  .hero-title {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 24px;
  }

  .hero-subtitle {
    font-size: 24px;
    opacity: 0.9;
    margin-bottom: 32px;
  }

  .hero-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 24px;
  }

  .section-title {
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 48px;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  .service-card {
    background: white;
    padding: 32px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-5px);
    }
  }

  .service-icon {
    font-size: 48px;
    color: var(--primary-600);
    margin-bottom: 24px;
  }

  .service-card h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .service-card p {
    color: var(--gray-600);
    line-height: 1.6;
  }

  .recent-projects {
    background-color: var(--gray-100);
  }

  .contact {
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://via.placeholder.com/1920x1080');
    background-size: cover;
    background-position: center;
    color: white;
  }

  .contact-content {
    text-align: center;
  }

  .contact-info {
    max-width: 600px;
    margin: 0 auto;

    h2 {
      font-size: 36px;
      font-weight: 700;
      margin-bottom: 24px;
    }

    p {
      font-size: 18px;
      opacity: 0.9;
      margin-bottom: 32px;
    }
  }

  .btn {
    display: inline-block;
    padding: 12px 24px;
    border-radius: 6px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s;
    cursor: pointer;
    border: none;

    &.btn-primary {
      background-color: var(--primary-600);
      color: white;

      &:hover {
        background-color: var(--primary-700);
      }
    }

    &.btn-outline {
      background-color: transparent;
      color: white;
      border: 2px solid white;

      &:hover {
        background-color: white;
        color: var(--gray-900);
      }
    }
  }
}
</style> 