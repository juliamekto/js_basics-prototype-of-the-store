 let open = document.getElementById ('open-btn'),
    nameValue = document.getElementsByClassName('name-value')[0],
    budgetValue = document.getElementsByClassName('budget-value')[0],
    goodsValue = document.getElementsByClassName('goods-value')[0],
    itemsValue = document.getElementsByClassName('items-value')[0],
    employersValue = document.getElementsByClassName('employers-value')[0],
    discountValue = document.getElementsByClassName('discount-value')[0],
    isopenValue = document.getElementsByClassName('isopen-value')[0],
    goodsItem = document.getElementsByClassName('goods-item'),
    goodsItemBtn = document.getElementsByClassName('goods-item-btn')[0],
    countBudgetBtn = document.getElementsByClassName('count-budget-btn')[0],
    hireEmployersBtn = document.getElementsByClassName('hire-employers-btn')[0],
    chooseItem = document.querySelector('#items'),
    timeValue = document.querySelector('#time'),
    countBudgetValue = document.querySelector('#budget'),
    hireEmployersItem = document.querySelectorAll('.hire-employers-item'),
	budget,
	price;


open.addEventListener('click', () => {
	     
	     budget =prompt("ваш бюджет на месяц?",'');
	     while (isNaN(budget) || budget == '' || budget == null ){
	     budget =prompt("ваш бюджет на месяц?",'');
	     }
       budgetValue.textContent = budget;
       nameValue.textContent = prompt("название вашего магазина?",'').toUpperCase();

       if (budget >= 100 ) {
       	     mainList.discount == true;
       	     discountValue.style.background = 'green';
		     discountValue.textContent = 'Ваша скидка ' + (budget * 20) /100 + ' у.е ';
			} else {
			 mainList.discount == false;
       	     discountValue.style.background = 'red';
		     discountValue.textContent = 'У нас недостачный доход';
			};
});

goodsItemBtn.addEventListener('click', () =>{
	     for (let i = 0; i < goodsItem.length; i++ ){
				
				let a = goodsItem[i].value;
				if ( (typeof(a)) === 'string' && (typeof(a)) != null  && a.length < 50 ) {
					console.log('все верно!');	
					mainList.shopGoods[i] = a;
					goodsValue.textContent = mainList.shopGoods;
				} else {
			        i= i-1;
				}	
			};
			
});

goodsItem[0,1,2,3].addEventListener('change', () => {
	if (goodsItem[0,1,2,3].value !== '') {
				goodsItemBtn.disabled = false;
			};
		});

chooseItem.addEventListener('change', () => {
        let items = chooseItem.value;
			
			if ( isNaN(items) && items != '' ) {
	            mainList.shopItems = items.split(",");
	            mainList.shopItems.sort();

	            itemsValue.textContent = mainList.shopItems;
			} 
   

});

timeValue.addEventListener('change', () => {
       let time = timeValue.value;
       if (time <0) {
			console.log('такого не может быть!');
			mainList.open = false;
		    } else if(time>8 && time <20) {
				console.log('время работать!');
				mainList.open = true;
		    } else if (time < 24) {
		        console.log('слишком поздно!');
		        mainList.open = false;
		       }else {
		       	console.log('в сутках только 24 часа!');
		       	mainList.open = false;
		       };

		if (mainList.open == true) {
			isopenValue.style.background = 'green';
		} else {
			isopenValue.style.background = 'red';
		};

});

countBudgetBtn.addEventListener('click', () =>{
     countBudgetValue.value = budget/30;
     countBudgetValue.disabled = false;
});

hireEmployersBtn.addEventListener ('click', () => {
	    for ( let i=0; i<hireEmployersItem.length; i++) {
		    let name = hireEmployersItem[i].value;
		    mainList.employers[i] = name;	

		    employersValue.textContent += mainList.employers[i] + ', ';
		 }
});

hireEmployersItem[0,1,2].addEventListener('change', () => {
	if (hireEmployersItem[0,1,2].value !== '') {
				hireEmployersBtn.disabled = false;
			};

});

let mainList= {
	budget: budget,
	//shopName: shopName,
    shopGoods:[],
    employers:{},
    open: false,
    discount: false,
    shopItems: []
};

console.log(mainList);