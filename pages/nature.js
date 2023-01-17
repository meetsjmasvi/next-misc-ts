// import Image from "next/image";
import Nature1 from "../public/Nature_1.jpg";
import Nature2 from "../public/Nature_2.jpg";
import Nature3 from "../public/Nature_3.jpg";
import Nature4 from "../public/Nature_4.jpg";
import Nature5 from "../public/Nature_5.jpg";

export default function NaturesPage() {
  return (
    <>
      <h3>Nature Gallery</h3>
      <div>
        {[Nature1, Nature2, Nature3, Nature4, Nature5].map((item, idx) => {
          return (
            // Commented only to experiment next export command
            // <Image
            //   placeholder="blur"
            //   blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII"
            //   key={idx}
            //   src={item}
            //   alt="Nature"
            //   width="540"
            //   height="360"
            // />
            <img
              placeholder="blur"
              key={idx}
              src={item}
              alt="Nature"
              width="540"
              height="360"
            />
          );
        })}
      </div>
    </>
  );
}
