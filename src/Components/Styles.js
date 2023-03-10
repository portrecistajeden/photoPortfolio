import styled from 'styled-components';

export const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 95%;
   bottom: 120px;
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

export const ButtonGrid = styled.div`
   position: fixed;
   width: 100%;
   left: 95%;
   bottom: 60px;
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