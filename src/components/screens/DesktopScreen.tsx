import Background from "../Background";
import Topbar from "../Topbar";


// available apps 
import Terminal from "../apps/Terminal";


export default function DesktopScreen() {
    return (
        <div className="desktop">
            <Background />
            <Topbar />
            <Terminal />
        </div>
    );
}
