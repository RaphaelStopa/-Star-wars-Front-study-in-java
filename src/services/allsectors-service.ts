import { AxiosResponse } from 'axios';
import HttpStatus from '../model/enums/http-status';
import allsectorsApi from '../api/allsectors-api';

export const allSectorsService = () => {
    const getAllSectors= async () => {
        try {
            const result: AxiosResponse = await allsectorsApi.checkAllSectors();
            if (result.status === HttpStatus.OK && result.data != null) {                
                return Promise.resolve(result.data);
            } else if (result.status === HttpStatus.UNAUTHORIZED) {
                return Promise.reject({ status: 401 } as AxiosResponse);
            } else {
                return Promise.reject({ status: 400 } as AxiosResponse);
            }
        } catch (error) {
            console.error(error);
            return Promise.reject(error.response as AxiosResponse);
        }
    };
    return {
        getAllSectors
    };
};

export default allSectorsService();
