export default {
    path: "calendar",
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require("./Calendar").default);
        });
    }
};