import { SpriteSVG } from "../../../public/SpriteSVG";

export default function SocialMedia() {
  return (
    <ul className="flex">
      <li className="mr-2">
        <SpriteSVG name="instagram" width={30} height={30} color='#EBF0F2' className="instagram" />
        <a href="https://www.instagram.com" aria-label="Instagram"></a>
      </li>
      <li>
        <a
    href="https://www.facebook.com/bemainna?rdid=wm2bk9xR8OxXUp7B&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FJL13xnu7KguWo9kv%2F"
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label="Facebook"
  >
    <SpriteSVG name="facebook2" width={25} height={25} color='#fff' className="" />
        </a>
      </li>
      <li></li>
      <li></li>
    </ul>
  );
}


