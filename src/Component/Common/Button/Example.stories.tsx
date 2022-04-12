import React from 'react';
//경로가 src 기준으로 잡혀있다.
import Example from 'Component/Common/Button/Example';
import Example2 from 'Component/Common/Button/Example2';
export default {
  title: 'Example/QWE',
};

export const Default: React.FC = () => <Example>aa</Example>;
export const fault: React.FC = () => <Example2>bb</Example2>;
