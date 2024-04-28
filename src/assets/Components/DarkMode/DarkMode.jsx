import { useEffect, useState } from "react";
import { HiMoon } from "react-icons/hi";
import { PiSunBold } from "react-icons/pi";

// import "./DarkMode.css";
const DarkMode = () => {

    const [theme , setTheme] = useState(null);
    useEffect(()=>{
        if(window.matchMedia("prefer-color-scheme: dark").matches){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    },[])

    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    },[theme])

    const handleThemeSwitch = () =>{
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <div className="text-xl">
            <button className="rounded-lg bg-gray-200 dark:bg-slate-600 p-3 text-yellow-500 dark:text-white" onClick={handleThemeSwitch}>
                {theme ==='dark' ? <HiMoon />: <PiSunBold />}
            </button>
        </div>
    );
};

export default DarkMode;