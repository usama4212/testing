export const eyeToggle1 = ({type1, setType1, setIcon1, eye, eyeOff} : any) => {
    const toggleType = type1 === "password" ? "text" : "password";
    const toggleIcon = type1 === "password" ? eye : eyeOff;
  
    setType1(toggleType);
    setIcon1(toggleIcon);
  };
export const eyeToggle2 = ({type2, setType2, setIcon2, eye, eyeOff} : any) => {
    const toggleType = type2 === "password" ? "text" : "password";
    const toggleIcon = type2 === "password" ? eye : eyeOff;
  
    setType2(toggleType);
    setIcon2(toggleIcon);
  };