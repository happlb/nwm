'use strict';


exports.list_all_tasks = function (req, res) {
    console.log('WOAH JEEZ WOW JEEZ WOAH\n', req, res)

    Task.find({}, function (err, task) {
        if (err)
            res.send(err);
        //res.json(task);
        
    });
};


exports.read_a_task = function (req, res) {
    console.log('WOAH JEEZ WOW JECMONNNNNN\n', req, res)

    Task.findById(req.params.taskId, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};



