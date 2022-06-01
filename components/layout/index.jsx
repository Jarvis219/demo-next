import React from 'react';
import Header from '../header';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Layout = ({ children }) => {
  const { data, error } = useSWR('http://localhost:3005/categories', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <Header menu={data} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
