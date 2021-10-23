import PropTypes from "prop-types"
import React, { Component } from "react"

//Simple bar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

class SidebarContent extends Component {
  constructor(props) {
    super(props)
    this.refDiv = React.createRef()
  }

  componentDidMount() {
    this.initMenu()
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, ss) {
    if (this.props.type !== prevProps.type) {
      this.initMenu()
    }
  }

  initMenu() {
    new MetisMenu("#side-menu")

    let matchingMenuItem = null
    const ul = document.getElementById("side-menu")
    const items = ul.getElementsByTagName("a")
    for (let i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem)
    }
  }

  // componentDidUpdate() {}

  scrollElement = item => {
    setTimeout(() => {
      if (this.refDiv.current !== null) {
        if (item) {
          const currentPosition = item.offsetTop
          if (currentPosition > window.innerHeight) {
            if (this.refDiv.current)
              this.refDiv.current.getScrollElement().scrollTop =
                currentPosition - 300
          }
        }
      }
    }, 300)
  }

  activateParentDropdown = item => {
    item.classList.add("active")
    const parent = item.parentElement

    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      this.scrollElement(item)
      return false
    }
    this.scrollElement(item)
    return false
  }

  render() {
    return (
      <React.Fragment>
        <SimpleBar className="h-100" ref={this.refDiv}>
          <div id="sidebar-menu">
            <ul className="metismenu list-unstyled" id="side-menu">
              <li className="menu-title">{this.props.t("Menu")}</li>
              <li>
                <Link to="/dashboard">
                  <i className="bx bx-home-circle" />
                  <span className="badge rounded-pill bg-info float-end">

                  </span>
                  <span>{this.props.t("Dashboard")}</span>
                </Link>

              </li>

              <li>
                <Link to="/#" className="has-arrow">
                  <i className="bx bx-store" />
                  <span>{this.props.t("Overview")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/list-brand">
                      {this.props.t("Brand List")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/list-category">
                      {this.props.t("Category List")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/list-unit">{this.props.t("Unit List")}</Link>
                  </li>

                 
                 =
                </ul>
              </li>
              
              {/* <li>
                <Link to="/#" className="has-arrow">
                  <i className="bx bx-store" />
                  <span>{this.props.t("Store")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/store-list">
                      {this.props.t("Store List")}
                    </Link>
                  </li>
                 
                  <li>
                    <Link to="/add-newStore">{this.props.t("Add New Store")}</Link>
                  </li>

                 
                  <li>
                    <Link to="/ecommerce-shops">{this.props.t("Shops")}</Link>
                  </li>
                  <li>
                    <Link to="/ecommerce-add-product">
                      {this.props.t("Add Product")}
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li>
                <Link to="/#" className="has-arrow">
                  <i className="bx bx-store" />
                  <span>{this.props.t("Product")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/ecommerce-products">
                      {this.props.t("Products")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ecommerce-product-details/1">
                      {this.props.t("Product Details")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ecommerce-productlist">{this.props.t("Product List")}</Link>
                  </li>

                 
                  <li>
                    <Link to="/ecommerce-shops">{this.props.t("Shops")}</Link>
                  </li>
                  <li>
                    <Link to="/ecommerce-add-product">
                      {this.props.t("Add Product")}
                    </Link>
                  </li>
                </ul>
              </li>
              
              <li>
                <Link to="/#" className="has-arrow">
                  <i className="bx bx-store" />
                  <span>{this.props.t("Store")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/store-list">
                      {this.props.t("Store List")}
                    </Link>
                  </li>
                 
                  <li>
                    <Link to="/add-newStore">{this.props.t("Add New Store")}</Link>
                  </li>
                  <li>
                    <Link to="/info-Store">{this.props.t("Store Information")}</Link>
                  </li>

                 
                  
                </ul>
              </li>


              <li>
                <Link to="/#">
                  <i className="bx bx-user-circle" />
                  <span className="badge rounded-pill bg-success float-end">

                  </span>
                  <span>{this.props.t("Roles")}</span>
                </Link>
              </li>
              <li>
                <Link to="/user-list"  className="has-arrow">
                  <i className="bx bx-user-circle" />
                  <span className="badge rounded-pill bg-success float-end">

                  </span>
                  <span>{this.props.t("User")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/user-list">
                      {this.props.t("User List")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/add-user">
                      {this.props.t("Add User")}
                    </Link>
                  </li>
                  </ul>
              </li>
              <li>
                <Link to="/info-office"  className="has-arrow">
                  <i className="bx bx-user-circle" />
                  <span className="badge rounded-pill bg-success float-end">

                  </span>
                  <span>{this.props.t("Office Information")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/info-office">
                      {this.props.t("Office Info")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/address-office">
                      {this.props.t("Office Address")}
                    </Link>
                  </li>
                  
                  
                  </ul>
              </li>




              <li>
                <Link to="/#"  className="has-arrow">
                  <i className="bx bx-user-circle" />
                  <span className="badge rounded-pill bg-success float-end">

                  </span>
                  <span>{this.props.t("Authentication")}</span>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/pages-login">{this.props.t("Login")}</Link>
                  </li>

                  <li>
                    <Link to="/pages-register">{this.props.t("Register")}</Link>
                  </li>

                  <li>
                    <Link to="/page-recoverpw">
                      {this.props.t("Recover Password")}
                    </Link>
                  </li>
                 
              
                  <li>
                    <Link to="/page-confirm-mail">
                      {this.props.t("Confirm Mail")}
                    </Link>
                  </li>
                  
                  <li>
                    <Link to="/auth-email-verification">
                      {this.props.t("Email Verification")}
                    </Link>
                  </li>
                
                 
                </ul>
              </li>


              <li>
                <Link to="/#" className="has-arrow">
                  <i className="bx bx-map" />
                  <span>{this.props.t("Geo Information")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                <li>
                    <Link to="/add-area">{this.props.t("Add Area")}</Link>
                  </li>
                  <li>
                    <Link to="/add-region">{this.props.t("Add Region")}</Link>
                  </li>
                  <li>
                    <Link to="/add-territory">{this.props.t("Add Territory")}</Link>
                  </li>
                  <li>
                    <Link to="/list-area">{this.props.t("Area List")}</Link>
                  </li>
                 
                  <li>
                    <Link to="/list-region">{this.props.t("Region List")}</Link>
                  </li>
                  
                  <li>
                    <Link to="/list-territory">{this.props.t("Add Area")}</Link>
                  </li>
                  <li>
                    <Link to="/Geo-details">{this.props.t("Geo Details")}</Link>
                  </li>
                  <li>
                    <Link to="/Geo-add">{this.props.t("Add New Geo")}</Link>
                  </li>
                  <li>
                    <Link to="/routes-add">
                      {this.props.t("Add New Routes")}
                    </Link>
                  </li>
                </ul>
              </li>




            </ul>
          </div>
        </SimpleBar>
      </React.Fragment>
    )
  }
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
  type: PropTypes.string,
}

export default withRouter(withTranslation()(SidebarContent))
