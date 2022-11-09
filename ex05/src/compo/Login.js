import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
// useSearchParams : 주소값에 있는 쿼리 스트링 데이터를 꺼내올 수 있게 만들어줌

import { useSelector } from "react-redux";


const Login = () => {

    const id = useSelector((state) => state.id);
    const pw = useSelector((state) => state.pw);
    const nick = useSelector((state) => state.nick);
    

    const [params, setParams] = useSearchParams();
    // params : 이전 컴포넌트에서 보낸 쿼리스트링 데이터를 개체로 가지고 있음
    // ex) nick=Test&pw=123&nick=짜장
    const joinId = params.get("id");
    const joinPw = params.get("pw");
    const joinNick = params.get("nick");

    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

    const navigator = useNavigate();

    const tryLogin = () => {
        if(id == inputId && pw == inputPw){
            console.log('로그인 성공');
            navigator('/home?nick='+nick); // join에서 넘어온 nick값 받기
        }else{
            console.log('로그인 실패');
        }
    }


    // form 태그 적용 시 로그인 무조건 성공하게 됨
    return(
        <>
            <h1>로그인 페이지</h1>
            <form action="./home">
            ID : <input type='text' onChange={(e)=>{setInputId(e.target.value)}}></input><br/>
            PW : <input type='password' onChange={(e)=>{setInputPw(e.target.value)}}></input><br/>
            <button onClick={tryLogin} type="button">로그인 시도</button>
            </form>
        </>
    );
}

export default Login;