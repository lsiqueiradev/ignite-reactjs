import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  
`;

interface boxProps {
  activeColor?: 'green' | 'red';
}

const colors = {
  green: '#33CC95',
  red: '#E52E4D'
}

export const Box = styled.div<boxProps>`
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: var(--text-title);
  background: ${({ activeColor }) => activeColor 
  ? colors[activeColor] 
  : '#FFFFFF;'
  }; 

  ${({ activeColor }) => activeColor 
  ? 'color: #FFFFFF' 
  : 'color: #363f5f'
  };
  

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }
`;