export default {
    path: "friends",
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require("./Friends").default)
        })
    }
}