export default function Header() { 
  return ( 
    <header className="topbar"> 
      <div> 
        <p className="eyebrow">Учебный проект</p> 
        <h1>Гуси гуси гагага, есть хотите?</h1> 
        <p className="subtitle"> Электронный задачник?</p> 
      </div> 
  
      <button className="primaryButton" type="button"> 
        + Новая задача 
      </button> 
    </header> 
  ); 
 
}