import { useState } from "react"

import { signInWithEmailAndPassword } from "firebase/auth"

import { auth } from "../firebase"

import { useNavigate } from "react-router-dom"

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleLogin = async (e) => {

    e.preventDefault()

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      alert("Login Successful")

      navigate("/admin")

    } catch (error) {

      alert("Invalid Credentials")

    }

  }

  return (

    <section className="pt-32 pb-24 min-h-screen bg-gray-50">

      <div className="max-w-md mx-auto px-6">

        <div className="bg-white p-10 rounded-3xl shadow-xl">

          <h1 className="text-4xl font-bold text-blue-900">
            Admin Login
          </h1>

          <form
            onSubmit={handleLogin}
            className="mt-10 flex flex-col gap-6"
          >

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-4 rounded-xl outline-none"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-4 rounded-xl outline-none"
              required
            />

            <button
              type="submit"
              className="bg-blue-900 text-white py-4 rounded-xl hover:bg-blue-800 transition"
            >
              Login
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}

export default Login