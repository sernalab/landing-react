const YoutubeCarousel = ({ videos }) => {
  return (
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        {videos.map((video, index) => (
          <div
            key={video.id}
            class="hidden duration-700 ease-in-out"
            data-carousel-item
          >
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title={video.title}
              width="100%"
              height="100%"
            ></iframe>
          </div>
        ))}
      </div>
      <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {videos.map((_, index) => (
          <button
            key={index}
            type="button"
            class="w-3 h-3 rounded-full"
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default YoutubeCarousel;
