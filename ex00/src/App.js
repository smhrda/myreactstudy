//import logo from './logo.svg';
import './App.css';
import './test.css'; // 외부 css 파일 임포트
import App2 from './App2';
import First from './compo/First';
import Second from './compo/Second';

function App() {
  const name = '현지';
  const data = 'First';

  // return 안에 사용자 정의 태그 구조를 작성할 수 있음
  return (
    // JSX 문법 -> JS와 HTML을 같이 사용할 수 있는 문법
    // 규칙 1 : HTMl 구조는 반드시 한가지 태그로 묶여있어야 함!
    // 규칙 2 : 모든 태그는 닫는 태그가 존재해야 함!
    //<h1>HELLO REACT <br></br> 월요일 파이팅! </h1>

    
    // 빈태그(Fragment)로도 묶어서 사용 가능함!
    // 규칙 4. class를 지정해줄 때는 className 키워드 사용
    <>
      <h1 className='first'>HELLO REACT</h1>
      <h1 style={{color:'red'}} id='test'>월요일 파이팅!</h1>
      {/* 변수를 사용할 때는 {변수명}으로 사용함 
        // 규칙 3 : JSX 문법 안에서는 사용할 수 있는 JS 문법이 제한되어 있음
        // (삼항 연산자는 사용 가능)*/}
      
      <h1>나의 이름은 {name==='승환' ? name : '영표'}입니다~</h1>
      <App2 />
      {data ==='First'?<First />:<Second />}
    </>
  );
}

//위에서 만들어놓은 사용자 정의 태그를 내보냄
export default App;
