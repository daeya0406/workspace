<template>
  <SubLayout>
    <div class="layout-guide-page">
      <h1>레이아웃 가이드</h1>
      
      <section class="guide-section">
        <h2>레이아웃 구조</h2>
        <div class="guide-content">
          <div class="structure-diagram">
            <div class="header-box">Header</div>
            <div class="main-content">
              <div class="sidebar-box">Sidebar</div>
              <div class="content-box">Main Content</div>
            </div>
            <div class="footer-box">Footer</div>
          </div>
          <div class="structure-description">
            <p>기본 레이아웃은 Header, Sidebar, Main Content, Footer로 구성됩니다.</p>
            <ul>
              <li>Header: 상단 고정, 높이 64px</li>
              <li>Sidebar: 좌측 고정, 너비 240px</li>
              <li>Main Content: 가변 너비, 최소 높이 계산</li>
              <li>Footer: 하단 고정, 높이 60px</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="guide-section">
        <h2>제목 추가 규칙</h2>
        <div class="guide-content">
          <div class="title-example">
            <h1>페이지 제목 (h1)</h1>
            <h2>섹션 제목 (h2)</h2>
            <h3>카드 제목 (h3)</h3>
          </div>
          <div class="title-description">
            <p>제목은 계층 구조를 따라 사용합니다:</p>
            <ul>
              <li>h1: 페이지의 메인 제목</li>
              <li>h2: 주요 섹션 제목</li>
              <li>h3: 카드나 작은 섹션의 제목</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </SubLayout>
</template>

<script>
import SubLayout from '@/layouts/SubLayout.vue'

export default {
  name: 'LayoutGuideView',
  components: {
    SubLayout
  }
}
</script>

<style lang="scss" scoped>
.layout-guide-page {
  padding: 2rem;
  min-height: calc(100vh - 64px - 60px);
  
  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 3rem;
    text-align: center;
  }
}

.guide-section {
  margin-bottom: 4rem;
  
  h2 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #eee;
  }
}

.guide-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.structure-diagram {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  .header-box {
    background: #135ce6;
    color: white;
    padding: 1rem;
    text-align: center;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
  
  .main-content {
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
    
    .sidebar-box {
      background: #e9ecef;
      padding: 1rem;
      text-align: center;
      border-radius: 8px;
    }
    
    .content-box {
      background: #fff;
      padding: 1rem;
      text-align: center;
      border-radius: 8px;
      border: 2px dashed #dee2e6;
    }
  }
  
  .footer-box {
    background: #135ce6;
    color: white;
    padding: 1rem;
    text-align: center;
    border-radius: 8px;
  }
}

.structure-description {
  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 0.5rem;
      color: #666;
      
      &::before {
        content: "•";
        position: absolute;
        left: 0;
        color: #135ce6;
      }
    }
  }
}

.title-example {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    text-align: left;
  }
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    border-bottom: none;
    padding-bottom: 0;
  }
  
  h3 {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 1rem;
  }
}

.title-description {
  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 0.5rem;
      color: #666;
      
      &::before {
        content: "•";
        position: absolute;
        left: 0;
        color: #135ce6;
      }
    }
  }
}

@media (max-width: 768px) {
  .layout-guide-page {
    padding: 1rem;
    
    h1 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
  
  .guide-content {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .structure-diagram {
    .main-content {
      grid-template-columns: 1fr;
    }
  }
}
</style> 