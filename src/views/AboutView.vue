<template>
  <SubLayout>
    <div class="about-page">
      <!-- 히어로 섹션 -->
      <section class="hero">
        <div class="container">
          <h1 class="hero-title">회사 소개</h1>
          <p class="hero-subtitle">혁신적인 기술과 창의적인 솔루션으로 미래를 만들어갑니다</p>
        </div>
      </section>

      <!-- 회사 소개 섹션 -->
      <section class="about-section">
        <div class="container">
          <div class="about-content">
            <div class="about-text">
              <h2>우리의 이야기</h2>
              <p>저희는 2020년에 설립된 이래로, 디지털 혁신을 선도하는 기업으로 성장해왔습니다. 최신 기술과 창의적인 접근 방식을 통해 고객의 비즈니스 성장을 지원하고 있습니다.</p>
              <p>우리의 목표는 단순한 기술 제공을 넘어, 고객의 비즈니스 성공을 위한 진정한 파트너가 되는 것입니다.</p>
            </div>
            <div class="about-image">
              <img src="https://via.placeholder.com/600x400" alt="회사 이미지">
            </div>
          </div>
        </div>
      </section>

      <!-- 핵심 가치 섹션 -->
      <section class="values-section">
        <div class="container">
          <h2 class="section-title">핵심 가치</h2>
          <div class="values-grid">
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-lightbulb"></i>
              </div>
              <h3>혁신</h3>
              <p>끊임없는 혁신을 통해 새로운 가치를 창출합니다</p>
            </div>
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-handshake"></i>
              </div>
              <h3>신뢰</h3>
              <p>고객과의 신뢰 관계를 최우선으로 생각합니다</p>
            </div>
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-users"></i>
              </div>
              <h3>협력</h3>
              <p>팀워크를 통해 더 큰 성과를 만들어냅니다</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 팀 소개 섹션 -->
      <section class="team-section">
        <div class="container">
          <h2 class="section-title">우리의 팀</h2>
          <div class="team-grid">
            <div class="team-card">
              <div class="team-image">
                <img src="https://via.placeholder.com/300x300" alt="팀원 1">
              </div>
              <h3>김철수</h3>
              <p>CEO</p>
            </div>
            <div class="team-card">
              <div class="team-image">
                <img src="https://via.placeholder.com/300x300" alt="팀원 2">
              </div>
              <h3>이영희</h3>
              <p>CTO</p>
            </div>
            <div class="team-card">
              <div class="team-image">
                <img src="https://via.placeholder.com/300x300" alt="팀원 3">
              </div>
              <h3>박지민</h3>
              <p>디자인 디렉터</p>
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

  .about-section {
    padding: 80px 0;
  }

  .about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
  }

  .about-text {
    h2 {
      font-size: 36px;
      font-weight: 700;
      margin-bottom: 24px;
    }

    p {
      font-size: 18px;
      line-height: 1.8;
      color: #666;
      margin-bottom: 16px;
    }
  }

  .about-image {
    img {
      width: 100%;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  }

  .values-section {
    background-color: #f8f9fa;
    padding: 80px 0;
  }

  .section-title {
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 48px;
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
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-5px);
    }
  }

  .value-icon {
    font-size: 48px;
    color: #135ce6;
    margin-bottom: 24px;
  }

  .value-card h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .value-card p {
    color: #666;
    line-height: 1.6;
  }

  .team-section {
    padding: 80px 0;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  .team-card {
    text-align: center;
  }

  .team-image {
    margin-bottom: 24px;
    
    img {
      width: 100%;
      border-radius: 50%;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  }

  .team-card h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .team-card p {
    color: #666;
  }

  @media (max-width: 992px) {
    .about-content {
      grid-template-columns: 1fr;
    }

    .values-grid,
    .team-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .values-grid,
    .team-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style> 