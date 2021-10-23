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
import { Link } from "react-router-dom"

import StoreTable from '../Tables/StoreTable'



class StoreList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      storesData: [
        {
          title: "Total Store",
          iconClass: "bx-copy-alt",
          description: "0 Store"
        },
        {
          title: "Top Selling Store",
          iconClass: "bx-archive-in",
          description: "--",
        },


      ],

    }


  }



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
                  {this.state.storesData.map((storeData, key) => (
                    <Col md="4" key={"_col_" + key}>
                      <Card className="mini-stats-wid">
                        <CardBody>
                          <div className="d-flex">
                            <div className="flex-grow-1">
                              <p className="text-muted fw-medium">
                                {storeData.title}
                              </p>
                              <h4 className="mb-0">{storeData.description}</h4>

                            </div>
                            <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                              <span className="avatar-title">
                                <i
                                  className={
                                    "bx " + storeData.iconClass + " font-size-24"
                                  }
                                />

                              </span>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </Row>
               

              </Col>
            </Row>
            <Row >
              <Col md="4">
              <Card >
                  <CardBody >
                    <CardTitle className="mb-4 h4">Store and Analytic</CardTitle>
                    <Row>
                      <Col >
                        <div className="mt-2 ">
                          <Link
                            to=""
                            className="btn btn-dark btn-md"
                          >
                            View More <i className="mdi mdi-arrow-right ms-1"></i>
                          </Link>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="mt-4 mt-sm-0">

                        </div>
                      </Col>
                    </Row>
                    
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
              <Card >
                  <CardBody >
                    <CardTitle className="mb-4 h4">Add New Store</CardTitle>
                    <Row>
                      <Col >
                        <div className="mt-2 ">
                          <Link
                            to="/add-newStore"
                            className="btn btn-primary btn-md"
                          >
                            Add Store
                          </Link>
                        </div>
                      </Col>
                     
                    </Row>
                    
                  </CardBody>
                </Card>
              </Col>
              </Row>

           <StoreTable/>
          </Container>
        </div>


      </React.Fragment >
    )
  }
}

export default StoreList;

