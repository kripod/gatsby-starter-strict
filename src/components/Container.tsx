import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Container(props: Props) {
  return (
    <div
      {...props}
      style={{ maxWidth: '1024px', padding: '0 1em', margin: 'auto' }}
    />
  );
}
