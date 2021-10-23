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

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

class AddGeo extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <MetaTags>
                        <title>FieldX | Add Geo</title>
                    </MetaTags>
                    <Container fluid={true} >
                        <Breadcrumbs title="Add GEO" breadcrumbItem="Add GEO" />
                        <Row>
                            <Col md={6} className='m-auto'>
                                <Card >
                                    <CardBody >
                                        <CardTitle className="h4 mb-4">Add GEO</CardTitle>

                                        <Form >
                                            <Row>
                                                <Col md={12}>
                                                    <FormGroup className="mb-3">
                                                        <Label htmlFor="formrow-yourRegion-Input">Your Region</Label>
                                                        <Input
                                                            type="text"
                                                            className="form-control"
                                                            id="formrow-yourRegion-Input"
                                                            placeholder='Type Region Name'
                                                        />
                                                    </FormGroup>
                                                </Col>
                                               

                                            </Row>

                                            <Row>
                                                <Col md={6}>
                                                    <FormGroup className="mb-3">
                                                        <Label htmlFor="formrow-area-Input">Your Area</Label>
                                                        <Input
                                                            type="text"
                                                            className="form-control"
                                                            id="formrow-area-Input"
                                                            placeholder='Type Area Name'
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                

                                            </Row>
                                            <Row>
                                            <Col md={12}>
                                                    <FormGroup className="mb-3">
                                                        <Label htmlFor="formrow-territory">Your Territory</Label>
                                                        <Input
                                                            id="formrow-territory"
                                                            className="form-control"
                                                            type="text"
                                                            placeholder='Type your territory'
                                                        >
                                                            
                                                        </Input>
                                                    </FormGroup>
                                                </Col>
                                            </Row>

                                           

                                            
                                            <div>
                                                <button type="submit" className="btn btn-primary w-md">
                                                  Add GEO
                                                </button>
                                            </div>
                                        </Form>
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
}

export default AddGeo
