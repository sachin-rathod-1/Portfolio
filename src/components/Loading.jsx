import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 5px solid rgba(79, 195, 247, 0.3);
  border-radius: 50%;
  border-top-color: #4fc3f7;
  animation: ${spin} 1s ease-in-out infinite;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #0f2027;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <Loader />
    </LoadingContainer>
  );
};

export default Loading;