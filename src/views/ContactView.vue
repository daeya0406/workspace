<template>
  <SubLayout>
    <div class="contact-page">
      <!-- 히어로 섹션 -->
      <section class="hero">
        <div class="container">
          <h1 class="hero-title">문의하기</h1>
          <p class="hero-subtitle">프로젝트 문의나 상담이 필요하시다면 언제든지 연락주세요</p>
        </div>
      </section>

      <!-- 연락처 정보 섹션 -->
      <section class="contact-info">
        <div class="container">
          <div class="info-grid">
            <div class="info-item">
              <i class="fas fa-map-marker-alt"></i>
              <h3>주소</h3>
              <p>서울특별시 강남구 테헤란로 123</p>
            </div>
            <div class="info-item">
              <i class="fas fa-phone"></i>
              <h3>전화번호</h3>
              <p>02-123-4567</p>
            </div>
            <div class="info-item">
              <i class="fas fa-envelope"></i>
              <h3>이메일</h3>
              <p>contact@example.com</p>
            </div>
            <div class="info-item">
              <i class="fas fa-clock"></i>
              <h3>영업시간</h3>
              <p>월-금: 9:00 - 18:00</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 문의 폼 섹션 -->
      <section class="contact-form">
        <div class="container">
          <div class="form-container">
            <h2>문의하기</h2>
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">이름</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  required
                  placeholder="이름을 입력해주세요"
                />
              </div>
              <div class="form-group">
                <label for="email">이메일</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required
                  placeholder="이메일을 입력해주세요"
                />
              </div>
              <div class="form-group">
                <label for="phone">전화번호</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.phone"
                  placeholder="전화번호를 입력해주세요"
                />
              </div>
              <div class="form-group">
                <label for="subject">제목</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject" 
                  required
                  placeholder="제목을 입력해주세요"
                />
              </div>
              <div class="form-group">
                <label for="message">메시지</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  required
                  placeholder="문의 내용을 입력해주세요"
                  rows="6"
                ></textarea>
              </div>
              <button type="submit" class="submit-btn">보내기</button>
            </form>
          </div>
        </div>
      </section>

      <!-- 지도 섹션 -->
      <section class="map-section">
        <div class="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.302344103576!2d127.0276!3d37.4979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDI5JzUyLjQiTiAxMjfCsDAxJzM5LjQiRQ!5e0!3m2!1sko!2skr!4v1234567890!5m2!1sko!2skr" 
            width="100%" 
            height="450" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  </SubLayout>
</template>

<script>
import SubLayout from '@/layouts/SubLayout.vue'

export default {
  name: 'ContactView',
  components: {
    SubLayout
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // 폼 제출 로직 구현
      console.log('Form submitted:', this.form)
      // API 호출 등 추가 구현 필요
      alert('문의가 성공적으로 전송되었습니다.')
      this.resetForm()
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-page {
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

  .contact-info {
    padding: 80px 0;
    background-color: var(--gray-50);
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }

  .info-item {
    text-align: center;
    padding: 32px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    i {
      font-size: 32px;
      color: var(--primary-600);
      margin-bottom: 16px;
    }

    h3 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 8px;
    }

    p {
      color: var(--gray-700);
    }
  }

  .contact-form {
    padding: 80px 0;
  }

  .form-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 48px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    h2 {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 32px;
      text-align: center;
    }
  }

  .form-group {
    margin-bottom: 24px;

    label {
      display: block;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 8px;
      color: var(--gray-700);
    }

    input,
    textarea {
      width: 100%;
      padding: 12px;
      border: 1px solid var(--gray-300);
      border-radius: 6px;
      font-size: 16px;
      transition: border-color 0.3s ease;

      &:focus {
        outline: none;
        border-color: var(--primary-600);
      }

      &::placeholder {
        color: var(--gray-400);
      }
    }
  }

  .submit-btn {
    width: 100%;
    padding: 16px;
    background: var(--primary-600);
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: var(--primary-700);
    }
  }

  .map-section {
    height: 450px;
  }

  .map-container {
    width: 100%;
    height: 100%;

    iframe {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 1024px) {
    .info-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .info-grid {
      grid-template-columns: 1fr;
    }

    .form-container {
      padding: 32px 24px;
    }
  }
}
</style> 