import { useEffect, useState } from "react";
import { Page as PageInterface } from "../../interfaces/chapter";
import Page from "../../components/page";
import { pageGenerator } from "../../utils/page-generator";
export default function Chapter280() {
  const [pageList, setPageList] = useState<PageInterface[]>([]);

  useEffect(() => {
    let arrayTemp: PageInterface[] = [];
    pageGenerator(arrayTemp, 118, 136, [135]);
    setPageList(arrayTemp);
  }, []);
  return (
    <div className="chapter-container">
      <h1>Chapitre 280</h1>
      {pageList.map((p) => (
        <Page
          pageNumber={p.pageNumber}
          imageUrl={p.imageUrl}
          isDoublePage={p.isDoublePage}
        />
      ))}
    </div>
  );
}
