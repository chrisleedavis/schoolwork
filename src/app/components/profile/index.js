export default {
    path: "profile",
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require("./Profile").default);
        });
    }
};