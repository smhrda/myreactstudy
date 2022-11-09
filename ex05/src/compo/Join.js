// useRef : 컴포넌트 안의 특정 DOM(요소)을 선택할 수 있게끔 도와주는 기능
import {useState, useRef} from "react";
// useNavigate : 특정 주소값으로 화면을 전환할 수 있는 역할
import { Link, useNavigate } from "react-router-dom";
// import Login from "./Login";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Join = () => {

    const test = useSelector((state) => state.id);

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [nick, setNick] = useState('');
    const nav = useNavigate();

    // const tryJoin = () => {
    //     nav('/login?id='+id+'&pw='+pw+'&nick='+nick); // 쿼리스트링
    // }

    const useId = useRef();

    const reset = () => {
        setId('');
        setPw('');
        setNick('');
        // ref.current -> ref가 적용된 태그를 의미
        useId.current.focus();
    }

    const dispatch = useDispatch();

    function tryJoin(){
        dispatch({
            type:'join',
            id:id, 
            pw:pw, 
            nick:nick})
        nav('/login');
    }




    // form : 주소값으로 이동하면서 form 태그 안에 있는 내용도 같이 전달함
    return (
        <>
            <h1>회원가입 페이지 입니다.{test}</h1>
            <form action="/login">
                ID : <input name="id" type='text' onChange= {(e) => {setId(e.target.value)}} value={id} ref={useId}></input><br/>
                PW : <input name="pw" type='text' onChange = {(e) => {setPw(e.target.value)}} value={pw}></input><br/>
                NICK : <input name="nick" type='text' onChange = {(e) => {setNick(e.target.value)}} value={nick}></input><br/>
                <button onClick={tryJoin} type="button">Join</button>  {/* form 태그 안의 버튼은 submit이 기본값 -> 타입 지정 필요! */}
                {/* <Link style={{backgroundColor:"red"}} to = '/login'>Join</Link> */}
                <button onClick={reset} type="button">초기화</button>
            </form>
        </>
    );
}

export default Join;