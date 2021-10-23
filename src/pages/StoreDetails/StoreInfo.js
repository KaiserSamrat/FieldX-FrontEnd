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
import StoreChart from '../../components/Charts/StoreChart'





class StoreInfo extends Component {


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
                <h3 className='mb-2'>Grey Store</h3>
                <Row>

                  {/* storeData Render */}

                  <Col md="3">
                    <Card className="mini-stats-wid">
                      <CardBody>
                        <div className="d-flex">
                          <div className="flex-grow-1">
                            <p className="text-muted fw-medium">
                              Total Sell
                            </p>
                            <h4 className="mb-0">100</h4>

                          </div>
                          <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                            <span className="avatar-title">
                              <i
                                className={
                                  "bx " + "bx-copy-alt" + " font-size-24"
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
                            <p className="text-muted fw-medium">
                              Top Selling Product
                            </p>
                            <h4 className="mb-0">Coca-Cola</h4>

                          </div>
                          <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                            <span className="avatar-title">
                              <i
                                className={
                                  "bx " + "bx-copy-alt" + " font-size-24"
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
                            <p className="text-muted fw-medium">
                              Shop Type
                            </p>
                            <h4 className="mb-0">Grocery</h4>

                          </div>
                          <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                            <span className="avatar-title">
                              <i
                                className={
                                  "bx " + "bx-copy-alt" + " font-size-24"
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
                        <CardTitle className="mb-0 h4">Sell-Off Store</CardTitle>
                        <Row>
                          <Col >
                            <div className="mt-2 ">
                              <Link
                                to=""
                                className="btn btn-primary btn-md"
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
                    <StoreChart />
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

export default StoreInfo;

