import React from 'react';
import { useByeQuery } from '../generated/graphql';

interface Props {}

export const Bye: React.FC<Props> = () => {
  const { data, loading, error } = useByeQuery({
    fetchPolicy: 'network-only',
  });
  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>there has been an error</div>;
  }

  if (!data) {
    return <div>no data</div>;
  }

  return <div>{data.bye}</div>;
};
