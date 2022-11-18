import { NavLink } from "react-router-dom";
export function Start() {
  return (
    <div className="px-4 flex justify-center items-center flex-col min-h-screen">
      <h1 className="text-4xl uppercase font-extrabold mb-16">LEGO minifigs mystery box</h1>  
      <NavLink
        to="/gift-set"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded uppercase"
      >
        let's go!
      </NavLink>
    </div>
  )
}