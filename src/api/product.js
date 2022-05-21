module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.src.api.validation;

    const save = (req, res) => {
        const product = { ...req.body }

        if (req.params.id) {
            product.id = req.params.id;
        }

        try {
            existsOrError(product.nome, 'Nome não informado');
        } catch (e) {
            return res.status(400).send(e);
        }

        if (product.id) {
            app.db('produtos')
                .update(product)
                .where({ id: product.id })
                .then(_=> res.status(204).send())
                .catch((err) => res.status(500).send(err))
        } else {
            app.db('produtos')
                .insert(product)
                .then(_=> res.status(204).send())
                .catch((err) => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('produtos')
            .select('id', 'nome', 'preco')
            .then(products => res.json(products))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('produtos')
            .select('id', 'nome', 'preco')
            .where({ id: req.params.id })
            .first()
            .then(product => res.json(product))
            .catch(err => res.status(500).send(err))
    }

    return { save, get, getById }
}