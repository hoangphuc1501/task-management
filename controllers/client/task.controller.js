const Task = require("../../models/task.model");

module.exports.index = async (req, res) => {
    const find = {
        deleted: false
    }
    // bộ lọc trạng thái
    if(req.query.status){
        find.status = req.query.status
    }
    // hết bộ lọc trạng thái
    // sắp xếp theo tiêu chí
    const sort = {};
    if(req.query.sortKey && req.query.sortValue){
        sort[req.query.sortKey] = req.query.sortValue
    }
    // hết sắp xếp theo tiêu chí
    //Phân trang
    let limitItem = 4;
    let page = 1;

    if(req.query.page){
        page = parseInt(req.query.page)
    }
    if(req.query.limit){
        limitItem = parseInt(req.query.limit)
    }
    skip = (page -1) * limitItem
    // hết phân trang

    const tasks = await Task
    .find(find)
    .skip(skip)
    .limit(limitItem)
    .sort(sort);

    res.json(tasks)
}

module.exports.detail = async (req, res) => {
    const id = req.params.id;
    const task = await Task.findOne({
        _id: id,
        deleted: false
    });
    res.json(task)
}