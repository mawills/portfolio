import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div>
      <h2>nothing to see here</h2>
      <p>
        <Link to="/">Go back to the home page</Link>
      </p>
    </div>
  );
};

export default NoMatch;
