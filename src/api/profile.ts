import axios from 'axios';
import { authStorage } from '@/api/authStorage';

export async function getProfiles() {
  const { token } = authStorage;
  try {
    if (!token) {
      throw new Error('Unauthorized');
    }
    const result = await axios.get('http://0.0.0.0:3001/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(result.data);
    return {
      success: true,
      profiles: result.data,
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      error: e,
    };
  }
}

export async function createProfile() {
  return {
    success: false,
    error: new Error('Not implemented'),
  };
}
