# sugar-full-half-width-validator

## はじめに

Sugarの標準入力チェックに以下の全角半角チェックを追加します。

- 全角文字のみチェック
- 半角文字のみチェック（半角英数記号、半角カタカナのみ）
- 全角カタカナのみチェック（予定）
- 半角カタカナのみチェック（予定）

## 環境

- Sugar v7.12.x

## 使い方

1. `releases` ディレクトリのzipファイルをモジュールローダーでインストール
1. チェックしたいフィールドの `vardefs`（Extensionなど）に以下を記述する

```php
// 全角文字のみ
$dictionary['<moduleName>']['fields']['<fieldName>']['zenkaku'] = true;
// 半角文字のみ
$dictionary['<moduleName>']['fields']['<fieldName>']['hankaku'] = true;
```
