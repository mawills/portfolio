import { useEffect } from "react";
import { Link } from "react-router-dom";

const NoMatchPage = () => {
  useEffect(() => {
    document.title = "Matt Wills | Home";
    return () => {
      document.title = "Matt Wills";
    };
  }, []);

  return (
    <div>
      <h2>nothing to see here</h2>
      <p>
        <Link to="/">Go back to the home page</Link>
      </p>
    </div>
  );
};

export default NoMatchPage;
