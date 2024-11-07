import React, { useContext } from 'react'
import { ThemeContext, UserContext } from '../App'


const ChildC = () => {
      const user = useContext(UserContext);
    const { theme, setTheme } = useContext(ThemeContext);

    function toggleTheme() {
        if (theme == 'light')
            setTheme('dark');
        else setTheme('light')
    }

    return (
        <div>
            <h1>Hello:{user.name}</h1>

            <h1>Theme is: {theme}</h1>
            <button onClick={toggleTheme}>
                Change Theme
            </button>

        </div>
    )
}

export default ChildC
