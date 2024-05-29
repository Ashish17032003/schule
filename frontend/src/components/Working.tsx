const Working = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 m-20">
        <p className="text-3xl font-mono font-extrabold">
          How FormsDunia works
        </p>
        <iframe
          width="720"
          height="370"
          src="https://www.youtube.com/embed/a5uQMwRMHcs?si=K55uDwddbeVrV3CK"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default Working;
