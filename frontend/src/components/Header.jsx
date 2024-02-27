import React from 'react';
import {Link} from 'react-router-dom'

export default function Header() {
const str ='hello'
return (
  <>
   <header>
   <h1> NutriGaurd </h1>
   <nav>
         <ul>
           <li><Link to="/login">로그인</Link></li>
           <li><Link to="/signup">회원가입</Link></li>
           <li><Link to="/health-survey">건강설문</Link></li>
           <li><Link to="/nutritional-products">영양제 제품</Link></li>
           <li><Link to="/customer-reviews">고객후기</Link></li>
           <li><Link to="/events">이벤트</Link></li>
           <li><Link to="/customer-support">고객센터</Link></li>
         </ul>
   </nav>
   </header>

  </>
)
}