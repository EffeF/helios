import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Episode, PluginLoaderService, Show } from '@wako-app/mobile-sdk';

@Component({
  selector: 'app-tab1',
  templateUrl: 'episode.page.html',
  styleUrls: ['episode.page.scss']
})
export class EpisodePage implements OnInit {
  @ViewChild('episodeRef', {read: ViewContainerRef, static: true})
  episodeVCRef: ViewContainerRef;

  @ViewChild('episodeItemOptionRef', {read: ViewContainerRef, static: true})
  episodeItemOptionVCRef: ViewContainerRef;

  // data: { show: Show, episode: Episode } = JSON.parse(
  //   `{"show":{"title":"The 100","year":2014,"imdbId":"tt2661044","tmdbId":48866,"tvdbId":268592,"traktId":48562,"slug":"the-100","overview":"Set ninety-seven years after a nuclear war has destroyed civilization, when a spaceship housing humanity's lone survivors sends one hundred juvenile delinquents back to Earth, in hopes of possibly re-populating the planet.","trailer":"http://youtube.com/watch?v=aDrsItJ_HU4","firstAired":"2014-03-20T01:00:00.000Z","runtime":43,"rating":8,"votes":14967,"language":"en","genres":["drama","fantasy","science-fiction"],"certification":"TV-14","airedEpisodes":84,"images_url":{"poster":"https://image.tmdb.org/t/p/w300/wBzNjurA8ijJPF21Ggs9nbviIzi.jpg","backdrop":"https://image.tmdb.org/t/p/w500/qYTIuJJ7fIehicAt3bl0vW70Sq6.jpg","poster_original":"https://image.tmdb.org/t/p/original/wBzNjurA8ijJPF21Ggs9nbviIzi.jpg","backdrop_original":"https://image.tmdb.org/t/p/original/qYTIuJJ7fIehicAt3bl0vW70Sq6.jpg"},"alternativeTitles":{"sa":"المائة","bg":"Стоте","bs":"The 100","cz":"The 100","dk":"The 100","de":"The 100","gr":"Οι 100","us":"The 100","es":"Los 100","mx":"Los 100","ir":"۱۰۰","fi":"Eloonjääneet","ca":"Les 100","fr":"Les 100","il":"המאה","hr":"Stotina","hu":"A visszatérők","id":"The 100","it":"The 100","jp":"The 100／ハンドレッド","ge":"ასეული","km":"The 100","kr":"원헌드레드","lt":"Šimtukas","lv":"Simts","nl":"The 100","pl":"100","br":"Os 100","pt":"The 100","ro":"The 100","ru":"Сотня","sg":"The 100","sk":"Prvých 100","rs":"100","se":"The 100","th":"เดอะ 100 ฝ่าโลกมฤตยู","tr":"The 100","ua":"Сотня","cn":"地球百子","tw":"地球百子"},"originalTitle":"The 100"},"episode":{"traktSeasonNumber":1,"traktNumber":8,"code":"S01E08","title":"Day Trip","imdbId":"tt3361356","tmdbId":1040845,"tvdbId":4828425,"traktId":924297,"overview":"Clarke and Bellamy go on a mission to find supplies for approaching winter. Some of the 100 accidentally eat nuts with powerfully hallucinogenic properties and lose their grasp on reality. Meanwhile, Octavia seizes the opportunity to help a friend escape, and a terrifying event brings Clarke and Bellamy closer. On the Ark, Commander Shumway secretly assigns one of the 100 to kill one of his own, and the treacherous actions of Diane Sydney are revealed.","firstAired":"2014-05-08T01:00:00.000Z","rating":7.7,"votes":4188,"runtime":42,"watched":false}}`
  // );


  // data: { show: Show, episode: Episode } = JSON.parse(
  //   `{"show":{"title":"South Park","year":1997,"imdbId":"tt0121955","tmdbId":2190,"tvdbId":75897,"traktId":2177,"slug":"south-park","overview":"South Park is an animated series featuring four boys who live in the Colorado town of South Park, which is beset by frequent odd occurrences. The show grew out of a short film that Trey Parker and Matt Stone created called The Spirit of Christmas, and has become an award-winning show that is a unique blend of humor and satire.","trailer":null,"firstAired":"1997-08-14T02:00:00.000Z","runtime":25,"rating":8.6,"votes":15528,"language":"en","genres":["animation","comedy"],"certification":"TV-MA","airedEpisodes":302,"images_url":{"poster":"https://image.tmdb.org/t/p/w300/v9zc0cZpy5aPSfAy6Tgb6I1zWgV.jpg","backdrop":"https://image.tmdb.org/t/p/w500/mSDKNVvDfitFE6Fb6fSSl5DQmgS.jpg","poster_original":"https://image.tmdb.org/t/p/original/v9zc0cZpy5aPSfAy6Tgb6I1zWgV.jpg","backdrop_original":"https://image.tmdb.org/t/p/original/mSDKNVvDfitFE6Fb6fSSl5DQmgS.jpg"},"alternativeTitles":{"bg":"Саут Парк","bs":"South Park","cn":"南方公园","cz":"Městečko South Park","dk":"South Park","de":"South Park","gr":"Σάουθ Παρκ","us":"South Park","es":"South Park","mx":"South Park","fi":"South Park","fr":"South Park","il":"סאות' פארק","hr":"South Park","hu":"South Park","id":"South Park","it":"South Park","jp":"サウスパーク","kr":"사우스 파크","lb":"South Park","lt":"Pietų parkas","lv":"Dienvidparks","nl":"South Park","no":"South Park","pl":"Miasteczko South Park","br":"South Park","pt":"South Park","ro":"South Park","ru":"Южный Парк","sk":"Mestečko South Park","rs":"Саут Парк","se":"South Park","tr":"Güney Parkı","ua":"Південний Парк","uz":"Janubiy Park","tw":"南方四賤客"},"originalTitle":"South Park"},"episode":{"traktSeasonNumber":2,"traktNumber":4,"code":"S02E04","title":"Chickenlover","imdbId":null,"tmdbId":153603,"tvdbId":179556,"traktId":166542,"overview":"The Booktastic bus is in town and soon everyone finds out that Officer Barbrady can't read. He is whisked off to school with the boys so he can save his job. While he's there someone in South Park is having sex with the town's chickens and only Officer Barbrady with his new deputies Kenny, Kyle, Stan, and Cartman can stop them!","firstAired":"1998-05-28T02:00:00.000Z","rating":7.7,"votes":543,"runtime":22,"watched":false}}`
  // );

  // data: { show: Show, episode: Episode } = JSON.parse(
  //   `{"show":{"title":"Titans","year":2018,"imdbId":"tt1043813","tmdbId":75450,"tvdbId":341663,"traktId":127287,"slug":"titans-2019","overview":"Titans follows young heroes from across the DC Universe as they come of age and find belonging in a gritty take on the classic Teen Titans franchise. Dick Grayson and Rachel Roth, a special young girl possessed by a strange darkness, get embroiled in a conspiracy that could bring Hell on Earth. Joining them along the way are the hot-headed Starfire and loveable Beast Boy. Together they become a surrogate family and team of heroes.","trailer":"http://youtube.com/watch?v=9xIZoih_DaE","firstAired":"2018-10-12T13:00:00.000Z","runtime":50,"rating":7.9,"votes":2164,"language":"en","genres":["action","adventure","fantasy","superhero","science-fiction","drama"],"certification":"TV-MA","airedEpisodes":19,"images_url":{"poster":"https://image.tmdb.org/t/p/w300/eeHI5iBSCOxj4HGSOmFM6azBmwb.jpg","backdrop":"https://image.tmdb.org/t/p/w500/7DE9KC9GyY2TUJMnSPgYJG3rafw.jpg","poster_original":"https://image.tmdb.org/t/p/original/eeHI5iBSCOxj4HGSOmFM6azBmwb.jpg","backdrop_original":"https://image.tmdb.org/t/p/original/7DE9KC9GyY2TUJMnSPgYJG3rafw.jpg"},"alternativeTitles":{"sa":"تايتنز","bg":"Титаните","bs":"Titans","cz":"Titans","de":"Titans","gr":"Τιτάνες","us":"Titans","es":"Titanes","mx":"Titanes","ir":"Titans","fr":"Titans","il":"טיטאנים","hu":"Titans","id":"Titans","it":"Titans","ge":"ტიტანები","kr":"DC 타이탄","nl":"Titans","pl":"Titans","br":"Titãs","pt":"Titans","ro":"Supereroi în devenire","ru":"Титаны","rs":"Титани","tr":"Titans","ua":"Титани","uz":"Titanlar","cn":"泰坦","hk":"悍將聯盟","tw":"泰坦"},"originalTitle":"Titans"},"episode":{"traktSeasonNumber":2,"traktNumber":5,"code":"S02E05","title":"Deathstroke","imdbId":"tt9225716","tmdbId":1940383,"tvdbId":7364229,"traktId":3715772,"overview":"With the team in upheaval, the Titans do everything in their power to save Jason’s life. But when Deathstroke demands they turn over Rose, the dilemma threatens to tear the team apart.","firstAired":"2019-10-04T13:00:00.000Z","rating":8,"votes":995,"runtime":50,"watched":false}}`
  // );

  // data: { show: Show, episode: Episode } = JSON.parse(
  //   `{"show":{"title":"Mayans M.C.","year":2018,"imdbId":"tt5715524","tmdbId":76231,"tvdbId":349659,"traktId":133615,"slug":"mayans-m-c","overview":"Set in a post-Jax Teller world, \\"Mayans M.C.\\" sees EZ Reyes, a former golden boy now fresh out of prison, as a prospect in the Mayan M.C. charter on the California-Mexico border who must carve out his new outlaw identity.","trailer":"http://youtube.com/watch?v=uLqdsersVE8","firstAired":"2018-09-05T02:00:00.000Z","runtime":45,"rating":7.7,"votes":521,"language":"en","genres":["crime","drama","action"],"certification":"TV-MA","airedEpisodes":19,"images_url":{"poster":"https://image.tmdb.org/t/p/w300/i749BmjbQHH1JKlOG3IiCNFZYVH.jpg","backdrop":"https://image.tmdb.org/t/p/w500/43yEwj8aJigrDMmBlF6JQrCUrXY.jpg","poster_original":"https://image.tmdb.org/t/p/original/i749BmjbQHH1JKlOG3IiCNFZYVH.jpg","backdrop_original":"https://image.tmdb.org/t/p/original/43yEwj8aJigrDMmBlF6JQrCUrXY.jpg"},"alternativeTitles":{"bg":"Маите","bs":"Mayans MC","cz":"Mayans M.C.","dk":"Mayans M.C.","de":"Mayans M.C.","gr":"Mayans M.C.","us":"Mayans M.C.","es":"Mayans M.C.","mx":"Mayans M.C.","fr":"Mayans MC","il":"כנופיית המאיה","it":"Mayans M.C.","nl":"Mayans M.C.","pl":"Mayans M.C.","br":"Mayans M.C.","ru":"Майянцы","tr":"Mayans M.C.","cn":"玛雅帮","tw":"邊疆飆風族"},"originalTitle":"Mayans M.C."},"episode":{"traktSeasonNumber":2,"traktNumber":9,"code":"S02E09","title":"Itzam-ye","imdbId":null,"tmdbId":1949954,"tvdbId":7397731,"traktId":3757272,"overview":"Dramatic revelations carve out different paths to vengeance.","firstAired":"2019-10-30T02:00:00.000Z","rating":7.9,"votes":113,"runtime":45,"watched":false}}`
  // );

  data: { show: Show, episode: Episode } = JSON.parse(
    `{"show":{"title":"American Horror Story","year":2011,"imdbId":"tt1844624","tmdbId":1413,"tvdbId":250487,"traktId":1404,"slug":"american-horror-story","overview":"An anthology series centering on different characters and locations, including a house with a murderous past, an insane asylum, a witch coven, a freak show, a haunted hotel, a possessed farmhouse, a cult, the apocalypse and a slasher camp. ","trailer":"http://youtube.com/watch?v=aSRQRiw4xwc","firstAired":"2011-10-06T02:00:00.000Z","runtime":45,"rating":8.1,"votes":17623,"language":"en","genres":["drama","mystery","fantasy","science-fiction","horror","thriller"],"certification":"TV-MA","airedEpisodes":100,"images_url":{"poster":"https://image.tmdb.org/t/p/w300/uR2K0Ui9UsOqnzb5IrV6tLUcUHl.jpg","backdrop":"https://image.tmdb.org/t/p/w500/1gGRY9bnIc0Jaohgc6jNFidjgLK.jpg","poster_original":"https://image.tmdb.org/t/p/original/uR2K0Ui9UsOqnzb5IrV6tLUcUHl.jpg","backdrop_original":"https://image.tmdb.org/t/p/original/1gGRY9bnIc0Jaohgc6jNFidjgLK.jpg"},"alternativeTitles":{"sa":"قصة رعب امريكية","bg":"Зловеща семейна история","bs":"American Horror Story","cz":"American Horror Story","dk":"American Horror Story","de":"American Horror Story","gr":"American Horror Story","us":"American Horror Story","es":"American Horror Story","mx":"American Horror Story","ir":"داستان ترسناک آمریکایی","fi":"American Horror Story","ca":"Histoire d'horreur","fr":"American Horror Story","il":"אימה אמריקאית","hr":"American Horror Story","hu":"Amerikai Horror Story","it":"American Horror Story","ge":"ამერიკული საშინელებათა ისტორია","kr":"아메리칸 호러 스토리","lb":"American Horror Story","lt":"Amerikietiška siaubo istorija","nl":"American Horror Story","no":"American Horror Story","pl":"American Horror Story","br":"História de Horror Americana","pt":"Histórias de Horror Americana","ro":"Poveşti de groază americane","ru":"Американская история ужасов","sk":"American Horror Story","rs":"Америчка хорор прича","se":"American Horror Story","tr":"American Horror Story","ua":"Американська історія жаху","cn":"美国恐怖故事","tw":"美國恐怖故事"},"originalTitle":"American Horror Story"},"episode":{"traktSeasonNumber":9,"traktNumber":3,"code":"S09E03","title":"Slashdance","imdbId":"tt10333022","tmdbId":1904031,"tvdbId":7346953,"traktId":3697909,"overview":"Imitation is the best form of tragedy. Coming clean can be pretty messy.","firstAired":"2019-10-03T02:00:00.000Z","rating":7.6,"votes":725,"runtime":43,"watched":false}}`
  );


  // anime
  // data: { show: Show, episode: Episode } = JSON.parse(
  //   `{"show":{"title":"One Piece","year":1999,"imdbId":"tt0388629","tmdbId":37854,"tvdbId":81797,"traktId":37696,"slug":"one-piece","overview":"Wealth, fame, power ... a man had obtained everything in this world, he was the King of pirates. Before he died his last words inspired the world to venture into the sea: \\"My treasure? If you want it, it is yours ... I have hidden everything in that place.\\" And so began what is known as the Great Age of pirates, throwing hundreds of them into the sea to find the great treasure One Piece. This series tells the adventures and misadventures of one of those pirates, Monkey D. Luffy, who accidentally ate a Devil fruit (Akuma no mi in Japanese), in particular a Gomu Gomu no mi that made his body win the physical properties of rubber, becoming the rubber man. Luffy, after this event, decides that he will become the next King of the pirates and for this, he must find the \\"One Piece\\".","trailer":"http://youtube.com/watch?v=ZwXKz2CeHwY","firstAired":"1999-10-20T00:30:00.000Z","runtime":25,"rating":9,"votes":3560,"language":"ja","genres":["comedy","action","adventure","anime","drama","fantasy"],"certification":"TV-Y7","airedEpisodes":903,"images_url":{"poster":"https://image.tmdb.org/t/p/w300/335fmCjQq4jRZK2QR3ZVJ84yYO0.jpg","backdrop":"https://image.tmdb.org/t/p/w500/4Mt7WHox67uJ1yErwTBFcV8KWgG.jpg","poster_original":"https://image.tmdb.org/t/p/original/335fmCjQq4jRZK2QR3ZVJ84yYO0.jpg","backdrop_original":"https://image.tmdb.org/t/p/original/4Mt7WHox67uJ1yErwTBFcV8KWgG.jpg"},"alternativeTitles":{"cn":"海贼王","us":"One Piece","fr":"One Piece","it":"One Piece - All'arrembaggio!","de":"One Piece","ru":"Ван-Пис","jp":"One Piece","pt":"One Piece","es":"One Piece","gr":"One Piece","kr":"원피스","cz":"One Piece","tr":"One Piece","th":"One Piece","br":"One Piece","sa":"ون بيس - ONE PIECE","id":"One Piece","tw":"航海王","mx":"One Piece","il":"וואן פיס","ua":"ВАН ПІС, ВЕЛИКИЙ КУШ","pl":"One Piece","vn":"Đảo Hải Tặc","sk":"One Piece","bg":"One Piece"},"originalTitle":"ワンピース"},"episode":{"traktSeasonNumber":21,"traktNumber":10,"code":"S21E10","title":"Entering Enemy Territory! The Protagonists Spread into the Town of Bakura!","imdbId":"tt10892774","tmdbId":null,"tvdbId":7316000,"traktId":3659949,"overview":"","firstAired":"2019-09-08T00:30:00.000Z","rating":7.6,"votes":48,"runtime":25,"watched":false}}`
  // );



  constructor(private pluginLoader: PluginLoaderService) {
  }

  ngOnInit() {
    this.loadPlugin();
  }

  loadPlugin() {

    this.pluginLoader.createComponent('episodes', this.episodeVCRef, this.data);
    this.pluginLoader.createComponent('episodes-item-option', this.episodeItemOptionVCRef, this.data);
  }
}
