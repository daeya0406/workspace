<template>
  <DefaultLayout>
    <section class="dashboard-view">
      <h2>Kanban Board</h2>
      <div class="board">
        <!-- 각 컬럼에 해당하는 데이터를 props로 전달 -->
        <BoardColumn title="To Do" :issues="issues.todo" />
        <BoardColumn title="In Progress" :issues="issues.inProgress" />
        <BoardColumn title="Done" :issues="issues.done" />
      </div>
    </section>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import BoardColumn from '@/components/BoardColumn.vue';
import { useIssueStore } from '@/store/issues';

export default {
  name: 'DashboardView',
  components: { DefaultLayout, BoardColumn },
  setup() {
    const issueStore = useIssueStore();
    return { issues: issueStore.issues };
  }
};
</script>

<style scoped>
.board {
  display: flex;
  gap: 1rem;
}
</style>
