import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { HashRouter, Routes, Route } from "react-router-dom";



// import logo from './logo.svg';
import './App.css';
import Header from './Elements/Header/header';
import Footer from './Elements/Footer/footer';
import Home from "./pages/Home";
import Purchase from "./pages/Purchase/purchase";
import PaperWork from "./pages/Paperwork/paper-work";
import QuickQuote from './pages/QuickQuote/quick-quote';
import FHA from "./pages/FHA_Loans/fha";
import VALoans from "./pages/VA_Loans/va-loans";
import MonthlyPaymentMortgageCalculator from "./pages/MonthlyPaymentCalculator/what-will-my-monthly-payment-be-calculator";
import AffordabilityCalculator from "./pages/AffordabilityCalculator/how-much-can-i-afford-calculator";
import Refinancing from "./pages/Refinancing/refinancing";
import CashOutRefinance from "./pages/CashOutRefinance/cash-out-refinance";
import FhaVaStreamline from "./pages/FhaVaStreamlineRefinance/fha-va-streamline";
import TheLoanProcess from "./pages/TheLoanProcess/the-loan-process";
import GlossaryOfMortgageTerms from "./pages/GlossaryOfMortgageTerms/glossary-terms";
import AboutUs from "./pages/AboutUs/about-us";
import ContactUs from "./pages/ContactUs/contact-us";
import GetInformativeFreeReports from "./pages/GetInformativeFreeReports/free-reports";
import MeetOurStaff from "./pages/MeetOurStaff/our-staff";
import TeatingGmailFormPage from "./pages/Form/ExampleGmailForm";
import RefinanceAnalysisCalculator from "./pages/RefinanceAnalysisCalculator/refinance-analysis-calculator";
import DebtConsolidationCalculator from "./pages/ConsolidationCalculator/debt-consolidation-calculator";
import RentingVsBuyingCalculator from "./pages/RentingVsBuyingCalculator/renting-versus-buying-calculator";


// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import { SignupAndLogin } from './userRegistration/registration';



function App() {
  return (
    <div>
      <BrowserRouter basename="/PrimeHome_Mortgage">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/purchase" element={<Purchase />} />
          <Route path="/paper-work" element={<PaperWork />} />
          <Route path="/quick-quote" element={<QuickQuote />} />
          <Route path="/how-much-can-i-afford-calculator" element={<AffordabilityCalculator />} />
          <Route path="/what-will-my-monthly-payment-be-calculator" element={<MonthlyPaymentMortgageCalculator />} />
          <Route path="/fha" element={<FHA />} />
          <Route path="/va-loans" element={<VALoans />} />

          <Route path="/refinancing" element={<Refinancing />} />
          <Route path="/cash-out-refinance" element={<CashOutRefinance />} />
          <Route path="/refinance-analysis-calculator" element={<RefinanceAnalysisCalculator />} />
          <Route path="/debt-consolidation-calculator" element={<DebtConsolidationCalculator />} />
          <Route path="/renting-versus-buying-calculator" element={<RentingVsBuyingCalculator />} />
          <Route path="/fha-va-streamline" element={<FhaVaStreamline />} />
          <Route path="/the-loan-process" element={<TheLoanProcess />} />

          <Route path="/free-reports" element={<GetInformativeFreeReports />} />
          <Route path="/glossary-terms" element={<GlossaryOfMortgageTerms />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-staff" element={<MeetOurStaff />} />
          <Route path="/contact-us" element={<ContactUs />} />


          {/* Deleted-Testing code for customr details are sent Gmail through FORM  */}
          <Route path="/test-mail-through-form" element={<TeatingGmailFormPage />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;





















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
