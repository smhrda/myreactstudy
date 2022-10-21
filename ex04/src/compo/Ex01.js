import axios from 'axios';
import {useState} from 'react';

const Ex01 = () => {

    const [movieArray, setMovieArray] = useState([]);

    const getMovies = async() => {
        const url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101";
        
        // axios : 비동기 통신 방법으로 통신을 진행
        const result = await axios.get(url);  // get 방식으로 url과 통신하고, 결과를 result에 담음
        console.log(result); 
        // async~await 를 적지 않으면, 통신에 대한 응답값이 Promise 타입으로 반환됨
        // --> 화면을 구성하는 컴포넌트들이 요청을 보낼 때, 순차적으로 요청을 처리하기 위함
        console.log(result.data.boxOfficeResult.dailyBoxOfficeList[0].movieNm);

        setMovieArray(result.data.boxOfficeResult.dailyBoxOfficeList);
        
    }

    return(
        <>
            <h1>영화데이터 확인 페이지</h1>
            <button onClick={getMovies}>영화 정보 가져오기</button>
            <table border='1'>
                <tr>
                    <td>순위</td> 
                    <td>제목</td>
                    <td>개봉일</td>
                </tr>
                {movieArray.map((item)=>{
                    return(
                        <tr>
                            <td>{item.rnum}</td>
                            <td>{item.movieNm}</td>
                            <td>{item.openDt}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    );
}

export default Ex01;