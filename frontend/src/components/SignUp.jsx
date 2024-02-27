import React, { useState } from 'react';


const SignUp = () => {
    const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };

      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // 회원가입 요청을 서버로 보내는 로직을 작성합니다.
        const userData = { email, password };
        console.log(userData); // 임시로 userData를 콘솔에 출력합니다.
        // 여기에 회원가입 요청을 보내는 코드를 작성합니다. (axios 또는 fetch를 사용할 수 있습니다.)
      };

      return (
        <div>
          <h2>회원가입</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">이메일:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password">비밀번호:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit">회원가입</button>
          </form>
        </div>
      );
};

export default SignUp;
