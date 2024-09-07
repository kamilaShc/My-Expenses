import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  showRegister: boolean;
  setShowRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let buttonText = "Register";

  switch (location.pathname) {
    case "/register":
      buttonText = "Login";
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary justify-content-between">
        <a className="navbar-brand" href="#">
          MyExpenses
        </a>
        <button
          className="btn btn-secondary"
          onClick={() =>
            buttonText === "Login" ? navigate("/") : navigate("/register")
          }
        >
          {buttonText}
        </button>
      </nav>
    </>
  );
};
