<template>
  <SubLayout>
    <div class="settings-page">
      <h1>설정</h1>
      <div class="settings-grid">
        <div class="settings-card">
          <div class="card-header">
            <h3>프로필 설정</h3>
            <i class="fas fa-user"></i>
          </div>
          <div class="card-content">
            <div class="form-group">
              <label>이름</label>
              <input type="text" placeholder="이름을 입력하세요" />
            </div>
            <div class="form-group">
              <label>이메일</label>
              <input type="email" placeholder="이메일을 입력하세요" />
            </div>
            <button class="btn-save">저장</button>
          </div>
        </div>
        
        <div class="settings-card">
          <div class="card-header">
            <h3>알림 설정</h3>
            <i class="fas fa-bell"></i>
          </div>
          <div class="card-content">
            <div class="toggle-group">
              <label>이메일 알림</label>
              <label class="switch">
                <input type="checkbox" checked />
                <span class="slider"></span>
              </label>
            </div>
            <div class="toggle-group">
              <label>푸시 알림</label>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>
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
  name: 'SettingsView',
  components: {
    SubLayout
  }
}
</script>

<style lang="scss" scoped>
.settings-page {
  padding: 2rem;
  min-height: calc(100vh - 64px - 60px); // 헤더와 푸터 높이를 제외한 높이
  
  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 3rem;
    text-align: center;
  }
}

.settings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.settings-card {
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

.form-group {
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #666;
  }
  
  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: #135ce6;
      box-shadow: 0 0 0 2px rgba(19, 92, 230, 0.1);
    }
  }
}

.btn-save {
  background: #135ce6;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background: darken(#135ce6, 10%);
  }
}

.toggle-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  
  label {
    color: #666;
  }
}

.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
    
    &:checked + .slider {
      background-color: #135ce6;
    }
    
    &:checked + .slider:before {
      transform: translateX(26px);
    }
  }
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 24px;
  
  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
}

@media (max-width: 768px) {
  .settings-page {
    padding: 1rem;
    
    h1 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
  
  .settings-grid {
    gap: 1rem;
  }
}
</style> 