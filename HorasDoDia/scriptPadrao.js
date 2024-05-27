function mudanca(){
    let msg = document.querySelector('div#msg')
    let img = document.querySelector('img#img')
    let dia = new Date
    let hora = dia.getHours()
    let text = msg.innerHTML=`${dia.toLocaleTimeString()} do dia ${dia.toLocaleDateString()}`
    
        if(hora >=0 && hora <12){
            img.src = "manha.png"
            document.body.style.background = '#e1f5fe'
            msg.innerHTML = `${text}`+`<br> Bom Dia!`
        }else if(hora >=12 && hora <=18){
            img.src = "tarde.png"
            document.body.style.background = '#fda31f'
            msg.innerHTML = `${text}`+`<br> Boa Tarde!`
        }else{
            img.src = "noite.png"
            document.body.style.background = '#2b2e31'
            msg.innerHTML = `${text}`+`<br> Boa Noite!`
        }
    
    
}