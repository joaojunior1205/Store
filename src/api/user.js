module.exports = app => {
    const save = (req, res) => {
       return req.send('user save');
    }

    return { save }
}