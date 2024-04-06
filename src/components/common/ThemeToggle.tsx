import styled from '@emotion/styled';
import React, { useCallback, useEffect, useState } from 'react';

import Toggle from '@/components/common/Toggle';
import useTrackEvent from '@/hooks/useTrackEvent';

const ThemeToggle = () => {
  const { trackClick } = useTrackEvent();

  const [theme, setTheme] = useState('Dark');

  // 다크 모드
  const setDark = useCallback(() => {
    setTheme('Dark');
    localStorage.setItem('theme', 'Dark');
    document.documentElement.setAttribute('data-theme', 'Dark');
  }, []);

  // 라이트 모드
  const setLight = useCallback(() => {
    setTheme('Light');
    localStorage.setItem('theme', 'Light');
    document.documentElement.setAttribute('data-theme', 'Light');
  }, []);

  // 테마 변경
  const toggleTheme = (checked: boolean) => {
    const _theme = checked ? 'Dark' : 'Light';
    trackClick('Toggle', _theme);
    checked ? setDark() : setLight();
  };

  useEffect(() => {
    if (localStorage.getItem('theme') === 'Light') {
      setLight();
    } else {
      setDark();
    }
  }, [setDark, setLight]);

  return (
    <Wrapper>
      <Toggle
        id="themeToggle"
        checked={theme === 'Dark'}
        onChange={toggleTheme}
      ></Toggle>
    </Wrapper>
  );
};

export default ThemeToggle;

const Wrapper = styled.div``;
