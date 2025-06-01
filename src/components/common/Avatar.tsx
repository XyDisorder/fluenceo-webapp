import DefaultAccountLogo from "./logo/DefaultAccountLogo";

type AvatarProps = {
  src?: string;
  alt?: string;
  className?: string;
};

export default function Avatar({ src, alt = 'Avatar', className = 'w-8 h-8 rounded-full' }: AvatarProps) {
  return src ? (
    <img src={src} alt={alt} className={className} />
  ) : (
    <DefaultAccountLogo className={className} />
  );
}
