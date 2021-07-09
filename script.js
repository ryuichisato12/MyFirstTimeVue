let clickcounter = 0;

//btnのText変更,random値取得
let clickBtn = new Vue({
    el: 'main',
    data() {
        return {
            btnChange: '今日の運勢を占う',
            stars: null,
            result: null,
            witticism: null
        }
    },
    methods: {
        click: function() {
            //btnの値変更
            if (clickcounter === 0) {
                this.btnChange = 'もう一度占う';
                clickcounter++;
            } else if(clickcounter === 1) {
                this.btnChange = 'さらに占う';
                clickcounter++;
            }　else  {
                this.btnChange = '本日の占いはここまで！';
            }
            //ランダムな値取得
            const randomValue = Math.floor(Math.random() * 101)
            // 結果表示
            if (randomValue >= 80) {
                this.stars = '<img src="assets/stars/star5.png"/>';
                this.result = '<h2>絶好調!</h2><p>元気よく自分をアピールすると、好感度アップ。</br>体育会系のノリでテキパキ行動しよう。</p>';
            } else if (randomValue >= 50) {
                this.stars = '<img src="assets/stars/star3.png"/>';
                this.result = '<h2>落ち着いた日</h2><p>あなたの考え方をハッキリ示そう。</br>共鳴してくれる人が現れそう。熱く語り合ってみよう。</p>';
            } else if (randomValue >= 30) {
                this.stars = '<img src="assets/stars/star3.png"/>';
                this.result = '<h2>落ち着いた日</h2><p>あなたの考え方をハッキリ示そう。</br>共鳴してくれる人が現れそう。熱く語り合ってみよう。</p>';
            } else if (randomValue >= 10) {
                this.stars = '<img src="assets/stars/star2.png"/>';
                this.result = '<h2>やや不調</h2><p>家でゆっくり過ごしたい日。</br>部屋の模様替えをしたり、料理をすると、リラックス。</p>';
            } else {
                this.stars = '<img src="assets/stars/star1.png"/>';
                this.result = '<h2>おうちで過ごそう</h2><p>日頃のストレスが出やすい日。</br>今日はマッサージなどで身体を休めよう。</p>';
            }

            //名言引用
            const witticism = new Array(
                                '未来を予測する最善の方法は、それを開発することだ。',
                                '完璧を目指すよりも、まずは終わらせろ。',
                                'アイデアを思いついたら、まず自分自身でビルドせよ。</br>それが脳を鍛え、イノベーションへとつながる',
                                'プログラムは読む人のために書かれなければならない、</br>あとついでに実行できるように。',
                                'おしゃべりはいいから、コード見せろよ'
            )
            const index = Math.floor(Math.random() * witticism.length);
            this.witticism = '今日の名言:</br>' + witticism[index]
        }
    }
})
