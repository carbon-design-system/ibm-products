import React, { useState, useCallback, createContext } from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { pkg } from '../../../settings';

export const WebTerminalContext = createContext();

const componentName = 'WebTerminalProvider';
export let WebTerminalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const openWebTerminal = useCallback(() => setOpen(true), []);
  const closeWebTerminal = useCallback(() => setOpen(false), []);
  const toggleWebTerminal = useCallback(() => setOpen(!open), [open]);

  return (
    <WebTerminalContext.Provider
      value={{ open, openWebTerminal, closeWebTerminal, toggleWebTerminal }}
    >
      {children}
    </WebTerminalContext.Provider>
  );
};

// Return a placeholder if not released and not enabled by feature flag
WebTerminalProvider = pkg.checkComponentEnabled(
  WebTerminalProvider,
  componentName
);

WebTerminalProvider.propTypes = {
  /**
   * Provide your own terminal component as children to show up in the web terminal
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

// Custom hook that exposes the provided value from context
export const useWebTerminal = () => {
  return useContext(WebTerminalContext);
};
