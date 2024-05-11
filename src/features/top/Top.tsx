import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '@/app/hooks';
import { PATH } from '@/pages/router/const';
import { useAuthCheck } from '@/hooks/useAuthCheck';
import { SimpleButton } from '@/components/atoms/SimpleButton';
import { SimpleCard } from '@/components/molecules/SimpleCard';

import { ButtonStyle, CardStyle } from './Top.css';

export const Top = () => {
  useAuthCheck();
  const [count, setCount] = useState(0);
  const countStore = useAppSelector((state) => state.counter.value);
  const navigate = useNavigate();

  return (
    <>
      <h1>React_Vite_Sample</h1>
      <div className={CardStyle}>
        <SimpleButton
          buttonName="Count Up"
          onClick={() => setCount((count) => count + 1)}
        ></SimpleButton>
        <p>count is {count}</p>
      </div>

      <SimpleCard minWidth={275} countStore={countStore} />

      <div className={ButtonStyle}>
        <SimpleButton
          buttonName="Page to Login"
          color="secondary"
          onClick={() => navigate(PATH.LOGIN)}
        ></SimpleButton>
      </div>
      <div className={ButtonStyle}>
        <SimpleButton
          buttonName="Page to Register"
          onClick={() => navigate(PATH.REGISTER)}
        ></SimpleButton>
      </div>
      <div className={ButtonStyle}>
        <SimpleButton
          color="info"
          buttonName="Page to Customer"
          onClick={() => navigate(PATH.CUSTOMER)}
        ></SimpleButton>
      </div>
    </>
  );
};