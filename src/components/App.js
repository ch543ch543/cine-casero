import Header from './Header';
import Hero from './Hero';
import Garelly from './Garelly';
import Testimonial from './Testimonial';
import HomeMovieDay from './HomeMovieDay';
import FilmPerformances from './FilmPerformances';
import NuestroFoco from './NuestroFoco';

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Hero />
        <Garelly />
        <div data-theme="dark" className="dark">
          <Testimonial />
          <HomeMovieDay />
          <FilmPerformances />
        </div>
        <div className="tape"></div>
        <NuestroFoco />
      </div>
    </>
  );
}

export default App;
