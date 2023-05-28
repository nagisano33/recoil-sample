import React from "react";
import { DarkModeButton } from "./DarkModeButton";
import { LightModeButton } from "./LightModeButton";
import { useRecoilValue } from "recoil";
import { themeState } from "../../contexts/themeState";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 1em;
`;

export const Control = () => {
  const themeMode = useRecoilValue(themeState);
  return (
    <StyledDiv>
      {themeMode === "dark" && <LightModeButton />}
      {themeMode === "light" && <DarkModeButton />}
    </StyledDiv>
  );
};
