//BUDGET CONTROLLER
var budgetController = (function(){
    //Data structure
    var _data = {
        allItems : {
            exp : [],
            inc : []
        },
        totals : {
            exp : 0,
            inc : 0
        },
        budget : 0,
        //Percentage of expenses
        percentage : 0
    }

    var _calculateTotal = function(type){
        var sum = 0;

        _data.allItems[type].forEach(function(item){
            sum += item.value;
        })
        
        _data.totals[type] = sum;
    }

    //For testing.
    var getData = function(){
        return _data;
    }
    
    var getBudget = function(){
        return {
            budget : _data.budget,
            percentage : _data.percentage,
            totalIncome : _data.totals.inc,
            totalExpense : _data.totals.exp
        }
    }
    
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var calculateBudget = function(){
        //Calculate total income and expense
        _calculateTotal('inc');
        _calculateTotal('exp');
        // Calculate the budget : icome - expense
        _data.budget = _data.totals.inc - _data.totals.exp;

        // Calculate percentage
        _data.percentage = Math.round((_data.totals.exp / _data.totals.inc) * 100)
    }
    
    //Add new item in data array
    var addItem = function(type, desc, val){
        var newItem, ID;

        //Create new element with new ID
        if(_data.allItems[type].length > 0 ){
            ID = _data.allItems[type][_data.allItems[type].length - 1].id + 1;    
        } else {
            ID = 1;
        }
        
        if(type === 'exp'){
            newItem = new Expense(ID, desc, val);
        } else if (type === 'inc'){
            newItem = new Income(ID, desc, val)
        }

        _data.allItems[type].push(newItem);

        return newItem;
    }

    
    
    
    return {
        addItem : addItem,
        getData : getData,
        calculateBudget : calculateBudget,
        getBudget : getBudget
    }
})();