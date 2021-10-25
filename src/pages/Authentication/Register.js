// availity-reactstrap-validation
import { AvField, AvForm } from "availity-reactstrap-validation"
import React, { useEffect } from "react"
import MetaTags from "react-meta-tags"
//redux
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Alert, Card, CardBody, Col, Container, Row, Spinner } from "reactstrap"
import logoImg from "../../assets/images/logo.svg"
// import images
import profileImg from "../../assets/images/profile-img.png"
// action
import { registerUser } from "../../store/actions"





const Register = props => {
  const dispatch = useDispatch()
  let history = useHistory()

  let { user, registrationError, loading, message } = useSelector(state => ({
    registrationError: state.Account.registrationError,
    loading: state.Account.loading,
    message: state.Account.message,
  }))

  let passerror
  // handleValidSubmit
  const handleValidSubmit = values => {
    console.log("values data", values)
    if (values.password.length < 6) {
      toast.error("Password is too short", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else if (values.confirmPassword !== values.password) {
      passerror = "Passwords are not matched"
      toast.error("Both Passwors are not matched", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else {
      dispatch(registerUser(values, history, toast))
    }
  }

  useEffect(() => {
    // dispatch(apiError(""))
  }, [])

  return (
    <React.Fragment>
      <MetaTags>
        <title>Register | Skote - React Admin & Dashboard Template</title>
      </MetaTags>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <ToastContainer />
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col className="col-7">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Free Register</h5>
                        <p>Get your free Skote account now.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profileImg} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link to="/">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logoImg}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">
                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(v)
                      }}
                    >
                      {user && user ? (
                        <Alert color="success">
                          Register User Successfully
                        </Alert>
                      ) : null}

                      {registrationError && registrationError ? (
                        <Alert color="danger">{registrationError}</Alert>
                      ) : null}
                      {passerror && passerror ? (
                        <Alert color="danger">{passerror}</Alert>
                      ) : null}

                      <div className="mb-3">
                        <AvField
                          name="userName"
                          label="User name"
                          type="text"
                          required
                          placeholder="Enter username"
                        />
                      </div>
                      <div className="mb-3">
                        <AvField
                          id="email"
                          name="email"
                          label="Email"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <AvField
                          name="phoneNumber"
                          label="Phone Number"
                          type="text"
                          required
                          placeholder="Enter phonenumber"
                        />
                      </div>
                      <div className="mb-3">
                        <AvField
                          name="password"
                          label="Password"
                          type="password"
                          required
                          placeholder="Enter Password"
                        />
                      </div>
                      <div className="mb-3">
                        <AvField
                          name="confirmPassword"
                          label="Confirm Password"
                          type="password"
                          required
                          placeholder="Enter confirm Password"
                        />
                      </div>

                      <div className="mt-3 d-grid">
                        {loading ? (
                          <h5 className="font-size-14 mb-3 text-center">
                            <Spinner />
                          </h5>
                        ) : (
                          <button
                            className="btn btn-primary btn-block"
                            type="submit"
                          >
                            Register
                          </button>
                        )}
                      </div>

                      <div className="mt-4 text-center">
                        <p className="mb-0">
                          By registering you agree to the Skote{" "}
                          <Link to="#" className="text-primary">
                            Terms of Use
                          </Link>
                        </p>
                      </div>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Already have an account ?{" "}
                  <Link to="/login" className="font-weight-medium text-primary">
                    {" "}
                    Login
                  </Link>{" "}
                </p>
                <p>
                  © {new Date().getFullYear()} Skote. Crafted with{" "}
                  <i className="mdi mdi-heart text-danger" /> by Themesbrand
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Register