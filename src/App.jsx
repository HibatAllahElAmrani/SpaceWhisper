import WelcomePage from "./Components/WelcomePage";
import LoginPage from "./Components/LoginPage/LoginPage";
import CreateAcc from "./Components/CreateAcc/CreateAcc";
import HomePage from "./Components/HomePage/HomePage";
import BigQuestions from "./Components/BigQuestions/BigQuestions";
import TechInAstro from "./Components/TechInAstro/TechInAstro";
import ExploreCosmos from "./Components/ExploreCosmos/ExploreCosmos";
import ContributeAstro from "./Components/ContributeAstro/ContributeAstro";
import NewsFromUniverse from "./Components/NewsFromUniverse/NewsFromUniverse";
import Community from "./Components/Community/Community";
import Learn from "./Components/Learn/Learn";
import AskCosmos from "./Components/AskCosmos/AskCosmos";
import BigQuestionArticle from "./Components/BigQuestions/BigQuestionArticle";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";

export default function App() {


  return (
    <>
    <Routes>
      
      <Route path="/" element={<WelcomePage bigText="Open a window to the cosmos." smallText="One star, one story at a time."/>}/>
      <Route path="/login" element={<LoginPage bigText="Open a window to the cosmos." smallText="One star, one story at a time."/>}/>
      <Route path="/create-acc" element={<CreateAcc bigText="Open a window to the cosmos." smallText="One star, one story at a time."/>}/> 

      <Route element={<Footer/>}>
      
        <Route path="/home" element={<HomePage bigText="Open a window to the cosmos." smallText="One star, one story at a time."/>}/>

        <Route path="/tech-in-astronomy" element={<TechInAstro/>} />

        <Route path="/bigquestions" element={<BigQuestions/>} /> 
        <Route path="/bigquestions/:id" element={<BigQuestionArticle />} />

        <Route path="/explore-cosmos" element={<ExploreCosmos/>}/>
        
        <Route path="/contribute-astronomy" element={<ContributeAstro/>}/>

        <Route path="/news-from-universe" element={<NewsFromUniverse/>}/>

        <Route path="/community" element={<Community/>}/>

        <Route path="/learn&test" element={< Learn />}/>

        <Route path="/ask-cosmos" element={<AskCosmos/>}/>
        
        <Route path="*" element={<h1> Page Not Found</h1>}/>
      </Route>
    </Routes>

      
    </>
  );
}
