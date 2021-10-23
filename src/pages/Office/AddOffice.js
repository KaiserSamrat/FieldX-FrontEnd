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

const AddOffice = () => {


    const [testloading, setloading] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()


    function handleSubmit(event, errors, values) {
        event.preventDefault()
        setloading(true)
        let obj = {}
        if (values.storeName) {
            obj.storeName = values.storeName
        }
        if (values.phoneNumber) {
            obj.phoneNumber = values.phoneNumber
        }
        if (values.storeCode) {
            obj.storeCode = storeCode.storeCode
        }
        if (values.OwnerName) {
            obj.OwnerName = values.OwnerName
        }
        if (values.OwnerImage) {
            obj.OwnerImage = values.OwnerImage
        }
        if (values.route) {
            obj.route = values.route
        }
        if (values.storeType) {
            obj.storeType = values.storeType
        }
        




        dispatch(addNewUser(obj, history))
        console.log("all values", values)
        console.log("all values", obj)
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>FieldX | Add Office</title>
                </MetaTags>
                <Container fluid={true} >
                    <Breadcrumbs title="Add New Office" breadcrumbItem="Add New Store" />
                    <Row>
                        <Col md={6} className='m-auto'>
                            <Card >
                                <CardBody >
                                    <CardTitle className="h4 mb-4">Add Office</CardTitle>

                                    <AvForm onSubmit={handleSubmit} >
                                        <Row>
                                            <Col md={12}>
                                                <FormGroup className="mb-3">
                                                    <Label htmlFor="formrow-officeName-Input">Office name</Label>
                                                    <AvField
                                                        name="officeName"
                                                        type="text"
                                                        className="form-control"
                                                        id="formrow-officeName-Input"
                                                        placeholder=' Office Name'
                                                        errorMessage="Enter Office Name"
                                                        validate={{ required: { value: true } }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            
                                        </Row>

                                        <Row>
                                            <Col md={6}>
                                                <FormGroup className="mb-3">
                                                    <Label htmlFor="formrow-workingday-Input">Weekly Working Days</Label>
                                                    <AvField
                                                        name='workingDay'
                                                        type="Number"
                                                        className="form-control"
                                                        id="formrow-workingday-Input"
                                                        placeholder=' Working Day'
                                                        errorMessage="Enter Working Days"
                                                        validate={{ required: { value: true } }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup className="mb-3">
                                                    <Label htmlFor="formrow-address">Address</Label>
                                                    <AvField
                                                        name='address'
                                                        type="text"
                                                        className="form-control"
                                                        id="formrow-address"
                                                        placeholder='Address'
                                                        errorMessage="Enter Address"
                                                        validate={{ required: { value: true } }}
                                                    />
                                                </FormGroup>
                                            </Col>

                                        </Row>
                                       

                                        <Row>


                                        <Col md={6}>
                                                <FormGroup className="mb-3">
                                                    <Label  htmlFor="example-time-input">Start Time</Label>
                                                    <AvField
                                                        name='storeType'
                                                        id="example-time-input"
                                                        className="form-control"
                                                        type="time"
                                                       
                                                        errorMessage="Enter Start Time"
                                                        validate={{ required: { value: true } }}
                                                    >
                                                        

                                                    </AvField>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup className="mb-3">
                                                    <Label  htmlFor="example-endTime-input">End Time</Label>
                                                    <AvField
                                                        name='endTime'
                                                        id="example-time-input"
                                                        className="form-control"
                                                        type="time"
                                                       
                                                        errorMessage="Enter End Time"
                                                        validate={{ required: { value: true } }}
                                                    >
                                                        

                                                    </AvField>
                                                </FormGroup>
                                            </Col>
                                            

                                        </Row>


                                        <div>
                                            <button type="submit" className="btn btn-primary w-md">
                                                Save Store
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


export default AddOffice
