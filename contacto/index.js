function writeHeader(){
    const containerEl = document.querySelector(".header-component");
    header(containerEl);
}

function writeForm(){
    const containerEl = document.querySelector(".form-component");
    const title = "Contacto";
    form(containerEl,title);
}
function writeFooter(){
    const containerEl = document.querySelector(".footer-component");
    footer(containerEl);
}

function main(){
    writeHeader();
    writeForm();
    writeFooter();
}

main();