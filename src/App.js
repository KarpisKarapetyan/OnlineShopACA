import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import {useRoutes} from "react-router-dom"
import {ROUTES} from "./helpers/routes"
import {ModalProvider} from "./contexts"
import {Suspense} from "react"

const App = () => {
  const routes = useRoutes(ROUTES)

  return (
    <div className="App">
      
      <ModalProvider>
        <Suspense  fallback={<div>...Loading</div>}>
          <Header />
          {routes}
          <Footer />
        </Suspense>
      </ModalProvider>
    </div>
  )
}

export default App
