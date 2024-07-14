export interface Chapter {
  chapterNumber: number;
  page: Page[];
}

export interface Page {
  imageUrl: string;
  pageNumber: number;
  isDoublePage: boolean;
}
