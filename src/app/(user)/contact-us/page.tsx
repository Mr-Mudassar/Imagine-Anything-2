export const metadata = {
    title: "Contact Us | Imagine Anything",
};

const page = () => {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 gap-y-10 items-start justify-center text-white py-10 md:py-20 px-5 md:px-20">
            <section className="flex flex-col gap-y-5 md:gap-y-10">
                <div className="">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                        LET’S GET IN TOUCH
                    </h1>
                    <span className="text-xl">
                        Don’t Be Afraid To Say Hello With Us!
                    </span>
                </div>
                <div className="">
                    <h4 className="text-base text-yellow font-bold">Phone</h4>
                    <span className="text-xl font-bold">+92 627 2782 827</span>
                </div>
                <div className="">
                    <h4 className="text-base text-yellow font-bold">Email</h4>
                    <span className="text-xl font-bold">
                        hello@imageanything.ai
                    </span>
                </div>
            </section>
            <section className="flex flex-col gap-y-4 w-full bg-white/5 backdrop-blur-xl rounded-xl border border-SlateGray p-5 lg:p-10">
                <h1 className="text-2xl font-bold">CONTACT</h1>
                <form className="grid grid-cols-2 gap-4 py-6">
                    <input
                        className="rounded-lg bg-dark-gray p-2  h-10 border border-white focus:border-blue-800 placeholder:text-gray-400 text-white text-xl  my-4"
                        placeholder="Full Name"
                        required
                        name={"full_name"}
                    />

                    <input
                        className="rounded-lg bg-dark-gray p-2 h-10 border border-white focus:border-blue-800 placeholder:text-gray-400 text-white  text-xl  my-4"
                        placeholder="Email"
                        name={"email"}
                        required
                    />

                    <input
                        className="rounded-lg bg-dark-gray p-2  h-10 border border-white focus:border-blue-800 placeholder:text-gray-400 text-white font-alumniRegular text-xl  my-4"
                        placeholder="Phone"
                        name={"phone_number"}
                        required
                    />

                    <input
                        className="rounded-lg bg-dark-gray p-2  h-10 border border-white focus:border-blue-800 placeholder:text-gray-400 text-white font-alumniRegular text-xl  my-4"
                        placeholder="Subject"
                        name={"subject"}
                        required
                    />

                    <textarea
                        rows={4}
                        className="rounded-lg col-span-2 p-2 bg-dark-gray border border-white focus:border-blue-800  placeholder:text-gray-400 text-white font-alumniRegular my-4 text-xl "
                        placeholder="Enter your mesage"
                        name={"body"}
                    />

                    <div className="flex items-end justify-center md:justify-end col-span-2">
                        <button className="w-56 self-end text-xl font-medium bg-yellow flex items-center justify-center text-black !rounded-lg">
                            {" "}
                            Send to Us
                        </button>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default page;
