import Cookies from 'js-cookie';

export default {
  locale: Cookies.get('locale') === undefined ? 'US' : Cookies.get('locale'),
  countries: ['US', 'TW', 'CN'],
  // language rule: https://github.com/ekwonye-richard/react-flags-select/blob/master/src/countries.js
  customLabels: { 'US': 'English (en-US)', 'TW': '正體中文 (zh-TW)', 'CN': '简体中文 (zh-CN)' },
};
