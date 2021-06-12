

function writeHeader(){
    const containerEl = document.querySelector(".header-component");
    header(containerEl);
}
function writeFirstCont(data){
    document.querySelector(".first-cont__title__saludo").innerHTML = data.title;
    document.querySelector(".first-cont__title__nombre").innerHTML = data.nombre;
}
function writeSecondCont(foto , data){
    document.querySelector(".second-cont__img").src = foto;
    document.querySelector(".second-cont__txt__nombre").innerHTML = data.titulo;
    document.querySelector(".second-cont__txt__info").innerHTML = data.descripcion;
}
function writeThirdCont(foto, data){

    const template = document.querySelector(".services-component__copy");
    const container = document.querySelector(".services-component");
    const clone = template.content.cloneNode(true);
    clone.querySelector(".services-component__img").src = foto;
    clone.querySelector(".services-component__title").innerHTML = data.titulo;
    clone.querySelector(".services-component__info").innerHTML = data.descripcion;
    container.appendChild(clone);
}

function writeForm(){
    const containerEl = document.querySelector(".form-component");
    const title = "Escribime";
    form(containerEl,title);
}
function writeFooter(){
    const containerEl = document.querySelector(".footer-component");
    footer(containerEl);
}

function main(){
    const promesa = fetch("https://cdn.contentful.com/spaces/ovsizgi59sct/environments/master/entries?access_token=Q4ReEci7id0LTsyGAssb41n7o06VmjUc0JFMES7tYoA");
    promesa.then(response => response.json())
    .then(data => {

        //Uso los componentes.
        writeHeader();
        writeForm();
        writeFooter();
        //Busco las fotos.
        const miFoto =  (data.includes.Asset.find((item) => item.fields.title == "miFoto")).fields.file.url;
        const servicesFoto = (data.includes.Asset.find((item) => item.fields.title == "img1")).fields.file.url;

        //Aca iria mejor un FOR (por optimizacion), pero quise intentar usando los metodos find y filter
        data.items.find((item) => ((item.sys.contentType.sys.id == "bienvenida") ? writeFirstCont(item.fields) : null));
        data.items.find((item) => ((item.sys.contentType.sys.id == "presentacion") ? writeSecondCont(miFoto,item.fields) : null));
        data.items.filter((item) => ((item.sys.contentType.sys.id == "servicios") ? writeThirdCont(servicesFoto,item.fields) : null));
        
        
        
    });
}




main();