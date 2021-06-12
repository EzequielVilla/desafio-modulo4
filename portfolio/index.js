
function writeHeader(){
    const containerEl = document.querySelector(".header-component");
    header(containerEl);
}
function writeFirstCont(foto,data){

    const template = document.querySelector(".portfolio-component__copy");
    const container = document.querySelector(".portfolio-component");
    const clone = template.content.cloneNode(true);
    clone.querySelector(".portfolio-component__img").src = foto;
    clone.querySelector(".portfolio-component__title").innerHTML = data.titulo;
    clone.querySelector(".portfolio-component__info").innerHTML = data.descripcion;
    clone.querySelector(".portfolio-component__link").href = data.link;
    clone.querySelector(".portfolio-component__link").innerHTML = "Link al proyecto en Github";

    container.appendChild(clone);
}

function writeFooter(){
    const containerEl = document.querySelector(".footer-component");
    footer(containerEl);
}

function main(){
    const promesa = fetch("https://cdn.contentful.com/spaces/ovsizgi59sct/environments/master/entries?access_token=Q4ReEci7id0LTsyGAssb41n7o06VmjUc0JFMES7tYoA");
    promesa.then(response => response.json())
    .then(data => {
        writeHeader();
        writeFooter();
        
        const getTitle = data.items.find((item) => item.sys.contentType.sys.id == "portfolio");
        document.querySelector(".first-cont__title__saludo").innerHTML = getTitle.fields.title

        const portfolioFoto = (data.includes.Asset.find((item) => item.fields.title == "portfolio")).fields.file.url;

        data.items.filter((item) => ((item.sys.contentType.sys.id == "portfolioTrabajos") ? writeFirstCont(portfolioFoto ,item.fields) : null));

        
        
        
    });
}
main();