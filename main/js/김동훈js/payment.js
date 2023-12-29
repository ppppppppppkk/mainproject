

const 임시장바구니 =[]
let pay = [];
let cart = [] ;

console.log(cart);

const categoryCell = [{cateno:1,catename:"New"},{cateno:2,catename:"프리미엄"},{cateno:3,catename:"하프앤하프"},{cateno:4,catename:"클래식"}]
const productItem = [
    {productno: 1,item : "스노우 브리스킷 바비Q",cateno : 1,pirce : 35900,img:"img/스노우브리스킷바비Q.jpg",설명 : "#Light up! Christmas 스노우 피자 출시<br/>#육즙 가득 브리스킷과 트러플핑크 페퍼 치즈 소스,스위트 리코타치즈로 풍미를 더하다!"},
    {productno: 2,item : "스노우 블랙타이거 슈림프",cateno : 1,pirce : 37900,img :"img/스노우블랙타이거슈림프.jpg",설명 : "#Light up! Christmas 스노우 피자 출시<br/>#탱글하고 쫄깃한 블랙타이거 새우와 스위트 리코타 치즈의 조화, 압도적인 비주얼!" },
    {productno: 3,item : "스노우 와일드 와일드 웨스트 스테이크",cateno : 1,pirce : 37900,img :"img/스노우 와일드 와일드 웨스트 스테이크.jpg",설명 : "#Light up! Christmas 스노우 피자 출시<br/>#서부 정통 두툼한 스테이크. 카우보이 버터 치즈 소스에 스위트 리코타 치즈까지!" },
    {productno: 4,item : "스노우 브리스킷 바비Q",cateno : 2,pirce : 35900,img:"img/스노우브리스킷바비Q.jpg",설명 : "#Light up! Christmas 스노우 피자 출시<br/>#육즙 가득 브리스킷과 트러플핑크 페퍼 치즈 소스,스위트 리코타치즈로 풍미를 더하다!"},
    {productno: 5,item : "스노우 블랙타이거 슈림프",cateno : 2,pirce : 37900,img :"img/스노우블랙타이거슈림프.jpg",설명 : "#Light up! Christmas 스노우 피자 출시<br/>#탱글하고 쫄깃한 블랙타이거 새우와 스위트 리코타 치즈의 조화, 압도적인 비주얼!" },
    {productno: 6,item : "스노우 와일드 와일드 웨스트 스테이크",cateno : 2,pirce : 37900,img :"img/스노우 와일드 와일드 웨스트 스테이크.jpg",설명 : "#Light up! Christmas 스노우 피자 출시<br/>#서부 정통 두툼한 스테이크. 카우보이 버터 치즈 소스에 스위트 리코타 치즈까지!" },
    {productno: 7,item : "브리스킷 바비Q",cateno : 2,pirce : 34900,img :"img/브리스킷 바비Q.jpg",설명 : "#도미노 회원이라면 배달 20% 기본 할인!<br/>#4가지 페퍼(블랙,핑크,화이트,그린)로 시즈닝한 육즙 가득 브리스킷 스테이크" },
    {productno: 8,item : "브리스킷 바비Q+블랙타이거 슈림프",cateno : 3,pirce : 35900,img :"img/브리스킷 바비Q+블랙타이거 슈림프.jpg",설명 : "#도미노 회원이라면 배달 20% 기본 할인!<br/>#육즙 가득 브리스킷과 탱글 쫄깃 블랙타이거 슈림프의 만남!" },
    {productno: 9,item : "블랙타이거 슈림프+블랙앵거스 스테이크",cateno : 3,pirce : 36400,img :"img/블랙타이거 슈림프+블랙앵거스 스테이크.jpg",설명 : "#씨푸드x스테이크 스페셜 콜라보" },
    {productno: 10,item : "포테이토+리얼불고기 더블치즈엣지",cateno : 3,pirce : 33900,img :"img/포테이토+리얼불고기 더블치즈엣지.jpg",설명 : "#포테이토와 함께 즐기는 리얼 불고기의 맛" },
    {productno: 11,item : "슈퍼 디럭스 히어로",cateno : 4,pirce : 29900,img :"img/슈퍼 디럭스 히어로.jpg",설명 : "#[도미노x슈퍼 마리오]마리오와 루이지의 색감을 닮은 알록달록 히어로 피자!" },
    {productno: 12,item : "불고기 체다 스타라이트",cateno : 4,pirce : 29900,img :"img/불고기 체다 스타라이트.jpg",설명 : "#[도미노x슈퍼 마리오]슈퍼 스타의 별빛에 영감을 받아 탄생한 피자!" },
    {productno: 13,item : "리코타 페퍼로니 킹덤",cateno : 4,pirce : 29900,img :"img/리코타 페퍼로니 킹덤.jpg",설명 : "#[도미노x슈퍼 마리오]페퍼로니 가득한 도미노만의 버섯왕국이 눈앞에!" },
    {productno: 14,item : "포테이토",cateno : 4,pirce : 27900,img :"img/포테이토.jpg",설명 : "#도미노피자 No.1 레전드" }
]

//주문취소 함수
function cancel(){
    //1.어디에
    const cancel = document.querySelector("#print")
    //2.무엇을 // cart에 담겨진 모든 값을 삭제한다.
     
    if(confirm("장바구니를 비우겠습니까?")){
        //초기화
        cart.length =0;
        cancel.innerHTML = `장바구니가 비었습니다.`;
    }else{alert("취소합니다.")}
    
    //3.출력
    totalPrice();
    console.log(cart)
    location.href="../../html/전승호과제메뉴페이지.html"
}

function 페이에담김제품정보출력(){
    const payMent = document.querySelector("#print")
    let html =``
    for(let i = 0; i<pay.length; i++){
        
        for( let j = 0 ; j<productItem.length ; j++ ){

            if( pay[i] == productItem[j].productno){
                html += `제품명 : ${ productItem[j].item } & 가격 : ${ productItem[j].pirce } <br/>`
            }
        }
   };
    payMent.innerHTML = html;

}

// 결제 함수 
/* 결제 버튼을 누르면 pay라는 배열에 cart에 있는 배열을 추가한다. */
function payment(){
    //1.어디에
    const payMent = document.querySelector("#print")/* 출력위치 */
    //2.무엇을 //cart배열에 있는 배열값을 pay 배열로 이동 
    
    let cart = JSON.parse(localStorage.getItem('cart'));/* 호출 */
    for(let i = 0; i<cart.length; i++){
         pay.push(cart[i].productno);
    };
    const json = JSON.stringify(pay)
    console.log(pay)
    //3.출력
    const html =`${json}`
    payMent.innerHTML = html;
    console.log(cart)
    //cart.length =0;    // 장바구니 초기화.
    totalPrice()
    페이에담김제품정보출력();
}

//총 주문금액 부분
function totalPrice(){
    //1.어디에
    const totalP = document.querySelector("#totalPrice > span");
    //2.무엇을
    let totalprice = 0;

    for(let i = 0; i<pay.length; i++){
        
        for( let j = 0 ; j<productItem.length ; j++ ){

            if( pay[i] == productItem[j].productno){
                totalprice += Number( productItem[j].pirce )
            }
        }
   };

    //3.출력
    totalP.innerHTML=totalprice.toLocaleString()+"원";
    console.log(totalprice);

    return totalprice;

}
//결제 완료 버튼 
function successPayment(){
    const successPay = document.querySelector("#successPay")

    let 총금액 = JSON.parse(localStorage.getItem('총금액'));/* 호출 */
    console.log("총금액"+총금액)
    if(총금액 == null){총금액 = 0}
    let enterpay = prompt("결제 금액을 입력하세요");
    enterpay = Number(enterpay);

    let totalpay = totalPrice()
    console.log( totalpay );
    if(   enterpay == totalpay){
        alert("결제가 완료되었습니다.")
        총금액+= totalPrice();
        localStorage.setItem("총금액",JSON.stringify(총금액))/* 로컬저장 */
        //cart.length = 0;
        //location.href="../../html/전승호과제메뉴페이지.html"
    }else if(enterpay>totalpay){
        alert(`결제가 완료되었습니다. 거스름돈은 : ${enterpay-totalpay} 입니다.`)
        총금액+= totalPrice();
        localStorage.setItem("총금액",JSON.stringify(총금액))/* 로컬저장 */
    }else{
        alert("결제 실패했습니다.")
    }
    orderListnum()
    orderListdate()
    orderListproductnum()
}

// 더블 선택 함수 요청사항 부분
document.addEventListener('DOMContentLoaded', function(){
    const select = document.querySelector('select')
    const p = document.querySelector('p')

    select.addEventListener('change', function(event){
        const options = event.currentTarget.options
        const list = []
        for (const option of options) {
            if(option.selected){
                list.push(option.textContent)
            }
        }
        p.textContent = `가게 요청사항: ${list}`
    })
})

//============================================================
document.addEventListener('DOMContentLoaded', function(){ //HTML모두 읽었을때 이벤트 함수 실행
     결제페이지카트출력();    
})
function 결제페이지카트출력(){// 함수 선언[실행조건 임시장바구니에서 결제페이지 왔을때 JS실행시 바로 실행=]   
    console.log('결제페이지카트출력()' );
    //1.어디에
    const menuLine = document.querySelector('.MenuL_ine');
    //2.무엇을
    let html = ''; 
        let cart = JSON.parse (localStorage.getItem('cart'));
        for(let i = 0; i<cart.length; i++){
            // 카트에 있는 제품번호를 하나씩 호출
            let productno = cart[i].productno;
            // productno 해당하는 제품을 찾기. [ ]
            for( let j = 0 ; j<productItem.length ; j++ ){
                // 만약에 i번째 카트제품번호와 제품목록에 j번째 제품번호와 같으면.
                if( productno == productItem[j].productno ){
                    
                    console.log( productno );
                    console.log( productItem[j] ); // 찾은 제품정보.

                    html += `<p> 메뉴: ${ productItem[j].item }, 가격: ${ productItem[j].pirce.toLocaleString() }원 <button onclick="버튼삭제함수(${productno})"> 삭제 </button> </p>`

                }
            }
        }
    //3. 출력
    menuLine.innerHTML = html;
} // f end 

function 버튼삭제함수(productno){ //삭제버튼을 클릭했을시 
    console.log('버튼삭제함수()' );
    console.log('productno : :'+productno );
    
}
