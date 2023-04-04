/**
 * -------------------------------------------------------------------------------------------
 * sugar-full-half-width-validator
 * Copyright (c) 2023 rythgs (https://rythgs.co/)
 * Licensed under MIT (https://github.com/rythgs/sugar-full-half-width-validator/blob/master/LICENSE)
 * -------------------------------------------------------------------------------------------
 */

((app) => {

  const namespace = 'validation';

  const isZenkaku = (value) => /^[^\x01-\x7E\uFF61-\uFF9F]+$/.test(value);
  const isHankaku = (value) => !/[^\x01-\x7E\uFF61-\uFF9F]+/.test(value);

  const isTargetFieldType = (type) => ['name', 'varchar', 'phone'].indexOf(type) > -1;

  app.augment(namespace, $.extend(true, app[namespace], {
    validators: {

      /**
       * 全角文字判定
       * @param  {objcts} field field vardefs
       * @param  {string} value model value
       * @return {boolean} `true` if the validation fails, `undefined` otherwise
       */
      zenkaku(field, value) {
        if (isTargetFieldType(field.type)) {
          if (field.zenkaku) {
            return isZenkaku(value) ? undefined : true;
          }
        }
      },

      /**
       * 半角文字判定
       * @param  {objcts} field field vardefs
       * @param  {string} value model value
       * @return {boolean} `true` if the validation fails, `undefined` otherwise
       */
      hankaku(field, value) {
        if (isTargetFieldType(field.type)) {
          if (field.hankaku) {
            return isHankaku(value) ? undefined : true;
          }
        }
      },
    }
  }));

  app.error.errorName2Keys['zenkaku'] = 'ERROR_IS_ZENKAKU';
  app.error.errorName2Keys['hankaku'] = 'ERROR_IS_HANKAKU';

})(SUGAR.App);
