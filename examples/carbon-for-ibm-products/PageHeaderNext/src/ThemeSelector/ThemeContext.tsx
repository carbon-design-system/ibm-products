import React, { createContext, useReducer } from 'react';

export const themeData = [
  {
    text: 'System W/90',
    value: 'carbon-theme--user-preference-white-90',
  },
  {
    text: 'System 10/100',
    value: 'carbon-theme--user-preference-10-100',
  },
  {
    text: 'White',
    value: 'carbon-theme--white',
  },
  {
    text: 'Gray 10',
    value: 'carbon-theme--g10',
  },
  {
    text: 'Gray 90',
    value: 'carbon-theme--g90',
  },
  {
    text: 'Gray 100',
    value: 'carbon-theme--g100',
  },
];

enum ThemeText {
  SYSTEM_1 = 'System W/90',
  SYSTEM_2 = 'System 10/100',
  WHITE = 'White',
  GRAY_10 = 'Gray 10',
  GRAY_90 = 'Gray 90',
  GRAY_100 = 'Gray 100',
}

enum ThemeValue {
  SYSTEM_1 = 'carbon-theme--user-preference-white-90',
  SYSTEM_2 = 'carbon-theme--user-preference-10-100',
  WHITE = 'carbon-theme--white',
  GRAY_10 = 'carbon-theme--g10',
  GRAY_90 = 'carbon-theme--g90',
  GRAY_100 = 'carbon-theme--g100',
}

interface ThemeStateType {
  currentTheme: {
    text: ThemeText,
    value: ThemeValue,
  }
}

interface ThemeActionType {
  type: ThemeStateType;
}

interface ThemeContextType {
  state: ThemeStateType;
  dispatch: React.Dispatch<ThemeActionType>;
}

const initialContextValue: ThemeContextType = {
  state: { currentTheme: themeData[1] as ThemeStateType['currentTheme'], },
  dispatch: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(initialContextValue);

const themeReducer = (state, action) => {
  switch (action.type.value) {
    case 'carbon-theme--user-preference-white-90':
    case 'carbon-theme--user-preference-10-100':
    case 'carbon-theme--white':
    case 'carbon-theme--g10':
    case 'carbon-theme--g90':
    case 'carbon-theme--g100':
      return { currentTheme: action.type };
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialContextValue.state);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {
        // eslint-disable-next-line react/prop-types
        props.children
      }
    </ThemeContext.Provider>
  );
}
