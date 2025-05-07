<template>
  <div class="issue-card">
    <h4>{{ issue.title }}</h4>
    <p>{{ issue.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'IssueCard',
  props: {
    issue: { type: Object, required: true }
  }
};
</script>

<style scoped>
.issue-card {
  background: #fff;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
