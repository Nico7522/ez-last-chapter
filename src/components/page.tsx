import { Page as PageProps } from "../interfaces/chapter";

export default function Page(props: PageProps) {
  return (
    <div className="page-div">
      <img
        className={props.isDoublePage ? "double-page" : "simple-page"}
        src={props.imageUrl}
        alt="image"
      />
      <p className="page-number">{props.pageNumber}</p>
    </div>
  );
}
