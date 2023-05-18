import { Link } from "react-router-dom";

const FilterPage = () => {
  return (
    <div className="homepage">
      <h1 className="dashboard-title">Filter Page</h1>
      <div className="dashboard">
        <Link to="/filter/end-year" className="dashboard-item">
          End Year Filter
        </Link>
        <Link to="/filter/intensity" className="dashboard-item">
          Intensity Filter
        </Link>
        <Link to="/filter/sector" className="dashboard-item">
          Sector Filter
        </Link>
        <Link to="/filter/topic" className="dashboard-item">
          Topic Filter
        </Link>
        <Link to="/filter/insight" className="dashboard-item">
          Insight Filter
        </Link>
        <Link to="/filter/region" className="dashboard-item">
          Region Filter
        </Link>
        <Link to="/filter/country" className="dashboard-item">
          Country Filter
        </Link>
        <Link to="/filter/relevance" className="dashboard-item">
          Relevance Filter
        </Link>
        <Link to="/filter/pestle" className="dashboard-item">
          Pestle Filter
        </Link>
        <Link to="/filter/source" className="dashboard-item">
          Source Filter
        </Link>
        <Link to="/filter/title" className="dashboard-item">
          Title Filter
        </Link>
        <Link to="/filter/likelihood" className="dashboard-item">
          Likelihood Filter
        </Link>
      </div>
    </div>
  );
};

export default FilterPage;
