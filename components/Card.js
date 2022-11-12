import Link from "next/link";
import Image from "next/image";

function Card({ title, image, description, link }) {
  return (
    <div className="card">
      <Image
        src={image}
        objectFit="cover"
        layout="fill"
        quality={100}
        className="card_img"
      />
      <div className="card_content">
        <h2 className="card_title">{title}</h2>
        <p className="card_body">{description}</p>
        <a href={link} target="_blank" className="button">
          See more
        </a>
      </div>
    </div>
  );
}

export default Card;