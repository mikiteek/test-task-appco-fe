import React, {Component} from "react"
import {connect} from "react-redux";
import PaginationJs from "react-js-pagination";
import usersOperations from "../../redux/users/usersOperations";
import styles from "./Pagination.module.scss";
import usersSelector from "../../redux/users/usersSelector";

class Pagination extends Component {
  state = {
    activePage: 1,
    countPerPage: 25
  }

  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
    this.props.onGetUsers(pageNumber, this.state.countPerPage)
  }

  render() {
    const nextStyles = [styles.itemNext, "js-item-next"].join(" ");
    const prevStyles = [styles.itemPrev, "js-item-prev"].join(" ");
    const {users: {total}} = this.props;
    return (
      <div>
        <PaginationJs
          hideFirstLastPages
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.countPerPage}
          totalItemsCount={total}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
          itemClass={styles.item}
          linkClass={styles.itemLink}
          itemClassNext={nextStyles}
          itemClassPrev={prevStyles}
          activeClass={styles.active}
          activeLinkClass={styles.activeLink}
          innerClass={styles.listItems}
          linkClassPrev={styles.itemLinkNextPrev}
          linkClassNext={styles.itemLinkNextPrev}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: usersSelector.getUsers(state),
});

const mapDispatchToProps = {
  onGetUsers: usersOperations.getUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);