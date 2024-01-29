import React from "react";
// import '../Main/Main-content.css';
// import '../Main/MainContent.css';
// import '../media-query.css';
import './Main.css';

import play1 from '../assets/playlist/1.jpeg';
import play2 from '../assets/playlist/2.png';
import play3 from '../assets/playlist/3.jpeg';
import play4 from '../assets/playlist/4.jpeg';
import play5 from '../assets/playlist/5.jpeg';
import play6 from '../assets/playlist/6.jpeg';
import play7 from '../assets/playlist/7.jpeg';
import play8 from '../assets/playlist/8.jpeg';
import play9 from '../assets/playlist/9.jpeg';
import play10 from '../assets/playlist/10.jpeg';
import play11 from '../assets/playlist/11.jpeg';
import play12 from '../assets/playlist/12.jpeg';
import play13 from '../assets/playlist/13.jpeg';
import play14 from '../assets/playlist/14.jpeg';
import play15 from '../assets/playlist/15.jpeg';

const Main = () =>{
	return(

    <main>
      {/* <!-- PLAYLIST --> */}
      <div ClassName="playlist-container">
        <div id="result-playlists">
          <div ClassName="playlist">
            {/* <!-- COLOCAR O BOM DIA | BOA TARDE | BOA NOITE --> */}
            <h1 id="greeting"></h1>
            <h2 ClassName="session">Navegar por todas as seções</h2>
          </div>

          {/* <!-- LIST ITEM 1 --> */}
          <div ClassName="offer__scroll-container">
            <div ClassName="offer__list">
              <section ClassName="offer__list-item">

                {/* <!-- CARD 1 --> */}
                <a href="" ClassName="cards">
                  <div ClassName="cards card1">
                    <img src={play1} alt="" />
                    <span>Boas festas</span>
                  </div>
                </a>

                {/* <!-- CARD 2 --> */}
                <a href="" ClassName="cards">
                  <div ClassName="cards card2">
                    <img src={play2} alt="" />
                    <span>Feitos para você</span>
                  </div>
                </a>

                {/* <!-- CARD 3 --> */}
                <a href="" ClassName="cards">
                  <div ClassName="cards card3">
                    <img src={play3} alt="" />
                    <span>Lançamentos</span>
                  </div>
                </a>

                {/* <!-- CARD 4 --> */}
                <a href="" ClassName="cards">
                  <div ClassName="cards card4">
                    <img src={play4} alt="" />
                    <span>Creators</span>
                  </div>
                </a>

                {/* <!-- CARD 5 --> */}
                <a href="" ClassName="cards">
                  <div ClassName="cards card5">
                    <img src={play5} alt="" />
                    <span>Para treinar</span>
                  </div>
                </a>

                {/* <!-- CARD 6 --> */}
                <a href="" ClassName="cards">
                  <div ClassName="cards card6">
                    <img src={play6} alt="" />
                    <span>Podcasts</span>
                  </div>
                </a>

                {/* <!-- CARD 7 --> */}
                <a href="" ClassName="cards">
                  <div ClassName="cards card7">
                    <img src={play7} alt="" />
                    <span>Sertanejo</span>
                  </div>
                </a>

                {/* <!-- CARD 8 --> */}
                <a href="" ClassName="cards">
                  <div ClassName="cards card8">
                    <img src={play8} alt="" />
                    <span>Samba e pagode</span>
                  </div>
                </a>

                {/* <!-- CARD 9 --> */}
                <a href="" ClassName="cards">
                  <div ClassName="cards card9">
                    <img src={play9} alt="" />
                    <span>Funk</span>
                  </div>
                </a>

                {/* <!-- CARD 10 --> */}
                <a href="" ClassName="cards">
                  <div ClassName="cards card10">
                    <img src={play10} alt="" />
                    <span>MPB</span>
                  </div>
                </a>

                {/* <!-- CARD 11 --> */}
                <a href="" ClassName="cards">
                  <div ClassName="cards card11">
                    <img src={play11} alt="" />
                    <span>Rock</span>
                  </div>
                </a>

                {/* <!-- CARD 12 --> */}
                <a href="" ClassName="cards">
                  <div ClassName="cards card12">
                    <img src={play12} alt="" />
                    <span>Hip Hop</span>
                  </div>
                </a>

                {/* <!-- CARD 13 --> */}
                <a href="" ClassName="cards">
                  <div ClassName="cards card13">
                    <img src={play13} alt="" />
                    <span>Indie</span>
                  </div>
                </a>

                {/* <!-- CARD 14 --> */}
                <a href="" ClassName="cards">
                  <div ClassName="cards card14">
                    <img src={play14} alt="" />
                    <span>Relax</span>
                  </div>
                </a>

                {/* <!-- CARD 15 --> */}
                <a href="" ClassName="cards">
                  <div ClassName="cards card15">
                    <img src={play15} alt="" />
                    <span>Música Latina</span>
                  </div>
                </a>
              </section>
            </div>
          </div>
        </div>

        <div id="result-artist" ClassName="hidden">
          <div ClassName="grid-container">
            <div ClassName="artist-card" id="">
              <div ClassName="card-img">
                <img id="artist-img" ClassName="artist-img" />
                <div ClassName="play">
                  <span ClassName="fa fa-solid fa-play"></span>
                </div>
              </div>
              <div ClassName="card-text">
                <a title="Foo Fighters" ClassName="vst" href=""></a>
                <span ClassName="artist-name" id="artist-name"></span>
                <span ClassName="artist-categorie">Artista</span>
              </div>
            </div>
          </div>
        </div>
		</div>
       </main>
	);

	};


export default Main;