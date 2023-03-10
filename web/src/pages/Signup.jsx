import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";

import { auth } from "../firebase.config";
import { storage } from "../firebase.config";
import { db } from "../firebase.config";

import { toast } from "react-toastify";

import "../styles/login.css"
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const signup = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = await userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + username}`)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        (error) => {
          toast.error(error.message)
        }, () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            })

            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: downloadURL
            })

          });
        }
      );

      setLoading(false)
      toast.success("account created")
      navigate("/login")

    } catch (error) {
      setLoading(false)
      toast.error("Something went wrong")
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Helmet title="Record">
      <section>
        <Container>
          <Row>
            {loading ? (<Col lg="12" className="text-center">
              <h5 className="fw-bold">Loading....</h5>
            </Col>) : (<Col lg="6" className="m-auto text-center">
              <h3 className="fw-bold mb-4">register</h3>

              <Form className="auth_form" onSubmit={signup}>
                <FormGroup className="form_group">
                  <p className="text-start">User</p>
                  <input type="text" placeholder="User"
                    value={username} onChange={e => setUsername(e.target.value)} />
                </FormGroup>
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
                <FormGroup className="form_group">
                  <p className="text-start">Confirm Password</p>
                  <input type="password" placeholder="Confirm Password"
                    value={password} onChange={e => setPassword(e.target.value)} />
                </FormGroup>
                <FormGroup className="form_group">
                  <p className="text-start">Select profile picture</p>
                  <input type="file"
                    onChange={e => setFile(e.target.files[0])} />
                </FormGroup>

                <button type="submit" className="buy_btn auth_btn">Create an account</button>
                <p>Already have an account? <Link to="/login">Entar</Link></p>
              </Form>
            </Col>)}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Signup