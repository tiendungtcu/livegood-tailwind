function Error() {
  return <div>Custom Error Page</div>;
}

Error.getInitialProps = ({ err, res }: { err: any; res: any }) => {
  // eslint-disable-next-line no-nested-ternary
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
