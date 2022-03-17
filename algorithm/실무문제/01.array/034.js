let email = "codecamp@gmail.com"

function pwlize(email){
    let ID=email.split("@")[0].split("")
    let dot=email.split("@")[1].split("")
    
    let IDresult =ID.splice(ID.length-2,2,"*","*")

    console.log(IDresult)
    let result = ID.join("")+"@"+dot.join("")
    return result


    // let adr=email.split("@")[0]
    // let dot=email.split("@")[1]

    // let adrresult=adr.split("").fill('*',-2).join("")

    // let result = adrresult+"@"+dot
    // return result
}

console.log(pwlize(email))



























