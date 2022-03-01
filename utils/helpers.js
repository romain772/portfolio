import { useState, useEffect } from 'react';

export const fetcher = (...args) => fetch(...args).then(res => res.json())

export function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function upCase(string){
  const capitalizedString = string[0].toUpperCase() + string.slice(1)
  return capitalizedString
}

export function linkIsActive(link,url){
  if(link.includes(url)) return true
  return false
}

export function abort(e){
  e.preventDefault()
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}

export const errorClassname = "my-2 error text-amber-600"