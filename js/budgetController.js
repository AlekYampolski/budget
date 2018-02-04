
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
        }
    }

    var getData = function(){
        return _data;
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

    var addItem = function(type, desc, val){
        var newItem, ID;

        //Create new element with new ID
        if(_data.allItems[type].length > 0 ){
            // console.log('Yes');
            // console.log('wtf_data.allItems[type][_data.allItems[type].length - 1]);
            ID = _data.allItems[type][_data.allItems[type].length - 1].id + 1;    
        } else {
            ID = 1;
            console.log('No');
        }
        
        if(type === 'exp'){
            newItem = new Expense(ID, desc, val);
        } else if (type === 'inc'){
            newItem = new Income(ID, desc, val)
        }

        console.log(newItem);
        // Add item to data
        // console.log( "wtf?" + _data.allItems[type]);
        _data.allItems[type].push(newItem);

        return newItem;
    }

    
    
    
    return {
        addItem : addItem,
        getData : getData
    }
})();