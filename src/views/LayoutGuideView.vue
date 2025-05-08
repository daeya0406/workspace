<template>
  <SubLayout>
    <div class="layout-guide">
      <div class="container">
        <div class="page-title">
          <h1>CSS Name Rule</h1>
          <p>CSS 네이밍 규칙 정리 <span class="c-primary">(~ing)</span></p>
        </div>

        <!-- Section 1: Total Layout -->
        <div class="section">
          <div class="section__header">
            <span class="section__number">1</span>
            <span class="section__title">전체적인 Layout 구조</span>
            <span class="section__arrow">▶</span>
          </div>
          <div class="section__content">
            <p>공통 Total Layout 구성 ( 다른 형태의 레이아웃일 경우, &lt;main&gt;에 다른 클래스로 전체적으로 적용 )</p>
            <div class="flex-demo">
              <div class="main-page">
                <header>&lt;header&gt;</header>
                <main>
                  <h6><span class="c-class">&lt;main <span class="c-primary">class="<span class="c-opacity">{ 공통 레이아웃의 페이지명 : main-page, sub-page, layout-v2 등 }</span>"</span>&gt;</span></h6>
                  <div class="container">
                    <h6>&lt;div <span class="c-class">class="container"</span>&gt;</h6>
                    <div class="inner">
                      <h6>&lt;div <span class="c-class">class="inner"</span>&gt;</h6>
                      <section>&lt;section <span class="c-class">class="main-section"</span>&gt</section>
                    </div>
                  </div>
                  <div class="container">
                    <h6>&lt;div <span class="c-class">class="container"</span>&gt;</h6>
                    <div class="inner">
                      <h6>&lt;div <span class="c-class">class="inner"</span>&gt;</h6>
                      <div class="section-wrap">
                        <h6>&lt;div <span class="c-class">class="section-wrap"</span>&gt;</h6>
                        <section>&lt;section&gt</section>
                        <section>&lt;section&gt</section>
                        <section>&lt;section&gt</section>
                      </div>
                    </div>
                  </div>
                </main>
                <footer>&lt;footer&gt;</footer>
              </div>
            </div>
            <div class="code-box">
              &lt;div class="main-page"&gt;<br>
              &nbsp;&nbsp;&lt;header /&gt;<br>
              &nbsp;&nbsp;&lt;main&gt;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="container"&gt;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="inner"&gt;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;section /&gt;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>
              &nbsp;&nbsp;&lt;/main&gt;<br>
              &nbsp;&nbsp;&lt;footer /&gt;<br>
              &lt;/div&gt;
            </div>
          </div>
        </div>

        <!-- Section 2: 각종 Title 추가할때 -->
        <div class="section">
          <div class="section__header">
            <span class="section__number">2</span>
            <span class="section__title">각 Title 필요할때</span>
            <span class="section__arrow">▶</span>
          </div>
          <div class="section__content">
            <p>각 title 추가 규칙</p>
            <div class="flex-demo">
              <div class="main-page">
                <main>
                  <h6><span class="c-class">&lt;main&gt;</span></h6>
                  <div class="container">
                    <h6>&lt;div <span class="c-class">class="container"</span>&gt;</h6>
                    <div class="inner">
                      <h2>&lt;h2 <span class="c-primary">class="container-title"</span>&gt;<span class="c-opacity">{ container 제목 }</span>&lt;/h2&gt;</h2>
                      <h6>&lt;div <span class="c-class">class="inner"</span>&gt;</h6>
                      <section>&lt;section <span class="c-primary">class="main-section"</span> /&gt</section>
                    </div>
                  </div>
                  <div class="container">
                    <h6>&lt;div <span class="c-class">class="container"</span>&gt;</h6>
                    <div class="inner">
                      <h6>&lt;div <span class="c-class">class="inner"</span>&gt;</h6>
                      <div class="container-title-wrap">
                        <h6>&lt;div <span class="c-class">class="container-title-wrap"</span>&gt;</h6>
                        <h2>&lt;h2 <span class="c-primary">class="container-title"</span>&gt;<span class="c-opacity">{ container 제목 }</span>&lt;/h2&gt;</h2>
                        <h3>&lt;h3 <span class="c-primary">class="container-subtitle"</span>&gt;<span class="c-opacity">{ container 부제목 있을때 }</span>&lt;/h3&gt;</h3>
                      </div>
                      <div class="section-wrap">
                        <h6>&lt;div <span class="c-class">class="section-wrap"</span>&gt;</h6>
                        <section>&lt;section /&gt</section>
                        <section>&lt;section /&gt</section>
                        <section>&lt;section /&gt</section>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <div class="code-box">
              &lt;!-- .container만 추가할 때 --&gt;<br>
              &lt;h2 class="container-title"&gt;container 제목&lt;/h2&gt;<br><br>
              
              &lt;!-- .container에 SubTitle까지 필요할 때 --&gt;<br>
              &lt;div class="container-title-wrap"&gt;<br>
              &nbsp;&nbsp;&lt;h2 class="container-title"&gt;container 제목&lt;/h2&gt;<br>
              &nbsp;&nbsp;&lt;h3 class="container-subtitle"&gt;container 부제&lt;/h3&gt;<br>
              &lt;/div&gt;<br><br>
              
              &lt;!-- section에 Title만 추가할 때 --&gt;<br>
              &lt;h2 class="section-title"&gt;section 제목&lt;/h2&gt;<br><br>
              
              &lt;!-- section에 SubTitle까지 필요할 때 --&gt;<br>
              &lt;div class="section-title-wrap"&gt;<br>
              &nbsp;&nbsp;&lt;h2 class="section-title"&gt;section 제목&lt;/h2&gt;<br>
              &nbsp;&nbsp;&lt;h3 class="section-subtitle"&gt;section 부제&lt;/h3&gt;<br>
              &lt;/div&gt;
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
  name: 'LayoutGuideView',
  components: {
    SubLayout
  },
  mounted() {
    document.querySelectorAll('.section__header').forEach(header => {
      header.addEventListener('click', () => {
        header.parentElement.classList.toggle('active')
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.layout-guide {
  .page-title {
    text-align: center;
    margin-bottom: 16px;
    h1 {
      margin-bottom: 8px;
    }
    p {
      font-size: 16px;
    }
  }

  .section {
    margin-bottom: 16px;
    padding: 10px 30px;
    border-radius: 8px;
    background: #fff;
    border: 1px solid #ddd;

    .section__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      padding: 10px 0;
      font-size: 18px;
    }

    .section__number {
      font-weight: bold;
      color: #135ce6;
      margin-right: 10px;
    }

    .section__title {
      flex: 1;
      font-size: 16px;
      font-weight: 600;
    }

    .section__arrow {
      font-size: 16px;
      transition: all 0.3s ease;
    }

    .section__content {
      display: none;
      border-top: 1px solid #ddd;
      padding: 20px 0;
      > p {
        font-size: 14px;
      }
    }

    &.active {
      .section__arrow {
        transform: rotate(90deg);
        color: #135ce6;
      }
      .section__content {
        display: block;
      }
    }
  }

  .flex-demo {
    margin: 10px 0 20px;
    border: 1px solid #ccc;
    padding: 16px;
    display: flex;
  }

  section {
    background: #ECF2FD;
    border: 3px solid #145ce6;
    color: #145ce6;
    font-size: 14px;
    padding: 10px;
    min-height: 100px;
    border-radius: 8px;
    text-align: center;
    flex: 1;
  }

  .code-box {
    background: #F4F6FA;
    padding: 10px 20px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 14px;
    overflow-x: auto;
    border-radius: 4px;
  }

  .main-page {
    width: 100%;
    .container {
      max-width: 1600px;
      margin: 0 auto;
    }
    .container:not(:last-of-type) {
      border-bottom: none;
    }
    header, footer {
      display: block;
      width: 100%;
      border-radius: 8px;
      padding: 16px;
      background-color: #135ce6;
      color: #fff;
      text-align: center;
      font-size: 15px;
    }
    main {
      position: relative;
      padding: 30px 8px 8px;
      width: 100%;
      margin: 8px auto;
      border: 1px dashed #ccc;
      h2 {
        display: block;
        padding: 0 12px;
        text-align: center;
        font-size: 13px;
        font-weight: 400;
        margin-bottom: 4px;
        background: #FFF0B3;
        color: #333;
      }
      h3 {
        display: block;
        padding: 0 12px;
        font-size: 12px;
        font-weight: 400;
        margin-bottom: 4px;
        background: #FFF0B3;
        color: #333;
      }
      h6 {
        position: absolute;
        left: 8px;
        top: 4px;
        font-size: 14px;
        font-weight: 400;
      }
    }
    .container {
      position: relative;
      padding: 30px 8px 8px;
      border: 1px dashed #ccc;
      h6 {
        position: absolute;
        left: 8px;
        top: 4px;
        font-size: 14px;
        font-weight: 400;
      }
    }
    .inner {
      position: relative;
      max-width: 768px;
      width: 100%;
      margin: 0 auto;
      padding: 30px 8px 8px;
      border: 1px dashed #ccc;
      h6 {
        position: absolute;
        left: 8px;
        top: 4px;
        font-size: 14px;
        font-weight: 400;
      }
      .section-wrap {
        position: relative;
        display: flex;
        gap: 8px;
        padding: 30px 8px 8px;
        border: 1px dashed #145ce6;
        h2 {
          display: block;
          padding: 0 8px;
          font-size: 13px;
          margin-bottom: 4px;
        }
        h3 {
          display: block;
          padding: 0 8px;
          font-size: 12px;
          margin-bottom: 4px;
        }
        h6 {
          position: absolute;
          left: 8px;
          top: 4px;
          font-size: 14px;
          font-weight: 400;
          color: #333;
        }
      }
      .section-wrap:not(:last-of-type) {
        border-bottom: none;
      }
    }
  }

  .container-title-wrap {
    position: relative;
    gap: 8px;
    padding: 30px 8px 8px;
    border: 1px dashed #ccc;
    text-align: center;
    background: #FFF7D9;
    h6 {
      position: absolute;
      left: 14px;
      top: 4px;
      font-size: 14px;
      font-weight: 400;
    }
  }

  .section-title-wrap {
    position: relative;
    gap: 8px;
    padding: 30px 8px 8px;
    border: 1px dashed #ccc;
    text-align: left;
    background: #FFF7D9;
    .section-title {
      text-align: left;
    }
    h6 {
      position: absolute;
      left: 14px;
      top: 4px;
      font-size: 14px;
      font-weight: 400;
    }
  }

  .section-content {
    color: #333;
    border: 1px dashed #ccc;
    background: #fff;
    p {
      margin-bottom: 0;
      padding: 40px 0;
    }
  }

  .c-yellow { color: #FFE066; }
  .c-class { color: #8556E3; }
  .c-primary { color: #145CE6; }
  .c-opacity { opacity: 0.6; }
}
</style> 