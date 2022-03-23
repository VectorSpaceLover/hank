const Visitors = require('../model/Visitors');

const addVisitor = async (req, res) => {
    let start = new Date();
    start.setHours(0,0,0,0);
    let end = new Date();
    end.setHours(23,59,59,999);

    const visitors = await Visitors.find({createdDate: {$gte: start, $lt: end}});
    let visitor = {};
    if(visitors && visitors.length > 0){
        visitor = visitors[0];
        visitor.todayVisitors = visitor.todayVisitors + 1;
    }else{
        visitor = new Visitors({
            todayVisitors: 1,
        })
    }
    const saved = await visitor.save();
    return res.send({
        status: 'ok',
        data: saved,
    })
}

const getYearlyVisitors = async (req, res) => {
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), 0, 1);
    const lastDay = new Date(date.getFullYear(), 12, 30);
    const visitors = await Visitors.find({createdDate: {$gte: firstDay, $lt: lastDay}});
    return res.send({
        status: 'ok',
        visitors: visitors,
    })
}

const getMonthlyVisitors = async (req, res) => {
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const visitors = await Visitors.find({createdDate: {$gte: firstDay, $lt: lastDay}});
    return res.send({
        status: 'ok',
        visitors: visitors,
    })
}

const getDailyVisitors = async (req, res) => {
    let start = new Date();
    start.setHours(0,0,0,0);
    let end = new Date();
    end.setHours(23,59,59,999);
    const visitors = await Visitors.find({createdDate: {$gte: start, $lt: end}});
    return res.send({
        status: 'ok',
        visitors: visitors,
    })
}


module.exports = {
    addVisitor,
    getYearlyVisitors,
    getMonthlyVisitors,
    getDailyVisitors,
};
  
