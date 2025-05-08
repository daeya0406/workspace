<template>
  <div class="project-slider">
    <swiper
      :modules="[SwiperNavigation, SwiperPagination]"
      :slides-per-view="1"
      :space-between="30"
      :navigation="true"
      :pagination="{ clickable: true }"
      :breakpoints="{
        '640': {
          slidesPerView: 2,
        },
        '1024': {
          slidesPerView: 3,
        }
      }"
    >
      <swiper-slide v-for="project in projects" :key="project.id">
        <div class="project-card">
          <div class="project-image">
            <img :src="project.image" :alt="project.title" />
            <div class="project-overlay">
              <div class="project-info">
                <h3>{{ project.title }}</h3>
                <p>{{ project.category }}</p>
                <router-link :to="project.link" class="btn btn-primary">자세히 보기</router-link>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  name: 'ProjectSlider',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      SwiperNavigation: Navigation,
      SwiperPagination: Pagination,
      projects: [
        {
          id: 1,
          title: '기업 웹사이트 리뉴얼',
          category: '웹 개발',
          image: 'https://via.placeholder.com/600x400',
          link: '/portfolio/1'
        },
        {
          id: 2,
          title: '헬스케어 앱',
          category: '모바일 앱',
          image: 'https://via.placeholder.com/600x400',
          link: '/portfolio/2'
        },
        {
          id: 3,
          title: '쇼핑몰 UI/UX 디자인',
          category: 'UI/UX 디자인',
          image: 'https://via.placeholder.com/600x400',
          link: '/portfolio/3'
        },
        {
          id: 4,
          title: '온라인 교육 플랫폼',
          category: '웹 개발',
          image: 'https://via.placeholder.com/600x400',
          link: '/portfolio/4'
        },
        {
          id: 5,
          title: '푸드 딜리버리 앱',
          category: '모바일 앱',
          image: 'https://via.placeholder.com/600x400',
          link: '/portfolio/5'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.project-slider {
  padding: 40px 0;
  
  :deep(.swiper) {
    padding: 20px 0;
  }

  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    color: var(--primary-600);
  }

  :deep(.swiper-pagination-bullet-active) {
    background-color: var(--primary-600);
  }
}

.project-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.project-image {
  position: relative;
  padding-top: 75%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-info {
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

.btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
  border: none;

  &.btn-primary {
    background-color: var(--primary-600);
    color: white;

    &:hover {
      background-color: var(--primary-700);
    }
  }
}
</style> 