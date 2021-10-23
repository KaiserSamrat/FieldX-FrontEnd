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

class AddTerritory extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <MetaTags>
                        <title>FieldX | Add Territory</title>
                    </MetaTags>
                    <Container fluid={true} >
                        <Breadcrumbs title="Add Route" breadcrumbItem="Add Route" />
                        <Row>
                            <Col md={6} className='m-auto'>
                                <Card >
                                    <CardBody >
                                        <CardTitle className="h4 mb-4">Add Territory</CardTitle>

                                        <Form >
                                            <Row>
                                                <Col md={12}>
                                                    <FormGroup className="mb-3">
                                                        <Label htmlFor="formrow-yourRegion-Input">Territory Name</Label>
                                                        <Input
                                                            type="text"
                                                            className="form-control"
                                                            id="formrow-yourRegion-Input"
                                                            placeholder='Type Territory Name'
                                                        />
                                                    </FormGroup>
                                                </Col>


                                            </Row>
                                           
                                            




                                            <div>
                                                <button type="submit" className="btn btn-primary w-md">
                                                    Add Territory
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

export default AddTerritory;
