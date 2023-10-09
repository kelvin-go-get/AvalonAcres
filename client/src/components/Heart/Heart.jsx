import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import useAuthCheck from '../../hooks/useAuthCheck';

const Heart = () => {
  const [heartColor, setHeartColor] = useState('white');
  const { validateLogin } = useAuthCheck();

  const handleLike = (e) => {
    if (validateLogin()) {
      setHeartColor((prev) => (prev === '#fa3ef5' ? 'white' : '#fa3ef5'));
    }
    e.stopPropagation();
  };

  return <AiFillHeart size={24} color={heartColor} onClick={handleLike} />;
};

export default Heart;
