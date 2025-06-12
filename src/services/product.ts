import Http from '@/api/Http';

const PATH = '/products';
const apiProduct = {
  getProduct: async (params: {
    search: string | string[];
    limit: number;
    skip: number;
  }) => {
    try {
      const response = await Http.get(`${PATH}`, { params });
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
