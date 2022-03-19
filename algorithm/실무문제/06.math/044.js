function random() {
    return String(Math.floor(Math.random()*(10**4))).padStart(4,"0")
    // TODO 여기에 작성하세요.

    }
    
    console.log(random()) // 1612
    console.log(random()) // 9172