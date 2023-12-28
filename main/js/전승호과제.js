
const 임시장바구니 =[]
const cart =[];

category출력(1)
출력하기()
function 출력하기(){/* 메뉴 */
    const html = document.querySelector("#html")/* 출력할 위치 */
    let productItem = JSON.parse(localStorage.getItem('productItem'));/* 호출 */
    let categoryCell = JSON.parse(localStorage.getItem('categoryCell'));/* 호출 */

    let 출력물New = ``
    for(let a = 0; a<categoryCell.length; a++ ){
        출력물New +=`<div class="categoryName" id="${categoryCell[a].catename}"> ${categoryCell[a].catename} </div><div class="상품영역">`
        for(let i= 0; i < productItem.length; i++ ){
            if(productItem[i].cateno==categoryCell[a].cateno){
            출력물New +=`<div class="goodsForm">
                            <img onclick="구매선택(${productItem[i].productno})" src="../../img/${productItem[i].img}"/>
                            <div class="goodsName">${productItem[i].item}</div>
                            <div><span class="markRed">L</span><span>${productItem[i].pirce.toLocaleString()}원</span></div>

                            <div class="goodsEx">${productItem[i].설명}</div>
                        </div>`
            }
        }
        출력물New += `</div>`
    }
    html.innerHTML = 출력물New;
    
}
function category출력(매개변수){
    let categoryCell = JSON.parse(localStorage.getItem('categoryCell'));/* 호출 */
    const goodsCategory = document.querySelector("#goodsCategory") /* 출력위치 */
    
    let 출력용 = ``;

    for(let a= 0; a<categoryCell.length; a++){
        출력용 +=`<div onclick="category출력(${a+1})"
        class="${categoryCell[a].cateno == 매개변수 ? "categoryChoose" :""}">
        <a href="#${categoryCell[a].catename}">${categoryCell[a].catename}</a></div>`
        
    }

    goodsCategory.innerHTML = 출력용
}

function 구매선택(매개변수){/* 매개변수 = 제품번호 */
    console.log(매개변수+"실행됨")
    const cartBox = document.querySelector('#cartBox')
    cartBox.style.display = 'block';

    let 출력위치 = document.querySelector('#cartBottom')

    let productItem = JSON.parse(localStorage.getItem('productItem'));/* 호출 */
    
    
    let basket = ``; /* 선택한 품목 HTML형태로 만들기 */
    for(let i= 0; i<productItem.length; i++){
        if(productItem[i].productno==매개변수){
            basket += `<div class="cartInfo">
                        <div>${productItem[i].item}</div>
                        <div>${productItem[i].pirce.toLocaleString()} 원</div>
                    </div>`
        }
    }

    임시장바구니.push(basket) /* 임시장바구니 라는 배열에 저장 */
    
    let cart임시 = {};
    cart임시.productno = 매개변수;
    console.log(cart임시)/* 테스트 */
    cart.push(cart임시)

    localStorage.setItem("cart",JSON.stringify(cart)) /* 로컬저장 */
    
    console.log(cart)/* 테스트 */
    // let cart = JSON.parse(localStorage.getItem('cart'));/* 호출 */


    basket = ``;
    console.log(임시장바구니[2])
    for(let a = 0; a<임시장바구니.length; a++){
        basket += 임시장바구니[a]
    }


    let 총금액 = 0;/* 총금액 구하기 반복문 */
    for(let b = 0; b<cart.length; b++){
        for(let c = 0; c<productItem.length; c++){
            if(productItem[c].productno==cart[b].productno){/* 카트번호와 아이템넘버가같으면 */
                총금액 += productItem[c].pirce
            }
        }
    }

    document.querySelector('#totalPrice').innerHTML = `${총금액.toLocaleString()} 원`;
    document.querySelector('#count').innerHTML = cart.length;
    출력위치.innerHTML = basket;/* 출력하기 */
}
function cartCencle(){
    cart.splice(0)
    임시장바구니.splice(0)
    localStorage.setItem("cart",JSON.stringify(cart)) /* 로컬저장 */ 
    const cartBox = document.querySelector('#cartBox')
    cartBox.style.display = 'none';
    장바구니출력함수()
}

function 주문하기(){
    location.href = "../html/김동훈html/payment.html"/* 경로써야함 */
}
function 장바구니출력함수(매개변수){/* 취소전용 함수 : 취소하면 장바구니 재 출력용(사라짐) */
    let 출력위치 = document.querySelector('#cartBottom')
    let productItem = JSON.parse(localStorage.getItem('productItem'));/* 호출 */
    
    let basket = ``; /* 선택한 품목 HTML형태로 만들기 */
    for(let i= 0; i<productItem.length; i++){
        if(productItem[i].productno==매개변수){
            basket += `<div class="cartInfo">
                        <div>${productItem[i].item}</div>
                        <div>${productItem[i].pirce.toLocaleString()} 원</div>
                    </div>`
        }
    }
    출력위치.innerHTML = basket;/* 출력하기 */
}