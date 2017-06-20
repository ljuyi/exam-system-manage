export default {
    'setLibrary'(state, obj) {
        state.content = obj.content
        state.type = obj.type
        state.kind = obj.kind
        state.answer = obj.answer
        state.id = obj.id
        state.time = obj.time
    },
    'resetLibrary'(state) {
        state.id = 'L' + state.staticId
        state.content = ''
        state.time = new Date().getFullYear()
        state.type = '全部'
        state.kind = '简答题'
        state.answer = ''
        state.staticId ++
    }
}
