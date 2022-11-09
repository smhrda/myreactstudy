import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Ex04 = () => {

    const nav = useNavigate();
    // useNavigate  --> 주소 경로를 입력받아 요청해줄 수 있는 Hook

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [nick, setNick] = useState("");
    // 일반 변수의 경우 -> 화면이 렌더링 될 때(화면이 달라질 때) 맨 처음 초기값으로 돌아감!!
    // 화면이 다시 렌더링 된다 ==> 상태값이 바뀔 때!
    // let inputId = '';
    // let inputPw = '';

    const [result, setResult] = useState("로그인 실패");  

    const login = () => {
        if(id === 'smhrd' && pw === '123'){
            setResult(id+'님 환영합니다');
            setId('');
            setPw('');
        }else{
            setResult("로그인 실패");
        } 
    }

    // 버튼없이 useEffect 사용하는 경우
    useEffect(()=>{
        if(id === 'smhrd' && pw === '123'){
            setResult(id+'님 환영합니다');
            nav('/about?id=smhrd&nick='+nick);   // 로그인이 성공하면 바로 이동
        }else{
            setResult("다시 입력해주세요.");
        } 
    }, [nick]);


    return(
        <>
        아이디 : <input placeholder="아이디 입력" onChange={(e) => {setId(e.target.value)}} value={id}></input><br />
        비밀번호 : <input placeholder="비밀번호 입력" onChange={(e) => {setPw(e.target.value)}} value={pw}></input><br/>
        닉네임 : <input placeholder="닉네임 입력" onChange={(e) => {setNick(e.target.value)}}></input>
        {/* <button onClick={login}>로그인</button> */}
        <h1>{result}</h1><br/>
        <Link to='/'>메인 페이지로 이동</Link>
        </>
    );
}

export default Ex04;