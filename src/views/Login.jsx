import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
    <h1 className="text-4xl font-black"> Iniciar Sesión</h1>
    <p>Para crear pedido inicia sesión</p>

      <div className="bg-gray-300 shadow-md rounded-md mt-10  px-5 py-10">
          <form>
              <div className="mb-4">
                  <label className="text-slate-800" htmlFor="email">email</label>
                  <input type="email" 
                         id="email" 
                         className="mt-2 w-full p-3 bg-gray-50"
                         name="email"
                         placeholder="Tu email"></input>
              </div>

              <div className="mb-4">
                  <label className="text-slate-800" htmlFor="name">Contraseña</label>
                  <input type="password" 
                         id="password" 
                         className="mt-2 w-full p-3 bg-gray-50"
                         name="password"
                         placeholder="Tu password"></input>
              </div>
              <input
              type="submit" 
              value="Iniciar sesión"
              className="bg-green-700 hover:bg-green-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
              ></input>

          </form>
      </div>
    <nav className="mt-5">
      <Link to="/auth/registro">¿No tienes cuenta? Crea Una</Link>
    </nav>
  </div>
  )
}
