import { useDispatch } from "react-redux";
// useDisaptch : store에 연결되어 있는 reeducer를 실행시킴

const Right2 = () => {

    const dispatch = useDispatch();

    return(
        <div>
            <h1>Right2</h1>
            <button onClick={() => dispatch({type:'plus'})}>+</button>
        </div>
    );
}

export default Right2;