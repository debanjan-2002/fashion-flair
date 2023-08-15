import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./routes/PageRoutes";

function App() {
    return (
        <BrowserRouter>
            <PageRoutes />
        </BrowserRouter>
    );
}

export default App;
