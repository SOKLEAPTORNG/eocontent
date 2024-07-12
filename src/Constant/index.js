import normalize from 'react-native-normalize';

export class Font {
  static SMALL = normalize(8);
  static DEFAULT = normalize(16);
  static NORMAL = normalize(24);
  static LARGE = normalize(32);
  static XLARGE = normalize(40);
  static XXLARGE = normalize(48);
  static XXXLARGE = normalize(56);
  static EXTRA_LARGE = normalize(64);
}

export class Dimension {
  static width = width => normalize(width, 'width');
  static height = height => normalize(height, 'height');
}

export class Screen {
  static HOME = 'HOME';
  static HOME_STACK = 'HOME_STACK';
  static HOME_TAB = 'HOME_TAB';
  static MENU = 'MENU';
  static TEMPLATE_STACK = 'TEMPLATE_STACK';
  static TEMPLATE_TAB = 'TEMPLATE_TAB';
  static BILLING_STACK = 'BILLING_STACK';
  static BILLING_TAB = 'BILLING_TAB';
  static ACCOUNT_STACK = 'ACCOUNT_STACK';
  static ACCOUNT_TAB = 'ACCOUNT_TAB';
}

export class Color {
  static LIGHT = '#FFF';
  static GREY = 'rgba(255, 255, 255, 0.1)';
  static DARK = '#000';
  static TRANSPARENT = 'transparent';
  static PRIMARY = '#282634';
  static MODAL_BACKGROUND = 'rgba(0, 0, 0, 0.5)';
  static LOADING_BACKGROUND = 'rgba(0, 0, 0, 0.8)';
  static APP_BACKGROUND = '#0A0A26';
  static DARK_SILVER = '#A4ABB6';
  static LIGHT_PRIMARY = '#2AC1DC';
  static PRIMARY = '#4E89DA';
  static ORANGE = '#FF6D00';
  static DARK_GRAY = '#929292';
  static LIGHT_DARK = '#393D47';
  static DARK_BLUE = '#191A34';
  static HARD_DARK_GRAY = '#393D47';
  static DANGER = '#E40909';
  static TOP_LINE = '#E0E0E0';
  static LIGHT_GRAY = '#F2F3F7';
  static FAVORITE_ITEM = '#23233D'
}

export class LoadingType {
  static LOADING_ACTIVE = 'LOADING_ACTIVE';
  static LOADING_INACTIVE = 'LOADING_INACTIVE';
}

export class UserType {
  static SET_USER = 'SET_USER';
  static USER_LOGOUT = 'USER_LOGOUT';
}

export const GOOGLE_WEB_CLIENT =
  '647928878961-l54ehtmmad4gr7r3o7vfrb1a4kcjhis0.apps.googleusercontent.com';
