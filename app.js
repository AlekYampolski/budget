var UIController = (function(){
    //code
    return {
        UIm : function(){
            console.log('UI controller');
        }
    }
})();

var budgetController = (function(){
    //code
    return {
        budM : function(){
            console.log('budget controller');
        }
    }
})();

var controller = (function(UICtrl, budgetCtrl){})(UIController || {}, budgetController || {});