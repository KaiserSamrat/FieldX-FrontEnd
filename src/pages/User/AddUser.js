import axios from 'axios';
import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import {
    Card,
    Col,
    Container,
    Row,
    CardBody,
    CardTitle,
    FormGroup,
    Label,
    Button,
    Form,
    Input,

} from "reactstrap"
import { AvField, AvForm } from "availity-reactstrap-validation"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { useEffect, useState } from "react"
import { addNewUser } from "../../store/users/action"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const AddUser = () => {


    const [testloading, setloading] = useState([])
    const dispatch = useDispatch()
    const history = useHistory()
    // const { loading, usernames } = useSelector(
    //     state => state.dropdownnamesReducer
    //   )
    const { isLoading, error } = useSelector(state => state.UserReducer)
    // useEffect(
    //     axios.post(``,  obj )
    //   .then(res => {
    //     console.log(res);
    //     // console.log(res.data);
    //   })
    // )
    useEffect(() => {
        axios
          .get("https://fieldx-api.salesx-staging.xyz/api/v1/users")
          .then(response => (setloading(response.data)));
          console.log(testloading);
      }, []);

    function handleSubmit(event, errors, values) {
        event.preventDefault()
        console.log(values);
        let obj = {}
        if (values.name) {
            obj.name = values.name
        }
        // if (values.phoneNumber) {
        //     obj.phoneNumber = values.phoneNumber
        // }
        if (values.email) {
            obj.email = values.email
        }
        if (values.role) {
            obj.role = values.role
        }
        if (values.password) {
            obj.password = values.password
        }
        if (values.confirmPassword) {
            obj.confirmPassword = values.confirmPassword
        }

        console.log(obj);

        

        // dispatch(addNewUser(obj, history))
       
        console.log("all values", obj)
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>FieldX | Add User</title>
                </MetaTags>
                <Container fluid={true} >
                    <Breadcrumbs title="Add New User" breadcrumbItem="Add New User" />
                    <Row>
                        <Col md={6} className='m-auto'>
                            <Card >
                                <CardBody >
                                    <CardTitle className="h4 mb-4">Add User</CardTitle>

                                    <AvForm onSubmit={handleSubmit} >
                                        <Row>
                                            <Col md={6}>
                                                <FormGroup className="mb-3">
                                                    <Label htmlFor="formrow-firstname-Input">First name</Label>
                                                    <AvField
                                                        name="name"
                                                        type="text"
                                                        className="form-control"
                                                        id="formrow-firstname-Input"
                                                        placeholder='Type User Name'
                                                        errorMessage="Enter Name"
                                                        validate={{ required: { value: true } }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup className="mb-3">
                                                    <Label htmlFor="formrow-InputPhone">Phone</Label>
                                                    <AvField
                                                        name='phoneNumber'
                                                        type="text"
                                                        className="form-control"
                                                        id="formrow-InputPhone"
                                                        placeholder='Type User Phone Number'
                                                        errorMessage="Enter Phone Number"
                                                        validate={{ required: { value: true } }}
                                                    />
                                                </FormGroup>
                                            </Col>

                                        </Row>

                                        <Row>
                                            <Col md={6}>
                                                <FormGroup className="mb-3">
                                                    <Label htmlFor="formrow-email-Input">Email</Label>
                                                    <AvField
                                                        name='email'
                                                        type="email"
                                                        className="form-control"
                                                        id="formrow-email-Input"
                                                        placeholder='Type Email address'
                                                        errorMessage="Enter Email"
                                                        validate={{ required: { value: true } }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup className="mb-3">
                                                    <Label htmlFor="formrow-InputState">Select Role</Label>
                                                    <AvField
                                                        name='role'
                                                        id="formrow-InputState"
                                                        className="form-control"
                                                        type="select"
                                                        errorMessage="Select Role"
                                                        validate={{ required: { value: true } }}
                                                    >
                                                        <option>Choose...</option>
                                                        <option value = "ORG">Organization</option>
                                                        <option>...</option>

                                                    </AvField>
                                                </FormGroup>
                                            </Col>

                                        </Row>
                                        {/* <Row>
                                            <Col md={12}>

                                                <FormGroup className="mb-3">
                                                    <Label htmlFor="formFile" className="form-label">Upload User Image</Label>
                                                    <AvField 
                                                    name='userImage' 
                                                    className="form-control" 
                                                    type="file" 
                                                    id="formFile"
                                                    errorMessage="Upload Photo"
                                                    validate={{ required: { value: true } }} />
                                                    
                                                </FormGroup>


                                            </Col>
                                        </Row> */}

                                        <Row>


                                            <Col md={6}>
                                                <FormGroup className="mb-3">
                                                    <Label htmlFor="formrow-password-Input">Password</Label>
                                                    <AvField
                                                        name='password'
                                                        type="password"
                                                        className="form-control"
                                                        id="formrow-password-Input"
                                                        placeholder='Type Password'
                                                        errorMessage="Enter Password"
                                                        validate={{ required: { value: true } }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup className="mb-3">
                                                    <Label htmlFor="formrow-confirmPassword-Input">Confirm Password</Label>
                                                    <AvField
                                                        name='confirmPassword'
                                                        type="password"
                                                        className="form-control"
                                                        id="formrow-confirmPassword-Input"
                                                        placeholder='Type Confirm Password'
                                                        errorMessage="Confrim Password"
                                                        validate={{ required: { value: true } }}
                                                    />
                                                </FormGroup>
                                            </Col>

                                        </Row>


                                        <div>
                                            <button type="submit" className="btn btn-primary w-md">
                                                Save User
                                            </button>
                                        </div>
                                    </AvForm>
                                </CardBody>
                            </Card>
                        </Col>


                    </Row>
                    {/* end row  */}



                </Container>
                {/* container-fluid */}
            </div>
        </React.Fragment >
    )
}


export default AddUser
