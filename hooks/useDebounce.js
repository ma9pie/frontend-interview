import { useCallback, useRef } from "react";

/**
 * 디바운스 hooks
 * @param {Function} callback : 콜백함수
 * @param {Number} delay : 딜레이(ms)
 * @param {Boolean} immediate : 즉시 실행 여부
 * @refference
 * https://learnersbucket.com/examples/interview/usedebounce-hook-in-react
 */
const useDebounce = (callback, delay = 300, immediate = false) => {
  const timerId = useRef();

  // memoized debounce 함수 생성
  const debounce = useCallback(
    function () {
      let context = this,
        args = arguments;

      // 즉시 실행 여부
      const callNow = immediate && !timerId.current;

      // 할당된 timeout pid 제거
      clearTimeout(timerId.current);

      // timeout pid 할당
      timerId.current = setTimeout(function () {
        timerId.current = null;

        // immediate mode로 함수가 이미 실행되었는지 확인
        if (!immediate) {
          // apply로 함수 호출
          callback.apply(context, args);
        }
      }, delay);

      // immediate는 true이고 대기 타이머 없을 시 즉시 실행
      if (callNow) callback.apply(context, args);
    },
    [callback, delay, immediate]
  );

  return debounce;
};

export default useDebounce;
