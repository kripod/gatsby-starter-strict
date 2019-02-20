import React from 'react';
import { Box } from 'rebass';

type Props = {
  children: React.ReactNode;
};

export default function Container(props: Props) {
  return <Box {...props} px={3} mx="auto" css="max-width: 1024px;" />;
}
