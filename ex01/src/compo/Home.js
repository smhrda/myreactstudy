import { Link } from "react-router-dom";

const Home = () => {
    return(
        <>
            <h1>Home</h1>
            <p>Main Page</p>
            {/* 리액트에서 라우터를 통한 페이지 이동을 할 때는
                a 태그보다 Link 태그를 사용하는 것이 빠름 */}
            <a href="./login">로그인 페이지로 이동1</a><br/>
            <Link to='./login'>로그인 페이지로 이동2</Link><br/>
            <Link to='./about'>소개 페이지로 이동</Link>
        </>
    );
}

export default Home;