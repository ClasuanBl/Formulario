let form = document.getElementById('#formdata');
//let xhr = new XMLHttpRequest();

form.addEventListener('submit',(event) => {
    console.log("funcionando");
    event.preventDefault();
})

function runAjax(){
    //iniciamos el objeto xhr
    let xhr;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new XMLHttpRequest(Micorsoft.XMLHTTP);
    }

    //cargamos la petición
    xhr.open("POST","controller.php");

    let formData = new FormData(form);

    //enviar la petición
    xhr.send(formData);
//hasta aquí tengo la función ajax ahora tengo que configurar para que al dar submit envie
}
