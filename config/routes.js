module.exports = app => {
    app.route('/user')
        .post(app.src.api.user.save);
};