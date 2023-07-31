import { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Matt Wills | Contact";
    return () => {
      document.title = "Matt Wills";
    };
  }, []);

  return <div>contact page</div>;
};

export default ContactPage;
