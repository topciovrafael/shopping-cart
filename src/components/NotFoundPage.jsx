import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="font-montserrat flex flex-col justify-center items-center h-[100vh] w-full font-medium text-center max-[500px]:text-sm">
      <div>Error: Redirecting...</div>
      <div className="">
        If you are not redirected automatically,{" "}
        <Link to="/" className="font-bold">
          click here.
        </Link>
      </div>
    </div>
  );
}
