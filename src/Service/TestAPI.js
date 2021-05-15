import axiosClient from "./axiosClient";

export const TestAPI = {
    getAll: (params) => {
        const url = '/products';
        return axiosClient.get(url, { params });
    }
}

// const [productList, setProductList] = useState([]);
// useEffect(() => {
// const fetchProductList = async () => {
// try {
// const params = { _page: 1, _limit: 10 };
// const response = await productApi.getAll(params);
// console.log('Fetch products successfully: ', response);
// setProductList(response.data);
// } catch (error) {
// console.log('Failed to fetch product list: ', error);
// }
// }
// fetchProductList();
// }, []);