module.exports = app => {
    const save = (req, res) => {
       return res.send('user save');
    }

    return { save }
}