let l = 5; //사용자가 원하는 단어 길이
let k = 0;
let correct = 0;
let t = 0;
let flag = false;
var answer;
var hintAnswer;
const $wrap = document.querySelector('.wrap');
const $btn = document.querySelector('button');
const $div = document.querySelector('div.temp');

//영어단어 데이터
const eng = [
    'and', 'but', 'cow', //0~2번
    'into', 'rock', 'gift', //3~5번
    'vocal', 'utill', 'hover', //6~8번
    'bottom', 'attack', 'travel', //6~8번
];

const hints = [
    '그리고', '하지만', '소', //0~2번
    '안으로', '바위', '선물', //3~5번
    '보컬', '활용', '호버', //6~8번
    '맨아래', '공격', '여행', //6~8번
];

const kor = [
    'ㄱㅏㄴ', 'ㅅㅜㄹ', 'ㅍㅏㄹ', // 0~2번
    'ㅎㅏㄹㅜ', 'ㅋㅓㅍㅣ', 'ㅂㅏㄷㅏ', // 3~5번
    'ㅇㅗㅁㅗㄱ', 'ㅌㅏㄹㅈㅜ', 'ㅅㅗㄱㅡㅁ', // 6~8번
    'ㅅㅓㄴㅂㅜㄹ', 'ㄱㅗㅏㅇㅇㅓ', 'ㅁㅏㅇㅜㅅㅡ' // 9~11번
];

const kHint = [
    '우루사',
];



// 글자 수 선택


const $sNum = document.querySelector('.sNum');
$sNum.addEventListener('change', e => {

    l = +$sNum.value;
    console.log(l);
    k++;
    if (k !== 1) {
        $div.replaceChildren();
        engInit();
    } else {
        engInit();

    }

});

// 언어 선택 하는 로직 짜다가 실패
// const $sLang = document.querySelector('.sLang');
// $sLang.addEventListener('change', e => {
//     console.log($sLang.value);
//     if ($sLang.value === 2) { // 게임시작 화면 한국어 선택 시
//         k++;
//         if (k !== 1) {
//             $div.replaceChildren();
//             korInit();
//         } else {
//             $div.replaceChildren();
//             korInit();
//         }
//     } else { // 게임시작 화면 영어 선택 시
//         k++;
//         if (k !== 1) {
//             $div.replaceChildren();
//             engInit();
//         } else {
//             engInit();
//         }
//     }
// });




// 언어: 영어 선택 시 실행

function engInit() {
    //랜덤단어 선정
    
    if (l == 3) {
        var ran3 = Math.floor(Math.random() * 3);
        answer = eng[ran3];
        hintAnswer = hints[ran3];

    } else if (l == 4) {
        var ran4 = Math.floor(Math.random() * 3) + 3;
        answer = eng[ran4];
        hintAnswer = hints[ran4];

    } else if (l == 5) {
        var ran5 = Math.floor(Math.random() * 3) + 6;
        answer = eng[ran5];
        hintAnswer = hints[ran5];

    } else if (l == 6) {
        var ran6 = Math.floor(Math.random() * 3) + 9;
        answer = eng[ran6];
        hintAnswer = hints[ran6];

    };
    console.log('정답지 : ' + answer);
    console.log('힌트 : ' + hintAnswer);



    //글자수대로 초기박스생성

    for (let i = 0; i < answer.length; i++) {
        //input 생성
        const $new = document.createElement('input');
        $new.setAttribute('type', 'text');
        $new.setAttribute('maxlength', '1');
        $new.setAttribute('onkeyup', "moveFocus(" + i + ")"); // 키보드이벤트1 추가
        console.log('dddd' + answer);
        $new.setAttribute('class', 'list');
        $div.appendChild($new);

        //마지막박스 생성 후
        if (i === answer.length - 1) {
            //다음 버튼생성
            const $newbtn = document.createElement('button');
            $newbtn.classList.add('hell');
            $newbtn.textContent = '확인';
            $div.appendChild($newbtn);
        }
        $new.style.width = (500 / answer.length) + "px";
        $new.style.height = (500 / answer.length) + "px";
    }

}

// 언어: 한국어 선택 시 실행

// function korInit() {
//     //랜덤단어 선정
    
//     if (l == 3) {
//         var ran3 = Math.floor(Math.random() * 3);
//         answer = kor[ran3];

//     } else if (l == 4) {
//         var ran4 = Math.floor(Math.random() * 3) + 3;
//         answer = kor[ran4];

//     } else if (l == 5) {
//         var ran5 = Math.floor(Math.random() * 3) + 6;
//         answer = kor[ran5];

//     } else if (l == 6) {
//         var ran6 = Math.floor(Math.random() * 3) + 9;
//         answer = kor[ran6];

//     };
//     console.log('정답지 : ' + answer);



//     //글자수대로 초기박스생성

//     for (let i = 0; i < answer.length; i++) {
//         //input 생성
//         const $new = document.createElement('input');
//         $new.setAttribute('type', 'text');
//         $new.setAttribute('maxlength', '1');
//         $new.setAttribute('onkeyup', "moveFocus(" + i + ")"); // 키보드이벤트1 추가
//         console.log('dddd' + answer);
//         $new.setAttribute('class', 'list');
//         $div.appendChild($new);

//         //마지막박스 생성 후
//         if (i === answer.length - 1) {
//             //다음 버튼생성
//             const $newbtn = document.createElement('button');
//             $newbtn.classList.add('hell');
//             $newbtn.textContent = '확인';
//             $div.appendChild($newbtn);
//         }
//         $new.style.width = (500 / answer.length) + "px";
//         $new.style.height = (500 / answer.length) + "px";
//     }

// }





//키보드 이벤트1 : 포커스제어===============
function moveFocus(i) {

    // console.log(answer);

    const $inputFocus = document.querySelectorAll('.list');
    if (i == answer.length - 1 && event.key == 'Enter') { //마지막칸 enter 체점 후 다음라인 생성
        const $div = document.querySelector('div.temp');
        const $input = document.querySelectorAll('.list');
        check($div, $input);
        if (!flag) creatInput($div);
        $inputFocus[i].blur();
        return;
    }

    if (event.key == 'Escape') { //esc 누르면 input 포커스 아웃  
        $inputFocus[i].blur();
    }
    if (!(i == answer.length - 1) && event.keyCode !== 8) $inputFocus[i + 1].focus();
}

//마우스 이벤트===============
$wrap.addEventListener('click', e => {

    const $div = document.querySelector('div.temp');
    if (!e.target.matches('.temp button')) return; //버튼말고는 클릭이벤트 없음
    const $input = e.target.parentNode.querySelectorAll('input');
    check($div, $input);
    if (!flag) creatInput($div);
});


//글자 채점 로직 함수===============
function check($div, $input) {

    const $keybox = document.querySelectorAll('.keyboardBox');
    for (let i = 0; i < answer.length; i++) {
        if ($input[i].value == answer[i]) {
            //맞는글자 키보드 초록변경
            $input[i].style.background = 'green';
            for (let j = 0; j < 26; j++) {
                const keyboxValue = $keybox[j].getAttribute('value');
                if (keyboxValue === $input[i].value) {
                    $keybox[j].classList.add('green');
                }
            }
            correct++;
            if (correct == answer.length) { //=============승리 : 초록칸갯수=글자길이==================
                victory(answer);
            }

        } else if (answer.includes($input[i].value) && $input[i].value !== '') {
            $input[i].style.background = 'yellow';

            //맞는글자 키보드 노랑변경
            for (let j = 0; j < 26; j++) {
                for (let j = 0; j < 26; j++) {
                    const keyboxValue = $keybox[j].getAttribute('value');
                    if (keyboxValue === $input[i].value) {
                        $keybox[j].classList.add('yellow');
                    }
                }
            }
        } else {
            //틀린글자 키보드 회색변경
            for (let j = 0; j < 26; j++) {
                for (let j = 0; j < 26; j++) {
                    const keyboxValue = $keybox[j].getAttribute('value');
                    if (keyboxValue === $input[i].value) {
                        $keybox[j].classList.add('lightgrey');
                    }
                }
            }
            $input[i].style.background = 'lightgrey';
        }
    }
    const $inputFocus = document.querySelectorAll('.list');
    for (let i = 0; i < answer.length; i++) {
        $inputFocus[i].classList.remove('list'); //기존 키보드 이벤트1 권한 제거
    }

    t++; //도전횟수 카운트
    if (t == answer.length + 2 && flag == false) {
        flag = true; // 실패해도 맞출때까지 박스 생성하게 해줌
        defeat(answer);
    }

    // 상태창 남은 기회 숫자 올리기
    const $chanceNum = document.querySelector('.status .tool:first-child em');
    $chanceNum.textContent = answer.length + 2 - t;


}









//다음라인 생성 함수===============
function creatInput($div) {
    const $clone = $div.cloneNode(true);
    const $inputs = $clone.querySelectorAll('input');
    for (let $ele of [...$inputs]) {
        $ele.value = '';
        $ele.style.background = 'white';
        $ele.classList.add('list'); //새로운 라인 키보드 이벤트1 권한 부여
    }

    const $btn = document.querySelector('.hell');
    $btn.remove(); //지난라인 버튼제거            
    $wrap.appendChild($clone);
    $div.classList.remove('temp');
    $inputs[0].focus(); // 생성된 다음라인 첫칸 포커스
    correct = 0; //녹색갯수 초기화
    $wrap.scrollTop = $wrap.scrollHeight; //스크롤 최하단 유지
}


//승리시 정답함수===============
function victory(answer) {
    alert('성공입니다!');
    flag = true // 승리시 추가 라인 생성없음

    //성공단어 사이드로
    const $vpad = document.getElementById('vpad');
    const $sword = document.createElement('div');
    $sword.classList.add('sword');
    $sword.textContent = answer;
    $vpad.appendChild($sword);
};

function defeat(answer) {
    alert('실패입니다!');

    //실패단어 사이드로
    const $dpad = document.getElementById('dpad');
    const $dword = document.createElement('div');
    $dword.classList.add('dword');
    $dword.textContent = answer;
    $dpad.appendChild($dword);
}

// 상태 창

// 처음화면 돌아가는 로직
const $reload = document.querySelector('.status .tool:nth-child(4)');
$reload.addEventListener('click', e => {
    location.reload();
});

// 언어 선택

let count = 0;
const $selectLang = document.querySelector('.status .tool:nth-child(3)');
const $btnRight = document.querySelector('.right');
const $btnLeft = document.querySelector('.left');
const $eng = document.querySelector('.eng');
const $kor = document.querySelector('.kor');
$selectLang.addEventListener('click', e => {
    count++;
    if (!e.target.matches('.right')) return;

    if (count === 1) {
        $eng.textContent = '';
        $kor.textContent = 'Korean';
    }
});
$selectLang.addEventListener('click', e => {
    count--;
    if (!e.target.matches('.left')) return;

    if (count === 0) {
        $eng.textContent = 'English';
        $kor.textContent = '';
    }
});






// 처음 화면 =============================================================

const $startPage = document.querySelector('.startPage');
const $startBtn = document.querySelector('#startBtn');
const $sbtn2 = document.querySelector('.sbtn');
const $intro = document.querySelector('.intro');
const $introText = document.querySelector('.introText');
const $select = document.querySelector('.select');
const $final = document.querySelector('.final');

$startPage.addEventListener('click', e => {
    if (e.target === $startBtn) {
        $startPage.style.display = 'none';
        $select.style.display = 'block';
    }
});


function intros() {
    $introText.style.display = 'block';
}

function intros2() {
    $introText.style.display = 'none';
}

function startClick() {
    $select.style.display = 'none';
    $final.style.display = 'flex';

}

// 0414 힌트 생성 로직
const $btnHint = document.querySelector('.btn-hint');
const $hintText = document.querySelector('.hint-text');

$btnHint.addEventListener('click', e => {
    $hintText.classList.toggle('hide');
    if ($hintText.classList.contains('hide')) {
        $hintText.textContent = '';
    } else {
        $hintText.textContent = hintAnswer;
    }

});