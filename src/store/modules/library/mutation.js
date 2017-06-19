export default {
    'setLibrary'(state, obj) {
        state.content = obj.content
        state.type = obj.type
        state.kind = obj.kind
        state.answer = obj.answer
        state.index = obj.index
        state.time = obj.time
    }
}
