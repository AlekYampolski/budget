var UIController = (function(){
    
        var _DOMStrings = {
            inputType : '.add__type',
            inputDescription : '.add__description',
            inputValue : '.add__value',
            inputBtn : '.add__btn',
            incomeContainer : ".income__list",
            expenseContainer : ".expense__list",
            budgetLabel : ".budget__value",
            incomeLabel : ".budget__income--value",
            expenseLabel : ".budget__expense--value",
            percentageLabel : ".budget__expense--percentage",
            container : ".container"

        }

        //Delete item
        // We can remove only child element
        var deleteListItem = function(selecotID){
            var el = document.getElementById(selecotID);
            el.parentNode.removeChild(el);
        }
        //Get input data from 
        var getInput = function() {
            return {
                type: document.querySelector(_DOMStrings.inputType).value,
                description: document.querySelector(_DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(_DOMStrings.inputValue).value)
             }
        }

        

        //Add item to UI
        var addListItem = function(obj, type){
            var html, newHtml, element;
            //create HTML string with placeholder text. Hardconding string
            //Use %item% for searching
            if(type === 'inc'){
                element = _DOMStrings.incomeContainer;
                html = ' <div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"><button class="item__delete--btn">D</button></div> </div> </div>'
            } else if (type === 'exp'){
                element = _DOMStrings.expenseContainer;
                html = ' <div class="item clearfix" id="exp-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"><button class="item__delete--btn">D</button></div> </div> </div>'
            }

            //Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id)
                .replace('%description%', obj.description)
                .replace('%value%', obj.value);
            //Insert HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        }
        

    /*
    .querySelectorAll works with valid css selecotrs. So use Multiple selector  
    .querySelectorAll return NodeList, not an array. There are better solutions for converting it to an array with ES6. Like 
        let mArr = Array.from(mNodeList) 
        or
        let mArr = [...mNodeList]
    But I will use ES5 solution for it
        var mArr = Array.prototype.slice.call(mNodeList)
    */
        var clearFields = function(){
            var fields = document.querySelectorAll(_DOMStrings.inputDescription + ', ' + _DOMStrings.inputValue);
            fields = Array.prototype.slice.call(fields);
            fields.forEach(function(field){
                field.value = '';
            });

            //Focus to first input element
            fields[0].focus();
        }
        var getDOM = function(){
            return _DOMStrings;
        }
        
        // Note that textContent is not available in IE8 and below.
        var displayBudget = function(obj){
            document.querySelector(_DOMStrings.budgetLabel).textContent = obj.budget;
            document.querySelector(_DOMStrings.incomeLabel).textContent = obj.totalIncome;
            document.querySelector(_DOMStrings.expenseLabel).textContent = obj.totalExpense;
            if(obj.percentage > 0){
                document.querySelector(_DOMStrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(_DOMStrings.percentageLabel).textContent = "---";
            }

        }

        return {
           getInput : getInput,
           getDOM : getDOM,
           addListItem : addListItem,
           clearFields : clearFields,
           displayBudget : displayBudget,
           deleteListItem : deleteListItem
        }
    })();