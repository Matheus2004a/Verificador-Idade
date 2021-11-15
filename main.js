const getDate = new Date()
const date = getDate.getFullYear()
const dateBirth = document.querySelector("#txt-ano")
const resp = document.querySelector("#resp")
const btnClear = document.querySelector("#btn-clear")

btnClear.addEventListener("click", () => {
    dateBirth.value = ''
    dateBirth.focus()
    error.innerHTML = ''
    resp.innerHTML = "Preencha os dados acima para ver o resultado"
    resp.appendChild(img).style.display = 'none'

    if (inputGenres[0].checked) {
        inputGenres[0].checked = false
    } else {
        inputGenres[1].checked = false
    }
})

const inputGenres = document.getElementsByName("radsex")
let error = document.querySelector("#error")
let img = document.createElement("img")

const btnVerify = document.querySelector("#btn-verify")
btnVerify.addEventListener("click", () => {
    if (dateBirth.value.length == 0 || dateBirth.value > date) {
        error.innerHTML = "Erro: Verifique os dados ou digite uma data menor do que a atual"
    } else {
        error.innerHTML = ''
        let age = date - dateBirth.value
        let genre = ''
        img.setAttribute("id", "foto")
        if (inputGenres[0].checked) {
            genre = "Homem"
            if (age >= 0 && age < 12) {
                genre = "Criança"
                img.setAttribute("src", "./img/foto-criança-m.png")
            }
            else if (age < 18) {
                genre = "Adolescente"
                img.setAttribute("src", "./img/foto-adolescente-m.png")
            }
            else if (age < 60) {
                genre = "Adulto"
                img.setAttribute("src", "./img/foto-adulto-m.jpg")
            }
            else {
                genre = "Idoso"
                img.setAttribute("src", "./img/foto-idoso-m.png")
            }
        } else {
            genre = "Mulher"
            if (age >= 0 && age < 12) {
                genre = "Criança"
                img.setAttribute("src", "./img/foto-criança-f.png")
            }
            else if (age < 18) {
                genre = "Adolescente"
                img.setAttribute("src", "./img/foto-adolescente-f.png")
            }
            else if (age < 60) {
                genre = "Adulto"
                img.setAttribute("src", "./img/foto-adulto-f.png")
            }
            else {
                genre = "Idoso"
                img.setAttribute("src", "./img/foto-idoso-f.png")
            }
        }

        resp.innerHTML = `Detectado ${genre} com ${age} anos`
        resp.appendChild(img).style.display = "inline-block"
    }
})