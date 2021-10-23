import React, { Component } from "react"
import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardTitle,
  CardBody,
} from "reactstrap"

import { connect } from "react-redux"
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import { Link } from "react-router-dom"

import Apaexlinecolumn from '../../../components/Charts/apaexlinecolumn'
import RouteChart from '../../../components/Charts/RouteChart'



class InfoBrand extends Component {
  

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>FieldX</title>
          </MetaTags>
          <Container fluid>
            <Row>

              <Col xl="12">
                <Row>

                  {/* storeData Render */}
                 
                    <Col md="3">
                      <Card className="mini-stats-wid">
                        <CardBody>
                          <div className="d-flex">
                            <div className="flex-grow-1">
                              <CardTitle className="text-muted fw-medium">
                           Sell Tk
                              </CardTitle>
                              <h4 className="mb-0">100000</h4>

                            </div>
                            <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                              <span className="avatar-title">
                                <i
                                  className={
                                    "bx " +"bx-copy-alt" + " font-size-24"
                                  }
                                />

                              </span>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="3">
                      <Card className="mini-stats-wid">
                        <CardBody>
                          <div className="d-flex">
                            <div className="flex-grow-1">
                              <CardTitle className="text-muted fw-medium">
                              Top Selling Area
                              </CardTitle>
                              <h4 className="mb-0">Fresh</h4>

                            </div>
                            <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                              <span className="avatar-title">
                                <i
                                  className={
                                    "bx " +"bx-copy-alt" + " font-size-24"
                                  }
                                />

                              </span>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="3">
              <Card >
                  <CardBody >
                    <CardTitle className="text-muted fw-medium">Top Selling Store</CardTitle>
                    <Row>
                      <Col >
                        <div className="mt-2 ">
                          <Link
                            to="/analytic-brand"
                            className="btn btn-primary btn-sm"
                          >
                            View More <i className="mdi mdi-arrow-right ms-1"></i>
                          </Link>
                        </div>
                      </Col>
                    
                    </Row>
                    
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
              <Card >
                  <CardBody >
                    <CardTitle className="text-muted fw-medium">Sell-off your product</CardTitle>
                    <Row>
                      <Col >
                        <div className="mt-2 ">
                          <Link
                            to=""
                            className="btn btn-primary btn-sm"
                          >
                           Sell Off
                          </Link>
                        </div>
                      </Col>
                     
                    </Row>
                    
                  </CardBody>
                </Card>
              </Col>
                 
                </Row>
               

              </Col>
            </Row>
            <Row >
            <Col lg={8}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Store Wise Selling </CardTitle>
                  <Apaexlinecolumn />
                </CardBody>
              </Card>
            </Col>
              </Row>
              <Row >
            <Col lg={8}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Store Wise Selling </CardTitle>
                  <RouteChart/>
                </CardBody>
              </Card>
            </Col>
              </Row>

         
          </Container>
        </div>


      </React.Fragment >
    )
  }
}

export default InfoBrand;

