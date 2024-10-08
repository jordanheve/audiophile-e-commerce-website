import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function GoBack() {
  const navigate = useNavigate();
  const [isDifferentReferrer, setIsDifferentReferrer] = useState(false);

  useEffect(() => {
    if (document.referrer && document.referrer !== window.location.href) {
      setIsDifferentReferrer(true);
    }
  }, []);

  const handleGoBack = () => {
    if (isDifferentReferrer) {
      navigate(-1); 
    } else {
      navigate("/"); 
    }
  };

  return (
    <button
      onClick={handleGoBack}
      className="self-start text-zinc-500 hover:bg-zinc-100 p-1 text-sm"
    >
      Go Back
    </button>
  );
}
