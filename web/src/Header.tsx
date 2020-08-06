import React from 'react';
import { Link } from 'react-router-dom';
import { useMeQuery, useLogoutMutation } from './generated/graphql';
import { setAccessToken } from './accessToken';

export const Header: React.FC = () => {
  const { data, loading } = useMeQuery();

  const showLoggedInUser = () => {
    if (loading) {
      return null;
    }
    if (data && data.me) {
      return <div>You are logged in as : {data.me.email}</div>;
    }
    return <div>Not logged in</div>;
  };

  const [logout, { client }] = useLogoutMutation();
  return (
    <header>
      <div>
        <Link to="/">home</Link>
      </div>
      <div>
        <Link to="/register">register</Link>
      </div>
      <div>
        <Link to="/login">login</Link>
      </div>
      <div>
        <Link to="/bye">bye</Link>
      </div>
      <div>
        {!loading && data && data.me ? (
          <button
            onClick={async () => {
              await logout();
              setAccessToken('');
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              await client!.resetStore();
            }}
            type="button"
          >
            Log out
          </button>
        ) : null}
      </div>
      {showLoggedInUser()}
    </header>
  );
};
