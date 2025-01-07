import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
      window.location.reload(); //deleting cart items
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="font-montserrat flex flex-col justify-center items-center h-[100vh] w-full font-medium text-center max-[500px]:text-sm">
      <div>Thank you for your order!</div>
      <div>We are redirecting you to the homepage!</div>
      <div className="">
        If you are not redirected automatically,{" "}
        <Link to="/" className="font-bold">
          click here.
        </Link>
      </div>
    </div>
  );
}
