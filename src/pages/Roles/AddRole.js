import React, { Component } from "react"
import { Link } from "react-router-dom"
import MetaTags from 'react-meta-tags';
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap"
import Select from "react-select"
import Dropzone from "react-dropzone"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

class AddRole extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedFiles: [],
    }
  }

  handleAcceptedFiles = files => {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: this.formatBytes(file.size),
      })
    )

    this.setState({ selectedFiles: files })
  }

  formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

  render() {
    const options = [
      { value: "AK", label: "Alaska" },
      { value: "HI", label: "Hawaii" },
      { value: "CA", label: "California" },
      { value: "NV", label: "Nevada" },
      { value: "OR", label: "Oregon" },
      { value: "WA", label: "Washington" },
    ]
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Add Product | FieldX</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs title="Ecommerce" breadcrumbItem="Add Product" />

            <Row>
              <Col xs="12">
                <Card>
                  <CardBody>
                    
                    <Form>
                      <Row>
                        <Col sm="6">
                          <FormGroup className="mb-3">
                            <Label htmlFor="productname">Product Name</Label>
                            <Input
                              id="productname"
                              name="productname"
                              type="text"
                              className="form-control"
                            />
                          </FormGroup>
                          <FormGroup className="mb-3">
                            <Label htmlFor="manufacturername">
                              Brand Name
                            </Label>
                            <Input
                              id="manufacturername"
                              name="manufacturername"
                              type="text"
                              className="form-control"
                            />
                          </FormGroup>
                         
                          <FormGroup className="mb-3">
                            <Label htmlFor="UnitType">Unit type</Label>
                            <Input
                              id="Unit"
                              name="Unit"
                              type="text"
                              className="form-control"
                            />
                          </FormGroup>
                          <FormGroup className="mb-3">
                            <Label htmlFor="price">Price</Label>
                            <Input
                              id="price"
                              name="price"
                              type="text"
                              className="form-control"
                            />
                          </FormGroup>
                        </Col>

                        <Col sm="6">
                          <FormGroup className="mb-3">
                            <Label className="control-label">Category</Label>
                            <select className="form-control select2">
                              <option>Select</option>
                              <option value="AK">Alaska</option>
                              <option value="HI">Hawaii</option>
                            </select>
                          </FormGroup>
                          <FormGroup className="mb-3">
                            <Label htmlFor="code">Product Code</Label>
                            <Input
                              id="product code"
                              name="product code"
                              type="text"
                              className="form-control"
                            />
                          </FormGroup>
                          <FormGroup className="mb-3">
                            <Label htmlFor="model">
                             Model No(Set by You)
                            </Label>
                            <Input
                              id="model"
                              name="model"
                              type="text"
                              className="form-control"
                            />
                          </FormGroup>
                          <FormGroup className="mb-3">
                            <Label htmlFor="discount">Max Discount</Label>
                            <Input
                              id="discount"
                              name="discount"
                              type="text"
                              className="form-control"
                            />
                          </FormGroup>
                          
                        </Col>
                      </Row>
                      <Card>
                  <CardBody>
                    <CardTitle className="mb-3 h4">Product Images</CardTitle>
                    <Form className="dropzone">
                      <Dropzone
                        onDrop={acceptedFiles =>
                          this.handleAcceptedFiles(acceptedFiles)
                        }
                      >
                        {({ getRootProps, getInputProps }) => (
                          <div>
                            <div
                              className="dz-message needsclick"
                              {...getRootProps()}
                            >
                              <input {...getInputProps()} />
                              <div className="dz-message needsclick">
                                <div className="mb-3">
                                  <i className="display-4 text-muted bx bxs-cloud-upload" />
                                </div>
                                <h4>Drop files here or click to upload.</h4>
                              </div>
                            </div>
                          </div>
                        )}
                      </Dropzone>
                      <div
                        className="dropzone-previews mt-3"
                        id="file-previews"
                      >
                        {this.state.selectedFiles.map((f, i) => {
                          return (
                            <Card
                              className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                              key={i + "-file"}
                            >
                              <div className="p-2">
                                <Row className="align-items-center">
                                  <Col className="col-auto">
                                    <img
                                      data-dz-thumbnail=""
                                      height="80"
                                      className="avatar-sm rounded bg-light"
                                      alt={f.name}
                                      src={f.preview}
                                    />
                                  </Col>
                                  <Col>
                                    <Link
                                      to="#"
                                      className="text-muted font-weight-bold"
                                    >
                                      {f.name}
                                    </Link>
                                    <p className="mb-0">
                                      <strong>{f.formattedSize}</strong>
                                    </p>
                                  </Col>
                                </Row>
                              </div>
                            </Card>
                          )
                        })}
                      </div>
                    </Form>
                  </CardBody>
                </Card>
                      <div className="d-flex flex-wrap gap-2">
                        <Button
                          type="submit"
                          color="primary"
                        >
                          Save Changes
                      </Button>
                        <Button
                          type="submit"
                          color="secondary"
                        >
                          Cancel
                      </Button>
                      </div>
                    </Form>
                  </CardBody>
                  
                </Card>

                

              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default AddRole
