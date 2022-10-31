import { instance } from './instance/instance';

export const productAPI = {
  getProduct: () => instance.get('/image'),
  getSingleProduct: (id: string | undefined) => instance.get(`image?id=${id}`),
};
