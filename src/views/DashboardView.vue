<template>
  <SubLayout>
    <div class="dashboard-page">
      <h1>대시보드</h1>
      <div class="dashboard-grid">
        <div class="dashboard-card">
          <div class="card-header">
            <h3>통계</h3>
            <i class="fas fa-chart-bar"></i>
          </div>
          <div class="card-content">
            <div class="stat-item">
              <span class="stat-label">총 방문자</span>
              <span class="stat-value">1,234</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">신규 가입자</span>
              <span class="stat-value">56</span>
            </div>
          </div>
        </div>
        
        <div class="dashboard-card">
          <div class="card-header">
            <h3>최근 활동</h3>
            <i class="fas fa-history"></i>
          </div>
          <div class="card-content">
            <div class="activity-item">
              <span class="activity-time">10:30</span>
              <span class="activity-text">새로운 프로젝트 등록</span>
            </div>
            <div class="activity-item">
              <span class="activity-time">09:15</span>
              <span class="activity-text">문의사항 답변 완료</span>
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
  name: 'DashboardView',
  components: {
    SubLayout
  }
}
</script>

<style lang="scss" scoped>
.dashboard-page {
  padding: 2rem;
  min-height: calc(100vh - 64px - 60px); // 헤더와 푸터 높이를 제외한 높이
  
  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 3rem;
    text-align: center;
  }
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.dashboard-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-header {
  padding: 1.5rem;
  background: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  
  h3 {
    font-size: 1.2rem;
    color: #333;
    margin: 0;
  }
  
  i {
    font-size: 1.5rem;
    color: #135ce6;
  }
}

.card-content {
  padding: 1.5rem;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
  
  .stat-label {
    color: #666;
  }
  
  .stat-value {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
  }
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
  
  .activity-time {
    color: #666;
    font-size: 0.9rem;
  }
  
  .activity-text {
    color: #333;
  }
}

@media (max-width: 768px) {
  .dashboard-page {
    padding: 1rem;
    
    h1 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
  
  .dashboard-grid {
    gap: 1rem;
  }
}
</style>