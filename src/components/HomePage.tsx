import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.title = "Matt Wills | Home";
    return () => {
      document.title = "Matt Wills";
    };
  }, []);

  return <div>home page</div>;
};

export default HomePage;
