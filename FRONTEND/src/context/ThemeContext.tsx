import { createContext,useState ,useContext} from "react";
interface ThemeContextType{
    darkmode:boolean,
    togglemode:()=>void;
}
interface ThemeProviderProps{
    children:React.ReactNode;
}
const useTheme=()=>{
    const context=useContext(ThemeContext);
    if(!context){
        throw new Error("useTheme must be used inside ThemeProvider");
    }
    return context;
}
const ThemeContext=createContext<ThemeContextType | undefined>(undefined);
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [darkmode, setDarkmode] = useState(false);

  const togglemode = () => {
    setDarkmode(!darkmode);
  };

  return (
    <ThemeContext.Provider value={{ darkmode, togglemode }}>
      {children}
    </ThemeContext.Provider>
  );
};
export {ThemeProvider,useTheme};