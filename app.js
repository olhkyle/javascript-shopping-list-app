'use strict'

const inputMenu = document.querySelector('.footer-input');

const menuList = document.querySelector('.items');
const addItem = document.querySelector('.button-footer');
const deleteItem = document.querySelector('.delete-item');


function App () {
    const addMenu = () => {
        const addedItem = inputMenu.value;
            // console.log(addedItem);
    
            if(addedItem == ''){
                alert('사야할 품목을 입력하세요!');
                return;
            }
    
            const menuItemTemplate = (addedItem) => {
                return`
                    <li class="item-row">
                        <span class="item-name">${addedItem}</span>
                        <button class="delete-item" type="button">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </li>
                ` 
            }
        
            // console.log(menuItemTemplate(addedItem));
    
            menuList.insertAdjacentHTML('beforeend', menuItemTemplate(addedItem));
            
            inputMenu.value = '';
    
            menuList.addEventListener('click', (event) => {
                if(event.target.classList.contains('delete-item')){
                    event.target.closest('li').remove();
                }
            });
            
    }
    
    inputMenu.addEventListener('keypress', (event) =>{
        // console.log(event.key);
        if(event.key !== 'Enter'){
            return;
        }
        addMenu();
    })
    
    
    addItem.addEventListener('click', () => {
        addMenu();
    })
}

App();