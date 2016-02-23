export default {
    path: "tasks",
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require("./Tasks").default)
        })
    }
}