import React from 'react';
import { useUsersQuery } from '../generated/graphql';

export const Home: React.FC = () => {
  const { data } = useUsersQuery({ fetchPolicy: 'network-only' });
  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <div>Users:</div>
      <ul>
        {data.users.map((item) => (
          <li key={item.id}>
            {item.email}, {item.id}
          </li>
        ))}
      </ul>
    </div>
  );
};
