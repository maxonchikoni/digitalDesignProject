export class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    }
    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        
        if (productsLocalStorage !== null && productsLocalStorage !== '') {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }

    putProducts(id) {
        let products = this.getProducts();
        let time = new Date();
        const ids = CATALOG.map(elem => elem.id).reduce((acc, item) => {
            if (acc.includes(item)) {
              return acc; 
            }
            return [...acc, item]; 
          }, []);
        
        const index = products.indexOf(id);
        if(index === -1) {

            products.push(id);

            localStorage.setItem(this.keyName, JSON.stringify(products))
        } else {
            let intersection = products.filter(num => ids.includes(num));
            localStorage.setItem(this.keyName, JSON.stringify(intersection))
        }   
    }

    putProductsObj(id, idx) {
        let products = this.getProducts();
        let obj = {};
       
        const productsIds = products.map((elem) => {
            return JSON.parse(elem).id;
        }).reduce((acc, item) => {
            if (acc.includes(item)) {
              return acc;
            }
            return [...acc, item]; 
        }, []); 
        const index = productsIds.indexOf(id);
        if(index === -1) {
            obj.id = id;
            obj.time = new Date().toLocaleDateString('ru-RU');
            products.push(JSON.stringify(obj));
            CATALOG[idx].time = obj.time

            localStorage.setItem(this.keyName, JSON.stringify(products))
    
        } 
        else {
            const catalogIds = CATALOG.map(elem => elem.id).reduce((acc, item) => {
                if (acc.includes(item)) {
                  return acc; // если значение уже есть, то просто возвращаем аккумулятор
                }
                return [...acc, item]; // добавляем к аккумулятору и возвращаем новый аккумулятор
              }, []);
            products.forEach((elem,index) => {
                let id = JSON.parse(elem).id;

                if(!catalogIds.includes(id)) {
                    products.splice(index, 1);
                    
                }
            })
            
            localStorage.setItem(this.keyName, JSON.stringify(products))
        }   
    }

    getTime(id) {
        let products = this.getProducts();
        let f = products.find(element => JSON.parse(element).id === id);
        let dateStr = JSON.parse(f).time;
        dateStr = dateStr.slice(3,6) +  dateStr.slice(0, 2) + dateStr.slice(5);
        dateStr.slice(0, 2)
        return dateStr; //new Date('20.05.23')
    }

    getDayInfo(date) {
        const dt = new Date(date);
  
        let dayWeek = ['Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'][dt.getDay()];

        const getMonthName = (date) =>
        date.toLocaleString('ru', {
            month: 'long',
            day: 'numeric',
        }).split(' ')[1];

        let year = dt.getFullYear();
        let month = dt.getMonth();
        let today = new Date(year, month, 0).getTime();
        let now = dt.getTime();
        let week = Math.ceil((now - today) / (1000 * 60 * 60 * 24 * 7));
       
        return `${dayWeek}, ${week} неделя ${getMonthName(dt)} ${year} года`;
    }
}

   


