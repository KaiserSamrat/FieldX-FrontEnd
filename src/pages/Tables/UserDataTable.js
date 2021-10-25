import React, { Component } from "react"
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import MetaTags from 'react-meta-tags'

// datatable related plugins
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, {
  PaginationProvider, PaginationListStandalone,
  SizePerPageDropdownStandalone
} from 'react-bootstrap-table2-paginator';

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "./datatables.scss"

// Table data
const users = [


];

class UserDataTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      sizePerPage: 10,
      usersData: users
    }

  }

  render() {

    const columns = [{
      dataField: 'id',
      text: 'Id',
      sort: true,
    }, {
      dataField: 'userName',
      text: 'User Name',
      sort: true
    }, {
      dataField: 'userRole',
      text: 'User Role',
      sort: true
    }, {
      dataField: 'email',
      text: 'Email',
      sort: true
    }, {
      dataField: 'status',
      text: 'Status',
      sort: true
    },
    {
      dataField: 'viewDetails',
      text: 'View Details',
      sort: true
     } ];

    const defaultSorted = [{
      dataField: 'id',
      order: 'asc'
    }];

    const pageOptions = {
      sizePerPage: 10,
      totalSize: users.length, // replace later with size(customers),
      custom: true,
    }

    // Custom Pagination Toggle
    const sizePerPageList = [
      { text: '5', value: 5 },
      { text: '10', value: 10 },
      { text: '15', value: 15 },
      { text: '20', value: 20 },
      { text: '25', value: 25 },
      { text: 'All', value: (this.state.usersData).length }];

  
    // Select All Button operation
    const selectRow = {
      mode: 'checkbox'
    }

    const { SearchBar } = Search;

    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>FieldX | User List</title>
          </MetaTags>
          <div className="container-fluid">
            <Breadcrumbs title="User List" breadcrumbItem="User List" />

            <Row>
              <Col className="col-12">
                <Card>
                  <CardBody>
                   
                    <PaginationProvider
                      pagination={paginationFactory(pageOptions)}
                      keyField='id'
                      columns={columns}
                      data={this.state.usersData}
                    >
                      {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                          keyField='id'
                          columns={columns}
                          data={this.state.usersData}
                          search
                        >
                          {toolkitProps => (
                            <React.Fragment>

                              <Row className="mb-2">
                                <Col md="4">
                                  <div className="search-box me-2 mb-2 d-inline-block">
                                    <div className="position-relative">
                                      <SearchBar
                                        {...toolkitProps.searchProps}
                                      />
                                      <i className="bx bx-search-alt search-icon" />
                                    </div>
                                  </div>
                                </Col>
                              </Row>

                              <Row>
                                <Col xl="12">
                                  <div className="table-responsive">
                                    <BootstrapTable
                                      keyField={"id"}
                                      responsive
                                      bordered={false}
                                      striped={false}
                                      defaultSorted={defaultSorted}
                                      selectRow={selectRow}
                                      classes={
                                        "table align-middle table-nowrap"
                                      }
                                      headerWrapperClasses={"thead-light"}
                                      {...toolkitProps.baseProps}
                                      {...paginationTableProps}
                                    />

                                  </div>
                                </Col>
                              </Row>

                              <Row className="align-items-md-center mt-30">
                                <Col className="inner-custom-pagination d-flex">
                                  <div className="d-inline">
                                    <SizePerPageDropdownStandalone
                                      {...paginationProps}
                                    />
                                  </div>
                                  <div className="text-md-right ms-auto">
                                    <PaginationListStandalone
                                      {...paginationProps}
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </React.Fragment>
                          )
                          }
                        </ToolkitProvider>
                      )
                      }</PaginationProvider>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default UserDataTable;