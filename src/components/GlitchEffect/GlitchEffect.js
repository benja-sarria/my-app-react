import React from "react";
import "./GlitchEffect.scss";
export const GlitchEffect = ({ msg, restMsg }) => {
    return (
        <div className="container glitch-container">
            <h2 className="text-sign">
                {restMsg}{" "}
                <span className="stack">
                    <span className="stack-0">{msg}</span>
                    <span className="stack-1" /* style={`--index: 1;`} */>
                        {msg}
                    </span>
                    <span className="stack-2" /* style={`--index: 2;`} */>
                        {msg}
                    </span>
                </span>
            </h2>
            <div className="stack" /* style={`--stacks: 3;`} */></div>
        </div>
    );
};
