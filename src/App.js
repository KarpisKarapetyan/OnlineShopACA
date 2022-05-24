import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { useRoutes } from "react-router-dom";
import { ROUTES } from "./helpers/routes";
import { ModalProvider } from "./contexts";

const App = () => {
  const routes = useRoutes(ROUTES)
  return (
    <ModalProvider >
          <div className="App">
              <Header/>
                  {routes}
              <Footer/>
         </div>
    </ModalProvider> 
    
  );
}

export default App;
