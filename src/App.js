import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { useRoutes } from "react-router-dom";
import { ROUTES } from "./helpers/routes";
import { ModalProvider } from "./contexts";

const App = () => {
  const routes = useRoutes(ROUTES)

  return (
          <div className="App">
            <ModalProvider >
              <Header/>
                    {routes}
              <Footer/>
            </ModalProvider>    
         </div>
    
  );
}

export default App;
