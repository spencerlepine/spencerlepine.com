import config from "@/config";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div>
        <ul>
          {config.footerLinks.map((link) => (
            <li key={link.name}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <ul>
          {config.socialMedias.map((icon) => (
            <li key={icon.name}>
              <a href={icon.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={icon.iconSrc}
                  alt={`${icon.name} icon`}
                  width={40}
                  height={40}
                  className="icon-circle"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>© 2024 Spencer Lepine</div>
    </footer>
  );
}
