'use client'
import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => (
  <div>
    <CountUp
      className='w-full'
      duration={2}
      decimal=','
      prefix='$'
      end={amount}
    />
  </div>
);

export default AnimatedCounter;
