import ScreenManager from "./components/managers/ScreenManager"

import useNetworkStatus from "./hooks/useNetworkStatus"
import StatusModal from "./components/modals/StatusModal"


function App() {

  useNetworkStatus();
  return (
    <>
      <ScreenManager />
      <StatusModal />
    </>

  )
}

export default App
