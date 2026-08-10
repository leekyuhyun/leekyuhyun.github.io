import Image, { type StaticImageData } from "next/image";

type ProjectImageProps = {
  src: StaticImageData | string;
  title: string;
};

export default function ProjectImage({ src, title }: ProjectImageProps) {
  const width = typeof src === "string" ? 1600 : src.width;
  const height = typeof src === "string" ? 900 : src.height;

  return (
    <div className="mb-8 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
      <Image
        src={src}
        alt={`${title} 프로젝트 화면`}
        width={width}
        height={height}
        className="block h-auto w-full object-contain"
      />
    </div>
  );
}
