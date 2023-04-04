<?php

/**
 * -------------------------------------------------------------------------------------------
 * sugar-full-half-width-validator
 * Copyright (c) 2023 rythgs (https://rythgs.co/)
 * Licensed under MIT (https://github.com/rythgs/sugar-full-half-width-validator/blob/master/LICENSE)
 * -------------------------------------------------------------------------------------------
 */

foreach ($js_groupings as $key => $groupings) {
    foreach ($groupings as $file => $target) {
        if ($target == 'include/javascript/sugar_grp7.min.js') {
            $js_groupings[$key]['custom/include/javascript/validatorZenkakuHankaku.js'] = 'include/javascript/sugar_grp7.min.js';
        }
        break;
    }
}
