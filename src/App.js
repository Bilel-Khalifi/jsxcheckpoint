import './App.css';
import myimage from './imageInSrc.jpg'

function App() {
  return (
    <div>
    <div style={{border:'solid 1px black', maxWidth:"100vw"}}>

      <h1 className="title red">Bilel Khlifi</h1>

      <br/>

      <img src={myimage}  alt="" />

      <br/>

      <img src="/imageInPublic.jpg" alt="" />

      </div>

<video
  id="footage_291"
  className="video-js"
  width={320}
  height={240}
  controls
  poster="https://images.all-free-download.com/images/footage_large/tree_291.jpg"
  loop
>
  <source
    src="https://images.all-free-download.com/footage_preview/mp4/tree_291.mp4"
    type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
  />
  <source
    src="https://images.all-free-download.com/footage_preview/webm/tree_291.webm"
    type='video/webm; codecs="vp8, vorbis"'
  />
  <source
    src="https://images.all-free-download.com/footage_preview/ogv/tree_291.ogv"
    type='video/ogg; codecs="theora, vorbis"'
  />
  <img
    src="https://images.all-free-download.com/images/footage_large/tree_291.jpg"
    width={425}
    height={240}
    alt="Poster Image"
    title="No video playback capabilities."
  />


      </video>
      </div>
  );
}

export default App;
