import {useState} from 'react';
//useState : react에서 기본적으로 제공하는 기능(Hooks)
// ---> 상태값을 만들 수 있는 기능 제공
// (상태값 : 화면이 보여진 후에도 값이 바뀌면 화면도 바뀔 수 있는 값 <- 주소값으로 받음)


function Ex02(){
    const [result2, setResult2] = useState("일단 야근"); // useState("초기값")
    // result2 -->  상태값을 나타낼 수 있는 값
    // setResult2 --> 상태값을 바꿀 수 있는 함수(해당 주소값에 있는 값을 가져옴)
    // ==> 비구조할당 방법


    let result = "야근"; // 일반 변수는 화면이 맨 처음 사용자에게 보여졌을 때, 즉 맨 처음 렌더링 됐을 때만 사용자에게 보여짐

    function chResult(){
        result = "칼퇴~~~"
        console.log("1 : ",result);

        setResult2("칼퇴!!"); // 마지막 순서로 실행됨
        console.log("2 : ",result2); // 처음에는 일단 야근이 출력되고, 다시 누르면 칼퇴!!가 출력됨
                                    // setResult2 함수는 포함된 함수에서 가장 마지막에 실행되기 때문
    }

    return(
        <>
            <h1>두번째 컴포 useState</h1>
            <h1>오늘은 {result}</h1> 
            <h1>오늘은2 {result2}</h1>
            <button onClick={chResult}>바꾸기</button>
        </>
    )
}

export default Ex02;