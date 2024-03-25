import Header from '../components/Header';
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';
import StepThree from '../components/StepThree';

function App() {
  const path = window.location.href;
  const phoneNumber = path.slice(path.indexOf('t=') + 2, path.indexOf('t=') + 3) === 'g' ? '+5491166117239' : '+5491166117239';

  localStorage.setItem('tel', phoneNumber)
  return (
    <> 
    <Header></Header>
    <StepOne></StepOne>
    <StepTwo></StepTwo>
    <StepThree></StepThree>
    </>
  );
}

export default App;
