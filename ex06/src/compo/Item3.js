import { useSelector } from "react-redux";
// useSelector : 공유되고 있는 store에 접근해 state값을 가져올 수 있게 함(리덕스 스토어 상태 조회)

const Item3 = (props) => {

    const number = useSelector((state) => state.number);

    return(
        <div>
            {/* <h1>Item3 : {props.num}</h1> */}
            <h1>Item3 : {number}</h1>
        </div>
    )
}

export default Item3;