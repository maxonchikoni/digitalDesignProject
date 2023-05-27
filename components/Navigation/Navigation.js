

class Navigation {
    
    render() {
        let navigation = '';
        category.forEach(elem => {
            navigation += `
            <li class="menu__item">
                <a href="#${elem}" class="menu__link">${elem}</a>
            </li>
            `;
        })
        const html = `
            <nav class="header__menu">
                <ul class="menu">
                    ${navigation}
                </ul>
            </nav>
            <a href="#" class="themetoggle">
                    <span class="material-icons">wb_sunny</span></a>
            `
        document.querySelector('#header').firstElementChild.firstElementChild.innerHTML+=html;      
    }
}

const navigation = new Navigation();
navigation.render();

