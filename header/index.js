function header(el){
    const componentEl = document.createElement("div")

    componentEl.innerHTML=`
    <header class="header">
        <h2 class="header__logo">EZE</h2>
            <div id="lista" class="header__l-cont">
                <a href="" class="header__i-cont__cruz">
                    <img src="./img/vector.svg" alt="" />
                </a>
                <ul class="header__l-cont__lista">
                    <li class="header__l-cont__lista__opcion">
                        <a
                            href="/desafio-modulo4/portfolio/index.html"
                            class="header__l-cont__lista__opcion__link"
                            >Portfolio</a
                        >
                    </li>
                    <li class="header__l-cont__lista__opcion">
                        <a
                            href="/desafio-modulo4/index.html"
                            class="header__l-cont__lista__opcion__link"
                            >Servicios</a
                        >
                    </li>
                    <li class="header__l-cont__lista__opcion">
                        <a
                            href="/desafio-modulo4/contacto/index.html"
                            class="header__l-cont__lista__opcion__link"
                            >Contacto</a
                        >
                    </li>
                </ul>
            </div>
            <div class="header__img">
                <a href="#lista"
                    ><img
                        id="lista"
                        src="./img/burger.svg"
                        alt=""
                        class="header__img__burger"
                /></a>
            </div>
        </header>    
    `

    el.appendChild(componentEl);
}