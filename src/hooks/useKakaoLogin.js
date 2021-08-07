import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { KAKAO_LOGIN_API } from '../config';

function useKakaoLogin() {
  const history = useHistory();

  const handleKakaoLogin = () => {
    window.Kakao.Auth.login({
      scope: 'profile_nickname, account_email',
      success: authObj => {
        axios(KAKAO_LOGIN_API, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${authObj.access_token}`,
          },
        }).then(res => {
          if (res.data.token) {
            localStorage.setItem('token', res.data.token);
            alert('환영합니다 우주인님🌸');
            history.push('/');
          } else {
            alert('정보를 다시 확인해 주세요🥲');
          }
        });
      },
      fail: error => {
        console.error(error);
      },
    });
  };

  return { handleKakaoLogin };
}

export default useKakaoLogin;
