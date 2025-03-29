<template>
  <div class="column">
    <h3>{{ title }}</h3>
    <draggable
        v-model="localIssues"
        :group="{ name: 'issues', pull: true, put: true }"
        @end="onDragEnd"
    >
      <template #item="{ element }">
        <IssueCard :issue="element" />
      </template>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import IssueCard from '@/components/IssueCard.vue'

export default {
  name: 'BoardColumn',
  components: { draggable, IssueCard },
  props: {
    title: { type: String, required: true },
    issues: { type: Array, default: () => [] }
  },
  data() {
    return {
      // 로컬 복사본을 만들어서 v-model에 사용하면 부모와 양방향 데이터 바인딩이 가능합니다.
      localIssues: [...this.issues]
    }
  },
  watch: {
    // 부모의 값이 변경되면 로컬 이슈도 업데이트
    issues(newVal) {
      this.localIssues = [...newVal]
    }
  },
  methods: {
    onDragEnd(evt) {
      // 드래그 앤 드롭 종료 후 변경된 순서를 저장하거나 스토어 업데이트 작업을 수행합니다.
      console.log('드래그 종료:', evt)
      // 예를 들어, 이벤트 정보를 활용해 Pinia 스토어를 업데이트할 수 있습니다.
    }
  }
}
</script>

<style scoped>
.column {
  background: #f4f4f4;
  padding: 1rem;
  border-radius: 4px;
  flex: 1;
}
</style>
