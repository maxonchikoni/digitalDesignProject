import { Modal } from "./Modal.js";
export class ProductModal extends Modal {
    constructor(classes, {id, name, img, price, time}) {
        super(classes);
        this.id = id;
        this.name = name;
        this.img = img;
        this.price = price;
        this.time = time;
        
    }
  
    generateContent() {
        let template = '';
        let product = document.createElement('div');
        product.setAttribute('id', this.id);
        product.classList.add('modal__inner')
  
        this.img &&
        (template += `<img class="modal__content-img" src="${this.img}" alt="">`)
  
        template += `<div class="modal__content-text">`
        template += `<h2 class="modal__title">${this.name}</h2>`
        template += `<div class="choose-data">`
        template += `<label class="amount" for="choose"><span>Кол-во</span>
        </label>
        <input class="amount-choose" id="choose" name="i_like" maxlength="10" placeholder="Кол-во товара">
        `
        template += `<div class="color-picker">
                    <label class="color-pick"for="colorPick1">
                    <input type="radio" id="colorPick1"name="color" value="red">
                        <span class="color-block" style="background-color:red"></span>Red
                    </label>
            
                    <label class="color-pick" for="colorPick2">
                    <input type="radio" id="colorPick2" name="color" value="green">
                    <span class="color-block" style="background-color:green"></span>Green
                    </label>
            
                    <label class="color-pick" for="colorPick3">
                    <input type="radio" id="colorPick3"name="color" value="blue">
                    <span class="color-block" style="background-color:blue"></span>Blue</label>
                    </div>
                    <textarea class="field" maxlength="2000" placeholder="Комментарий"></textarea>`
       
        
        template +=`<button class="button modal__btn" >Купить</button>`
                 
                  
        product.innerHTML = template;
        return product;
    }
    check(){
        let radios = document.querySelectorAll('[name="color"]');
   
        for (let i = 0, len = radios.length; i < len; i++) {
             if (radios[i].checked) {
                 return true;
             }
        }
   
        return false;
    }
    renderModal() {
        let content = this.generateContent();

        super.buildModal(content);
        
        document.querySelector('.modal__btn').addEventListener('click', () => {
            const amount = document.querySelector('#choose').value
            if(!Number.isNaN(+amount) && +amount > 0){

                alert('Товар куплен!')
                let radios = document.querySelectorAll('[name="color"]');
                radios.forEach(elem => {
                    elem.checked =false
                })
                document.querySelector('#choose').value = "";
            } else if(!this.check()) {
                alert('выберите цвет')
            } else {
                alert('Неккоректное кол-во')
            }
        })
    }
  }