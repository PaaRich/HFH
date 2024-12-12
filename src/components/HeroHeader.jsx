import Slider from "react-slick";
const HeroHeader = () => {
  // return (
  //   <div className="video-background">
  //     <video autoPlay muted loop className="background-video">
  //       <source
  //         src="../../public/the-drive-on-the-road-at-sunset.960x540.mp4"
  //         type="video/mp4"
  //       />
  //       Your browser does not support the video tag.
  //     </video>
  //     <div className="content">
  //       <h1>Welcome to My Website</h1>
  //       <p>This is a sample text over a video background.</p>
  //     </div>
  //   </div>

  // );
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default HeroHeader;