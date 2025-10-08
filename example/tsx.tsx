// @ts-ignore
import React from 'react';

interface MyButtonProps {
  color: string;
  isT: boolean
}

class MyButtonClass {
  static defaultProps = {
    color: 'red',
  };
}

const MyButton: React.FC<MyButtonProps> = () => <button>Click me</button>;

export default function jsx() {
  return (
    // @ts-ignore
    <div>
      <div>123123</div>
      <MyButton />
      <MyButtonClass />
    </div>
  );
}
