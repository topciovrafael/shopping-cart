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
    <div className="flex h-[100vh] w-full flex-col items-center justify-center text-center font-montserrat font-medium max-[500px]:text-sm">
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
