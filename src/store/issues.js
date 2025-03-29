import { defineStore } from 'pinia'

export const useIssueStore = defineStore('issues', {
    state: () => ({
        // 예제 데이터를 세 가지 컬럼으로 구분하여 저장
        issues: {
            todo: [
                { id: 1, title: 'Issue 1', description: 'Description for issue 1' },
                { id: 2, title: 'Issue 2', description: 'Description for issue 2' }
            ],
            inProgress: [
                { id: 3, title: 'Issue 3', description: 'Description for issue 3' }
            ],
            done: [
                { id: 4, title: 'Issue 4', description: 'Description for issue 4' }
            ]
        }
    }),
    actions: {
        // 나중에 이슈 추가, 이동 등의 기능 구현 예정
    }
})
