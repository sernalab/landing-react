const YoutubeCarousel = () => {
  const videos = [
    { id: "vAH4yKs8FRQ", title: "Video 1" }, // Asegúrate de reemplazar con los IDs reales y títulos de tus videos
    { id: "vAH4yKs8FRQ", title: "Video 2" },
    { id: "vAH4yKs8FRQ", title: "Video 3" },
  ];

  return (
    <swiper-container>
      {videos.map((video) => (
        <swiper-slide key={video.id}>
          <iframe
            width="560" // Ajusta el ancho según tus necesidades
            height="315" // Ajusta la altura según tus necesidades
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </swiper-slide>
      ))}
    </swiper-container>
  );
};

export default YoutubeCarousel;
