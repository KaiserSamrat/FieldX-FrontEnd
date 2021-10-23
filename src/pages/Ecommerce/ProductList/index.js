import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MetaTags from 'react-meta-tags';
import { withRouter } from "react-router-dom";
import { isEmpty, size } from "lodash";
import BootstrapTable from "react-bootstrap-table-next";
import
paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { Link } from "react-router-dom";
import * as moment from 'moment';

import { Button, Card, CardBody, Col, Container, Row, Modal, Badge, ModalHeader, ModalBody } from "reactstrap";

import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb";
import {
  getOrders,
  addNewOrder,
  updateOrder,
  deleteOrder
} from "store/actions";

import ProductListModal from "./ProductListModal";

class ProductList extends Component {
  constructor(props) {
    super(props);yar
    this.node = React.createRef();
    this.state = {
      viewmodal: false,
      modal: false,
      orders: [],
      EcommerceOrderColumns: [
        {
          text: "id",
          dataField: "id",
          sort: true,
          hidden: true,
          formatter: (cellContent, user) => (
            <>
              {order.id}
            </>
          ),
        },
        {
          dataField: "productCode",
          text: "Product Code",
          sort: true,
          formatter: (cellContent, row) => (
            <Link to="#" className="text-body fw-bold">
              {row.productCode}
            </Link>
          ),
        },
        {
          dataField: "productName",
          text: "Product Name",
          sort: true,
        },
        {
          dataField: "brandName",
          text: "Brand Name",
          sort: true,
        },
        
        {
          dataField: "Price",
          text: "Price",
          sort: true,
        },
        {
          dataField: "Status",
          text: "Status",
          sort: true,
          formatter: (cellContent, row) => (
            <Badge
              className={"font-size-12 badge-soft-" + row.badgeclass}
              color={row.badgeclass}
              pill
            >
              {row.Status}
            </Badge>
          ),
        },
        
        {
          dataField: "view",
          isDummyField: true,
          text: "View Details",
          sort: true,
          formatter: () => (
            <Button
              type="button"
              color="primary"
              className="btn-sm btn-rounded"
              onClick={this.toggleViewModal}
            >
              View Details
            </Button>
          ),
        },
        {
          dataField: "action",
          isDummyField: true,
          text: "Action",
          formatter: (cellContent, order) => (
            <>
              <div className="d-flex gap-3">
                <Link to="#" className="text-success">
                  <i className="mdi mdi-pencil font-size-18" id="edittooltip" onClick={() => this.handleOrderClick(order)} />
                </Link>
                <Link to="#" className="text-danger">
                  <i className="mdi mdi-delete font-size-18" id="deletetooltip" onClick={() => this.handleDeleteOrder(order)} />
                </Link>
              </div>
            </>
          ),
        },
      ]
    };

    this.handleOrderClick = this.handleOrderClick.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleValidOrderSubmit = this.handleValidOrderSubmit.bind(this);
    this.handleOrderClicks = this.handleOrderClicks.bind(this);
    this.toLowerCase1 = this.toLowerCase1.bind(this);
  }

  toLowerCase1(str) {
    return str.toLowerCase();
  }

  componentDidMount() {
    const { orders, onGetOrders } = this.props;
    if (orders && !orders.length) {
      onGetOrders();
    }
    this.setState({ orders });
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { orders } = this.props;
    if (!isEmpty(orders) && size(prevProps.orders) !== size(orders)) {
      this.setState({ orders: {}, isEdit: false });
    }
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  handleOrderClicks = () => {
    this.setState({ orders: '', isEdit: false });
    this.toggle();
  };

  // eslint-disable-next-line no-unused-vars
  handleTableChange = (type, { page, searchText }) => {
    const { orders } = this.props;
    this.setState({
      orders: orders.filter(order =>
        Object.keys(order).some(
          key =>
            typeof order[key] === "string" &&
            order[key].toLowerCase().includes(searchText.toLowerCase())
        )
      ),
    });
  };

  toggleViewModal = () => {
    this.setState(prevState => ({
      viewmodal: !prevState.viewmodal,
    }));
  };

  onPaginationPageChange = page => {
    if (
      this.node &&
      this.node.current &&
      this.node.current.props &&
      this.node.current.props.pagination &&
      this.node.current.props.pagination.options
    ) {
      this.node.current.props.pagination.options.onPageChange(page);
    }
  };

  /* Insert,Update Delete data */

  handleDeleteOrder = (order) => {
    const { onDeleteOrder } = this.props;
    if (order.id !== undefined) {
      onDeleteOrder(order);
      this.onPaginationPageChange(1);
    }
  };

  handleOrderClick = arg => {
    const order = arg;

    this.setState({
      orders: {
        id: order.id,
        productCode: order.productCode,
        productName: order.productName,
        productName: order.productName,
        orderdate: order.orderdate,
        Price: order.Price,
        Status: order.Status,
        paymentMethod: order.paymentMethod,
        badgeclass: order.badgeclass
      },
      isEdit: true,
    });

    this.toggle();
  };

  /**
   * Handling submit Order on Order form
   */
  handleValidOrderSubmit = (e, values) => {
    const { onAddNewOrder, onUpdateOrder } = this.props;
    const { isEdit, orders, selectedOrder } = this.state;

    if (isEdit) {
      const updateOrder = {
        id: orders.id,
        productCode: values.productCode,
        productName: values.productName,
        brandName: values.brandName,
        orderdate: values.orderdate,
        Price: values.Price,
        Status: values.Status,
        paymentMethod: values.paymentMethod,
        badgeclass: values.badgeclass
      };

      // update Order
      onUpdateOrder(updateOrder);
    } else {

      const newOrder = {
        id: Math.floor(Math.random() * (30 - 20)) + 20,
        productCode: values["productCode"],
        productName: values["productName"],
        brandName: values["brandName"],
        orderdate: values["orderdate"],
        Price: values["Price"],
        Status: values["Status"],
        paymentMethod: values["paymentMethod"],
        badgeclass: values['badgeclass']
      };
      // save new Order
      onAddNewOrder(newOrder);
    }
    this.setState({ selectedOrder: null });
    this.toggle();
  };

 

  render() {
    const { orders } = this.props;

    const { SearchBar } = Search;

    const { isEdit } = this.state;

    //pagination customization
    const pageOptions = {
      sizePerPage: 10,
      totalSize: orders.length, // replace later with size(Order),
      custom: true,
    };

    const defaultSorted = [{
      dataField: 'productCode',
      order: 'desc'
    }];

    const selectRow = {
      mode: 'checkbox',
    };

    return (
      <React.Fragment>
        <ProductListModal
          isOpen={this.state.viewmodal}
          toggle={this.toggleViewModal}
        />
        <div className="page-content">
          <MetaTags>
            <title>Orders | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid>
            <Breadcrumbs title="Ecommerce" breadcrumbItem="Orders" />
            <Row>
              <Col xs="12">
                <Card>
                  <CardBody>
                    <PaginationProvider
                      pagination={paginationFactory((pageOptions || []))}
                      keyField='id'
                      columns={(this.state.EcommerceOrderColumns || [])}
                      data={(orders || [])}
                    >
                      {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                          keyField="id"
                          data={orders}
                          columns={(this.state.EcommerceOrderColumns || [])}
                          bootstrap4
                          search
                        >
                          {toolkitProps => (
                            <React.Fragment>
                              <Row className="mb-2">
                                <Col sm="4">
                                  <div className="search-box me-2 mb-2 d-inline-block">
                                    <div className="position-relative">
                                      <SearchBar
                                        {...toolkitProps.searchProps}
                                      />
                                      <i className="bx bx-search-alt search-icon" />
                                    </div>
                                  </div>
                                </Col>
                                <Col sm="8">
                                  <div className="text-sm-end">
                                    <Button
                                      type="button"
                                      color="success"
                                      className="btn-rounded mb-2 me-2"
                                      onClick={this.handleOrderClicks}
                                    >
                                      <i className="mdi mdi-plus me-1" />{" "}
                                      Add New Order
                                    </Button>
                                  </div>
                                </Col>
                              </Row>
                              <div className="table-responsive">
                                <BootstrapTable
                                  {...toolkitProps.baseProps}
                                  {...paginationTableProps}
                                  responsive
                                  defaultSorted={defaultSorted}
                                  bordered={false}
                                  striped={false}
                                  selectRow={selectRow}
                                  classes={
                                    "table align-middle table-nowrap table-check"
                                  }
                                  headerWrapperClasses={"table-light"}
                                  ref={this.node}
                                />
                                <Modal
                                  isOpen={this.state.modal}
                                  className={this.props.className}
                                >
                                  <ModalHeader toggle={this.toggle} tag="h4">
                                    {!!isEdit ? "Edit Order" : "Add Order"}
                                  </ModalHeader>
                                  <ModalBody>
                                    <AvForm
                                      onValidSubmit={
                                        this.handleValidOrderSubmit
                                      }
                                    >
                                      <Row form>
                                        <Col className="col-12">

                                          <div className="mb-3">
                                            <AvField
                                              name="productCode"
                                              label="Product Code"
                                              type="text"
                                              errorMessage="Invalid productCode"
                                              validate={{
                                                required: { value: true },
                                              }}
                                              value={this.state.orders.productCode || ""
                                              }
                                            />
                                          </div>
                                          <div className="mb-3">
                                            <AvField
                                              name="productName"
                                              label="Product Name"
                                              type="text"
                                              errorMessage="Invalid Product Name"
                                              validate={{
                                                required: { value: true },
                                              }}
                                              value={this.state.orders.productName || ""}
                                            />
                                          </div>
                                          <div className="mb-3">
                                            <AvField
                                              name="brandName"
                                              label="Brand Name"
                                              type="text"
                                              errorMessage="Invalid Brand Name"
                                              validate={{
                                                required: { value: true },
                                              }}
                                              value={this.state.orders.brandName || ""}
                                            />
                                          </div>
                                          
                                          <div className="mb-3">
                                            <AvField
                                              name="Price"
                                              label="Price"
                                              type="text"
                                              errorMessage="Invalid Price"
                                              validate={{
                                                required: { value: true },
                                              }}
                                              value={this.state.orders.Price || ""}
                                            />
                                          </div>
                                          <div className="mb-3">
                                            <AvField
                                              name="Status"
                                              label="Status"
                                              type="select"
                                              id="status1"
                                              className="form-select"
                                              errorMessage="Invalid Status"
                                              validate={{
                                                required: { value: true },
                                              }}
                                              value={this.state.orders.Status || "Paid"}
                                            >
                                              <option>Active</option>
                                              <option>Delete</option>
                                              <option>Refund</option>
                                            </AvField>
                                          </div>
                                          <div className="mb-3">
                                            <AvField
                                              name="badgeclass"
                                              label="Badge Class"
                                              type="select"
                                              className="form-select"
                                              errorMessage="Invalid Badge Class"
                                              validate={{
                                                required: { value: true },
                                              }}
                                              value={this.state.orders.badgeclass || "success"}
                                            >
                                              <option>success</option>
                                              <option>danger</option>
                                              <option>warning</option>
                                            </AvField>
                                          </div>
                                         
                                        </Col>

                                      </Row>
                                      <Row>
                                        <Col>
                                          <div className="text-end">

                                            <button
                                              type="submit"
                                              className="btn btn-success save-user"
                                            >
                                              Save
                                            </button>
                                          </div>
                                        </Col>
                                      </Row>
                                    </AvForm>
                                  </ModalBody>
                                </Modal>
                              </div>
                              <div className="pagination pagination-rounded justify-content-end mb-2">
                                <PaginationListStandalone
                                  {...paginationProps}
                                />
                              </div>
                            </React.Fragment>
                          )}
                        </ToolkitProvider>
                      )}
                    </PaginationProvider>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

ProductList.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func,
  onAddNewOrder: PropTypes.func,
  onDeleteOrder: PropTypes.func,
  onUpdateOrder: PropTypes.func,
  className: PropTypes.any
};

const mapStateToProps = state => ({
  orders: state.ecommerce.orders,
});

const mapDispatchToProps = dispatch => ({
  onGetOrders: () => dispatch(getOrders()),
  onAddNewOrder: order => dispatch(addNewOrder(order)),
  onUpdateOrder: order => dispatch(updateOrder(order)),
  onDeleteOrder: order => dispatch(deleteOrder(order)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductList));