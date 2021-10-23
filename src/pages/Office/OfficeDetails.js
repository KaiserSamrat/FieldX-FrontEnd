import authHeader from "helpers/jwt-token-access/auth-token-header"
import { MDBDataTable } from "mdbreact"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Row,
  Spinner,
} from "reactstrap"

import "./datatables.scss"

const { userRole } = authHeader()

const OfficeDetails = () => {
  const { users, loading, errors } = useSelector(state => state.UserReducer)
  const history = useHistory()
  const dispatch = useDispatch()
  const { data } = users
  console.log(data)
  useEffect(() => {
    dispatch(getUsers())
  }, [])
  const handleDelete = (e, id) => {
    e.preventDefault()
    window.confirm("Are you sure, you want to delete this User?") &&
      dispatch(deleteUser(id))
    e.target.parentNode.parentNode.style.display = "none"
    console.log(id)
  }
  console.log(loading)
  // console.log(userData)
  const tableData = data?.map((user, index) => {
    return {
      ...user,
      sl: index + 1,
      heading1: user.name,
      heading2: user.employeeId,
      heading3: user.role,

      manage: (
        <>
          <Button
            color="primary"
            className="btn btn-primary waves-effect waves-light mx-1"
            onClick={() => {
              history.push(`/userprofile/${user._id}`)
            }}
          >
            View
          </Button>
          {
            <>
              <Button
                color="primary"
                className="btn btn-primary waves-effect waves-light mx-1"
                onClick={() => {
                  history.push(`/edituser/${user._id}`)
                }}
              >
                Edit
              </Button>
              <Button
                color="primary"
                className="btn btn-primary waves-effect waves-light mx-1"
                onClick={e => handleDelete(e, user._id)}
              >
                Delete
              </Button>
            </>
          }
        </>
      ),
    }
  })

  const userdata = {
    columns: [
      {
        label: "No.",
        field: "sl",
        sort: "asc",
        width: 150,
      },
      ,
      {
        label: "Name",
        field: "heading1",
        sort: "asc",
        width: 150,
      },
      {
        label: "Employee ID",
        field: "heading2",
        sort: "asc",
        width: 200,
      },
      {
        label: "User Role",
        field: "heading3",
        sort: "asc",
        width: 400,
      },
      {
        label: "Manage",
        field: "manage",
      },
    ],
    rows: !loading && tableData,
  }
  return (
    <>
      {loading ? (
        <div className="text-center mt-5 pt-5">
          <Spinner />
        </div>
      ) : (
        <div className="page-content">
          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <Link to="/adduser" className="float-end waves-effect">
                    <Button
                      color="primary"
                      outline
                      className="btn-lg  waves-effect waves-light"
                    >
                      Add User
                    </Button>
                  </Link>

                  <br />
                  <br />
                  <CardTitle className="h4">All Users </CardTitle>

                  <MDBDataTable
                    responsive
                    noBottomColumns
                    striped
                    data={userdata}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </>
  )
}
export default OfficeDetails