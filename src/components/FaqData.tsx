"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid";

function FaqData() {
    const items = [
        {
            key: "1",
            label: "What features are included as a free user?",
            desc: "As a free user, you can generate 10 images and also download 10 images in high resolution.",
        },
        {
            key: "2",
            label: "Is the payment auto renewed?",
            desc: "Yes, the payment is auto renewed every month. If you want to cancel your subscription, you can do so hassle-free.",
        },
        {
            key: "3",
            label: "Is the amount refundable?",
            desc: "The amount is non-refundable.",
        },
        {
            key: "4",
            label: "What model is used to generate these AI images?",
            desc: "We are using state-of-the-art generative AI models for generating high-quality AI images.",
        },
        {
            key: "5",
            label: "What is Remix?",
            desc: "Remix allows you to generate similar images based on the prompt you like. It will generate multiple variations of it.",
        },
        {
            key: "6",
            label: "Are there any more features in the pipeline?",
            desc: "There are many more exciting features in the pipeline like image2image, image2video, inpainting, cropping, storybook image generation, anime, cinematic, 3D, and many more. At ImagingAnything, you are only limited by your imagination.",
        },
        {
            key: "7",
            label: "I have some recommendations",
            desc: "Sure, you can send your recommendations in the Contact Us page above.",
        },
    ];
    return (
        <div>
            {items.map((item) => (
                <div key={item.key}>
                    <Disclosure>
                        {({ open }) => (
                            <div className="p-4 text-16 md:text-[20px] tracking-wide ">
                                <Disclosure.Button className="flex items-center justify-between w-full font-bold ">
                                    <span className="break-all text-left text-white">
                                        {item.label}
                                    </span>
                                    {open ? (
                                        <MinusIcon className="w-5 ml-auto text-white" />
                                    ) : (
                                        <PlusIcon className="w-5 ml-auto text-white" />
                                    )}
                                </Disclosure.Button>
                                <Disclosure.Panel className="text-gray-300  py-2">
                                    {item.desc}
                                </Disclosure.Panel>
                            </div>
                        )}
                    </Disclosure>
                </div>
            ))}
        </div>
    );
}

export default FaqData;
