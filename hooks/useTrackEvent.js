import { useRouter } from "next/router";
import ReactGA from "react-ga4";

/**
 * [ReactGA.event params]
 * @param action: string
 * @param category: string
 * @param label?: string
 * @param value?: number
 * @param nonInteraction?: boolean
 * @param transport?: 'beacon' | 'xhr' | 'image'
 */

const useTrackEvent = () => {
  const router = useRouter();

  // Init GA
  const initializeGA = () => {
    const { hostname } = window.location;
    if (hostname === "localhost") return;
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID);
  };

  // 페이지 view 추적
  const trackPageView = () => {
    ReactGA.set({ page: router.pathname });
    ReactGA.send("pageview");
  };

  // 클릭 이벤트 추적
  const trackClick = (category, label) => {
    console.log(category, label);
    ReactGA.event({
      action: "Click",
      category: category,
      label: label,
    });
  };

  // 검색어 추적
  const trackSearch = (label) => {
    if (!label) return;
    ReactGA.event({
      action: "Search",
      category: "Main",
      label: label,
    });
  };

  return {
    initializeGA,
    trackPageView,
    trackClick,
    trackSearch,
  };
};

export default useTrackEvent;
