import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import FilterPage from "./components/pages/FilterPage";
import "./app.css";
import EndYearFilter from "./components/filters/EndYearFilter";
import IntensityFilter from "./components/filters/IntensityFilter";
import SectorFilter from "./components/filters/SectorFilter";
import TopicFilter from "./components/filters/TopicFilter";
import InsightFilter from "./components/filters/InsightFilter";
import RegionFilter from "./components/filters/RegionFilter";
import CountryFilter from "./components/filters/CountryFilter";
import RelevanceFilter from "./components/filters/RelevanceFilter";
import PestleFilter from "./components/filters/PestleFilter";
import SourceFilter from "./components/filters/SourceFilter";
import TitleFilter from "./components/filters/TitleFilter";
import LikelihoodFilter from "./components/filters/LikelihoodFilter";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/filter" element={<FilterPage />} />

      <Route exact path="/filter/end-year" element={<EndYearFilter />} />
      <Route exact path="/filter/intensity" element={<IntensityFilter />} />
      <Route exact path="/filter/sector" element={<SectorFilter />} />
      <Route exact path="/filter/topic" element={<TopicFilter />} />
      <Route exact path="/filter/insight" elementelement={<InsightFilter />} />
      <Route exact path="/filter/region" element={<RegionFilter />} />
      <Route exact path="/filter/country" element={<CountryFilter />} />
      <Route exact path="/filter/relevance" element={<RelevanceFilter />} />
      <Route exact path="/filter/pestle" element={<PestleFilter />} />
      <Route exact path="/filter/source" element={<SourceFilter />} />
      <Route exact path="/filter/title" element={<TitleFilter />} />
      <Route exact path="/filter/likelihood" element={<LikelihoodFilter />} />
      {/*
       */}
    </Routes>
  );
};

export default App;
