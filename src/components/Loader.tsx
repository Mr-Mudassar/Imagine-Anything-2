import Spin from "./Spin";
import React from "react";

export default function Loader() {
    return (
        <div className="w-full flex items-center justify-center mt-20">
            <Spin />
        </div>
    );
}
