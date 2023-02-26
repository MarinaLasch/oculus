
// const tabItem = document.querySelectorAll('.tabs__btn-item');
// const tabContent = document.querySelectorAll('.tabs__content-item');

// tabItem.forEach(function(element){
//     element.addEventListener('click', open);
// });

// function open(event){
//     const tabTarget = event.currentTarget;
//     const button = tabTarget.dataset.button;

//     tabItem.forEach(function(item){
//     item.classList.remove('tabs__btn-item--active');
// });
// tabContent.forEach(function(item){
//     item.classList.remove('tabs__content-item--active');
// });

// tabTarget.classList.add('tabs__btn-item--active');
// document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
// }



    const  tabs = document.querySelectorAll('.tabs__btn-item'); //кнопки, на которые будем кликаить
    const tabsContent = document.querySelectorAll('.tabs__content-item'); //сами табы с инфо и картинками
        tabs.forEach(function(item){ //item -это каждая кнопка 
            item.addEventListener('click', function(){
                let currentBtn = item;
                let tabId = currentBtn.getAttribute("data-button");
                let currentTab = document.querySelector(tabId);

                if(!currentBtn.classList.contains('tabs__btn-item--active')){//if -проверка используется для того,чтоб находясь на конкретном табе, нажимая на него неск раз не присваивался класс активности 

                tabs.forEach(function(item){
                    item.classList.remove('tabs__btn-item--active');
                });

                tabsContent.forEach(function(item){
                    item.classList.remove('tabs__content-item--active');
                });
                 currentTab.classList.add('tabs__content-item--active');
                currentBtn.classList.add('tabs__btn-item--active');
            }
            });
        });
     