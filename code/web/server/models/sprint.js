const database = require("../Database");

exports.insertSprint = (projectId, name) => {
    const sql = "INSERT INTO cdp_sprint (`project`, `name`) VALUES (?, ?)";
    return database.fast(sql, [projectId, name]);
}

exports.selectLastSprint = (projectId) => {
    return database.fast("SELECT * FROM cdp_sprint WHERE project=? ORDER BY id DESC LIMIT 0,1", [projectId]);
}