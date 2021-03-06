import * as React from "react";

export interface ArrowUpProps {}

const ArrowUp: React.FunctionComponent<ArrowUpProps> = () => {
        return (
                <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                >
                        <path
                                d="M5 15L12 8L19 15"
                                stroke="#FEFCE8"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                        />
                </svg>
        );
};

export default ArrowUp;
