
const 임시장바구니 =[]
const cart =[];
const categoryCell = [{cateno:1,catename:"New"},{cateno:2,catename:"프리미엄"},{cateno:3,catename:"하프앤하프"},{cateno:4,catename:"클래식"}]
const productItem = [
    {productno: 1,item : "스노우 브리스킷 바비Q",cateno : 1 , pirce : 35900 , img:"../../img/스노우브리스킷바비Q.jpg",설명 : "#Light up! Christmas 스노우 피자 출시<br/>#육즙 가득 브리스킷과 트러플핑크 페퍼 치즈 소스,스위트 리코타치즈로 풍미를 더하다!"},
    {productno: 2,item : "스노우 블랙타이거 슈림프",cateno : 1 , pirce : 37900 , img :"../../img/스노우블랙타이거슈림프.jpg",설명 : "#Light up! Christmas 스노우 피자 출시<br/>#탱글하고 쫄깃한 블랙타이거 새우와 스위트 리코타 치즈의 조화, 압도적인 비주얼!" },
    {productno: 3,item : "스노우 와일드 와일드 웨스트 스테이크",cateno : 1 , pirce : 37900 , img :"../../img/스노우 와일드 와일드 웨스트 스테이크.jpg",설명 : "#Light up! Christmas 스노우 피자 출시<br/>#서부 정통 두툼한 스테이크. 카우보이 버터 치즈 소스에 스위트 리코타 치즈까지!" },
    {productno: 4,item : "스노우 브리스킷 바비Q",cateno : 2 , pirce : 35900 , img:"../../img/스노우브리스킷바비Q.jpg",설명 : "#Light up! Christmas 스노우 피자 출시<br/>#육즙 가득 브리스킷과 트러플핑크 페퍼 치즈 소스,스위트 리코타치즈로 풍미를 더하다!"},
    {productno: 5,item : "스노우 블랙타이거 슈림프",cateno : 2 , pirce : 37900 , img :"../../img/스노우블랙타이거슈림프.jpg",설명 : "#Light up! Christmas 스노우 피자 출시<br/>#탱글하고 쫄깃한 블랙타이거 새우와 스위트 리코타 치즈의 조화, 압도적인 비주얼!" },
    {productno: 6,item : "스노우 와일드 와일드 웨스트 스테이크",cateno : 2 , pirce : 37900 , img :"../../img/스노우 와일드 와일드 웨스트 스테이크.jpg",설명 : "#Light up! Christmas 스노우 피자 출시<br/>#서부 정통 두툼한 스테이크. 카우보이 버터 치즈 소스에 스위트 리코타 치즈까지!" },
    {productno: 7,item : "브리스킷 바비Q",cateno : 2 , pirce : 34900 , img :"../../img/브리스킷 바비Q.jpg",설명 : "#도미노 회원이라면 배달 20% 기본 할인!<br/>#4가지 페퍼(블랙,핑크,화이트,그린)로 시즈닝한 육즙 가득 브리스킷 스테이크" },
    {productno: 8,item : "브리스킷 바비Q+블랙타이거 슈림프",cateno : 3 , pirce : 35900 , img :"../../img/브리스킷 바비Q+블랙타이거 슈림프.jpg",설명 : "#도미노 회원이라면 배달 20% 기본 할인!<br/>#육즙 가득 브리스킷과 탱글 쫄깃 블랙타이거 슈림프의 만남!" },
    {productno: 9,item : "블랙타이거 슈림프+블랙앵거스 스테이크",cateno : 3 , pirce : 36400 , img :"../../img/블랙타이거 슈림프+블랙앵거스 스테이크.jpg",설명 : "#씨푸드x스테이크 스페셜 콜라보" },
    {productno: 10,item : "포테이토+리얼불고기 더블치즈엣지",cateno : 3 , pirce : 33900 , img :"../../img/포테이토+리얼불고기 더블치즈엣지.jpg",설명 : "#포테이토와 함께 즐기는 리얼 불고기의 맛" },
    {productno: 11,item : "슈퍼 디럭스 히어로",cateno : 4 , pirce : 29900 , img :"../../img/슈퍼 디럭스 히어로.jpg",설명 : "#[도미노x슈퍼 마리오]마리오와 루이지의 색감을 닮은 알록달록 히어로 피자!" },
    {productno: 12,item : "불고기 체다 스타라이트",cateno : 4 , pirce : 29900 , img :"../../img/불고기 체다 스타라이트.jpg",설명 : "#[도미노x슈퍼 마리오]슈퍼 스타의 별빛에 영감을 받아 탄생한 피자!" },
    {productno: 13,item : "리코타 페퍼로니 킹덤",cateno : 4 , pirce : 29900 , img :"../../img/리코타 페퍼로니 킹덤.jpg",설명 : "#[도미노x슈퍼 마리오]페퍼로니 가득한 도미노만의 버섯왕국이 눈앞에!" },
    {productno: 14,item : "포테이토",cateno : 4 , pirce : 27900 , img :"../../img/포테이토.jpg",설명 : "#도미노피자 No.1 레전드" }
]

localStorage.setItem("categoryCell",JSON.stringify(categoryCell)) /* 저장 */
localStorage.setItem("productItem",JSON.stringify(productItem)) /* 저장 */


category출력(1)
출력하기()
function 출력하기(){/* 메뉴 */
    const goodsBundleNew = document.querySelector("#goodsBundleNew")/* 출력할 위치 */
    let productItem = JSON.parse(localStorage.getItem('productItem'));/* 호출 */
    let 출력물New = ``
    for(let i = 0; i < productItem.length; i++){
        if(productItem[i].cateno == 1){ /* 카테고리 1번만 출력 */
            출력물New += `<div class="goodsForm">
                        <img onclick="구매선택(${productItem[i].productno})" src="${productItem[i].img}"/>
                        <div class="goodsName">${productItem[i].item}</div>
                        <div><span class="markRed">L</span><span>${productItem[i].pirce.toLocaleString()}원</span></div>
            
                        <div class="goodsEx">${productItem[i].설명}</div>
                    </div>`}
    };
    goodsBundleNew.innerHTML = 출력물New;
    // ------------------------------------------------------------------------

    const goodsBundlePremium = document.querySelector("#goodsBundlePremium")/* 출력할 위치 */
    let 출력물pre = ``
    for(let i = 0; i < productItem.length; i++){
        if(productItem[i].cateno == 2){ /* 카테고리 2번만 출력 */
            출력물pre += `<div class="goodsForm">
                        <img onclick="구매선택(${productItem[i].productno})" src="${productItem[i].img}"/>
                        <div class="goodsName">${productItem[i].item}</div>
                        <div><span class="markRed">L</span><span>${productItem[i].pirce.toLocaleString()}원</span></div>
            
                        <div class="goodsEx">${productItem[i].설명}</div>
                    </div>`}
    };
    goodsBundlePremium.innerHTML = 출력물pre;
    // ------------------------------------------------------------------------

    const goodsBundleHalfnhalf = document.querySelector("#goodsBundleHalfnhalf")/* 출력할 위치 */
    let 출력물half = ``
    for(let i = 0; i < productItem.length; i++){
        if(productItem[i].cateno == 3){ /* 카테고리 3번만 출력 */
        출력물half += `<div class="goodsForm">
                        <img onclick="구매선택(${productItem[i].productno})" src="${productItem[i].img}"/>
                        <div class="goodsName">${productItem[i].item}</div>
                        <div><span class="markRed">L</span><span>${productItem[i].pirce.toLocaleString()}원</span></div>
            
                        <div class="goodsEx">${productItem[i].설명}</div>
                    </div>`}
    };
    goodsBundleHalfnhalf.innerHTML = 출력물half;
    // ------------------------------------------------------------------------

    const goodsBundleClassic = document.querySelector("#goodsBundleClassic")/* 출력할 위치 */
    let 출력물classic = ``
    for(let i = 0; i < productItem.length; i++){
        if(productItem[i].cateno == 4){ /* 카테고리 3번만 출력 */
        출력물classic += `<div class="goodsForm">
                        <img onclick="구매선택(${productItem[i].productno})" src="${productItem[i].img}"/>
                        <div class="goodsName">${productItem[i].item}</div>
                        <div><span class="markRed">L</span><span>${productItem[i].pirce.toLocaleString()}원</span></div>
            
                        <div class="goodsEx">${productItem[i].설명}</div>
                    </div>`}
    };
    goodsBundleClassic.innerHTML = 출력물classic;

}
function category출력(매개변수){
    let categoryCell = JSON.parse(localStorage.getItem('categoryCell'));/* 호출 */
    const goodsCategory = document.querySelector("#goodsCategory")
    
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