import logo from "assets/images/logo.svg"
// import images
import profile from "assets/images/profile-img.png"
// availity-reactstrap-validation
import { AvField, AvForm } from "availity-reactstrap-validation"
import PropTypes from "prop-types"
import React from "react"
import MetaTags from "react-meta-tags"
//redux
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { Alert, Card, CardBody, Col, Container, Row, Spinner } from "reactstrap"
// actions
import { loginUser } from "../../store/auth/login/actions"



const Login = props => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { error, loading } = useSelector(state => ({
    error: state.LoginError.error,
    loading: state.Login.loading,
  }))

  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
    dispatch(loginUser(values, history))
  }

  const signIn = (res, type) => {
    if (type === "google" && res) {
      const values = {
        name: res.profileObj.name,
        email: res.profileObj.email,
        type,
      }

      dispatch(loginUser(values, history))
      // dispatch(socialLogin(postData, props.history, type))
    } else if (type === "facebook" && res) {
      const postData = {
        name: res.name,
        email: res.email,
      }
      dispatch(socialLogin(postData, props.history, type))
    }
  }

  //handleGoogleLoginResponse
  const googleResponse = response => {
    console.log("resata", response)
    console.log("res data", response.profileObj)
    signIn(response, "google")
  }

  //handleTwitterLoginResponse
  // const twitterResponse = e => {}

  //handleFacebookLoginResponse
  const facebookResponse = response => {
    signIn(response, "facebook")
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title>Login | SalesX Admin & Dashboard </title>
      </MetaTags>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col xs={7}>
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p>Sign in to continue to SalesX.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link to="/" className="auth-logo-light">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logo}
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
                        handleValidSubmit(e, v)
                      }}
                    >
                      {error ? <Alert color="danger">{error}</Alert> : null}

                      <div className="mb-3">
                        <AvField
                          name="email"
                          label="Employee Id"
                          className="form-control"
                          placeholder="17011001"
                          type="text"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <AvField
                          name="password"
                          label="Password"
                          value="123456"
                          type="password"
                          required
                          placeholder="Enter Password"
                        />
                      </div>

                      {/* <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlInline"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customControlInline"
                        >
                          Remember me
                        </label>
                      </div> */}

                      <div className="mt-3 d-grid">
                        {loading ? (
                          <h5 className="font-size-14 mb-3 text-center">
                            <Spinner />
                          </h5>
                        ) : (
                          <>
                            <button
                              className="btn btn-primary btn-block"
                              type="submit"
                            >
                              Log In
                            </button>
                          </>
                        )}
                      </div>

                      {/* <div className="mt-4 text-center">
                        <Link to="/forgot-password" className="text-muted">
                          <i className="mdi mdi-lock me-1" />
                          Forgot your password?
                        </Link>
                      </div> */}
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                {/* <p>
                  Don&#39;t have an account ?{" "}
                  <Link to="/register" className="fw-medium text-primary">
                    {" "}
                    Signup now{" "}
                  </Link>{" "}
                </p> */}
                <p>
                  © {new Date().getFullYear()} SalesX
                  by MAAC
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Login

Login.propTypes = {
  history: PropTypes.object,
}