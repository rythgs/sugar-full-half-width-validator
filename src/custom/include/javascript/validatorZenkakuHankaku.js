/**
 * -------------------------------------------------------------------------------------------
 * sugar-full-half-width-validator
 * Copyright (c) 2017 Ryota Higashi (https://rythgs.co/)
 * Licensed under MIT (https://github.com/rythgs/sugar-full-half-width-validator/blob/master/LICENSE)
 * -------------------------------------------------------------------------------------------
 */

(function(app) {

  const namespace = 'validation';

  function isZenkaku(value) {
    return /^[^\x01-\x7E\uFF61-\uFF9F]+$/.test(value);
  }

  function isHankaku(value) {
    return !/[^\x01-\x7E\uFF61-\uFF9F]+/.test(value);
  }

  function isTargetFieldType(type) {
    return ['name', 'varchar', 'text', 'phone'].indexOf(type) > -1;
  }

  app.augment(namespace, $.extend(true, app[namespace], {
    validators: {

      /**
       * 全角文字判定
       * @param  {objcts} field field vardefs
       * @param  {string} value model value
       * @return {boolean} `true` if the validation fails, `undefined` otherwise
       */
      zenkaku: function (field, value) {
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
      hankaku: function (field, value) {
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
