const maxPage = 8;
let currentPage = 0;

let a = 2;

const movePrev = () => {
    // currentPage = Number(document.getElementById('currentPage').innerText);

    if(currentPage > 0) {
        currentPage = currentPage - 1;

        document.getElementById('currentPage').innerText = currentPage;
        pageMove(currentPage);
    } 
}

const moveNext = () => {
    // currentPage = Number(document.getElementById('currentPage').innerText);

    if(currentPage < maxPage) {
        currentPage = currentPage + 1;

        document.getElementById('currentPage').innerText = currentPage;
        pageMove(currentPage);
    }
}

const pageMove = ( page ) => {
    const frame = document.getElementById('condition_contents_frame');
    frame.src = `./page/index_${page}.html`;
}

const selectFunction = ( number ) => {
    // if(a !== number) {
        document.getElementsByClassName('select')[0].classList.remove('select');
        document.getElementById('select_' + number).classList.add('select');
        
        a = number;

        getObjResult();
    // }
}

const getObjResult = () => {
    let div = `<div> <b class=${a > 1 ? 'yellow' : 'red'}> if( a > 1 ) { `;
        div += `<div style="padding-left : 40px; padding-top : 10px" > a 가 1 보다 크다. </div>`;
        div += `<div style="padding-top : 30px"> } </b> <b class=${a === 1 ? 'yellow' : a === 0 && 'red' }> else if( a === 1 ) { </div>`;
        div += `<div style="padding-left : 40px; padding-top : 10px" > a 와 1 이 같다. </div>`;
        div += `<div style="padding-top : 30px"> } </b> <b class=${a < 1 && 'yellow'}> else { </div>`;
        div += `<div style="padding-left : 40px; padding-top : 10px" > a 가 1 보다 작다. </div>`;
    div += `} </b> </div>`;

    document.getElementById('condition_result_showing_wrapper').innerHTML = div;
}

let complate = false;
const getBoolean = () => {
    let data = document.getElementById("inputs").value.trim();

    let result = true;
    const inputs = document.getElementById("test_code_result_wrapper");
    try {
        if( data === "" || data === "undefined" || data === "NaN" ) {
            result = false;

        } else if(data === "Infinity" || data === "new Date()" ) {
            result = true;
        
        } else {
            data = JSON.parse(data);
            if( !data ) {
                result = false;
            }
        }
    } catch(err) {
        inputs.innerText = ": 올바른 값을 입력해주세요.";
        return;
    }

    complate = true;
    if( result ) {
        inputs.innerText = ": Truthy 한 값을 입력하셨습니다.";
        document.getElementById("truthy").style.color = "#2D46B9";
        document.getElementById("falsy").style.color = "#ababab";

    } else {
        inputs.innerText = ": Falsy 한 값을 입력하셨습니다.";
        document.getElementById("truthy").style.color = "#ababab";
        document.getElementById("falsy").style.color = "#B42B51";
    }
}

// 초기화
const setInit = () => {
    if( complate && event.keyCode !== 13 ) {
        complate = false;
        document.getElementById("truthy").style.color = "#ababab";
        document.getElementById("falsy").style.color = "#ababab";

        document.getElementById("test_code_result_wrapper").innerText = ": "
    }
}