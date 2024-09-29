import { SpriteSVG } from "../../../public/SpriteSVG";

export default function SocialMedia() {
  return (
    <ul className="flex">
      <li className="bg-white rounded-full mr-2">
        <SpriteSVG name="instagram" width={30} height={30} className="custom-svg" />
      </li>
      <li>
        <SpriteSVG name="facebook" width={30} height={30} className="custom-circle-svg" />
      </li>
      <li></li>
      <li></li>
    </ul>
  );
}
