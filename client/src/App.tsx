import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./routes/PageRoutes";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <PageRoutes />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
