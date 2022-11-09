import './App.css';
import Item1 from './compo/Item1';
// import Item2 from './compo/Item2';
// import Item3 from './compo/Item3';
import {useState} from 'react';

// 리덕스 재료 준비
import {createStore} from 'redux';
// createStore : state 값을 저장시키는 역할
import {Provider} from 'react-redux';
import Right1 from './compo/Right1';
// Provider : state 값을 어떤 컴포넌트와 공유, 제공할 것인지를 정의

// reducer :  store에 접근해서 state에 관련된 작업을 처리할 기능
// --> 현재의 상태값, 처리할 작업(action) 필요
function reducer(currentState, action){

  // reducer가 처음 store에 적용될 때 default 상태값을 만드는 부분
  if(currentState===undefined){
    return {
      number : 1 // --> 다른 컴포넌트에서 사용 가능한 기본 상태값
    };
  }
  // currentState가 undefined가 아닌 다른 상태값에 따른 명령이 들어왔다면
  // 밑에서 처리 가능
  if(action.type == 'plus'){
    currentState.number++;
  }else if(action.type='name'){
    currentState.name = '승환';
  }



  return{...currentState}; // --> 객체에 대한 모든 정보를 가져옴
}

const store = createStore(reducer); // state값을 저장시킬 저장소 생성


function App() {

  const [number, setNumber] = useState(3);

  return (
    <div id="container">
      <h1>Root : {number}</h1>
      <div id="grid">
        <Provider store={store}>
          {/* 위에서 만들어놓은 store와 연결시킨 뒤, 해당 내용을 하위 컴포넌트에 제공
              / 하위 컴포넌트가 사용하고 있는 다른 컴포넌트에도 store를 제공할 수 있음 */}
          <Item1 num={number}></Item1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}

export default App;
