import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
type Chapter = {
  title: string;
  url: string;
};
export function Home() {
  const [chapterList, setChapterList] = useState<Chapter[]>([]);

  useEffect(() => {
    let chapterArray: Chapter[] = [];
    let i = 274;
    while (i < 294) {
      chapterArray.push({ title: `Chapitre ${i}`, url: `chapter${i}` });
      i++;
    }
    setChapterList(chapterArray);
  }, []);

  return (
    <div className="container">
      <h1>Lecture Eden Zero</h1>
      {chapterList.map((chapter) => (
        <NavLink className={"navlink"} to={chapter.url}>
          {chapter.title}
        </NavLink>
      ))}
    </div>
  );
}
