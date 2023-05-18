import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1 className="dashboard-title">Welcome to the Dashboard
      Click As per your Interest</h1>
      <div className="dashboard">
        <Link to="/filter" className="dashboard-item">
          Filter Page
        </Link>
        {/* Add more dashboard items as needed */}
        <Link to="/" className="dashboard-item">
          Another Page
        </Link>
        <Link to="/" className="dashboard-item">
          More Pages
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
