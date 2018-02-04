//GLOBAL CONTROLLER
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
    }
    
    //Add new itemm 
    var _ctrlAddItem = function(){
        // 1. get the field input data
        var input = UICtrl.getInput();
        // 2. add the item to the budget controller
        budgetCtrl.addItem(input.type, input.description, input.value);
        // 3. add the item to the UI
        // 4. calculate the budget
        // 5. Display the budget on the UI
        console.log('Add')
    }

    // Init function. Executed code before application starts
    var init = function(){
        _setupEventListeners();
        console.log('Init function');
    }

    return {
        init: init
    }
})(UIController || {}, budgetController || {});


controller.init();