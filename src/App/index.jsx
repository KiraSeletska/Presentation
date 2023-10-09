import styles from "./App.module.scss";
import { Home } from "../Pages/Home";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";
import { UpButton } from "../components/UpButton";

function App() {
  return (
    <div className={styles.App}>
      <Header />
     
      <div className={styles.outlet}><Outlet/> </div>
      <UpButton />
   <Footer/>
  
    </div>
  );
}

export default App;
