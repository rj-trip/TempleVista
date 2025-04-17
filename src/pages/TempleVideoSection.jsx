// src/components/TempleVideoSection.jsx
const TempleVideoSection = () => {
    return (
      <section className="w-full bg-orange-50  py-10 flex justify-center items-center px-4">
        <div className="w-full md:w-4/5 h-[60vh] rounded-2xl overflow-hidden shadow-xl border-4 border-orange-200 relative group">
          {/* Temple Video */}
          <video
            className="w-full h-full object-cover group-hover:scale-105 transition duration-1000"
            src="https://videos.pexels.com/video-files/4440821/4440821-hd_1920_1080_25fps.mp4" 
            autoPlay
            muted
            loop
            playsInline
          />
  
          {/* Optional Overlay Text */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-3xl md:text-5xl font-bold drop-shadow-lg mb-4">
              Divine Temples of India
            </h2>
            <p className="text-lg md:text-xl font-medium drop-shadow-md">
              Experience the spiritual aura with every glimpse
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default TempleVideoSection;
  
