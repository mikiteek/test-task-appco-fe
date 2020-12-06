import React, {Component} from "react";
import "../../../node_modules/react-vis/dist/style.css";
import {connect} from "react-redux";
import usersSelector from "../../redux/users/usersSelector";
import styles from "./Diagram.module.scss";
import {XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineMarkSeries
} from "react-vis";

class Diagram extends Component {
  getClicksCoordinates() {
    const {statistic} = this.props;
    return statistic.map(item => {
      return {
        x: new Date(item.date).getDate(),
        y: item.clicks,
      };
    })
  }
  getViewsCoordinates() {
    const {statistic} = this.props;
    return statistic.map(item => {
      return {
        x: new Date(item.date).getDate(),
        y: item.page_views,
      };
    })
  }

  render() {
    const clickData = this.getClicksCoordinates();
    const viewData = this.getViewsCoordinates();
    const {user} = this.props;
    return (
      <div className={styles.graphBlock}>
        {Object.keys(user).length > 0 && <h2 className={styles.userName}>{user.firstName} {user.lastName}</h2>}
        {clickData.length > 0 &&
          <section>
            <h3 className={styles.graphTitle}>Clicks</h3>
            <XYPlot width={1130} height={300}>
              <HorizontalGridLines />
              <XAxis title="days"/>
              <YAxis />
              <LineMarkSeries
                className="linemark-series-example-2"
                curve={'curveMonotoneX'}
                data={clickData}
              />
            </XYPlot>
          </section>
        }
        {viewData.length > 0 &&
        <section>
          <h3 className={styles.graphTitle}>Views</h3>
          <XYPlot width={1130} height={300}>
            <HorizontalGridLines />
            <XAxis title="days"/>
            <YAxis />
            <LineMarkSeries
              className="linemark-series-example-2"
              curve={'curveMonotoneX'}
              data={viewData}
            />
          </XYPlot>
        </section>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  statistic: usersSelector.getUserStatistic(state),
  user: usersSelector.getUserInfo(state)
});

export default connect(mapStateToProps)(Diagram);