import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";
import Toggle from "@/components/common/Toggle";

const Theme = (props) => {
  const [theme, setTheme] = useState("Dark");
  // 다크 모드
  const setDark = useCallback(() => {
    setTheme("Dark");
    localStorage.setItem("theme", "Dark");
    document.documentElement.setAttribute("data-theme", "Dark");
  }, []);

  // 라이트 모드
  const setLight = useCallback(() => {
    setTheme("Light");
    localStorage.setItem("theme", "Light");
    document.documentElement.setAttribute("data-theme", "Light");
  }, []);

  // 테마 변경
  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDark();
    } else {
      setLight();
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "Light") {
      setLight();
    } else {
      setDark();
    }
  }, [setDark, setLight]);

  return (
    <Wrapper {...props}>
      <Toggle
        id="themeToggle"
        onChange={toggleTheme}
        checked={theme === "Dark"}
      ></Toggle>
    </Wrapper>
  );
};

export default Theme;

const Wrapper = styled.div`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;
