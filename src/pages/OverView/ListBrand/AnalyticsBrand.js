import React, { Component } from "react"
import PropTypes from "prop-types"
import MetaTags from 'react-meta-tags';
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "reactstrap"

import { map } from "lodash"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"

//Import Card
import ListInfo from './InfoBrand'
import DetailsBrand from "./DetailsBrand"
import AnalyticsInfoBrand from './AnalyticsInfoBrand'
import { getShops } from "store/e-commerce/actions"

class ListBrand extends Component {

  render() {
   
    return (
      <React.Fragment>
        <div className="page-content">
        <MetaTags>
            <title>FieldX | Brand</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumb */}
           <h3>Brand List</h3>
            <AnalyticsInfoBrand/>
           
           
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

ListBrand.propTypes = {
  shops: PropTypes.array,
  onGetShops: PropTypes.func,
}

const mapStateToProps = ({ ecommerce }) => ({
  shops: ecommerce.shops,
})

const mapDispatchToProps = dispatch => ({
  onGetShops: () => dispatch(getShops()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListBrand)
