/*

    세미콜론 규칙

    // 권장하지 않음
    var n = 10

    //권장함
    var n = 10;

    // 권장하지 않음
    var n = 10; var sum = 1;


    공백 규칙

    //권장하지 않음
    var num = 2;
    var sum=num+10;

    //권장함 ( 가독성이 좋다 )
    var num = 2;
    var sum = num + 10;

    
    주석

    한줄 주석 : 주석 기호로 슬래시 2개(//)를 붙이고 내용을 작성한다.

    방법 : 
    var today = new Date(); // 현재 날짜 가져오기 
    var h = today.getHours(); // 시간 추출하기
    
    여러 줄 주석 : 주석 내용이 여러줄이면 여는 주석 기호(/*)
    
    방법 :

    /* 
        현재 날짜를 가져와 
        시와 분, 초로 추출하고
        화면에 표시하는 스크립트

        function StartTime() {...}


     식별자   

     식별자는 개발자가 자바스크립트의 변수, 함수, 속성 등을 구별하려고 이름 붙인 특정 단어이다

     var name = prompt("이름을 입력하세요.");
     에서 사용자의 이름을 name이라는 변수에 저장하는데 여기에서 바로 namedl 식별자이다.

     식별자의 첫 글자는 반드시 영문자나 언더코어(_), 또는 달러 기호($)로 시작해야 한다.
     그 다음에는 영문자나 언더스코어, 달러 기호, 숫자를 작성 할 수있고 두 단어 이상이 모여
     하나의 식별자를 만들 경우 단어 사이에 공백을 둘 수 없다.
     단어와 단어 사이는 하이픈(-)이 아닌 언더바(_)로 연결해야 한다.

     방법 :
     num1 // 영문자로 시작하는 식별자
     _doSomeThing  //언더스코어(_)로 시작하는 식별자
     checkTime() // 두 단어로 만든 식별자 

     예약어

     예약어는 식별자로 사용할 수 없다.
     식별자로 사용할 수 없도록 자바 스크립트에 미리 정해 놓은 단어를 가리킨다.
     예를 들어 var는 변수를 선언할 때 쓰는 예약어이며 식별자 이름으로는 사용할 수 없다.
*/
