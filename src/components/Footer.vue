<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__info">
          <div class="footer__logo">
            <span class="logo-text">Company</span>
          </div>
          <p class="footer__description">
            혁신적인 디지털 솔루션으로 비즈니스의 성장을 지원합니다.
          </p>
        </div>
        
        <div class="footer__links">
          <div class="footer__section">
            <h3>바로가기</h3>
            <router-link to="/about" class="footer__link">회사 소개</router-link>
            <router-link to="/services" class="footer__link">서비스</router-link>
            <router-link to="/portfolio" class="footer__link">포트폴리오</router-link>
            <router-link to="/contact" class="footer__link">문의하기</router-link>
          </div>
          
          <div class="footer__section">
            <h3>연락처</h3>
            <p>서울특별시 강남구 테헤란로 123</p>
            <p>Tel: 02-123-4567</p>
            <p>Email: info@company.com</p>
          </div>
          
          <div class="footer__section">
            <h3>소셜 미디어</h3>
            <div class="footer__social">
              <a href="#" class="social-link" target="_blank">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#" class="social-link" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-link" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="social-link" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="footer__bottom">
        <p>&copy; 2024 Company Name. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 4rem 0 2rem;
  background-color: #f8f9fa;
  
  &__content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    margin-bottom: 2rem;
  }
  
  &__info {
    .footer__logo {
      height: 40px;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      
      .logo-text {
        font-size: 24px;
        font-weight: bold;
        color: #135ce6;
        transition: transform 0.3s ease;
        
        &:hover {
          transform: scale(1.05);
        }
      }
    }
    
    .footer__description {
      color: #666;
      line-height: 1.6;
    }
  }
  
  &__links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  
  &__section {
    h3 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: #333;
    }
  }
  
  &__link {
    display: block;
    color: #666;
    text-decoration: none;
    margin-bottom: 0.5rem;
    transition: all 0.3s ease;
    
    &:hover {
      color: #135ce6;
      transform: translateX(4px);
    }
  }
  
  &__social {
    display: flex;
    gap: 1rem;
    
    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: #fff;
      color: #333;
      text-decoration: none;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: #135ce6;
        color: #fff;
        transform: translateY(-4px);
      }
    }
  }
  
  &__bottom {
    padding-top: 2rem;
    border-top: 1px solid #eee;
    text-align: center;
    color: #666;
  }
}

@media (max-width: 992px) {
  .footer {
    &__content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    &__info {
      text-align: center;
    }
  }
}

@media (max-width: 768px) {
  .footer {
    &__links {
      grid-template-columns: 1fr;
      text-align: center;
    }
    
    &__social {
      justify-content: center;
    }
  }
}
</style> 