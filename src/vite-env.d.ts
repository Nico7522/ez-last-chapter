/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_IMG_URL: string;
  readonly VITE_IMG_PART2_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
