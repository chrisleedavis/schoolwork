export default {
    path: "groups",
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require("./Groups").default)
        })
    }
}