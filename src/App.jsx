import WelcomePage from "./Components/WelcomePage";
import LoginPage from "./Components/Authentification/LoginPage/LoginPage.jsx";
import CreateAcc from "./Components/Authentification/CreateAcc/CreateAcc.jsx";
import HomePage from "./Components/HomePage/HomePage";
import BigQuestions from "./Components/Exploration Modules/BigQuestions/BigQuestions.jsx";
import TechInAstro from "./Components/Educational Modules/TechInAstro/TechInAstro.jsx";
import TechArticles from "./Components/Educational Modules/TechInAstro/TechArticles.jsx";
import ExploreCosmos from "./Components/Exploration Modules/ExploreCosmos/ExploreCosmos.jsx";
import ContributeAstro from "./Components/Community Modules/ContributeAstro/ContributeAstro.jsx";
import NewsFromUniverse from "./Components/Educational Modules/NewsFromUniverse/NewsFromUniverse.jsx";
import Community from "./Components/Community Modules/Community/Community.jsx";
import Learn from "./Components/Educational Modules/Learn/Learn.jsx";
import AskCosmos from "./Components/Exploration Modules/AskCosmos/AskCosmos.jsx";
import BigQuestionArticle from "./Components/Exploration Modules/BigQuestions/BigQuestionArticle.jsx";
import Footer from "./Components/UI/Footer/Footer.jsx";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <WelcomePage
              bigText="Open a window to the cosmos."
              smallText="One star, one story at a time."
            />
          }
        />
        <Route
          path="/login"
          element={
            <LoginPage
              bigText="Open a window to the cosmos."
              smallText="One star, one story at a time."
            />
          }
        />
        <Route
          path="/create-acc"
          element={
            <CreateAcc
              bigText="Open a window to the cosmos."
              smallText="One star, one story at a time."
            />
          }
        />

        <Route element={<Footer />}>
          <Route
            path="/home"
            element={
              <HomePage
                bigText="Open a window to the cosmos."
                smallText="One star, one story at a time."
              />
            }
          />

          <Route path="/tech-in-astronomy" element={<TechInAstro />} />
          <Route path="/tech-in-astronomy/:id" element={<TechArticles />} />

          <Route path="/bigquestions" element={<BigQuestions />} />
          <Route path="/bigquestions/:id" element={<BigQuestionArticle />} />

          <Route path="/explore-cosmos" element={<ExploreCosmos />} />

          <Route path="/contribute-astronomy" element={<ContributeAstro />} />

          <Route path="/news-from-universe" element={<NewsFromUniverse />} />

          <Route path="/community" element={<Community />} />

          <Route path="/learn&test" element={<Learn />} />

          <Route path="/ask-cosmos" element={<AskCosmos />} />

          <Route path="*" element={<h1> Page Not Found</h1>} />
        </Route>
      </Routes>
    </>
  );
}
