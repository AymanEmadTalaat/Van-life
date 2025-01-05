import { useRouteError } from "react-router";

function Error() {
  const error = useRouteError();

  return <h1 style={{ textAlign: "center" }}>{error.message}</h1>;
}

export default Error;
