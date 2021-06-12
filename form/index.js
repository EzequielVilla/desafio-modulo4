function form(el,title){
    const componentEl = document.createElement("div")

    componentEl.innerHTML=`
    <section class="contacto">
    <h2 class="contacto__title">${title}</h2>
    <form action="" class="contacto__form">
        <div class="form__name-container">
            <label for="form__name" class="form__txt-name"
                >NOMBRE</label
            >
            <input
                type="text"
                name="name"
                id="prueba"
                class="form__name"
            />
        </div>
        <div class="form__email-container">
            <label for="form__email" class="form__txt-email"
                >EMAIL</label
            >
            <input
                type="email"
                name="email"
                id=""
                class="form__email"
            />
        </div>
        <div class="form__msj-container">
            <label for="form__msj" class="form__txt-msj"
                >Mensaje</label
            >
            <textarea
                name="msj"
                id=""
                class="form__msj"
                cols="30"
                rows="10"
            ></textarea>
        </div>
        <div class="form__submit-cont">
            <input
                type="submit"
                value="Enviar"
                class="form__submit"
            />
        </div>
    </form>
    </section>
    `
    const form = componentEl.querySelector('.contacto__form');
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        const url = "https://apx-api.vercel.app/api/utils/dwf";
        const email = componentEl.querySelector(".form__email").value;
        const mensaje = componentEl.querySelector(".form__msj").value;
        const data = {
            "to": email,
            "message": mensaje
        }
        fetch(url, {
            method: 'POST', 
            body: JSON.stringify(data), 
            headers:{
              'Content-Type': 'application/json'
            }
          })
        .then(data => data.json)
        .then(res => console.log(res));
    });

    el.appendChild(componentEl);
}