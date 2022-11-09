import { useState } from "react";

function Ex03(){
    const [inputData, setInputData] = useState("");

    let data = "";

    function getData(e){
        // e : 이벤트 객체 / 이벤트가 일어나는 전반적인 정보를 가짐
        // e.target : 이벤트를 실행시킨 주체
        console.log(e.target.value); //input 태그의 value 값 가져옴
        data = e.target.value;
        // 입력 시마다 바로 출력하고싶다면
        // setInputdata(e.target.value);
    }

    function chData(){
        setInputData(data);
    }

    return(
        <>
            <input onChange={getData}></input>
            <button onClick={chData}>상태값 바꾸기</button>
            <h1>{inputData}</h1>
        </>
    );
}

export default Ex03;