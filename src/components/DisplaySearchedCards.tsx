import Link from "next/link";
import SocialCard from "./SocialCards";

type DisplaySearchedCardsProps = Readonly<{
    imagesDetails: any[];
}>;
export default function DisplaySearchedCards({
    imagesDetails,
}: DisplaySearchedCardsProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 cursor-pointer">
            {imagesDetails.length > 0 &&
                imagesDetails.map((item, id) => (
                    <Link
                        key={id}
                        href={`/${item?.caption[0]?.replace(/\s+/g, "-")}/${
                            item?.image_id
                        }`}
                    >
                        <SocialCard key={id} data={item} />
                    </Link>
                ))}
        </div>
    );
}
