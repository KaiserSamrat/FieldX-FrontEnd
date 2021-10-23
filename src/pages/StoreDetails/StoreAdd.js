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

const AddStore = () => {


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
                    <title>FieldX | Add Store</title>
                </MetaTags>
                <Container fluid={true} >
                    <Breadcrumbs title="Add New User" breadcrumbItem="Add New Store" />
                    <Row>
                        <Col md={6} className='m-auto'>
                            <Card >
                                <CardBody >
                                    <CardTitle className="h4 mb-4">Add Store</CardTitle>

                                    <AvForm onSubmit={handleSubmit} >
                                        <Row>
                                            <Col md={6}>
                                                <FormGroup className="mb-3">
                                                    <Label htmlFor="formrow-storeName-Input">Store name</Label>
                                                    <AvField
                                                        name="storeName"
                                                        type="text"
                                                        className="form-control"
                                                        id="formrow-storeName-Input"
                                                        placeholder=' Store Name'
                                                        errorMessage="Enter Store Name"
                                                        validate={{ required: { value: true } }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup className="mb-3">
                                                    <Label htmlFor="formrow-storeCode">Store Code</Label>
                                                    <AvField
                                                        name='storeCode'
                                                        type="text"
                                                        className="form-control"
                                                        id="formrow-storeCode"
                                                        placeholder=' Store Code'
                                                        errorMessage="Enter Store Code"
                                                        validate={{ required: { value: true } }}
                                                    />
                                                </FormGroup>
                                            </Col>

                                        </Row>

                                        <Row>
                                            <Col md={6}>
                                                <FormGroup className="mb-3">
                                                    <Label htmlFor="formrow-ownerName-Input">Owner Name</Label>
                                                    <AvField
                                                        name='OwnerName'
                                                        type="text"
                                                        className="form-control"
                                                        id="formrow-ownerName-Input"
                                                        placeholder=' Owner Name'
                                                        errorMessage="Enter Owner Name"
                                                        validate={{ required: { value: true } }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup className="mb-3">
                                                    <Label htmlFor="formrow-InputStorePhone">Phone Number</Label>
                                                    <AvField
                                                        name='phoneNumber'
                                                        type="text"
                                                        className="form-control"
                                                        id="formrow-InputStorePhone"
                                                        placeholder='Store Phone Number'
                                                        errorMessage="Enter Phone Number"
                                                        validate={{ required: { value: true } }}
                                                    />
                                                </FormGroup>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col md={12}>

                                                <FormGroup className="mb-3">
                                                    <Label htmlFor="formFile" className="form-label">Upload Owner Image</Label>
                                                    <AvField 
                                                    name='OwnerImage' 
                                                    className="form-control" 
                                                    type="file" 
                                                    id="formFile"
                                                    errorMessage="Upload Photo"
                                                    validate={{ required: { value: true } }} />
                                                    
                                                </FormGroup>


                                            </Col>
                                        </Row>

                                        <Row>


                                        <Col md={6}>
                                                <FormGroup className="mb-3">
                                                    <Label htmlFor="formrow-StoreType">Store Type</Label>
                                                    <AvField
                                                        name='storeType'
                                                        id="formrow-StoreType"
                                                        className="form-control"
                                                        type="select"
                                                        errorMessage="Select Type"
                                                        validate={{ required: { value: true } }}
                                                    >
                                                        <option>Choose...</option>
                                                        <option>Grocery</option>
                                                        <option>...</option>

                                                    </AvField>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup className="mb-3">
                                                    <Label htmlFor="formrow-Route">Route</Label>
                                                    <AvField
                                                        name='route'
                                                        id="formrow-Route"
                                                        className="form-control"
                                                        type="select"
                                                        errorMessage="Select Route"
                                                        validate={{ required: { value: true } }}
                                                    >
                                                        <option>Choose...</option>
                                                        <option>Gulshan</option>
                                                        <option>Dhanmondi</option>

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


export default AddStore
