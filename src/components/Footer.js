import React from 'react' 
import { useThemeContext } from '../contexts/theme'
import { useAuth } from '../contexts/auth';

const Footer = () => {
  const { isDark } =  useThemeContext();
  const { user } = useAuth();

  return (
    <footer  style={{
        background : isDark ? "white" : "black" , 
        color : isDark ? "black" : "white"}}
    >
      footer { user}
    </footer>
  ) 
}
export default Footer
