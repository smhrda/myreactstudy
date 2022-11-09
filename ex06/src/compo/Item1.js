import Item2 from "./Item2";
import { useSelector } from "react-redux";

// props : 속성(key)과 데이터(value)를 오브젝트 형태로 상속받게 해줌
const Item1 = (props) => {

    const name = useSelector((state) => state.name);

    return(
        <div>
            <h1>Item1 : {name}</h1>
            <Item2 num={props.num}></Item2>
        </div>
    )
}

export default Item1;