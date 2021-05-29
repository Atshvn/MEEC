import axiosClient from "./axiosClient";

export const SystemAPI = {
    login: (data) => {
        const url = '/Account/login';
        return axiosClient.post(url, data);
    },
    signup: (data) => {
        const url = '/Account';
        return axiosClient.post(url, data);
    },
    put:  (data) => {
        const url = '/Account';
        return axiosClient.put(url, data);
    },
    forgot:  (params) => {
        const url = '/account/getpassword';
        return axiosClient.get(url, {params});
    },

}
