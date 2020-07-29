let accessToken = '';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const setAccessToken = (string: string) => {
  accessToken = string;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getAccessToken = () => {
  return accessToken;
};
