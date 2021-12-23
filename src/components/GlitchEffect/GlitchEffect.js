import React from "react";
import "./GlitchEffect.scss";
export const GlitchEffect = ({ msg, restMsg, site }) => {
    return (
        <div className="container glitch-container">
            <h2
                className={`text-sign ${site === "login" ? "login-title" : ""}`}
            >
                {restMsg}{" "}
                <span
                    className={`stack ${site === "login" ? "login-span" : ""}`}
                >
                    <span
                        className={`stack-0 ${
                            site === "login" ? "login-text" : ""
                        }`}
                    >
                        {msg}
                    </span>
                    <span
                        className={`stack-1 ${
                            site === "login" ? "login-text" : ""
                        }`}
                    >
                        {msg}
                    </span>
                    <span
                        className={`stack-2 ${
                            site === "login" ? "login-text" : ""
                        }`}
                    >
                        {msg}
                    </span>
                </span>
            </h2>
            <div className="stack"></div>
        </div>
    );
};
