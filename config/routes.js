module.exports = app => {
    app.route('/user')
        .post(app.src.api.user.save)
        .get(app.src.api.user.get);

    app.route('/user/:id')
        .put(app.src.api.user.save)
        .get(app.src.api.user.getUserById)
};