import React from 'react';

import styles from './Container.module.css';

type Props = {
  children: React.ReactNode;
  fluid?: boolean;
  className?: string;
};

const Container = ({ children, fluid = false, className = '' }: Props) => (
  <div className={`${styles.root} ${fluid ? '' : styles.fixed} ${className}`}>
    {children}
  </div>
);

export default Container;
