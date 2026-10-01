interface AboutImageProps {
  src: string;
  alt: string;
  className?: string;
}

function AboutImage({ src, alt, className = "" }: AboutImageProps) {
  return (
    <div>
      <img src={src} alt={alt} className={`size-full max-w-full object-cover ${className}`} loading="lazy" />
    </div>
  );
}

export default AboutImage;
