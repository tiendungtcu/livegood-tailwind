import step1Img from '@images/home/1@2x.png';
import step2Img from '@images/home/2@2x.png';
import step3Img from '@images/home/3@2x.png';
import step1IconImg from '@images/home/f1.png';
import step2IconImg from '@images/home/f2.png';
import step3IconImg from '@images/home/f3.png';

import { PAGES } from './allLinks';
import { ProfileStatus } from './type';

/* eslint-disable no-useless-escape */
export const Regex = {
  PASSWORD_POLICY: /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d!\"#$%&'()*+,-./:;<=>?@^_`{|}~\[\]]{8,}$/,
  KATAKANA: /^[ｧ-ﾝﾞﾟァ-・ヽヾ゛゜ー()-.（-）]+$/,
  // eslint-disable-next-line no-useless-escape
  URL: /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i,
  PASSWORD: /^.{10,50}$/,
  PHONE: /^(?:\d{10,15}|\d{3}-\d{3}-\d{4}|\d{2}-\d{4}-\d{4}|\d{3}-\d{4}-\d{4})$/,
  WHITESPACE: /\s/,
  // https://colinhacks.com/essays/reasonable-email-regex
  EMAIL: /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i,
};

export enum DateFormat {
  MONTH_YEAR_SHORT = 'MM/YY',
  YEAR_MONTH_DATE = 'YYYY/MM/DD',
  YEAR_MONTH_DATE_DASH = 'YYYY-MM-DD',
  JP_YEAR_MONTH_DATE = 'YYYY年MM月DD日',
  YEAR_MONTH = 'YYYY/MM',
  YEAR_MONTH_DASH = 'YYYY-MM',
  YEAR_MONTH_DATE_HOUR = 'YYYY/MM/DD HH:mm',
  YEAR_MONTH_DATE_HOUR_DASH = 'YYYY-MM-DD HH:mm',
  HOUR_YEAR_MONTH_DATE = 'HH:mm YYYY-MM-DD',
  JP_YEAR_MONTH_DATE_HOUR = 'YYYY年MM月DD日 HH:mm',
  YEAR_MONTH_DATE_HOUR_MS = 'YYYY/MM/DD HH:mm:ss',
  JP_YEAR_MONTH_DATE_HOUR_MS = 'YYYY年MM月DD日（ddd）HH時mm分',
  JP_YEAR_MONTH_DATE_DAY = 'YYYY年MM月DD日（ddd）',
  JP_HOUR_MINUTE = 'HH時mm分',
  DOT_YEAR_MONTH_DATE = 'YYYY.MM.DD',
  YEAR_MONTH_DATE_AND_TIME = 'YYYY/MM/DD | HH:mm',
  ISO = 'YYYY-MM-DDTHH:mm:ss.sss[Z]',
}

export const GENDER_TEXT = {
  MALE: '女性',
  FEMALE: '男性',
  UNANSWERED: '未回答',
};

export const CUSTOM_LANG_DEFAULT = 'ja';
export const DEFAULT_TIMESTAMP = new Date().getTime();

export const FORGOT_PASSWORD_STEP = {
  ENTER_EMAIL: 0,
  SEND_EMAIL_SUCCESS: 1,
};

export const SET_NEW_PASSWORD_STEP = {
  ENTER_NEW_PASSWORD: 0,
  RESET_PASSWORD_SUCCESS: 1,
};

export const STATUS_FOR_REGISTER = [ProfileStatus.WAITING];
export const STATUS_FOR_VIEW_PROFILE_ONLY = [ProfileStatus.PENDING];

export const NOT_ACCESS_PAGES_AFTER_LOGIN = [
  PAGES.FORGOT_PASSWORD,
  PAGES.LOGIN,
  PAGES.REGISTER,
  PAGES.REGISTER_SUCCESS,
];

export const FOOTER_LINKS = [
  {
    link: '/',
    label: '運営会社',
  },
  {
    link: '/',
    label: '個人情報保護方針 (プライバシーポリシー)',
  },
  {
    link: '/',
    label: '利用規約',
  },
  {
    link: '/',
    label: 'お問い合わせ',
  },
  {
    link: '/',
    label: 'ガイド (Q&A)',
  },
];

export const STEPS_LANDING = [
  {
    picture: step1Img,
    icon: step1IconImg,
    heading: 'Step 1',
    body: '発注先を探している企業様の情報を\nご提供ください (会員登録が必要です)',
  },
  {
    picture: step2Img,
    icon: step2IconImg,
    heading: 'Step 2',
    body: 'レディクルのコンシェルジュがご登録いただいた\n情報をもとに パートナー企業を探します',
  },
  {
    picture: step3Img,
    icon: step3IconImg,
    heading: 'Step 3',
    body: 'パートナー企業が見つかった場合、\nご紹介いただいた方に報酬を\nお支払いします',
  },
];
