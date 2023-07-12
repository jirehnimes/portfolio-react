'use client';

import Button from '@/components/button';

export default function Index() {
  const foo = () => {
    console.log('HAHAHAHA');
  };

  return (
    <div className='index'>
      <h1>HELLO WORLD</h1>
      <Button onClick={() => foo()}>TEST</Button>
    </div>
  );
}
