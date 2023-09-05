import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const TSI = React.lazy(() => import("pages/TSI"));
const TSIOne = React.lazy(() => import("pages/TSIOne"));
const LandingCardHolder = React.lazy(() => import("pages/LandingCardHolder"));
const LandingCardHolderThree = React.lazy(
  () => import("pages/LandingCardHolderThree"),
);
const LandingCardHolderTwo = React.lazy(
  () => import("pages/LandingCardHolderTwo"),
);
const ApplyCardTwo = React.lazy(() => import("pages/ApplyCardTwo"));
const ApplyCard = React.lazy(() => import("pages/ApplyCard"));
const LandingCardHolderOne = React.lazy(
  () => import("pages/LandingCardHolderOne"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingCardHolderOne />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/applycard" element={<ApplyCard />} />
          <Route path="/applycardtwo" element={<ApplyCardTwo />} />
          <Route
            path="/landingcardholdertwo"
            element={<LandingCardHolderTwo />}
          />
          <Route
            path="/landingcardholderthree"
            element={<LandingCardHolderThree />}
          />
          <Route path="/landingcardholder" element={<LandingCardHolder />} />
          <Route path="/tsione" element={<TSIOne />} />
          <Route path="/tsi" element={<TSI />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
