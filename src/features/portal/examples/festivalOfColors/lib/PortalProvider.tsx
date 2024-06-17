import React from "react";
import { useInterpret } from "@xstate/react";
import {
  MachineInterpreter,
  festivalOfColorsMachine,
} from "./festivalOfColorsMachine";

interface PortalContext {
  portalService: MachineInterpreter;
}

export const PortalContext = React.createContext<PortalContext>(
  {} as PortalContext
);

export const PortalProvider: React.FC = ({ children }) => {
  const portalService = useInterpret(
    festivalOfColorsMachine
  ) as unknown as MachineInterpreter;

  console.log({ provided: portalService });
  return (
    <PortalContext.Provider value={{ portalService }}>
      {children}
    </PortalContext.Provider>
  );
};
