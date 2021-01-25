import React from 'react';
import Avatar from './Avatar';

interface Props{
    fullname: string;
}

const Welcome: React.FC<Props> = ({ fullname }) => {
  const userInfo = {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-kEMUrjjp-dl3Y1q5b-lNC_m10w_ta96cJA&usqp=CAU", name: fullname}
  return <h1><Avatar user={userInfo}/>Bem-vinda, {fullname} </h1>;
};

export default Welcome;