const HeroHeader = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop className="background-video">
        <source
          src="../../public/the-drive-on-the-road-at-sunset.960x540.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Welcome to My Website</h1>
        <p>This is a sample text over a video background.</p>
      </div>
    </div>
  );
};

export default HeroHeader;
