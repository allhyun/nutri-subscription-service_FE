import React, { useState } from 'react';

function Login() {
  // 상태 관리를 위한 useState 훅 사용
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // 로그인 로직 처리, 예: API 호출을 여기에 작성

    if (username === 'user' && password === 'pass') {
      setErrorMsg('');
      // 로그인 성공 시 로직, 예: 페이지 리다이렉션
    } else {
      // 로그인 실패 시 오류 메시지 설정
      setErrorMsg('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <label>
          아이디:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          비밀번호:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">로그인</button>
      </form>
      {errorMsg && <p>{errorMsg}</p>}
    </div>
  );
}

export default Login;
