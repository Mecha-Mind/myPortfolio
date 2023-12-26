import Link from "next/link";
// react icons
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter  } from "react-icons/ti";
import { TiSocialGithub  } from "react-icons/ti";
const Socials = () => {
  return <div className="flex gap-x-6 items-center text-2xl">
    <Link href={'https://facebook.com'} title={'Facebook'} className="hover:text-accent transition-all duration-300"
    target="_blank" >
      <TiSocialFacebook/>
    </Link>
    <Link href={'https://linkedin.com'} title={'Linkedin'} className="hover:text-accent transition-all duration-300"
    target="_blank" >
      <TiSocialLinkedin/>
    </Link>
    <Link href={'https://twitter.com'} title={'Twitter'} className="hover:text-accent transition-all duration-300"
    target="_blank" >
      <TiSocialTwitter />
    </Link>
    <Link href={'https://github.com'} title={'Github'} className="hover:text-accent transition-all duration-300"
    target="_blank" >
      <TiSocialGithub />
    </Link>
  </div>;
};

export default Socials;