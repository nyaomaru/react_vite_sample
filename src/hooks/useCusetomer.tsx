import { useMutation } from '@tanstack/react-query';

import { axiosBase } from '@/plugins/axiosBase';
import type { CustomerDetailSchema } from '@/features/customer/schema';

import { PATH } from '@/pages/router/const';

export const useCustomerSubmit = (handleError: (message: string) => void) => {
  return useMutation({
    mutationFn: (req: CustomerDetailSchema) =>
      axiosBase
        .put(PATH.CUSTOMER_EDIT.replace(':id', req.id), {
          id: req.id,
          name: req.name,
          city: String(req.city),
          favorite: req.favorite,
        })
        .then<string>((res) => res.data ?? ''),
    onSuccess: (data) => {
      if (String(data) !== 'true') {
        handleError(data ?? '');
        throw new Error();
      }
    },
    onError: (err) => {
      console.log(err);
      handleError(String(err));
      throw new Error();
    },
  });
};
