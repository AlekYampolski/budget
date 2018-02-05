//GLOBAL CONTROLLER
window.onload = function(){


var controller = (function(UICtrl, budgetCtrl){

    var _setupEventListeners = function(){

        var DOM = UICtrl.getDOM();
        //event.keyCode and event.which have been deprecated for some time now, and it's recommended to not use those anymore. event.key is the new shinny attribute that will bind them all, we should use that instead of the deprecated attributes.
        document.querySelector(DOM.inputBtn).addEventListener('click', _ctrlAddItem);
        document.addEventListener('keypress', function(e){
            if(e.key === "Enter"){
                _ctrlAddItem();
            } 
        });
        document.querySelector(DOM.container).addEventListener('click', _ctrlDeleteItem);
    }
    

    //Update the budget
    _updateBudget = function(){
        var budget;
        // calculate the budget
        budgetCtrl.calculateBudget();
        // return the budget
        budget = budgetCtrl.getBudget();      
        //  Display the budget on the UI
        UICtrl.displayBudget(budget);
    }
    
    //Add new itemm 
    var _ctrlAddItem = function(){
        var input, newItem;
        // Get the field input data
        input = UICtrl.getInput();
        // Prevent false inputs
        if(input.description !== "" && !isNaN(input.value) && input.value > 0){
            // Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            // Add the item to the UI
            UICtrl.addListItem(newItem, input.type);
            // Clear fields
            UICtrl.clearFields();
            // calculate and update budget
            _updateBudget();
            
        }
    }
    
    //Delete Item
    var _ctrlDeleteItem = function(e){
        var el, item, type, ID 
        //Hard codding until get to the item id. In this case, need 3 up. Depending of DOM structure
         el = (e.target.parentNode.parentNode.parentNode.id);
          
         if(el){
             item = el.split('-');
             ID = +item[1];
             console.log(ID);
             type = item[0];

             // 1. Delete from budgetController data
             budgetCtrl.deleteItem(type, ID);
             // 2. Delete from UI
             UICtrl.deleteListItem(el);
             // 3. Update budget
             _updateBudget();
         }

         
    }

    // Init function. Executed code before application starts
    var init = function(){
        _setupEventListeners();
        UICtrl.displayBudget({
            budget : 0,
            percentage : -1,
            totalIncome : 0,
            totalExpense : 0
        })
        console.log('Init function');
    }

    return {
        init: init
    }
})(UIController || {}, budgetController || {});


controller.init();
}