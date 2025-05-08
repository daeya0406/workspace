<template>
  <SubLayout>
    <div class="about-page">
      <!-- 히어로 섹션 -->
      <section class="hero">
        <div class="container">
          <h1 class="hero-title">회사 소개</h1>
          <p class="hero-subtitle">혁신적인 디지털 솔루션을 제공하는 당신의 신뢰할 수 있는 파트너</p>
        </div>
      </section>

      <!-- 회사 소개 섹션 -->
      <section class="about-content">
        <div class="container">
          <div class="about-grid">
            <div class="about-text">
              <h2>우리의 이야기</h2>
              <p>2010년 설립된 이래로, 우리는 고객의 디지털 성공을 위해 최선을 다해왔습니다. 최신 기술과 창의적인 솔루션을 통해 비즈니스의 성장을 지원합니다.</p>
              <p>우리의 전문성과 경험은 웹 개발, 모바일 앱 개발, UI/UX 디자인 등 다양한 분야에서 빛을 발합니다. 각 프로젝트마다 최고의 결과물을 제공하기 위해 노력합니다.</p>
            </div>
            <div class="about-image">
              <img src="https://via.placeholder.com/600x400" alt="회사 이미지" />
            </div>
          </div>
        </div>
      </section>

      <!-- 핵심 가치 섹션 -->
      <section class="values">
        <div class="container">
          <h2 class="section-title">핵심 가치</h2>
          <div class="values-grid">
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-lightbulb"></i>
              </div>
              <h3>혁신</h3>
              <p>끊임없는 혁신을 통해 최고의 솔루션을 제공합니다.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-handshake"></i>
              </div>
              <h3>신뢰</h3>
              <p>고객과의 신뢰 관계를 최우선으로 생각합니다.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-users"></i>
              </div>
              <h3>협력</h3>
              <p>팀워크를 통해 더 큰 가치를 창출합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 팀 소개 섹션 -->
      <section class="team">
        <div class="container">
          <h2 class="section-title">우리의 팀</h2>
          <div class="team-grid">
            <div class="team-member">
              <img src="https://via.placeholder.com/300x300" alt="팀원 1" />
              <h3>홍길동</h3>
              <p>CEO</p>
            </div>
            <div class="team-member">
              <img src="https://via.placeholder.com/300x300" alt="팀원 2" />
              <h3>김철수</h3>
              <p>CTO</p>
            </div>
            <div class="team-member">
              <img src="https://via.placeholder.com/300x300" alt="팀원 3" />
              <h3>이영희</h3>
              <p>디자인 디렉터</p>
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
  name: 'AboutView',
  components: {
    SubLayout
  }
}
</script>

<style lang="scss" scoped>
.about-page {
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

  .about-content {
    padding: 80px 0;
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
  }

  .about-text {
    h2 {
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 24px;
    }

    p {
      color: var(--gray-700);
      line-height: 1.8;
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .about-image {
    img {
      width: 100%;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  }

  .values {
    background-color: var(--gray-50);
    padding: 80px 0;
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  .value-card {
    background: white;
    padding: 32px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-5px);
    }
  }

  .value-icon {
    font-size: 40px;
    color: var(--primary-600);
    margin-bottom: 24px;
  }

  .value-card h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .value-card p {
    color: var(--gray-600);
    line-height: 1.6;
  }

  .team {
    padding: 80px 0;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  .team-member {
    text-align: center;

    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      margin-bottom: 24px;
      object-fit: cover;
    }

    h3 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 8px;
    }

    p {
      color: var(--gray-600);
    }
  }

  @media (max-width: 768px) {
    .about-grid {
      grid-template-columns: 1fr;
    }

    .values-grid,
    .team-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style> 