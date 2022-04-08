function main()
{
        const http = new XMLHttpRequest();
        http.open('GET','modelo y glosario/Glosario.json',true);
        http.send();
        http.onreadystatechange = function()
        {
            if(this.readyState == 4 && this.status == 200)
            {
                let datos = JSON.parse(this.responseText);
                console.log(datos);
                return datos;
            }
        }
}
async function predecir()
{
    var model = null
    console.log("cargando modelo");
    model = await tf.loadLayersModel("modelo y glosario/model.json");
    console.log("modelo cargado");
}