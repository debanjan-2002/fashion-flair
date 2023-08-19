import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./routes/PageRoutes";
import { Toaster } from "react-hot-toast";
import ChatNotification from "./components/notifications/ChatNotification";


function App () {
    return (
        <>
        <ChatNotification/>
        <BrowserRouter>
            <PageRoutes />
        </BrowserRouter>
        <Toaster/>
        </>
    );
}

export default App;
