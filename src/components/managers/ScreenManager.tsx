import { useSelector } from "react-redux";
import { RootState } from "../../_store";

// screen compponents
import PoweredOff from "../screens/PoweredOff";
import BootingScreen from "../screens/BootingScreen";
import DesktopScreen from "../screens/DesktopScreen";

const ScreenManager = () => {
    const currentScreen = useSelector((state: RootState) => state.screen.currentScreen);

    const renderScreen = () => {
        switch (currentScreen) {
            case "SCR_BOOTING":
                return <BootingScreen />;

            case "SCR_DESKTOP":
                return <DesktopScreen />;

            default:
                return <PoweredOff />;
        }
    };

    return (
        <div>
            {renderScreen()}

        </div>
    );
};

export default ScreenManager;
