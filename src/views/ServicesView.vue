<template>
  <SubLayout>
    <div class="services-page">
      <!-- 히어로 섹션 -->
      <section class="hero">
        <div class="container">
          <h1 class="hero-title">서비스 소개</h1>
          <p class="hero-subtitle">최신 기술과 전문성을 바탕으로 최고의 솔루션을 제공합니다</p>
        </div>
      </section>

      <!-- 서비스 상세 섹션 -->
      <section class="services-detail">
        <div class="container">
          <div class="service-item">
            <div class="service-content">
              <h2>웹 개발</h2>
              <p>최신 웹 기술을 활용한 맞춤형 웹사이트 개발 서비스를 제공합니다. 반응형 디자인과 최적화된 성능으로 사용자 경험을 극대화합니다.</p>
              <ul class="service-features">
                <li><i class="fas fa-check"></i> 반응형 웹 디자인</li>
                <li><i class="fas fa-check"></i> 최적화된 성능</li>
                <li><i class="fas fa-check"></i> SEO 최적화</li>
                <li><i class="fas fa-check"></i> 보안 강화</li>
              </ul>
            </div>
            <div class="service-image">
              <img src="https://via.placeholder.com/600x400" alt="웹 개발" />
            </div>
          </div>

          <div class="service-item reverse">
            <div class="service-content">
              <h2>모바일 앱 개발</h2>
              <p>iOS와 Android를 위한 네이티브 앱을 개발합니다. 사용자 친화적인 인터페이스와 안정적인 성능을 제공합니다.</p>
              <ul class="service-features">
                <li><i class="fas fa-check"></i> 네이티브 앱 개발</li>
                <li><i class="fas fa-check"></i> 크로스 플랫폼 지원</li>
                <li><i class="fas fa-check"></i> 푸시 알림</li>
                <li><i class="fas fa-check"></i> 오프라인 지원</li>
              </ul>
            </div>
            <div class="service-image">
              <img src="https://via.placeholder.com/600x400" alt="모바일 앱" />
            </div>
          </div>

          <div class="service-item">
            <div class="service-content">
              <h2>UI/UX 디자인</h2>
              <p>사용자 중심의 직관적이고 아름다운 디자인을 제공합니다. 사용자 경험을 최우선으로 생각합니다.</p>
              <ul class="service-features">
                <li><i class="fas fa-check"></i> 사용자 리서치</li>
                <li><i class="fas fa-check"></i> 와이어프레임</li>
                <li><i class="fas fa-check"></i> 프로토타입</li>
                <li><i class="fas fa-check"></i> 디자인 시스템</li>
              </ul>
            </div>
            <div class="service-image">
              <img src="https://via.placeholder.com/600x400" alt="UI/UX 디자인" />
            </div>
          </div>
        </div>
      </section>

      <!-- 프로세스 섹션 -->
      <section class="process">
        <div class="container">
          <h2 class="section-title">개발 프로세스</h2>
          <div class="process-steps">
            <div class="process-step">
              <div class="step-number">1</div>
              <h3>요구사항 분석</h3>
              <p>고객의 요구사항을 정확히 파악하고 분석합니다.</p>
            </div>
            <div class="process-step">
              <div class="step-number">2</div>
              <h3>기획 및 디자인</h3>
              <p>최적의 솔루션을 기획하고 디자인합니다.</p>
            </div>
            <div class="process-step">
              <div class="step-number">3</div>
              <h3>개발</h3>
              <p>최신 기술을 활용하여 개발을 진행합니다.</p>
            </div>
            <div class="process-step">
              <div class="step-number">4</div>
              <h3>테스트 및 배포</h3>
              <p>철저한 테스트 후 안정적으로 배포합니다.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </SubLayout>
</template>

<script>
import SubLayout from '@/layouts/SubLayout.vue'

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
    padding: 80px 0;
    text-align: center;
  }

  .hero-title {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .hero-subtitle {
    font-size: 18px;
    opacity: 0.9;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .section-title {
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 48px;
  }

  .services-detail {
    padding: 80px 0;
  }

  .service-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
    margin-bottom: 80px;

    &:last-child {
      margin-bottom: 0;
    }

    &.reverse {
      direction: rtl;

      .service-content {
        direction: ltr;
      }
    }
  }

  .service-content {
    h2 {
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 24px;
    }

    p {
      color: var(--gray-700);
      line-height: 1.8;
      margin-bottom: 24px;
    }
  }

  .service-features {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
      color: var(--gray-700);

      i {
        color: var(--primary-600);
      }
    }
  }

  .service-image {
    img {
      width: 100%;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  }

  .process {
    background-color: var(--gray-50);
    padding: 80px 0;
  }

  .process-steps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }

  .process-step {
    text-align: center;
    padding: 32px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .step-number {
    width: 48px;
    height: 48px;
    background: var(--primary-600);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 600;
    margin: 0 auto 24px;
  }

  .process-step h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .process-step p {
    color: var(--gray-600);
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .service-item {
      grid-template-columns: 1fr;
      gap: 32px;
    }

    .process-steps {
      grid-template-columns: 1fr;
    }
  }
}
</style> 