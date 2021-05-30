import axiosClient from "./axiosClient";

export const MailBoxAPI = {
    post: (data) => {
        const url = '/mailboxs';
        return axiosClient.post(url, data);
    },
    get:  (params) => {
        const url = '/mailboxs';
        return axiosClient.get(url, {params});
    }
}
