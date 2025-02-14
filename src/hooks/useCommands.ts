import { useState, useCallback, useMemo } from "react";
import { Dispatch } from "redux";
import { getCountryTime } from "../components/helpers/time";
import { setCurrentScreen } from "../_store/reducers/screenSlice";

type CommandFunction = (args: string) => string | void;

interface Commands {
  [key: string]: CommandFunction;
}

export const useCommands = (
  setHistory: React.Dispatch<React.SetStateAction<string[]>>,
  dispatch: Dispatch
) => {
  const [countdown, setCountdown] = useState<number | null>(null);

  const handleCountdown = (onComplete: () => void) => {
    const count = 5;
    setCountdown(count);

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev !== null && prev > 1) {
          return prev - 1;
        } else {
          clearInterval(interval);
          setCountdown(null);
          onComplete();
          return null;
        }
      });
    }, 1000);
  };

  // Διαθέσιμες εντολές
  const commands: Commands = useMemo(
    () => ({
      help: () => "Available commands: help, about, reboot, poweroff, cls",
      about: () => "Hi, I'm Alex, a Front-end Engineer from Athens, Greece 🇬🇷",
      echo: (args) => args,
      time: (args) => getCountryTime(args),
      cls: () => setHistory([]),

      reboot: () => {
        handleCountdown(() => dispatch(setCurrentScreen("SCR_BOOTING")));
      },

      poweroff: () => {
        handleCountdown(() => dispatch(setCurrentScreen("SCR_POWEROFF")));
      },
    }),
    [setHistory, dispatch]
  );

  // Εκτέλεση εντολών
  const executeCommand = useCallback(
    (input: string) => {
      const [command, ...args] = input.split(" ");
      const commandFunction = commands[command];

      if (commandFunction) {
        return commandFunction(args.join(" ")) || "";
      }

      return `Command not found: ${command}`;
    },
    [commands]
  );

  return { executeCommand, countdown };
};
