import styled from 'styled-components';

export const Button = styled.div`
   position: fixed; 
   width: 40px;
   left: 95%;
   bottom: 100px;
   height: 40px;
   font-size: 2rem;
   z-index: 1;
   cursor: pointer;
   color: black;
   border-radius: 50%;

   &:hover {
      color:var(--text-color);
      transition: 0.2s;
   }

   @media screen and (max-width: 800px){
      & {
         left: 88%;
         bottom: 30px;
      }
   }
`

export const ButtonGrid = styled.div`
   position: fixed;
   width: 100%;
   left: calc(95% + 4px);
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

   

   @media screen and (max-width: 800px) {
      & {
         visibility: hidden;
         left: 50px;
         width: 50px;
      }
   }
   `