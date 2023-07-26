import { RecoilRoot } from "recoil";
import { MyPage } from "./MyPage/MyPage";
import { GlobalDialog } from "./components/GlobalDialog/GlobalDialog";

function App() {
  return (
    <RecoilRoot>
      <GlobalDialog>
        <MyPage />
      </GlobalDialog>
    </RecoilRoot>
  );
}

export default App;
