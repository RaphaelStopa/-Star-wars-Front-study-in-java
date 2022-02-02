import { AxiosResponse } from 'axios';
import { CustomerRegister } from '../model/customer-register';
import { api } from './api';

export const register = () => {
    const registerFree = (customer: CustomerRegister): Promise<AxiosResponse<CustomerRegister>> => {
        return api.post<CustomerRegister>('/account/register', customer);
    };

    const checkIfEmailAlreadyRegistered = (email: string): Promise<AxiosResponse<boolean>> => {
        return api.get<boolean>(`/account/check-email-availability?email=${email}`);
    };

    return {
        registerFree,
        checkIfEmailAlreadyRegistered
    };
};

export default register();
