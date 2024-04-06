import { useRouter } from 'next/router';
import ReactGA from 'react-ga4';

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
    const trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
    if (hostname === 'localhost' || !trackingId) {
      return;
    }
    ReactGA.initialize(trackingId);
  };

  // 페이지 view 추적
  const trackPageViewEvent = () => {
    ReactGA.set({ page: router.pathname });
    ReactGA.send('pageview');
  };

  // 클릭 이벤트 추적
  const trackClickEvent = (category: string, label: string) => {
    console.log(category, label);
    ReactGA.event({
      action: 'Click',
      category: category,
      label: label,
    });
  };

  // 검색어 추적
  const trackSearchEvent = (label: string) => {
    if (!label) return;
    ReactGA.event({
      action: 'Search',
      category: 'Main',
      label: label,
    });
  };

  return {
    initializeGA,
    trackPageViewEvent,
    trackClickEvent,
    trackSearchEvent,
  };
};

export default useTrackEvent;
