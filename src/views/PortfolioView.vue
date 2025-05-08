<template>
  <SubLayout>
    <div class="portfolio-page">
      <!-- 히어로 섹션 -->
      <section class="hero">
        <div class="container">
          <h1 class="hero-title">포트폴리오</h1>
          <p class="hero-subtitle">최고의 결과물로 증명하는 우리의 실력</p>
        </div>
      </section>

      <!-- 필터 섹션 -->
      <section class="filter-section">
        <div class="container">
          <div class="filter-buttons">
            <button 
              v-for="category in categories" 
              :key="category.id"
              :class="['filter-btn', { active: selectedCategory === category.id }]"
              @click="selectedCategory = category.id"
            >
              {{ category.name }}
            </button>
          </div>
        </div>
      </section>

      <!-- 포트폴리오 그리드 -->
      <section class="portfolio-grid">
        <div class="container">
          <div class="grid">
            <div 
              v-for="project in filteredProjects" 
              :key="project.id"
              class="portfolio-item"
              @click="openProject(project)"
            >
              <div class="portfolio-image">
                <img :src="project.image" :alt="project.title" />
                <div class="overlay">
                  <div class="overlay-content">
                    <h3>{{ project.title }}</h3>
                    <p>{{ project.category }}</p>
                    <button class="view-btn">자세히 보기</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 프로젝트 모달 -->
      <div v-if="selectedProject" class="project-modal" @click="closeProject">
        <div class="modal-content" @click.stop>
          <button class="close-btn" @click="closeProject">&times;</button>
          <div class="modal-body">
            <div class="project-images">
              <img :src="selectedProject.image" :alt="selectedProject.title" />
            </div>
            <div class="project-info">
              <h2>{{ selectedProject.title }}</h2>
              <p class="category">{{ selectedProject.category }}</p>
              <div class="description">
                <h3>프로젝트 개요</h3>
                <p>{{ selectedProject.description }}</p>
              </div>
              <div class="details">
                <h3>주요 기능</h3>
                <ul>
                  <li v-for="(feature, index) in selectedProject.features" :key="index">
                    {{ feature }}
                  </li>
                </ul>
              </div>
              <div class="tech-stack">
                <h3>사용 기술</h3>
                <div class="tech-tags">
                  <span v-for="(tech, index) in selectedProject.technologies" :key="index">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SubLayout>
</template>

<script>
import SubLayout from '@/layouts/SubLayout.vue'

export default {
  name: 'PortfolioView',
  components: {
    SubLayout
  },
  data() {
    return {
      selectedCategory: 'all',
      selectedProject: null,
      categories: [
        { id: 'all', name: '전체' },
        { id: 'web', name: '웹 개발' },
        { id: 'mobile', name: '모바일 앱' },
        { id: 'design', name: 'UI/UX 디자인' }
      ],
      projects: [
        {
          id: 1,
          title: '기업 웹사이트 리뉴얼',
          category: '웹 개발',
          categoryId: 'web',
          image: 'https://via.placeholder.com/800x600',
          description: '대기업 웹사이트의 전면적인 리뉴얼 프로젝트입니다. 사용자 경험을 개선하고 모던한 디자인을 적용했습니다.',
          features: [
            '반응형 웹 디자인',
            'SEO 최적화',
            '성능 개선',
            '보안 강화'
          ],
          technologies: ['Vue.js', 'SCSS', 'Node.js', 'MongoDB']
        },
        {
          id: 2,
          title: '모바일 쇼핑몰 앱',
          category: '모바일 앱',
          categoryId: 'mobile',
          image: 'https://via.placeholder.com/800x600',
          description: '온라인 쇼핑몰의 모바일 앱 개발 프로젝트입니다. 사용자 친화적인 인터페이스와 안정적인 성능을 제공합니다.',
          features: [
            '실시간 상품 검색',
            '장바구니 기능',
            '결제 시스템 연동',
            '푸시 알림'
          ],
          technologies: ['React Native', 'Redux', 'Firebase', 'Node.js']
        },
        {
          id: 3,
          title: '금융 서비스 UI/UX',
          category: 'UI/UX 디자인',
          categoryId: 'design',
          image: 'https://via.placeholder.com/800x600',
          description: '금융 서비스의 사용자 인터페이스와 경험을 개선하는 프로젝트입니다. 직관적이고 신뢰감 있는 디자인을 제공합니다.',
          features: [
            '사용자 리서치',
            '와이어프레임 제작',
            '프로토타입 개발',
            '디자인 시스템 구축'
          ],
          technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle']
        }
      ]
    }
  },
  computed: {
    filteredProjects() {
      if (this.selectedCategory === 'all') {
        return this.projects
      }
      return this.projects.filter(project => project.categoryId === this.selectedCategory)
    }
  },
  methods: {
    openProject(project) {
      this.selectedProject = project
      document.body.style.overflow = 'hidden'
    },
    closeProject() {
      this.selectedProject = null
      document.body.style.overflow = 'auto'
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio-page {
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

  .filter-section {
    padding: 40px 0;
    background-color: var(--gray-50);
  }

  .filter-buttons {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  .filter-btn {
    padding: 8px 24px;
    border: none;
    border-radius: 24px;
    background: white;
    color: var(--gray-700);
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: var(--primary-50);
      color: var(--primary-600);
    }

    &.active {
      background: var(--primary-600);
      color: white;
    }
  }

  .portfolio-grid {
    padding: 80px 0;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  .portfolio-item {
    cursor: pointer;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-8px);

      .overlay {
        opacity: 1;
      }
    }
  }

  .portfolio-image {
    position: relative;
    aspect-ratio: 4/3;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .overlay-content {
    text-align: center;
    color: white;
    padding: 24px;

    h3 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 8px;
    }

    p {
      margin-bottom: 16px;
      opacity: 0.9;
    }
  }

  .view-btn {
    padding: 8px 24px;
    background: var(--primary-600);
    color: white;
    border: none;
    border-radius: 24px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: var(--primary-700);
    }
  }

  .project-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .modal-content {
    background: white;
    width: 90%;
    max-width: 1000px;
    max-height: 90vh;
    border-radius: 8px;
    overflow-y: auto;
    position: relative;
  }

  .close-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    background: none;
    border: none;
    font-size: 32px;
    color: var(--gray-600);
    cursor: pointer;
    z-index: 1;

    &:hover {
      color: var(--gray-800);
    }
  }

  .modal-body {
    padding: 32px;
  }

  .project-images {
    margin-bottom: 32px;

    img {
      width: 100%;
      border-radius: 8px;
    }
  }

  .project-info {
    h2 {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 8px;
    }

    .category {
      color: var(--primary-600);
      font-size: 18px;
      margin-bottom: 24px;
    }

    h3 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 16px;
    }

    .description {
      margin-bottom: 32px;

      p {
        color: var(--gray-700);
        line-height: 1.8;
      }
    }

    .details {
      margin-bottom: 32px;

      ul {
        list-style: none;
        padding: 0;

        li {
          position: relative;
          padding-left: 24px;
          margin-bottom: 12px;
          color: var(--gray-700);

          &::before {
            content: '•';
            position: absolute;
            left: 0;
            color: var(--primary-600);
          }
        }
      }
    }

    .tech-stack {
      .tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        span {
          padding: 4px 16px;
          background: var(--gray-100);
          color: var(--gray-700);
          border-radius: 16px;
          font-size: 14px;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
    }

    .modal-content {
      width: 95%;
    }

    .modal-body {
      padding: 24px;
    }

    .project-info {
      h2 {
        font-size: 24px;
      }

      h3 {
        font-size: 20px;
      }
    }
  }
}
</style> 