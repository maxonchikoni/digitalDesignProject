import { Modal } from "./Modal.js";
import { ProductModal } from "./ProductModal.js";
import { LocalStorageUtil } from "../../utils/localStorageUtil.js";
class Products {

    renderCategory() {
        let htmlCategory = '';

        category.forEach(elem=>{
            
            htmlCategory += `
            <section class="clothes" id="${elem}" data-category_name="${elem}">
                <div class="container">
                    <div class="clothes__wrapper">
                        <h2 class="clothes__heading">${elem}</h2>
                    </div>
                </div>
            </section>
            `;
        })

        ROOT_PRODUCTS.innerHTML = htmlCategory;
        
    }
    render() {
        
        
        const category = document.querySelectorAll('[data-category_name]');
        category.forEach( elem => {


            let htmlCatalog = '';
            let html ='';
            CATALOG.forEach(({id, name, price, img, type}) => {
                if(elem.dataset.category_name === type){
                    htmlCatalog += `
                    <li data-id="${id}" class="products-element">
                        <span class="products-element__name">${name}</span>
                        <img class="products-element__img" src="${img}">
                        <span class="products-element__price" >${price}</span>
                        <button class="button products-element__btn" >Купить</button>
                        <span class="products-element__date-info">${localStorageUtil.getDayInfo(localStorageUtil.getTime(id))}</span>
                
                `;

                }
                
            }) 
            html = `
                    <ul class="products-container">
                        ${htmlCatalog}
                    </ul>
                `;
        
                elem.firstElementChild.innerHTML+=html;

            html = ''
            htmlCatalog =''
        })
    }


}
 const localStorageUtil = new LocalStorageUtil();
    
CATALOG.forEach( (elem, idx) => {
    localStorageUtil.putProductsObj(elem.id, idx);
})

const productPage = new Products();

productPage.renderCategory();
productPage.render();


const getProductData = (id) => {
    return CATALOG.find(elem => elem.id === id)
}

const renderProductModalWindow = (content) => {
    let modal = new ProductModal('tools-modal', content);
    modal.renderModal()
}

const addBuyProductClickHandler = () => {
    document.querySelector('#products').addEventListener('click', (e) => {
        if(e.target.classList.contains('products-element__btn')) {
            let clickedProductId = e.target.closest('.products-element').getAttribute('data-id');
            let clickedProductData = getProductData(clickedProductId);
            renderProductModalWindow(clickedProductData);
        }
            
    })
}

addBuyProductClickHandler();


