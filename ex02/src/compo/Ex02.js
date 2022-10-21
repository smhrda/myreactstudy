import { useState } from "react";

const Ex02 = () => {
    const [todoArray, setTodoArray] = useState([]);
    const [inputData, setInputData] = useState('');

    const getText = (e) => {
        setInputData(e.target.value);
    }

    const setTodo = (e) => {
        // 리액트에서 배열에 값을 추가할 때 -> concat 사용
        // 불변성 유지 : 상태값을 업데이트 할 때는 기존 상태를 그대로 두면서, 새로운 값으로 상태를 업데이트 해줘야 함!

        setTodoArray(todoArray.concat(inputData));
        setInputData('');


        // prevState 사용하는 경우
        //     setTodoArray((prevState) => {
        //         return [...prevState, inputData]
        //     })
        //     setInputData('');
        // }
}

    const deleteData = (e) => {
        setTodoArray(todoArray.filter((data, index)=> {
            return index != e.target.value; // !== 을 사용하면 안됨
                                            // index는 숫자타입, value는 문자열이기 때문
        }))
    }

    
    return (
        <>
            <h1>TodoList</h1>
            <input type="text" onChange={getText} value={inputData}></input>
            <button onClick={setTodo}>추가</button>
            {todoArray.map(function (data, index) {
                return(
                    <div>
                        <h2>{data}</h2>
                        <button onClick={deleteData} value={index}>삭제</button>
                    </div>
                )
            })}
        </>
    );
}






export default Ex02;
