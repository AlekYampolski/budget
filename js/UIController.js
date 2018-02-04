var UIController = (function(){
    
        var DOMStrings = {
            inputType : '.add__type',
            inputDescription : '.add__description',
            inputValue : '.add__value',
            inputBtn : '.add__btn'
        }
        var getInput = function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
             }
        }
    
        var getDOM = function(){
            return DOMStrings;
        }
    
    
        return {
           getInput : getInput,
           getDOM : getDOM
        }
    })();