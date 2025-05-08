<template>
  <DashboardLayout page-title="대시보드">
    <div class="dashboard-grid">
      <!-- 통계 카드 -->
      <div class="stat-card">
        <div class="stat-icon bg-primary-100 text-primary-600">
          <i class="fas fa-users"></i>
        </div>
        <div class="stat-content">
          <h3 class="stat-title">총 사용자</h3>
          <p class="stat-value">1,234</p>
          <p class="stat-change text-success">
            <i class="fas fa-arrow-up"></i> 12%
          </p>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon bg-success-100 text-success-600">
          <i class="fas fa-chart-line"></i>
        </div>
        <div class="stat-content">
          <h3 class="stat-title">총 매출</h3>
          <p class="stat-value">₩12,345,678</p>
          <p class="stat-change text-success">
            <i class="fas fa-arrow-up"></i> 8%
          </p>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon bg-warning-100 text-warning-600">
          <i class="fas fa-shopping-cart"></i>
        </div>
        <div class="stat-content">
          <h3 class="stat-title">주문 수</h3>
          <p class="stat-value">567</p>
          <p class="stat-change text-danger">
            <i class="fas fa-arrow-down"></i> 3%
          </p>
        </div>
      </div>

      <!-- 차트 섹션 -->
      <div class="chart-section">
        <div class="card">
          <div class="card-header">
            <h2 class="card-title">월별 매출</h2>
          </div>
          <div class="card-body">
            <div class="chart-placeholder">
              차트가 들어갈 자리
            </div>
          </div>
        </div>
      </div>

      <!-- 최근 활동 -->
      <div class="recent-activities">
        <div class="card">
          <div class="card-header">
            <h2 class="card-title">최근 활동</h2>
          </div>
          <div class="card-body">
            <div class="activity-list">
              <div class="activity-item">
                <div class="activity-icon bg-primary-100 text-primary-600">
                  <i class="fas fa-user-plus"></i>
                </div>
                <div class="activity-content">
                  <p class="activity-text">새로운 사용자가 가입했습니다</p>
                  <p class="activity-time">5분 전</p>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-icon bg-success-100 text-success-600">
                  <i class="fas fa-shopping-bag"></i>
                </div>
                <div class="activity-content">
                  <p class="activity-text">새로운 주문이 들어왔습니다</p>
                  <p class="activity-time">15분 전</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from '@/layouts/DashboardLayout.vue'

export default {
  name: 'DashboardView',
  components: {
    DashboardLayout
  }
}
</script>

<style lang="scss" scoped>
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 24px;
}

.stat-card {
  background: white;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  font-size: 20px;
}

.stat-content {
  flex: 1;
}

.stat-title {
  font-size: 14px;
  color: var(--gray-600);
  margin-bottom: 4px;
}

.stat-value {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 4px;
}

.stat-change {
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.chart-section {
  grid-column: span 2;
}

.recent-activities {
  grid-column: span 1;
}

.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.card-header {
  padding: 16px 24px;
  border-bottom: 1px solid var(--gray-200);
}

.card-title {
  font-size: 18px;
  font-weight: 600;
}

.card-body {
  padding: 24px;
}

.chart-placeholder {
  height: 300px;
  background: var(--gray-100);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-500);
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 16px;
}

.activity-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.activity-content {
  flex: 1;
}

.activity-text {
  font-weight: 500;
  margin-bottom: 4px;
}

.activity-time {
  font-size: 14px;
  color: var(--gray-500);
}
</style>
