import FilmCard from "../FilmCard/FilmCard";

function FilmList() {
  const films = [
    {
      title: "When You Left Me",
      month: "1",
      id: "899020737/24108318a8",
      link: "https://vimeo.com/899020737/24108318a8",
    },
    {
      title: "The Bull",
      month: "2",
      id: "907238510/3faea62bf7",
      link: "https://vimeo.com/907238510/3faea62bf7",
    },
  ];
  return (
    <div className="filmlist">
      {films.map((film) => {
        return <FilmCard film={film} />;
      })}
    </div>
  );
}

export default FilmList;
