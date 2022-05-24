import { useRef } from 'react';

export const useRenderCount = () => {
  const counter =  useRef(0);
  counter.current++;
  const forceRender = () =>{
    counter.current++
  }
  return [counter.current] as const;
}