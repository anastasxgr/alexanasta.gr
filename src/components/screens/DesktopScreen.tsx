import Background from "../Background";
import Topbar from "../Topbar";


// available apps 
import Terminal from "../apps/Terminal";
import IconsContainer from "../IconsContainer";


export default function DesktopScreen() {
    return (
        <div className="desktop">
            <Background />
            <Topbar />
            <IconsContainer />
            <Terminal />
        </div>
    );
}
