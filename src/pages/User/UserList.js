import React, { Component } from "react"
import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
} from "reactstrap"

import { connect } from "react-redux"

import UserDataTable from '../Tables/UserDataTable'


class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usersData: [
        { title: "Total User", 
        iconClass: "bx-copy-alt",
        description: "0 Users" },
        {
          title: "Top User as SR",
          iconClass: "bx-archive-in",
          description: "--",
        },
        {
          title: "Top User as DP",
          iconClass: "bx-purchase-tag-alt",
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
                  {/* userData Render */}
                  {this.state.usersData.map((userData, key) => (
                    <Col md="4" key={"_col_" + key}>
                      <Card className="mini-stats-wid">
                        <CardBody>
                          <div className="d-flex">
                            <div className="flex-grow-1">
                              <p className="text-muted fw-medium">
                                {userData.title}
                              </p>
                              <h4 className="mb-0">{userData.description}</h4>
                              
                            </div>
                            <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                              <span className="avatar-title">
                                <i
                                  className={
                                    "bx " + userData.iconClass + " font-size-24"
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

         <UserDataTable/>
          </Container>
        </div>

       
      </React.Fragment >
    )
  }
}

export default UserList;

