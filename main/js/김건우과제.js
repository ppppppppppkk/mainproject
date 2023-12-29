 const 비밀번호 = 1002;
 const 입력된비번 = prompt("관리자 비밀번호를 쓰세요")
 if( 비밀번호 == 입력된비번){










// 카테고리 등록
function cateWhite(){

    let categoryCell = JSON.parse(localStorage.getItem('categoryCell'));/* 호출 */ 
    console.log(categoryCell);
    if( categoryCell == null ){ categoryCell = []}
    // [어디에]
    const cate_number = document.querySelector("#cateNo").value;
    const cate_name = document.querySelector("#cateName").value;
    // [처리]

    let 함수추가용객체 ={};/* 임시 */
    /* 배열 추가를 위해 만듬 */
    
    함수추가용객체.cateno = Number(cate_number);
    함수추가용객체.catename=cate_name;
    
    categoryCell.push(함수추가용객체)
    alert("등록완료 ^ㅡ^");
    console.log(함수추가용객체)  /* 테스트 */
    console.log(categoryCell)   /* 테스트 */


    // [출력]
    localStorage.setItem("categoryCell",JSON.stringify(categoryCell)) /* 저장 */
    document.querySelector.value = '';
    카테고리출력();
}

// 카테고리 삭제
function cateDelete(매개변수){
    
    let categoryCell = JSON.parse(localStorage.getItem('categoryCell'));/* 호출 */
    
    categoryCell.splice(매개변수,1);
    

    console.log("실행")
    localStorage.setItem("categoryCell",JSON.stringify(categoryCell)) /* 저장 */
    카테고리출력();
}

// 메뉴 등록
function menuWhite(){
    console.log("함수실행")
    let productItem = JSON.parse(localStorage.getItem('productItem')); // 호출
    if(productItem == null){productItem = []}
    console.log(productItem);

    const menu_img = document.querySelector("#menuImg").value.split('\\')[2]
    const cate_number = document.querySelector("#cateNo").value;
    const menu_number = document.querySelector("#productNo").value;
    const menu_name = document.querySelector("#productName").value;
    const menu_price = document.querySelector("#pprice").value;
    const menu_text = document.querySelector("#textArea").value;

    let 함수추가용객체 ={};

    함수추가용객체.productno = Number(menu_number);
    함수추가용객체.item = menu_name;
    함수추가용객체.cateno = Number(cate_number+1);
    함수추가용객체.pirce = Number(menu_price);
    함수추가용객체.img = menu_img;
    함수추가용객체.설명 = menu_text;

    productItem.push(함수추가용객체)
    alert("등록완료 ^ㅡ^");
    console.log(함수추가용객체)  /* 테스트 */
    console.log(productItem)

    localStorage.setItem("productItem",JSON.stringify(productItem)) /* 저장 */
}

// // 메뉴 삭제
// function menuDelete(){
    
//     let productItem = JSON.parse(localStorage.getItem('productItem'));/* 호출 */
    
//     const menu_number = Number(document.querySelector("#productNo").value);
   
//     console.log(productItem)    

//     for(let i = 0 ; i < productItem.length; i++){
//             // console.log("반복문실행됨")
//             // console.log(menu_number)
//             // console.log(productItem[i].productno)
//         if(menu_number == productItem[i].productno
//             ){
//             productItem.splice([i],1)
//         }
//     }
//     console.log("실행")
//     localStorage.setItem("productItem",JSON.stringify(productItem)) /* 저장 */
// }

// 총매출 출력
document.addEventListener("DOMContentLoaded",function(){
    const manymoney = document.querySelector("#manyMoney");
    console.log(manymoney)
    let 총금액 = JSON.parse(localStorage.getItem('총금액')).toLocaleString();/* 호출 */
    console.log(총금액.toLocaleString());
    let html = ``;
    
    html += `<span id="manyMoney">총매출 : ${총금액}원</span>`;
    
    manymoney.innerHTML = html;
})


// 카테고리 테이블 출력
카테고리출력();
function 카테고리출력(){
    let categoryCell = JSON.parse (localStorage.getItem('categoryCell'));
    
    const 출력위치 = document.querySelector("#출력위치")

    let html = '';
    for(let i = 0 ; i < categoryCell.length ; i++){
    html += `<tbody id="출력위치">
            <td>${categoryCell[i].cateno}</td>
            <td>${categoryCell[i].catename}</td>
            <td><input onclick="cateDelete(${i})" type="button" value="삭제"/></td>
            </tbody>`
        }

     출력위치.innerHTML = html;   
}







/* 
let cart = [] ;

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
] */


/* ~~~~~~~~~~~~~~~~~ 전승호의 수정 라인 ~~~~ */
메뉴출력하기()
/* 관리자페이지 등록되있는 메뉴항목을 출력시키기 위한 함수 */
function 메뉴출력하기(){
    let productItem = JSON.parse(localStorage.getItem('productItem'));/* 호출 */
    const 출력위치 = document.querySelector("#menuTbody")/* 출력 될 위치 */
    

    let 출력용 = ``;/* 출력하기위한 변수 */
    for(let i = 0; i<productItem.length; i++){
        출력용 +=`<tr class="menuCell">
                    <td class="제품번호">${productItem[i].productno}</td>
                    <td class="버거이름">${productItem[i].item}</td>
                    <td class="카테고리번호">${productItem[i].cateno}</td>
                    <td class="가격">${productItem[i].pirce.toLocaleString()}원</td>
                    <td> <span class="이미지이름">${productItem[i].img}</sapn> </td>
                    <td> <span class="설명2"> ${productItem[i].설명} </span> </td>
                    <td>
                    <div>
                        <select id="수정선택${i}">
                            <option  value="productno">제품번호</option>
                            <option  value="item">버거이름</option>
                            <option  value="cateno">카테고리번호</option>
                            <option  value="pirce">가격</option>
                            <option  value="img">이미지이름</option>
                            <option  value="설명">설명</option>
                        </select>
                        <input class="fix버튼키" onclick="fix함수(${i})" type="button" value="수정">
                    </div>
                        <input class="삭제버튼키" onclick="delete함수(${i})" type="button" value="삭제">
                    </td>
                </tr>`
    }
    출력위치.innerHTML = 출력용
}
function delete함수(매개변수){/* 매개변수 = productItem의 인덱스 번호 */
    let productItem = JSON.parse(localStorage.getItem('productItem'));/* 호출 */
    // console.log(매개변수)
    productItem.splice(매개변수,1);
    
    localStorage.setItem("productItem",JSON.stringify(productItem)) /* 로컬저장 */
    메뉴출력하기()
}
function fix함수(매개변수){ /* 매개변수 = productItem의 인덱스 번호 */
    let productItem = JSON.parse(localStorage.getItem('productItem'));/* 호출 */
    let 수정선택 = document.querySelector(`#수정선택${매개변수}`).value /* 수정 원하는 선택위치 받아오기 */
    let 입력받은값 = prompt("수정할 내용으로 입력해주세요")
    // console.log(수정선택)
    // console.log( productItem[매개변수])
    let 함수수정용 = {};
    함수수정용={
        productno: productItem[매개변수].productno,
        item : productItem[매개변수].item,
        cateno : productItem[매개변수].cateno,
        pirce : productItem[매개변수].pirce,
        img : productItem[매개변수].img,
        설명 : productItem[매개변수].설명
    }

    // console.log( 함수수정용);

    함수수정용[수정선택] = 수정선택=="productno"||수정선택=="cateno"||수정선택=="pirce"? Number(입력받은값):String(입력받은값);

    // console.log( 함수수정용);

    productItem.splice(매개변수,1)          /* 삭제 */
    productItem.splice(매개변수,0,함수수정용)   /* 삭제한 위치에 다시추가 */
    // console.log(productItem)
    localStorage.setItem("productItem",JSON.stringify(productItem)) /* 로컬저장 */

    
    메뉴출력하기()

}


/* ~~~~~~~~~~~~~~~~~~~ 전승호의 수정라인 끝 ~~~~~~~~~~ */
}else{alert("비밀번호가 틀렸습니다.")
location.href="../html/전승호과제메뉴페이지.html"}