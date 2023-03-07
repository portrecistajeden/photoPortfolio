import styled from 'styled-components';
  
export const Heading = styled.h1`
   text-align: center;
   color: green;
`;
  
export const Content = styled.div`
   overflowY: scroll;
   height: 2500px;
`;
  
export const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 95%;
   bottom: 70px;
   height: 10px;
   font-size: 2rem;
   z-index: 1;
   cursor: pointer;
   color: black;

   &:hover {
      color:var(--text-color);
      transition: 0.2s;
   }
`