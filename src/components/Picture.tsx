type PictureProps = {
  mobileSrc: string;
  desktopSrc: string;
  alt: string;
  pictureClassName?: string;
  imgClassName?: string;
};

function Picture({ mobileSrc, desktopSrc, alt, pictureClassName, imgClassName }: PictureProps) {
  return (
    <picture className={pictureClassName}>
      <source media="(min-width: 768px)" srcSet={desktopSrc} />
      <img src={mobileSrc} alt={alt} className={imgClassName} />
    </picture>
  );
}

export default Picture;
