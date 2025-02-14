//hooks
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useCommands } from "../../hooks/useCommands";


import { RootState } from "../../_store";
import { useSelector } from "react-redux";


import Draggable from "react-draggable";

const Terminal = () => {


    const isOpen = useSelector((state: RootState) => state.apps.terminal);

    const [history, setHistory] = useState<string[]>([]);
    const [command, setCommand] = useState("");
    const dispatch = useDispatch();

    const inputRef = useRef<HTMLInputElement | null>(null);
    const terminal = useRef<HTMLDivElement | null>(null);

    const { executeCommand, countdown } = useCommands(setHistory, dispatch);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (command.trim()) {
            const output = executeCommand(command);
            if (output) {
                setHistory((prev) => [...prev, `> ${command}`, output]);
            }
            setCommand("");
        }
    };

    // getfocus when pressed
    const gotfocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };


    if (!isOpen) {
        return
    }

    return (
        <Draggable nodeRef={terminal} cancel=".content">
            <div className="terminal" ref={terminal} onTouchStart={gotfocus} onClick={gotfocus}>

                {/* titlebar */}
                <div className="titlebar">
                    <div className="title">
                        💻 Terminal
                    </div>

                    <div className="closer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            width="18"
                            height="18"

                        >
                            <path
                                fill="currentColor"
                                d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m86.63 272L320 342.63l-64-64l-64 64L169.37 320l64-64l-64-64L192 169.37l64 64l64-64L342.63 192l-64 64Z"
                            ></path>
                        </svg>
                    </div>
                </div>


                <div className="content">
                    <div className="history">
                        {history.map((line, index) => (
                            <div key={index}>{line}</div>
                        ))}
                        {countdown !== null && (
                            <>
                                <div>👋 Goodbye</div>
                                <div style={{ color: "#ff4545", marginTop: 10 }}>
                                    Rebooting in {countdown} seconds
                                </div>
                            </>
                        )}
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="input-container"
                        style={{ display: countdown ? "none" : "flex" }}>

                        <span className="user-prompt">terminal@react</span>
                        <span className="prompt">:~$</span>
                        <input
                            type="text"
                            value={command}
                            onChange={(e) => setCommand(e.target.value)}
                            className="terminal-input"
                            ref={inputRef}
                            autoFocus
                        />
                    </form>
                </div>
            </div>
        </Draggable>


    );
};

export default Terminal;
