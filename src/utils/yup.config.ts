import type { LocaleObject } from 'yup';
import { setLocale } from 'yup';

import t from './translator';

const customLocale: LocaleObject = {
  mixed: {
    required: () => t('validation.requiredField'),
  },
  string: {
    max: ({ max }) => t('validation.maxLength', { number: max }),
    matches: () => t('validation.invalidField'),
    email: () => t('validation.invalidField'),
  },
};
setLocale(customLocale);
export default customLocale;
