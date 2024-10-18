import { Link } from "react-router-dom";

export default function Registro() {
  return (
    <div>
      <h1 className="text-4xl font-black"> Crea tu cuenta</h1>
      <p>crea tu cuenta llenanso el formulario</p>

      <div className="bg-gray-300 shadow-md rounded-md mt-10 mb-10 px-5 py-10">
        <form>
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="name">Nombre</label>
            <input type="text"
              id="name"
              className="mt-2 w-full p-3 bg-gray-50"
              name="name"
              placeholder="Tu nombre"></input>
          </div>

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

          <div className="mb-4">
            <label className="text-slate-800" htmlFor="name">Repetir Contraseña</label>
            <input type="password_confirmation"
              id="password"
              className="mt-2 w-full p-3 bg-gray-50"
              name="password_confirmation"
              placeholder="repite tu password"></input>
          </div>

          <input
            type="submit"
            value="crear cuenta"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
          ></input>

        </form>
      </div>

      <nav className="mt-5">
        <Link to="/auth/login">¿ya tienes cuenta? Inicia sesión</Link>
      </nav>

    </div>
  )
}
