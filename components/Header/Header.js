class Header {

    render() {
        const html =`
                <div class="container">
                    <div class="header__inner">

                        <span class="hamburger header__hamburger">
                            <span class="hamburger__line"></span>
                        </span>
                        <a href="" class="logo">
                            <span class="logo__title">Guitar</span>
                            <span class="logo__subtitle">shop</span>
                        </a>
                        

                    </div>
                </div>
                `;
        ROOT_HEADER.innerHTML = html;
    }

}

const header = new Header();
header.render();

