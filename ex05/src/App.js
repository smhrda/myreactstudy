import './App.css';
import Join from './compo/Join';
import Login from './compo/Login';
import Home from './compo/Home';
// 주소값 부여 -> Routes, Route
import {Routes, Route} from "react-router-dom";

// redux 재료 import
import {createStore} from 'redux';
import {Provider} from 'react-redux';

function reducer(currentState, action){
  // currentState : 현재 state 값
  // action : 컴포넌트에서 넘긴 message

  // currentState 기본값 설정
  if(currentState == undefined){
    return {
      id : '',
      pw : '',
      nick : ''
    }
  }
  // action에 있는 값(message)을 가져와서 State를 변경하는 로직
  if(action.type == 'join'){
    currentState.id = action.id;
    currentState.pw = action.pw;
    currentState.nick = action.nick;
  }else if(action.type == 'login'){
    
  }
  // 변경 후 -> 반환
  return {...currentState}
}

const store = createStore(reducer);


function App() {
  return (
    <>
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Join></Join>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </Provider>
    </> 
  );
}

export default App;
