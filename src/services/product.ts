import Http from '@/api/Http';

const PATH = '/product';
const apiProduct = {
  getProduct: async (params: any) => {
    try {
      const url = `${PATH}`;
      const response = await Http.get(`${url}`, { params });
      return response.data;
    } catch (error: any) {
      console.log('error', error);
      if (!error.response) {
        throw error;
      }
      return {
        status: 'rejected',
        message: error.response.data,
        isError: true,
      };
    }
  },
};

export default apiProduct;
