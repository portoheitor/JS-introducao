function dados() {
    let resp = document.querySelector('div#resp')
    let data = new Date
    data = parseInt(data.getFullYear())
    let anoNascimento = parseInt(document.querySelector('input[name="ano"]').value)
    anoNascimento = parseInt(anoNascimento)
    let idade = (data - anoNascimento)
    let sexo = document.getElementsByName('gen')
    let img = document.createElement('img')
    let genero = ''
    if (sexo[0].checked) {
        genero = 'Masculino'
        if (idade >= 0 && idade < 10) {
            resp.innerHTML = `Crianca do sexo ${genero} com ${idade} anos de idade <br>`
            img.setAttribute('src', 'imgs/bebe-masc.png')
            resp.appendChild(img) 
        } else if (idade < 20) {
            resp.innerHTML = `Jovem do sexo ${genero} com ${idade} anos de idade <br>`
            img.setAttribute('src', 'imgs/jovem-masc.png')
            resp.appendChild(img)
        } else if (idade < 55) {
            resp.innerHTML = `Adulto do sexo ${genero} com ${idade} anos de idade <br>`
            img.setAttribute('src', 'imgs/adulto-masc.png')
            resp.appendChild(img)
        } else if (idade > 55) {
            resp.innerHTML = `Idoso do sexo ${genero} com ${idade} anos de idade <br>`
            img.setAttribute('src', 'imgs/idoso-masc.png')
            resp.appendChild(img)
        }

    } else if (sexo[1].checked) {
        genero = 'Feminino'
        if (idade >= 0 && idade < 10) {
            resp.innerHTML = `Crianca do sexo ${genero} com ${idade} anos de idade <br>`
            img.setAttribute('src', 'imgs/bebe-fem.png')
            resp.appendChild(img) 
        } else if (idade < 20) {
            resp.innerHTML = `Jovem do sexo ${genero} com ${idade} anos de idade <br>`
            img.setAttribute('src', 'imgs/jovem-fem.png')
            resp.appendChild(img)
        } else if (idade < 55) {
            resp.innerHTML = `Adulto do sexo ${genero} com ${idade} anos de idade <br>`
            img.setAttribute('src', 'imgs/adulto-fem.png')
            resp.appendChild(img)
        } else if (idade > 55) {
            resp.innerHTML = `Idoso do sexo ${genero} com ${idade} anos de idade <br>`
            img.setAttribute('src', 'imgs/idoso-fem.png')
            resp.appendChild(img)
            
        }
    }

    


}
