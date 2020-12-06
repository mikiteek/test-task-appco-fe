import React, {Component} from "react"
import PaginationJs from "react-js-pagination";
import styles from "./Pagination.module.scss";

class Pagination extends Component {
  state = {
    activePage: 1,
    page: 1,
    nextPage: 2,
    prevPage: null,
    countPerPage: 25
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  render() {
    const nextStyles = [styles.itemNext, "js-item-next"].join(" ");
    const prevStyles = [styles.itemPrev, "js-item-prev"].join(" ");

    return (
      <div>
        <PaginationJs
          hideFirstLastPages
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.countPerPage}
          totalItemsCount={400}
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

export default Pagination;