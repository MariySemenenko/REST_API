function getAll(req, res, next) {

    return res.send("all");
}

function create(req, res, next) {

    return res.send("create");
}

function getById(req, res, next) {

    return res.send("getById");// http://localhost:8080/api/contacts
}
function update(req, res, next) {

    return res.send("update");// http://localhost:8080/api/contacts
}
function remove(req, res, next) {

    return res.send("remove");// http://localhost:8080/api/contacts

}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}