export const NON_LOGIN_ROUTE = ['/login', '/reset-password'];

const getRedirecttUrl = ({
  token,
  nextUrl,
}: {
  token?: string;
  nextUrl: string;
}): string | undefined => {
  if (token && NON_LOGIN_ROUTE.includes(nextUrl)) {
    return '/my-page';
    // return redirect url
  }
  if (nextUrl.startsWith('/my-page')) {
    return '/login';
  }
  return undefined;
};

export default getRedirecttUrl;
