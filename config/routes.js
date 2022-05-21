module.exports = app => {
    // USUÁRIOS
    app.route('/user')
        .post(app.src.api.user.save)
        .get(app.src.api.user.get)

    app.route('/user/:id')
        .put(app.src.api.user.save)
        .get(app.src.api.user.getUserById)

    // PRODUTOS
    app.route('/product')
        .post(app.src.api.product.save)
        .get(app.src.api.product.get)

    app.route('/product/:id')
        .get(app.src.api.product.getById)
        .put(app.src.api.product.save)
};