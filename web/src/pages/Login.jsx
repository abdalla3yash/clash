import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";

import "../styles/login.css"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const signIn = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      const user = userCredential.user

      console.log(user)
      setLoading(false)
      toast.success("Successfully logged in!")
      navigate("/checkout")

    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Helmet title="Login">
      <section>
        <Container>
          <Row>
            {loading ? (<Col lg="12" className="text-center">
              <h5 className="fw-bold">Loading....</h5>
            </Col>) : (<Col lg="6" className="m-auto text-center">
              <h3 className="fw-bold mb-4">Login</h3>

              <Form className="auth_form" onSubmit={signIn}>
                <FormGroup className="form_group">
                  <p className="text-start">Email</p>
                  <input type="email" placeholder="Email"
                    value={email} onChange={e => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup className="form_group">
                  <p className="text-start">Password</p>
                  <input type="password" placeholder="Password"
                    value={password} onChange={e => setPassword(e.target.value)} />
                </FormGroup>

                <button type="submit" className="buy_btn auth_btn">Entrar</button>
                <p>Don't have an account? <Link to="/signup">register</Link></p>
              </Form>
            </Col>)}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login