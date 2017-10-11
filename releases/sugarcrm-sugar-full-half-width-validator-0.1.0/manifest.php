<?php
$manifest = array (
  'id' => 'sugar-full-half-width-validator',
  'name' => '全角半角入力チェック',
  'description' => '全角半角入力チェック',
  'version' => '0.1.0',
  'author' => 'Ryota Higashi',
  'is_uninstallable' => 'true',
  'published_date' => '2017-10-11 15:39:25',
  'type' => 'module',
  'acceptable_sugar_versions' => 
  array (
    'exact_matches' => 
    array (
    ),
    'regex_matches' => 
    array (
      0 => '^7.9.[\\d]+.[\\d]+$',
    ),
  ),
);
$installdefs = array (
  'copy' => 
  array (
    0 => 
    array (
      'from' => '<basepath>/src/custom/Extension/application/Ext/JSGroupings/validatorZenkakuHankaku.php',
      'to' => 'custom/Extension/application/Ext/JSGroupings/validatorZenkakuHankaku.php',
    ),
    1 => 
    array (
      'from' => '<basepath>/src/custom/Extension/application/Ext/Language/ja_JP.zenkakuhankaku.php',
      'to' => 'custom/Extension/application/Ext/Language/ja_JP.zenkakuhankaku.php',
    ),
    2 => 
    array (
      'from' => '<basepath>/src/custom/Extension/application/Ext/Language/en_us.zenkakuhankaku.php',
      'to' => 'custom/Extension/application/Ext/Language/en_us.zenkakuhankaku.php',
    ),
    3 => 
    array (
      'from' => '<basepath>/src/custom/include/javascript/validatorZenkakuHankaku.js',
      'to' => 'custom/include/javascript/validatorZenkakuHankaku.js',
    ),
  ),
);
