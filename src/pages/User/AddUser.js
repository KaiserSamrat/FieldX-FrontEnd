import { AvField, AvForm } from "availity-reactstrap-validation";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MetaTags from 'react-meta-tags';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    Card, CardBody,
    CardTitle, Col,
    Container, FormGroup,
    Label, Row
} from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { addNewUser } from "../../store/users/action";
// import { addNewUser } from "../../store/users/actions"


const AddUser = () => {


    const [testloading, setloading] = useState([])
    const dispatch = useDispatch()
    const history = useHistory()
  
    const { isLoading, error } = useSelector(state => state.UserReducer)
    

    async function  handleSubmit  (event, errors, values)  {
        event.preventDefault()
        console.log(values);
        let obj = {}
        if (values.name) {
            obj.name = values.name
        }
        
        if (values.email) {
            obj.email = values.email
        }
        if (values.role) {
            obj.role = values.role
        }
        if (values.password) {
            obj.password = values.password
        }
        if (values.passwordConfirm) {
            obj.passwordConfirm = values.passwordConfirm
        }

        console.log(obj);

        
//   await axios.post(`https://fieldx-api.salesx-staging.xyz/api/v1/users`, obj).then((response => {
//       console.log('hello');
//       console.log(response.data);
//   }))

    //   await  axios.post('https://fieldx-api.salesx-staging.xyz/api/v1/users', obj)
    // .then(response => console.log(response));
        dispatch(addNewUser(obj, history))
       
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
                                                        name='passwordConfirm'
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
