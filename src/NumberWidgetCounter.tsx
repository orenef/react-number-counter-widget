import React from 'react';
import './style.css';

interface Props {
  number: number;
  useClass?: string;
  factor?: number;
  timeMs?: number;
  stop?: () => boolean;
}

// let t0: number;
// let t1: number;
// t0 = performance.now();

const useAnimationFrame = (callback: { (deltaTime: number): void; (arg0: number): void; }, shouldStop: { (): boolean; (): any; }) => {
  const requestRef = React.useRef<number>();
  const previousTimeRef = React.useRef<number>();
  
  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      if (shouldStop?.()) {
        // t1 = performance.now();
        // console.log("Call took " + (t1 - t0) + " milliseconds.")
        return;
      }
      callback(deltaTime)
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }
  
  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current as number);
  }, []);
}

export const NumberWidgetCounter: React.FC<Props> = ({
    number = 100,
    useClass = 'number-widget-counter-class',
    factor = 1,
    timeMs = undefined,
    stop = undefined
  }) => {
  const [count, setCount] = React.useState(0);
  const countRef = React.useRef<number>(0);

  React.useEffect(() => {
    countRef.current = count;
  }, [count]);

  useAnimationFrame((deltaTime: number) => {
    setCount((prevCount: number) => {
      let next = prevCount + (deltaTime * 0.01 * factor)
      if (timeMs) {
        const rendersCounts = timeMs / deltaTime;
        const incrementValue = number / rendersCounts;
        next = prevCount + (incrementValue);  
      }
      if (next > number) {
        return number;
      }
      return next;
    })
  }, stop || (() => countRef?.current >= number))
    
  return <div className={useClass}>{Math.round(count)}</div>
}
