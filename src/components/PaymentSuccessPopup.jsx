import SuccessIcon from "@/assets/svgs/successPayment.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import DialogModel from "./DialogModel";

const PaymentSuccessPopup = ({ setIsOpen, isOpen }) => {
    const navigate = useRouter();
    const handleOk = () => {
        navigate.push("/");
        setIsOpen(false);
    };
    return (
        <DialogModel isOpen={isOpen} closeModal={handleOk}>
            <div className="flex flex-col items-center  font-alumniRegular bg-[#141414] pt-24 pb-10 px-24">
                <Image
                    src={SuccessIcon}
                    alt="success icon"
                    width={50}
                    height={50}
                />
                <p className="text-[28px] text-white font-semibold tracking-wide">
                    Payment Success
                </p>
                <div className="flex flex-col justify-center items-center my-3 text-center text-[16px] text-white tracking-wide">
                    <p>Your Payment is successfully completed</p>
                    <p>Enjoy your Selected Plan</p>
                </div>
                <button
                    onClick={handleOk}
                    className="text-black mt-10 px-10 py-3 font-bold !rounded-xl bg-[#FFD970] hover:!text-black hover:bg-[#eece75]"
                >
                    Okay
                </button>
            </div>
        </DialogModel>
    );
};

export default PaymentSuccessPopup;
