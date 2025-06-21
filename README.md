<h1>フロントエンド：next.js、バックエンド:laravelの初期環境設定</h1>
<h2>〇　環境構築手順</h2>
<p>※OSはWindows11を使用しております。OSがMacを使用の際は適宜環境構築お願いいたします。</p>
<h3>1.クローンする</h3>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ubuntu内で　git clone git@github.com:aocyan/next-laravel-default-setting.git　
を実行しクローンする。</p>
<h3>2.DockerDesktopの立ち上げ</h3>
<p>&nbsp;&nbsp;&nbsp;&nbsp;DockerDesktopアプリを立ち上げる。</p>
<h3>3.docker-compose up -d --build　の実行</h3>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ubuntu内で　docker-compose up -d --build　を実行する。<br>
   &nbsp;&nbsp;&nbsp;&nbsp;(next-laravel-default-settingディレクトリ内で実行する。)</p>
<h3>4.VSCodeの起動とymlファイルの確認</h3>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ubuntu上で　code .　を実行(next-laravel-default-settingディレクトリ内で実行する)し、"docker-compose.yml"ファイル内の<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mysql:<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;image: mysql:8.0.40<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;environment:<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MYSQL_ROOT_PASSWORD: root<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MYSQL_DATABASE: laravel_db<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MYSQL_USER: laravel_user<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MYSQL_PASSWORD: laravel_pass<br>
   であることを確認してください。</p>
<h3>5.composerをインストール</h3>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ubuntu上で　docker-compose exec php bash　を実行し、PHPコンテナ上で composer install　を<br>
実行する。</p>
<h3>6.envファイルをコピー</h3>
<p>&nbsp;&nbsp;&nbsp;&nbsp;"5"に続いてPHPコンテナ上で cp .env.example .env を実行し、<br>
.envファイルをコピーする。</p>
<h3>7.envファイルをymlファイルに同期させる</h3>
<p>&nbsp;&nbsp;&nbsp;&nbsp;"6"でコピーした"envファイル"と"ymlファイル"を同期する。<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;".envファイル"を<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DB_HOST=mysql<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DB_DATABASE=laravel_db<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DB_USERNAME=laravel_user<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DB_PASSWORD=laravel_pass<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SESSION_DRIVER=file<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SESSION_DOMAIN=localhost<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SESSION_SECURE_COOKIE=false(追加)<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SANCTUM_STATEFUL_DOMAINS=localhost:3000(追加)<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"(追加)<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"(追加)<br>   
に設定を変更する。<br>
※「'.env'を保存できませんでした。」とエラーが出た際は、ubuntu内CoachTech-attendanceディレクトリ内で<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sudo chown ユーザ名:ユーザ名 ファイル名<br>
  でファイルを書き換える権限を付与させてください。<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例：sudo chown aocyan:aocyan /home/aocyan/coachtech/next-laravel/next-laravel-default-setting/backend/.env</p>
  <h3>8.mysqlのデータベース確認</h3>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://localhost:8080/">http://localhost:8080</a> にデータベースが存在しているか確認する（laravel_dbがあるか確認してください）</p>
<h3>9.アプリケーションキーの生成</h3>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ubuntu内PHPコンテナ上で<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;php artisan key:generate　を実行し、アプリケーションキーを生成する。
<h3>10.シンボリックリンクを作成（ヘッダー及び一部画面でstorage使用)※必要ならば実行</h3>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ubuntu内PHPコンテナ上で<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;php artisan storage:link　を実行し、シンボリックリンクを作成する。</p>
<h3>11.localhostにアクセス(エラー対策)</h3>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://localhost">http://localhost</a> にアクセスする<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;※1.permissionエラーが出た際には、ubuntu内next-laravel-default-settingディレクトリで、<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sudo chmod -R 777 backend/*　を実行してください。<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;※2.chmod(): Operation not permittedエラーやfile_put_contents: failed to open stream: Permission deniedが出た際には、ubuntu内CoachTech-attendanceディレクトリで<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sudo chown -R www-data:www-data src/storage　を実行してください。<br>
   （※1のエラーについてはテスト時必ず出ていたため、あらかじめコマンドを実行しておいた方がよいと思われます。）</p>
<h3>12.next.jsのインストール</h3>
<p>&nbsp;&nbsp;&nbsp;&nbsp;frontendディレクトリ内で<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;npm install<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;npm run build<br>
を実行する。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://localhost:3000">http://localhost:3000</a>にアクセスしてnext.jsにアクセスできることを確認する。</p>
<h2>〇　URL</h2>
<p>・開発環境：laravel&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://localhost">http://localhost</a></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ：next.js&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://localhost:3000">http://localhost:3000</a></p>
<p>・phpMyAdmin： <a href="http://localhost:8080/">http://localhost:8080/</a></p>
