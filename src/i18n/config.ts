import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import it from './locales/it.json';
import pt from './locales/pt.json';
import ar from './locales/ar.json';
import ru from './locales/ru.json';
import zhCN from './locales/zh-CN.json';
import zhTW from './locales/zh-TW.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';
import hi from './locales/hi.json';
import ta from './locales/ta.json';
import bn from './locales/bn.json';
import id from './locales/id.json';
import vi from './locales/vi.json';
import th from './locales/th.json';
import tr from './locales/tr.json';
import nl from './locales/nl.json';
import pl from './locales/pl.json';
import uk from './locales/uk.json';
import ms from './locales/ms.json';
import fil from './locales/fil.json';
import sw from './locales/sw.json';

const resources = {
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  de: { translation: de },
  it: { translation: it },
  pt: { translation: pt },
  ar: { translation: ar },
  ru: { translation: ru },
  'zh-CN': { translation: zhCN },
  'zh-TW': { translation: zhTW },
  ja: { translation: ja },
  ko: { translation: ko },
  hi: { translation: hi },
  ta: { translation: ta },
  bn: { translation: bn },
  id: { translation: id },
  vi: { translation: vi },
  th: { translation: th },
  tr: { translation: tr },
  nl: { translation: nl },
  pl: { translation: pl },
  uk: { translation: uk },
  ms: { translation: ms },
  fil: { translation: fil },
  sw: { translation: sw },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
