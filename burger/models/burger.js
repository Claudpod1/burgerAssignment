var orm = require("../config/orm.js");
``
var burger = {
    selectAll: function (callBack){
        orm.selectAll("burgers", function(res){
            callBack(res)
        });
    },

    insertBurger: function (cols,vals, callBack){
        orm.insertBurger("burgers", cols, vals, function(res){
            callBack(res);
        });
    },

    updateBurger: function (objColVals, condition, callBack){
        orm.updateBurger("burgers", objColVals, condition, function (res){
            callBack(res);
        });
    }
};

module.exports = burger;