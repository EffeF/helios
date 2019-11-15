import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PluginLoaderService } from '@wako-app/mobile-sdk';
import { SourceQuery } from '../../../projects/plugin/src/plugin/entities/source-query';
import { SourceUtils } from '../../../projects/plugin/src/plugin/services/source-utils';

@Component({
  selector: 'app-tab1',
  templateUrl: 'movie.page.html',
  styleUrls: ['movie.page.scss']
})
export class MoviePage implements OnInit {
  @ViewChild('movieRef', { read: ViewContainerRef, static: true })
  movieVCRef: ViewContainerRef;

  constructor(private pluginLoader: PluginLoaderService) {
  }

  ngOnInit() {
    this.loadPlugin();
  }

  loadPlugin() {
    const data = JSON.parse(
      `{"movie":{"relatedIds":[],"title":"The Lion King","year":2019,"imdbId":"tt6105098","tmdbId":420818,"traktId":265470,"trailer":"http://youtube.com/watch?v=7TavVZMewpY","certification":"PG","tagline":"The King has Returned.","overview":"Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.","released":"2019-07-19","runtime":118,"rating":7.6,"votes":5755,"language":"en","genres":["adventure","animation","drama"],"images_url":{"poster":"https://image.tmdb.org/t/p/w300/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg","backdrop":"https://image.tmdb.org/t/p/w500/nRXO2SnOA75OsWhNhXstHB8ZmI3.jpg","poster_original":"https://image.tmdb.org/t/p/original/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg","backdrop_original":"https://image.tmdb.org/t/p/original/nRXO2SnOA75OsWhNhXstHB8ZmI3.jpg"},"alternativeTitles":{"ae":"The Lion King","sa":"الاسد الملك","bg":"Цар Лъв","cz":"Lví král","dk":"Løvernes konge","de":"Der König der Löwen","gr":"The Lion King","us":"The Lion King","es":"El rey león","mx":"El Rey León","ee":"Lõvikuningas","ir":"The Lion King","fi":"Leijonakuningas","ca":"Le Roi Lion","fr":"Le Roi Lion","il":"מלך האריות","hr":"Kralj lavova","hu":"Az oroszlánkirály","id":"The Lion King","is":"Konungur Ljónanna","it":"Il re leone","jp":"ライオン・キング","ge":"მეფე ლომი","kr":"라이온 킹","lt":"Liūtas karalius","lv":"Lauvu karalis","mn":"Araatnii Khaan Arslan","nl":"De Leeuwenkoning","no":"Løvenes konge","pl":"Król lew","br":"O Rei Leão","pt":"O Rei Leão","ro":"Regele leu","ru":"Король Лев","sk":"Leví kráľ","si":"Levji kralj","rs":"Краљ лавова","se":"Lejonkungen","th":"เดอะ ไลอ้อน คิง","tr":"Aslan Kral","ua":"Король Лев","uz":"Qirol Sher","vn":"Vua Sư Tử","cn":"狮子王","hk":"獅子王","tw":"獅子王"},"originalTitle":"The Lion King"}}`
    );
    // const data = JSON.parse(
    //   `{"movie":{"relatedIds":[],"title":"The Hangover","year":2009,"imdbId":"tt1119646","tmdbId":18785,"traktId":11534,"trailer":"http://youtube.com/watch?v=jj6wcUes1no","certification":"R","tagline":"Some guys just can't handle Vegas.","overview":"When three friends finally come to after a raucous night of bachelor-party revelry, they find a baby in the closet and a tiger in the bathroom. But they can't seem to locate their best friend, Doug – who's supposed to be tying the knot. Launching a frantic search for Doug, the trio perseveres through a nasty hangover to try to make it to the church on time.","released":"2009-06-05","runtime":100,"rating":7.8,"votes":21432,"language":"en","genres":["comedy"],"images_url":{"poster":"https://image.tmdb.org/t/p/w300/uluhlXubGu1VxU63X9VHCLWDAYP.jpg","backdrop":"https://image.tmdb.org/t/p/w500/xxKd56iFbMeRQARUosTGgxKxrnF.jpg","poster_original":"https://image.tmdb.org/t/p/original/uluhlXubGu1VxU63X9VHCLWDAYP.jpg","backdrop_original":"https://image.tmdb.org/t/p/original/xxKd56iFbMeRQARUosTGgxKxrnF.jpg"},"alternativeTitles":{"us":"The Hangover","de":"Hangover","fr":"Very Bad Trip","ru":"Мальчишник в Вегасе","es":"Resacón en Las Vegas","tr":"Felekten Bir Gece","cn":"宿醉","cz":"Pařba ve Vegas","bg":"Последният ергенски запой","sk":"Vo štvorici po opici","fi":"Kauhea kankkunen","no":"Hangover","il":"בדרך לחתונה עוצרים בווגאס","gr":"The Hangover","th":"แฮงค์โอเวอร์ เมายกแก๊ง แฮงค์ยกก๊วน","pl":"Kac Vegas","ro":"Marea mahmureală","br":"Se Beber, Não Case!","ua":"Похмілля у Вегасі","tw":"醉後大丈夫","si":"Prekrokana noč","jp":"ハングオーバー！消えた花ムコと史上最悪の二日酔い","se":"Baksmällan","hu":"Másnaposok","nl":"The Hangover","dk":"Tømmermænd i Vegas","kr":"행오버","rs":"Мамурлук у Вегасу","mx":"¿Qué pasó ayer?","hr":"Mamurluk","pt":"Se Beber, Não Case!","it":"Una notte da leoni","ir":"خماری","ca":"Lendemain de veille","lv":"Paģiras","lt":"Pagirios Las Vegase","hk":"醉爆伴郎團"},"originalTitle":"The Hangover"}}`
    // );
    // const data = JSON.parse(
    //   `{"movie":{"relatedIds":[],"title":"moana","year":2016,"imdbId":"tt2139881","tmdbId":459992,"traktId":307062,"trailer":"http://youtube.com/watch?v=ZKsc2I4Tgsk","certification":"R","tagline":"Unlikely but not impossible","overview":"Fred Flarsky is a gifted and free-spirited journalist who has a knack for getting into trouble. Charlotte Field is one of the most influential women in the world -- a smart, sophisticated and accomplished politician. When Fred unexpectedly runs into Charlotte, he soon realizes that she was his former baby sitter and childhood crush. When Charlotte decides to make a run for the presidency, she impulsively hires Fred as her speechwriter -- much to the dismay of her trusted advisers.","released":"2019-05-03","runtime":125,"rating":7.4,"votes":2630,"language":"en","genres":["comedy","romance"],"images_url":{"poster":"https://image.tmdb.org/t/p/w300/m2ttWZ8rMRwIMT7zA48Jo6mTkDS.jpg","backdrop":"https://image.tmdb.org/t/p/w500/88r25ghJzVYKq0vaOApqEOZsQlD.jpg","poster_original":"https://image.tmdb.org/t/p/original/m2ttWZ8rMRwIMT7zA48Jo6mTkDS.jpg","backdrop_original":"https://image.tmdb.org/t/p/original/88r25ghJzVYKq0vaOApqEOZsQlD.jpg"},"alternativeTitles":{"us":"Long Shot","bg":"А дано, ама надали","dk":"Long Shot","fr":"Séduis-moi si tu peux !","ua":"Божевільна парочка","nl":"Long Shot","ru":"Та еще парочка","se":"Long Shot","ca":"Un bon coup","de":"Long Shot – Unwahrscheinlich, aber nicht unmöglich","kr":"롱 샷","il":"מה הסיכוי?","pl":"Niedobrani","es":"Casi imposible","gr":"Μια Απίθανη Σχέση","id":"Long Shot","pt":"Seduz-me Se És Capaz","rs":"Заведи ме ако можеш","br":"Casal Improvável","cn":"全民追女王","tw":"選情尬翻天","cz":"Srážka s láskou","sk":"Stará láska nehrdzavie","hu":"Csekély esély","it":"Non succede… Ma se succede","mx":"Ni en tus sueños","fi":"Long Shot - Mahdoton Yhtälö","tr":"Denemeye Değer","th":"นายโคตรแน่ขอจีบตัวแม่หน่อย!","ro":"N-ai șanse, frate!"},"originalTitle":"Long Shot"}}`
    // );
    // const data = JSON.parse(
    //   `{"movie":{"relatedIds":[],"title":"Girl Gets Girl","year":2015,"imdbId":"tt2905422","tmdbId":359767,"traktId":225545,"trailer":null,"certification":null,"tagline":"","overview":"A deliciously lighthearted comedy from the team of the successful web series Girl Seeks Girl. A hot and hilarious LGBT comedy that shows the different ways to understand love & family.","released":"2015-09-25","runtime":88,"rating":5.6,"votes":22,"language":"es","genres":["comedy"],"images_url":{"poster":"https://image.tmdb.org/t/p/w300/vMyidJDz7yl8s9QyrC1RdNnJM54.jpg","backdrop":"https://image.tmdb.org/t/p/w500/zPSWZcQQuRvJ2y02d64yckOCvA9.jpg","poster_original":"https://image.tmdb.org/t/p/original/vMyidJDz7yl8s9QyrC1RdNnJM54.jpg","backdrop_original":"https://image.tmdb.org/t/p/original/zPSWZcQQuRvJ2y02d64yckOCvA9.jpg"},"alternativeTitles":{"dk":"Girl Gets Girl","us":"Girl Gets Girl","es":"De chica en chica","fr":"De fille en fille"},"originalTitle":"De chica en chica"}}`
    // );
    // const data = JSON.parse(
    //   `{"movie":{"relatedIds":[],"title":"Moms","year":2013,"imdbId":"tt4020978","tmdbId":510354,"traktId":357473,"trailer":null,"certification":null,"tagline":"Yeah, look at me, look at the result of your parenting techniques. I'm a fucking loser","overview":"A short film about moms.","released":"2013-12-31","runtime":15,"rating":10,"votes":2,"language":"en","genres":["comedy","short"],"images_url":{"poster":"https://image.tmdb.org/t/p/w300/uUSkxoUic2Ko5WWNFhuDaPfk2Bp.jpg","backdrop":null,"poster_original":"https://image.tmdb.org/t/p/original/uUSkxoUic2Ko5WWNFhuDaPfk2Bp.jpg","backdrop_original":null},"alternativeTitles":{"us":"Moms"},"originalTitle":"Moms"}}`
    // );

    this.pluginLoader.createComponent('movies', this.movieVCRef, data);

    this.test();
  }

  private test() {
    let a = null;

    let tTitle = 'Windows 10 X64 19H2 ESD En-US OCT 2019 Gen2';

    let originalQuery = 'Us 2019';

    let sourceQuery: SourceQuery = JSON.parse(`
    {"movie":{"imdbId":"tt6857112","tmdbId":458723,"title":"Us","alternativeTitles":{"sa":"نحن","by":"Мы","bg":"Нас","cz":"My","dk":"Us","de":"Wir","gr":"Εμείς","us":"Us","es":"Nosotros","mx":"Nosotros","ca":"Nous","fr":"Us","il":"אנחנו","hr":"Mi","hu":"Mi","it":"Noi","jp":"Us","kr":"어스","lt":"Mes","lv":"Mēs","nl":"Us","pl":"To my","br":"Nós","pt":"Nós","ro":"Noi","ru":"Мы","sk":"My","si":"Mi","rs":"Ми","se":"Us","th":"หลอน ลวง เรา","tr":"Biz","ua":"Ми","vn":"Chúng Tôi","cn":"我们","hk":"我們．異","tw":"我們"},"originalTitle":"Us","year":2019},"category":"movie"}
    `);

    a = SourceUtils.isMovieTitleMatching(tTitle, originalQuery, sourceQuery.movie);

    console.log('test matching', tTitle, a);

  }
}
