'use strict';

const SCHEDULE_DATA = [
  { day:'月曜', type:'normal', lessons:[
    ['18:00〜19:00','月曜BREAKIN\'クラス'],
    ['19:00〜20:00','選抜バトルクラス']
  ]},
  { day:'火曜', type:'normal', lessons:[
    ['17:00〜17:40','キッズダンス ルッカクラス'],
    ['17:45〜19:00','火曜選抜チームレッスン'],
    ['19:00〜20:15','選抜火曜強化クラス']
  ]},
  { day:'水曜', type:'closed', lessons:[
    ['CLOSED','休館日']
  ]},
  { day:'木曜', type:'normal', lessons:[
    ['17:30〜18:10','ストリートダンス ルッコラクラス'],
    ['18:15〜19:30','選抜木曜強化クラス']
  ]},
  { day:'金曜', type:'normal', lessons:[
    ['18:00〜18:40','Waackクラス'],
    ['18:40〜19:40','金曜BREAKIN\'クラス']
  ]},
  { day:'土曜', type:'w', lessons:[
    ['15:00〜17:00','選抜 “W” クラス']
  ]},
  { day:'日曜', type:'w', lessons:[
    ['15:00〜17:00','選抜 “W” クラス']
  ]}
];

const EVENT_DATA = [
  ['6/28','ソロコンテスト・サイファーバトル','選抜クラスから多数のメンバーがソロコンテストとサイファーバトルに挑戦。','normal'],
  ['7/5','練習会イベント','あかがねミュージアムにて練習会イベント。','normal'],
  ['7/11','土曜夜市イベント','土曜夜市のイベントに出演。','normal'],
  ['7/25','BREAKIN\' Session','大和コミュニティセンターにてBREAKIN\' Session。','normal'],
  ['夏休み','スタジオイベント企画中','夏休み中にスタジオでイベント企画中。','w'],
  ['8/31','国スポ壮行会','国スポ壮行会の激励パフォーマンスとしてマウルと合同で出演します。','normal'],
  ['9月','エミフル BREAKIN\' CUP','日程詳細は決まり次第お知らせします。','normal'],
  ['9月','Wonder UNITY 運動会SP','日程詳細は決まり次第お知らせします。','w']
];

const W_NEWS_DATA = [
  {
    title:'WondaからRed Bull BC ONEへ',
    body:[
      '世界最高峰の大会の予選にChill Cがチャレンジ。',
      '7/12 岡山にて開催されます。',
      '前日が夜市ではありますが、お時間ある方は是非応援にお越しください。'
    ]
  },
  {
    title:'UMI RAMi（ウミラミ）結成',
    body:[
      'Lu-La & wreathのコンビチーム「UMI RAMi」を結成しました。',
      'ワンダイベントのMCや広報活動などを行っていきます。'
    ]
  },
  {
    title:'ソロコンテストへ挑戦',
    body:[
      '6/28 PB2 Vol.62にチャレンジ。',
      '今回同日に5つのバトルがあるということもあり、ソロコンテストへの挑戦者がとても少ないです。',
      'ワンダの選抜バトルのソロコンテスト版の気持ちで競い合ってください。',
      '※他の地域からも数名参加しますのでたくさん声をかけてください。',
      '今回のテーマは「課題への挑戦」。日頃課題としていることに積極的にトライしてもらいます。'
    ]
  },
  {
    title:'あかがね練習会',
    body:[
      '新イベント MOB PARTY。',
      '今後RealizeやPortal同様、大規模イベントにしていく予定です。',
      '第一回は練習会形式で行います。',
      '様々なプログラムがありますので思い切り楽しんでください。',
      '※ワンダからのショーケースは検討中です。'
    ]
  },
  {
    title:'読みかけの本',
    body:[
      '一度練習した作品をリメイクして作っています。',
      '難しい作品ですが、頑張って練習していきましょう。',
      '現在wreath、UL mio、Yuna-Xに練習してもらっています。'
    ]
  },
  {
    title:'夏チャレ',
    body:[
      '久しぶりに夏のチャレンジとして課題を出していきます。',
      '※選抜の人数が多いため出席日数の多い人を優先して課題を組みます。',
      '勉強も頑張りつつ、課題にチャレンジしていきましょう。'
    ]
  },
  {
    title:'ダンサーであること',
    body:[
      '音ハメ、リズムキープ、雰囲気を出すなど、ダンサーにとって大切なことは常に意識してください。',
      'たまに選抜でやってもらっている時は全てテストです。',
      '捨てムーブがないよう思い切り取り組んでください。'
    ]
  },
  {
    title:'ネクストレベル',
    body:[
      'スキル、パフォーマンス力は基礎と反復が大切です。',
      '最近ではSyuriのエアチェアー上げ、Lu-Laのウィンドエルボーエアー、UL mioのステージングなど、課題にトライしてくれている人が大きく成長しています。',
      '※他にもたくさんいますが、今回は3名ピックさせてもらいました。',
      'やりたいことをやるのも大事ですが、必要だと思ったことを伝えています。',
      '課題ややるべきことへたくさん挑戦して、たくさん聞きに来てください。'
    ]
  }
];

const LESSON_GUIDE_DATA = [
  {
    className:'g1',
    title:'1. 基礎練習',
    html:`
      <p>基礎練は先生もずっとやっています。<br>歴1年の初心者も、歴20年のベテランも、ダンスが上手くなるには必須です。</p>
      <h3>オールジャンル共通</h3>
      <ul><li>アップ、ダウン</li><li>ウェーブ</li><li>ヒット</li><li>ステップ</li></ul>
      <h3>Waack まずはこの5つ</h3>
      <ul><li>腕を振る</li><li>身体を反る</li><li>ポージング</li><li>表情</li><li>軸を取る</li></ul>
      <h3>BREAKIN' まずはこの5つ</h3>
      <ul><li>チェアー</li><li>3点倒立</li><li>倒立</li><li>肘倒立</li><li>バックスピン</li></ul>
    `
  },
  {
    className:'g2',
    title:'2. 知識',
    html:`
      <h3>HIPHOPについて知る</h3>
      <p><strong>4大要素</strong><br>MC・DJ・BBOY・Graffiti</p>
      <p><strong>HIPHOPの精神</strong><br>PEACE（平和）、UNITY（団結）、LOVE（愛）、HAVING FUN（楽しむこと）</p>
      <p>HIPHOPはカルチャー（文化）です。リスペクト、レペゼン、マインド、ファッションなど、自分がストリートダンサーであるという自覚を持つことも大切です。</p>
      <h3>ジャンルのオリジネーターを知る</h3>
      <p>どのジャンルにも歴史を作って来たダンサーが必ずいます。今、先生含めみんながダンスを踊れているのは、その人達の活躍・行動があったからこそです。</p>
      <h3>ダンサーをたくさん知る</h3>
      <p>愛媛のダンサー、全国のダンサー、世界のダンサー、たくさんの先生、同年代のライバル。数えきれないほどのダンサーが活動しています。</p>
      <p>選抜のノートではたくさんのダンサーをお送りしますので、必ず覚えてください。</p>
      <h3>Crewをたくさん知る</h3>
      <ul><li>LOCKのCREW：BROTHER SOUL</li><li>BREAKIN'のCREW：CB COMPANY</li><li>BREAKIN'のCREW：五十崎HEALTHY-TOUR</li><li>BREAKIN'のCREW：HOT EAST CREW</li></ul>
      <p>ただバトルに出るだけのCrewはCrewではありません。ライフスタイルを共有出来たり、同じ熱量で動ける仲間との活動をCrewと言います。</p>
      <h3>音楽をたくさん知る</h3>
      <p>ダンサーにとって音楽はとても重要です。たくさん聴いて、たくさん知って、たくさん踊りましょう。</p>
      <h3>イベントをたくさん知る</h3>
      <p>全国各地に様々なイベントがあります。主催者をオーガナイザーと呼びます。先生もいくつかイベントを主催しています。例：PB2、エミフルBREAKIN' CUP、BREAKIN'愛媛選手権など。</p>
    `
  },
  {
    className:'g3',
    title:'3. ストレッチ',
    html:`<p>身体のケアも怠らないようにしましょう。前屈、開脚、首を回すなど簡単なことでも構いませんので、毎日実施してください。</p>`
  },
  {
    className:'g4',
    title:'4. 日々の積み重ね',
    html:`
      <p>基礎練、音楽を聴く、ダンサーの動画を観る、自分のノートを見返す。毎日少しでもダンスに触れることが大事です。</p>
      <p>どこまでやるかは個人の自由。その上で、選抜のみなさんにはこのカルチャーで本気になることの素晴らしさも知ってもらいたいと思っています。</p>
    `
  }
];

const REPORT_DATA = [
  ['m1','1月',['毎年恒例のHOT EAST SUNDAY × PB2のコラボイベント。<br>今回はシャッフル4on4。<br>結果、Syuri、Kurumiが優勝。<br>来年もみんなで楽しみましょう。']],
  ['m2','2月',['岡山のバトルにUL mio、Syuri、Lu-Laが参戦。<br>それぞれ持ち味を活かした良いムーブを出せていました。四国外でも勝てるようたくさん挑戦しましょう。','全日本選手権にChill Cが出場。世界で戦うbgirlとバトルし、大きな経験値となりました。今年のブロック予選も全力で挑み、全国の舞台で予選通過を目指しましょう。']],
  ['m3','3月',['BREAKIN\'愛媛選手権にチャレンジ。結果、Lu-Laがベスト4。次こそは優勝へ。wreathが軍鶏から1票取る活躍を見せ、ヘイスケさんから個人賞を獲得。','Stay HungryへLu-La、Chill Cがチャレンジ。モータルコンバットの貴重なバトルを観ることが出来ました。関西関東のバトルにもたくさんチャレンジしていきましょう。']],
  ['m4','4月',['高知の2on2バトルへLu-La & wreath、YumeTAP & Yuna-X、Chill Cが挑戦。wreath、Yuna-Xは自分のスタイルを見つけつつある中での挑戦でやりたいことの見える挑戦でした。','Chill Cは初のサイファーバトル。積極的にトライして良いムーブも出ていました。YumeTAP、Lu-Laはハイレベルなbboyとサイファーを楽しんでかなりの経験値となりました。','BREAKIN\' SUMMITへ挑戦。練習から本番まで本当によく頑張ってくれました。優勝チームとバトル出来たのは素晴らしい経験。勝つ力があるので諦めず挑み続けましょう。','徳島のBB BATTLEへKurumiが挑戦し、ベスト8。四国を代表する若手HIPHOPダンサーから1票獲得。自信を持って次はリベンジしましょう。','今年も龍王春祭りへ。1人1人が盛り上げる意識を持って楽しみながら楽しませるを心がけましょう。来年も楽しみです。']],
  ['m5','5月',['BB BATTLEでKyokaがベスト8。ハイレベルな予選を乗り越えたのは素晴らしい結果です。','今年もワンダ交流会を開催。みんな良い顔で楽しんでいました。Lu-La、wreath、ナイスMCでした。']],
  ['m6','6月',['BB BATTLE本戦でKyokaがトーナメント進出をかけてバトル。結果は2-1と惜敗。','結果もですが、ムーブからとても成長を感じるナイスチャレンジでした。サミットで悔しいと涙した経験が今の成長に繋がっています。','ダンサーはマインドがとても大切。負けてすぐ走り回って遊ぶ子も多いですが、結局残るのは悔しいと思えるダンサー、次を見据えて行動出来るダンサーです。年齢は関係ありません。']]
];

const MUSIC_GROUPS = [
  {className:'mb1', title:'📀 日本語ラップ 1', songs:[
    ['My life','https://youtu.be/SfEd0PA_rYI?si=vtmt3BGP6LTSXz8-','洗濯物干すのもHIPHOPというワードはダンサーでも知らない人はいないレベルです。'],
    ['好きなこと','https://youtu.be/tDri5QEt4bM?si=7nT4mrkTPs4W3e0Q','ワンダでもよくかけています。'],
    ['奇跡','https://youtu.be/bFUdubnjm4k?si=trOVq8pzxpm_Q3TM','アナーキーさんの曲でトップクラスに好きな曲です。'],
    ['クズ','https://youtu.be/8OU9dbFjsT0?si=cWli6RlO6LvSjxaF','ガドロさんが人気になったキッカケの曲です。'],
    ['Pellicule','https://youtu.be/ueq2QFIIpu0?si=brem1gCyUbeBxwaH','ポエトリーを流行らせたレジェンドです。'],
    ['雨降りの月曜','https://youtu.be/yEpKC0wXy4M?si=TYo5YX3m4lb8-k50','トラックもバースも凄く良いです。'],
    ['27才のリアル','https://youtu.be/tmJBGEFXOvU?si=GpaSJ7FqqBgbssWv','狐火さんは個人的凄く聴いていた時期がありました。ポエトリー好きな人は好きだと思います。'],
    ['Just Right','https://youtu.be/MvC6gZJ3rTM?si=F7a821R-f3GJzD6R','最近出た曲です。凄く好きです。'],
    ['地元LOVE','https://youtu.be/H29mpVrtbCA?si=dTWPP6ziG-quopXU','組み合わせ最強の2人です。出た時衝撃でした。'],
    ['少ない仲間','https://youtu.be/0EcjmbZYE1Q?si=g8lnyBdRqBIL1WbT','最近出た曲ですが、耳に残る良い曲です。'],
    ['Life Style','https://youtu.be/yirVxFBnp2o?si=RqioOLChECeHlT5q','BADHOPの入口として聴いてみると凄く良いです。'],
    ['希望の炎','https://youtu.be/7-HEkkTSI6k?si=oNvksJgKrccNDBpC','ダンスを始めてすぐくらいに出たアルバムに入っていて、MDで毎日聴いていました。']
  ]},
  {className:'mb2', title:'📀 日本語ラップ 2', songs:[
    ['未来予想図','https://youtu.be/PP-txvj87sQ?si=i5vfDb0kMTpTGhR3','R指定が歌っている曲で僕は1番好きです。'],
    ['人間失格','https://youtu.be/ztiJi2D-TeU?si=wHUOSxpkLszYSDbq','若くしてリアルを歌っている曲です。ゴメスは刺さる人には刺さると思います。'],
    ['LIFE','https://youtu.be/xMpB6NosM3Y?si=rlJGGRrNYF2ouk7y','ポエトリーの中でも詩人として凄い才能だと思います。'],
    ['心配すんな','https://youtu.be/INpauGq0MN0?si=2-zE1I0IKD1Ors8B','名曲多いですが、般若さんの曲で1番人気だと思います。'],
    ['空を取り戻した日','https://youtu.be/wCIvYlp3ax0?si=jwFJCqVaisyF4By1','先生のお気に入りの一つです。トラックが良すぎます。一時期ずーっと聴いてました。'],
    ['ゆれる','https://youtu.be/nE1nzTE5ESA?si=TcCKjsSEF_5kv6hr','HIPHOPでChillするならこの曲です。いつかクラシックになると思います。'],
    ['ブッダの休日 / BUDDHA BRAND','https://youtu.be/6VIhuTECXb4?si=5ygQY-6qC23EBGD3','ブッダブランドは必ず覚えて欲しいです。この曲と人間発電所はダンスでも使われます。'],
    ['音色 / KREVA','https://youtu.be/WRFwZY8Pm6w?si=sti2VRUge6nteFPj','クレバの代表曲です。先生もたくさん聞いた曲です。'],
    ['スタート / KREVA','https://youtu.be/jIjDxgXcKMI?si=i_BNdvkzgUezoYgq','ライミングセンス抜群のクレバだからこそ作れる曲です。'],
    ['CHILDREN / MU-TON','https://youtu.be/_4VZFWCcb3Q?si=pAo4xpzc90qIskPR','バトルMCというイメージの強いムートンですが、素晴らしい曲がたくさんあります。'],
    ['トモダチ / ケツメイシ','https://youtu.be/BqN0DbhqAYM?si=S3nLzPugpglO5oZh','歳を重ねるごとに響きが強くなる一曲です。'],
    ['椿 / TORAUMA','https://youtu.be/1kt_lBDZgWo?si=N9QbqXP07qPrEylV','一時期レッスンで使ってました。背中を押される曲の一つです。']
  ]},
  {className:'mb3', title:'📀 日本語ラップ 3', songs:[
    ['十八歳の地図 / Red Eye','https://youtu.be/-_ICs8xX2-U?si=iH13K-r_-iP3Hh3V','HIPHOP、レゲェどちらも力を入れていてMCバトルも出来ます。'],
    ['カフェイン中毒 / kiki vivi lily','https://youtu.be/5_c1GQsosvs?si=5Lfj5FfWGiUjD2nr','耳に残る良い曲です。若手ダンサーに人気のあるアーティストなのでチェックしておいてください。'],
    ['Patience / Dragon Ash','https://youtu.be/sV47CZZU4dQ?si=LG4EO2FwIfkfnNKm','学生の頃から兄の影響でドラゴンアッシュが大好きで、その中でもかなり上位に入る曲です。'],
    ['情熱 / UA','https://youtu.be/R53CceEY77Y?si=UbpVj1OwuPvJeE1m','現代でもかなり聴く機会の多い曲です。'],
    ['Only Holy Story / Steady&Co.','https://youtu.be/0N6LMHaiY5U?si=aa5cOpK_Y9DZVWsJ','冬に聴きたくなる名曲です。先生が中学生くらいの時の曲だと思います。'],
    ['今日という日 / Watson T-Pablow','https://youtu.be/EOH7Oz7bSas?si=u-UdCnTTdiX7Qat5','最近ずっと人気が上がっているWatsonとBADHOPのT-Pablowの曲です。'],
    ['泣いて / Ashley 柊人','https://youtu.be/I2mSjVzPYE4?si=-_9m-UnjW6jBdqws','カルマの時とは違ったアシュリーの一曲。とても良い曲です。'],
    ['徳之島 / 輪入道','https://youtu.be/mh9IMIQmygE?si=zptGKRbCdv1uyLI4','輪入道さんの代表曲です。とても雰囲気がよく輪入道さんにしか歌えない音楽です。'],
    ['いい時間 / EVISBEATS','https://youtu.be/06yIzV8HToM?si=2l1b7SuXvG5OBof6','エビスビーツはChill HIPHOPの名曲だらけなのでたくさん聴いてください。'],
    ['LIFELINE / KICK THE CAN CREW','https://youtu.be/ha15hY_pCkk?si=xN6ix637mBlicSD2','キックザカンクルーはクレバ、リトル、エムシーユーの3名です。'],
    ['今夜はブギーバック / 小沢健二 featuring スチャダラパー','https://youtu.be/6lKTQbrM9RI?si=kO2ELGt_AUuDZbIj','ノリも良く耳に残る曲です。'],
    ['奮エテ眠レ / ZONE THE DARKNESS','https://youtu.be/EggplZC8bM0?si=EdPMDLi8N1VXg5Ye','ZORNさんの昔の名義の曲です。「賭けるものが無いんです。人生でいいですか？」というパンチラインは今でも語り継がれています。']
  ]},
  {className:'mb4', title:'📀 日本語ラップ 4', songs:[
    ['MY TOWN / J-REXXX 紅桜','https://youtu.be/jEXa6Y-RK5A?si=Hv-37_XPMthCh9Sw','先生も大好きな曲です。'],
    ['世界を嫌った / Liza','https://youtu.be/6BVlWRQ3nQA?si=jk8j7Q4pXWrWUKpt','ワンダでも何度もかけています。リーザの初期の曲です。'],
    ['LOST DOPE / B.I.G. Joe','https://www.youtube.com/watch?v=dzcMPegziyo&list=RDdzcMPegziyo&start_radio=1','Chillにもガッツリ練習にも使える最高の一曲です。'],
    ['ケモノミチ / NITRO MICROPHONE UNDERGROUND','https://www.youtube.com/watch?v=1PjD6EFL3Uk&list=RD1PjD6EFL3Uk&start_radio=1','良い意味でニトロらしくない曲だと思っています。ワンダでもたまに流します。'],
    ['WHOOO / Ozrosaurus','https://www.youtube.com/watch?v=E2WkIZScus0&list=RDE2WkIZScus0&start_radio=1','オジロザウルスの代表曲で間違いなくクラシックです。'],
    ['AREA AREA / Ozrosaurus','https://www.youtube.com/watch?v=GhUxiBp4aYo&list=RDGhUxiBp4aYo&start_radio=1','こちらもオジロの代表曲でありクラシックです。'],
    ['蜂と蝶 / Soul Scream','https://www.youtube.com/watch?v=DCqT4hQiSF4&list=RDDCqT4hQiSF4&start_radio=1','クラシックの中のクラシックです。'],
    ['屍を越えて / Gagle','https://www.youtube.com/watch?v=pfd7kOmT-kI&list=RDpfd7kOmT-kI&start_radio=1','ガグルにしか出せない雰囲気が全面に出た一曲だと思います。'],
    ['雪ノ革命 / Gagle','https://www.youtube.com/watch?v=fDLEBI3MYzk&list=RDfDLEBI3MYzk&start_radio=1','僕はガグルの曲で一番好きです。'],
    ['何回も / YZERR','https://www.youtube.com/watch?v=0bG6B5gHQf8&list=PLeq_xZI0luKx7HcOLqpRpVckAQJ7LkBve&index=4','良い曲たくさんあります。'],
    ['Let It Be / Daichi Yamamoto','https://www.youtube.com/watch?v=DhPk4YCFoNU&list=RDDhPk4YCFoNU&start_radio=1','ワンダでもよくかけます。音楽性もリリックも素晴らしいです。'],
    ['Poetry / GOMESS','https://www.youtube.com/watch?v=jglQsQyh8y0&list=RDjglQsQyh8y0&start_radio=1','ポエトリーが好きなら刺さる曲だと思います。'],
    ['Walk This Way / ZORN feat.AKLO','https://www.youtube.com/watch?v=tOS-Yx4Qb_M&list=RDtOS-Yx4Qb_M&start_radio=1','ZORNさんがAKLOさんとリリースした最高の一曲です。']
  ]},
  {className:'mb5', title:'📀 日本語ラップ 5', songs:[
    ['大怪我 / 大神','https://youtu.be/OCoV25z-aBA?si=QHN_Jt8EW8haG_Yw','大神はブッダブランドとシャカゾンビというレジェンド2組によるユニットです。'],
    ['虹 / シャカゾンビ','https://youtu.be/PJgQ5VR69Ec?si=vQ1ryQWX9mx5MlC0','こちらもとても良い曲です。'],
    ['アンバランス / KICK THE CAN CREW','https://youtu.be/eG5O8VlzPso?si=K55el8rQiel3bwpv','僕が中学生の頃聴いていた曲です。'],
    ['ONE / RIP SLYME','https://youtu.be/6LbPC4ZWFok?si=QS05U1yE5gtxh20x','こちらも中学生の頃聴いていました。'],
    ['静かな日々の階段を / Dragon Ash','https://youtu.be/kiD4GDWpoRY?si=ONEhDrXsCPx_FO9X','Dragon Ashを語る上で絶対的に外せない1曲です。'],
    ['Winter Song / KEN THE 390','https://youtu.be/rEqN_p4oP-E?si=poLS17bYCNENB4Cv','MCバトルで初期から活躍していたKEN THE 390さんの1曲です。'],
    ['KARMA / Ashley ft Jin Dogg','https://youtu.be/m-Y-Ua86qkg?si=imXF5ePwL1p5SCLU','Jin Doggのラップがめちゃくちゃカッコいいので聴いてください。'],
    ['貧乏なんて気にしない / KOHH','https://youtu.be/1Iw_m-CXywo?si=K7V-BU3mUALcb6r2','僕はこの曲をよく聴いています。'],
    ['Wake Up / WILYWNKA','https://youtu.be/rDeCOFsZFsA?si=Irz_7PETwJFtDeiu','今では日本のトップチャートにも名前が載るラッパーです。'],
    ['俺の勝手 / 呂布カルマ','https://youtu.be/onTKv0A44PA?si=aEhFW5pxTnAJoAnV','良い曲もたくさんあります。'],
    ['シグナル / Libro','https://youtu.be/R5396gKwIPg?si=2MO6Oz4X_gylAfgs','リブロさんはとにかくトラックが良い曲が多いです。'],
    ['The Choice Is Yours / RHYMESTER','https://youtu.be/OmjJWUM8VcA?si=BJ_u5q1m9ferM1yP','ライムスターは踊れる曲がたくさんあります。'],
    ['CONCRETE JUNGLE / MURO','https://youtu.be/y8IYi2ziXXI?si=mfLMFr4dWuVZTfEO','MUROさんの名曲の一つです。'],
    ['ひとりじゃないのよ / KREVA','https://youtu.be/ASyGLelLMLs?si=dqI3bQ199YkVUPJ3','リリックもトラックも凄く良いです。'],
    ['最ッ低のMC / 般若','https://youtu.be/oX-16bh9nIc?si=-dbWeUHYZ6iWNhAw','レジェンドの名を連ねたパンチラインが有名です。'],
    ['NITRO MICROPHONE UNDERGROUND','https://youtu.be/CLxWD210f5Q?si=7J-OcUP6rEPWp2xK','本当にラップの上手い人が集まったグループによる代表曲です。'],
    ['紙飛行機 / Awich','https://youtu.be/WDzPk7bczlI?si=mJR5ev1XIgv2z7ph','表現力や言葉の強さが素晴らしいです。'],
    ['BlAqDeViL / SILENT KILLA JOINT','https://youtu.be/CM2doEKEjzM?si=RsXChGM3_q821S-Y','凄くカッコいいラッパーです。'],
    ['ザ・グレート・アマチュアリズム / RHYMESTER','https://youtu.be/HTWNPeuZL8g?si=MdRdU3mP0cckqtMp','BREAKIN\'のバトルでよく使われる曲です。'],
    ['忘却 / 宇多田ヒカル KOHH','https://youtu.be/JxHubxeh8J4?si=IEWycYyOR9RNeBpk','世界観やトラックがとても良いです。'],
    ['CoCo ga OKINAWA / Rude-α feat.R\'kuma','https://youtu.be/6VIPLMeSFVM?si=eCvwo68eqZkjcboa','地元をレペゼンしたとても良い曲です。'],
    ['Crayon / ZOT on the WAVE/Fuji Taito','https://youtu.be/m0x2jkAT6FE?si=2Gn15AvGgCIPApSy','一度は耳にしたことがあると思います。'],
    ['Letter / ZORN','https://youtu.be/cq8a0_LedZ8?si=73r3xZiC0Wyo0KS0','トラックもリリックもラップも完璧な一曲です。'],
    ['百合の咲く場所で / Dragon Ash','https://youtu.be/NzmuXSEwKWs?si=v2mFyqr68FnolfU1','凄くテンションの上がる曲です。'],
    ['let go / m-flo YOSHIKA','https://youtu.be/HOsiSE_JTOM?si=5Gu41Cjf7O6uIzdR','クラブでもたくさんかかっていました。'],
    ['NO MORE / JASMINE','https://youtu.be/buwIKCfCBr4?si=UtrLIYGyJUNW2tYw','クラブでかかったりショーケースでも使われていました。'],
    ['足跡 / 19','https://youtu.be/U3tRjhI_46I?si=4wMSqnn0y7MY4ovH','凄く良い曲です。'],
    ['光 / 宇多田ヒカル','https://youtu.be/AlMdDpUWFFI?si=gHHoT9YcICsI3Hp1','HIPHOPヘッズにも人気のアーティストです。'],
    ['大切 / FUNKY MONKEY BABYS','https://youtu.be/ww3dlgnT45Y?si=J0lwQn-BIUJRvf5V','良い曲たくさんあるアーティストです。']
  ]}
];
