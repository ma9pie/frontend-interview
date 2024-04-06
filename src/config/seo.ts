const URL = 'https://frontend-interview-question.vercel.app';
const TITLE = '프론트엔드 기술 면접 질문';
const DESCRIPTION =
  '구글, 티스토리, 깃헙 등등 프론트엔드(Frontend) 기술 면접에서 자주 물어보는 질문 자료들을 정리하여 만든 사이트입니다.';
const OG_IMAGE = '/images/logo.svg';

export const NEXT_SEO_CONFIG = {
  canonical: URL,
  openGraph: {
    type: 'website',
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: TITLE,
    images: [
      {
        url: OG_IMAGE,
        alt: 'og image',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
  },
};
