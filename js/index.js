const creatModal = (title, message)=> {
    const $modal = document.createElement("div");
    $modal.id = "modal";
    $modal.className = "fixed top-0 right-0 left-0 bottom-0 flex flex-col items-center justify-center bg-slate-950/80 text-sky-100 z-50 p-12"

    $titleModal = document.createElement("h2");
    $btnModal = document.createElement("button");
    $btnModal.id = "btn-clearModal";
    $btnModal.className = "absolute top-2 right-3 h-6 w-6 bg-white text-red-600 font-bold rounded-full";
    $btnModal.textContent = "X";
    $titleModal.className = "text-4xl font-semibold tracking-tight mb-2"
    $messageModal = document.createElement("p");
    $messageModal.className = "max-w-xl text-justify"
    
    $titleModal.textContent = title;
    $messageModal.textContent = message;

    $modal.appendChild($titleModal)
    $modal.appendChild($btnModal)
    $modal.appendChild($messageModal);
    return $modal;
}

const showModal = (title, message)=> {
    const $modal = creatModal(title, message);
    document.querySelector('body').appendChild($modal);
}

document.querySelector("body").addEventListener('click', (e)=> {
    const id = e.target.id;
    if(id == "btn-footer-contactanos" || id == "btn-nav-contactanos"|| id == "btn-section-contactanos"){
        const title = "Informacion de Contacto"
        const message = "Este es un mensaje para que se puedan contactar con notrosos enviado desde javascript"
        showModal(title, message);
    }
    else if(id == "btn-clearModal"){
        document.getElementById("modal").remove()
    }
})

console.log("hol");