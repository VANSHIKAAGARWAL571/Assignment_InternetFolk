import { AboutPage } from "./components/AboutPage";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { LatestArticles } from "./components/LatestArticles";


function App() {
  return (
    <div className="App">
      <HomePage/>
      <AboutPage/>
      <LatestArticles/>
      <Footer/>
    </div>
  );
}

export default App;