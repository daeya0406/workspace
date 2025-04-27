<template>
  <div class="example-page">
    <h1>예시 페이지</h1>
    <p>이것은 테스트용 Vue 페이지입니다.</p>
    <button @click="increment">카운트: {{ count }}</button>
  </div>
</template>

<script>
export default {
  name: "ExamplePage",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
};
</script>

<style scoped>
.example-page {
  padding: 20px;
  text-align: center;
}

h1 {
  color: #333;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
}
</style>
