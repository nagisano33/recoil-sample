import { PrimaryButton } from "../../components/PrimaryButton";
import { useSetRecoilState } from "recoil";
import { themeState } from "../../contexts/themeState";

/**
 * ライトテーマに変更するボタン
 * @returns 関数コンポーネント
 */
export const LightModeButton = () => {
  const setTheme = useSetRecoilState(themeState);
  const clickHandler = () => setTheme("light");
  return <PrimaryButton onClick={clickHandler} label="ライトテーマにする" />;
};
