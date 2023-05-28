import { PrimaryButton } from "../../components/PrimaryButton";
import { useSetRecoilState } from "recoil";
import { themeState } from "../../contexts/themeState";

/**
 * ダークモードに変更するボタン
 * @returns 関数コンポーネント
 */
export const DarkModeButton = () => {
  const setTheme = useSetRecoilState(themeState);
  const clickHandler = () => setTheme("dark");
  return <PrimaryButton onClick={clickHandler} label="ダークモードにする" />;
};
