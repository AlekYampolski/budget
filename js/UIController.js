var UIController = (function(){
    
        var _DOMStrings = {
            inputType : '.add__type',
            inputDescription : '.add__description',
            inputValue : '.add__value',
            inputBtn : '.add__btn',
            incomeContainer : ".income__list",
            expenseContainer : ".expense__list"
        }
        var getInput = function() {
            return {
                type: document.querySelector(_DOMStrings.inputType).value,
                description: document.querySelector(_DOMStrings.inputDescription).value,
                value: document.querySelector(_DOMStrings.inputValue).value
             }
        }

        //Add item to UI
        var addListItem = function(obj, type){
            var html, newHtml, element;
            //create HTML string with placeholder text. Hardconding string
            //Use %item% for searching
            if(type === 'inc'){
                element = _DOMStrings.incomeContainer;
                html = ' <div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"><button class="item__delete--btn">D</button></div> </div> </div>'
            } else if (type === 'exp'){
                element = _DOMStrings.expenseContainer;
                html = ' <div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"><button class="item__delete--btn">D</button></div> </div> </div>'
            }

            //Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id)
                .replace('%description%', obj.description)
                .replace('%value%', obj.value);
            //Insert HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        }
    
        var getDOM = function(){
            return _DOMStrings;
        }
    
    
        return {
           getInput : getInput,
           getDOM : getDOM,
           addListItem : addListItem
        }
    })();