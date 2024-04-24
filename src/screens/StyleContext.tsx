import {createContext} from 'react';
const context = {
  bg: 'red',
  color: 'white',
};
type MyContextTypes = {
  bg: string;
  color: string;
};
type StyleProvideProps = {
  children: ReactNode;
};
export const MyContext = createContext<MyContextTypes>(context);
export const StyleProvider = ({children}: StyleProvideProps) => {
  return <MyContext.Provider value={context}>{children}</MyContext.Provider>;
};
