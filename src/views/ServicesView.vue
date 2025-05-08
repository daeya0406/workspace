<template>
  <SubLayout>
    <div class="services-page">
      <!-- 히어로 섹션 -->
      <section class="hero">
        <div class="container">
          <h1 class="hero-title">서비스</h1>
          <p class="hero-subtitle">최신 기술과 전문성을 바탕으로 최고의 서비스를 제공합니다</p>
        </div>
      </section>

      <!-- 서비스 목록 섹션 -->
      <section class="services-section">
        <div class="container">
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon">
                <i class="fas fa-laptop-code"></i>
              </div>
              <h3>웹 개발</h3>
              <p>최신 웹 기술을 활용한 반응형 웹사이트 개발</p>
              <ul class="service-features">
                <li>반응형 웹 디자인</li>
                <li>프론트엔드 개발</li>
                <li>백엔드 개발</li>
                <li>데이터베이스 설계</li>
              </ul>
            </div>
            <div class="service-card">
              <div class="service-icon">
                <i class="fas fa-mobile-alt"></i>
              </div>
              <h3>모바일 앱</h3>
              <p>iOS와 Android를 위한 네이티브 앱 개발</p>
              <ul class="service-features">
                <li>iOS 앱 개발</li>
                <li>Android 앱 개발</li>
                <li>크로스 플랫폼 개발</li>
                <li>앱 스토어 등록</li>
              </ul>
            </div>
            <div class="service-card">
              <div class="service-icon">
                <i class="fas fa-paint-brush"></i>
              </div>
              <h3>UI/UX 디자인</h3>
              <p>사용자 중심의 직관적인 디자인</p>
              <ul class="service-features">
                <li>UI 디자인</li>
                <li>UX 디자인</li>
                <li>브랜드 아이덴티티</li>
                <li>디자인 시스템</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </SubLayout>
</template>

<script>
import SubLayout from '../layouts/SubLayout.vue'

export default {
  name: 'ServicesView',
  components: {
    SubLayout
  }
}
</script>

<style lang="scss" scoped>
.services-page {
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
  }

  .services-section {
    padding: 80px 0;
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
    color: #135ce6;
    margin-bottom: 24px;
  }

  .service-card h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .service-card p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 24px;
  }

  .service-features {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: left;

    li {
      padding: 8px 0;
      color: #666;
      border-bottom: 1px solid #eee;

      &:last-child {
        border-bottom: none;
      }
    }
  }

  @media (max-width: 992px) {
    .services-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .services-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style> 