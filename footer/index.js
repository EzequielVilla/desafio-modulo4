function footer(el){
    const componentEl = document.createElement("div")

    componentEl.innerHTML=`
    
        <footer class="footer">
            <h2 class="footer__nombre">EZE</h2>
            <div class="footer__redes">
                <div class="footer__redes__cont">
                    <a href="" class="footer__redes__ig">Instagram</a>
                    <img src="/desafio-modulo4/img/instagram.svg" alt="" />
                </div>
                <div class="footer__redes__cont">
                    <a href="" class="footer__redes__linkedin">Linkedin</a>
                    <img src="/desafio-modulo4/img/linkedin.svg" alt="" />
                </div>
                <div class="footer__redes__cont">
                    <a href="" class="footer__redes__github">GitHub</a>
                    <img src="/desafio-modulo4/img/github.svg" alt="" />
                </div>
            </div>
        </footer>
    `

    el.appendChild(componentEl);
}