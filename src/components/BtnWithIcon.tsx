import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type BtnWithIconProps = {
    icon?: StaticImport;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
};

export default function BtnWithIcon({
    icon,
    children,
    className,
    onClick,
}: Readonly<BtnWithIconProps>) {
    return (
        <button
            className={`flex items-center justify-center primary-btn py-2 px-4 text-base font-bold gap-2 tracking-widest ${
                className || ""
            }`}
            onClick={onClick}
        >
            {icon && <Image src={icon} alt={""} width={20} height={20} />}

            <span>{children}</span>
        </button>
    );
}
