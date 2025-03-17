const Banner = () => {
  return (
    <footer className="relative w-full h-screen mt-20 md:h-96 overflow-hidden">
      {/* Background GIF */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/buttom-gif.gif" // Make sure the GIF is inside the public folder
          alt="Footer Background"
          className="w-full h-full object-cover"
        />
      </div>
    </footer>
  );
};

export default Banner;
