import axios from 'axios';
import { LoginRequestResult, ProfileRequestResult } from '@/types/authRequests.d';

export async function login(username: string, password: string): Promise<LoginRequestResult> {
  try {
    const result = await axios.post('http://0.0.0.0:3000/basic/auth', { username, password });
    console.log(result.data);
    return {
      success: true,
      accessToken: result.data.access_token,
    };
  } catch (e) {
    return Promise.resolve({
      success: false,
      error: 'Username or password incorrect',
    });
  }
}

export async function user(jwt: string|null): Promise<ProfileRequestResult> {
  try {
    if (!jwt) {
      throw new Error('Unauthorized');
    }
    const result = await axios.get('http://0.0.0.0:3000/profile', {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log(result.data);
    return {
      success: true,
      profile: result.data,
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
    };
  }
}
