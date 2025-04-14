import Link from "next/link";

const Button = ({ btnUrl = "/", btnText, variant, btnIcons }) => {
  const isExternalLink = btnUrl.startsWith('http://') || btnUrl.startsWith('https://');
  
  return (
    <>
      <Link 
        href={btnUrl} 
        className={variant}
        {...(isExternalLink && { target: "_blank", rel: "noopener noreferrer" })}
      >
        <span>{btnText}</span>
        {btnIcons && <i>{btnIcons}</i>}
      </Link>
    </>
  );
};

export default Button;
