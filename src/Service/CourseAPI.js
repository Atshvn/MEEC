import axiosClient from "./axiosClient";

export const CourseAPI = {
    getAll: (params) => {
        const url = '/course';
        return axiosClient.get(url, { params });
    }
}
