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

class AddRegion extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <MetaTags>
                        <title>FieldX | Add Region</title>
                    </MetaTags>
                    <Container fluid={true} >
                        <Breadcrumbs title="Add Route" breadcrumbItem="Add Route" />
                        <Row>
                            <Col md={6} className='m-auto'>
                                <Card >
                                    <CardBody >
                                        <CardTitle className="h4 mb-4">Add Region</CardTitle>

                                        <Form >
                                            <Row>
                                                <Col md={12}>
                                                    <FormGroup className="mb-3">
                                                        <Label htmlFor="formrow-yourRegion-Input">Region Name</Label>
                                                        <Input
                                                            type="text"
                                                            className="form-control"
                                                            id="formrow-yourRegion-Input"
                                                            placeholder='Type Region Name'
                                                        />
                                                    </FormGroup>
                                                </Col>


                                            </Row>
                                           
                                            




                                            <div>
                                                <button type="submit" className="btn btn-primary w-md">
                                                    Add Region
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

export default AddRegion;
