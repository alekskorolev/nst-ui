import { LoginForm } from './loginForm.d';

export interface AuthState {
    loginForm: LoginForm,
    user?: string,
    formError?: string,
}
