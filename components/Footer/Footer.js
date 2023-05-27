class Footer {

    render() {
        
        let navigation = '';

        category.forEach(elem => {
            navigation += `
            <li class="menu__item">
                <a href="#${elem}" class="menu__link">${elem}</a>
            </li>

            `;
        })
        const html =`    
            <div class="container">
                <div class="footer__inner">
                    <a href="#" class="logo">
                        <span class="logo__title">Guitar</span>
                        <span class="logo__subtitle">shop</span>
                    </a>
                    <nav class="footer__menu"><ul class="menu-column">
                    ${navigation}
                </ul></nav>
                    
                </div>
            </div>
            `;
        ROOT_FOOTER.innerHTML = html;
    }

}

const footer = new Footer();
footer.render();