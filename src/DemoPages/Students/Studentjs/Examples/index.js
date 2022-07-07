import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// import classnames from 'classnames';
import { Doughnut } from "react-chartjs-2";
// import {Bar} from "react-chartjs-2";
import Selects from './Select';
import "./index.css";
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import {
  Row,
  Col,
  Button,
  CardHeader,
  Card,
  CardBody,
  Progress,
  TabContent,
  TabPane,

} from "reactstrap";

// import PageTitle from "../../../../Layout/AppMain/PageTitle";

import {
  AreaChart,
  Area,
  Line,
  ResponsiveContainer,
  Bar,
  BarChart,
  ComposedChart,
  CartesianGrid,
  Tooltip,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";

import {
  faAngleUp,
  faArrowRight,
  faArrowUp,
  faArrowLeft,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const data3 = {
  labels: ["Đã học", "chưa học","còn nợ"],
  datasets: [
    {
      data: [100, 15, 9],
      backgroundColor: [
        '#8dace7',
        '#71deb9',
        '#ef869e'
        ],
        hoverBackgroundColor: [
        '#8dace7',
        '#71deb9',
        '#ef869e'
        ]
    },
  ],
};

const data = [
  { name: "Page A", uv: 9, pv: 5000, amt: 2400 },
  { name: "Page B", uv: 8, pv: 6000, amt: 2210 },
  { name: "Page C", uv: 6, pv: 7000, amt: 2290 },
  { name: "Page D", uv: 5, pv: 8000, amt: 2000 },
  { name: "Page E", uv: 4, pv: 9000, amt: 2181 },
  { name: "Page F", uv: 3, pv: 10000, amt: 2500 },
  { name: "Page G", uv: 2, pv: 11000, amt: 2100 },
  { name: "Page C", uv: 1, pv: 12000, amt: 2290 },
];

const data2 = [
  { name: "Page A", uv: 3.5, pv: 3.5, amt: 1240 },
  { name: "Page B", uv: 7, pv: 7, amt: 3221 },
  { name: "Page C", uv: 5, pv: 5, amt: 5229 },
  { name: "Page D", uv: 7.5, pv: 7.5, amt: 3200 },
  { name: "Page E", uv: 7.6, pv: 7.6, amt: 6218 },
];
// Chart.register(ChartDataLabels);
// Chart.defaults.set('plugins.datalabels', {
//     anchor: 'center',
//     align: 'bottom',
// })
export default class AnalyticsDashboard1 extends Component {
  constructor() {
    super();
    this.state = {
      dropdownOpen: false,
      activeTab1: "11",
    };
    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
  }
  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }
  toggle1(tab) {
    if (this.state.activeTab1 !== tab) {
      this.setState({
        activeTab1: tab,
      });
    }
  }

  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition
            component="div"
            className="TabsAnimation"
            appear={true}
            timeout={0}
            enter={false}
            exit={false}
          >
            <div>
              <Row>
                <Col md="12" lg="6">
                  <Card className="mb-3">
                    <CardHeader className="card-header-tab">
                      <div className="card-header-title">
                        Thông tin sinh viên
                      </div>
                    </CardHeader>
                    <TabContent activeTab={this.state.activeTab1}>
                      <TabPane tabId="11">
                        <CardBody className="pt-3 pb-5">
                          <Row className="mt-3">
                            <Col md="3" className="p-0">
                              <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left">
                                    <div
                                      id="infor"
                                      className="widget-numbers fsize-1 text-muted"
                                    >
                                      <img src={process.env.PUBLIC_URL +'/Img/hinh.png'} className="infor-img img-fluid rounded-circle" alt="hinh anh"></img>
                                      <br />
                                      <a className="infor-href" href="#">Xem chi tiết</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col md="4" className="p-0">
                              <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left">
                                    <div id="infor" className="widget-numbers">
                                      <p>
                                        MSSV: <span>123456789</span>
                                      </p>
                                      <p>
                                        Họ tên: <span>Nguyễn Văn A</span>
                                      </p>
                                      <p>
                                        Giới tính: <span>Nam</span>
                                      </p>
                                      <p>
                                        Ngày sinh: <span>1/1/2000</span>
                                      </p>
                                      <p>
                                        Nơi sinh:
                                        <span>Tỉnh Thừa Thiên Huế</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col md="5" className=" pb-3">
                              <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left">
                                    <div id="infor" className="widget-numbers">
                                      <p>
                                        Lớp học: <span>10DHCK</span>
                                      </p>
                                      <p>
                                        Khóa học: <span>2019</span>
                                      </p>
                                      <p>
                                        Bậc đào tạo: <span>Đại học</span>
                                      </p>
                                      <p>
                                        Loại hình đào tạo:
                                        <span>Chính quy</span>
                                      </p>
                                      <p>
                                        Ngành:
                                        <span>Công nghệ chế tạo máy_DH</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </TabPane>
                      <TabPane tabId="22">
                        <div className="widget-chart p-0">
                          <ResponsiveContainer height={179}>
                            <ComposedChart data={data2}>
                              <CartesianGrid stroke="#ffffff" />
                              <Area
                                type="monotone"
                                dataKey="amt"
                                fill="#f7ffd0"
                                stroke="#85a200"
                              />
                              <Bar dataKey="pv" barSize={16} fill="#545cd8" />
                              <Line
                                type="monotone"
                                dataKey="uv"
                                strokeWidth="3"
                                stroke="#d92550"
                              />
                            </ComposedChart>
                          </ResponsiveContainer>
                          <div className="widget-chart-content mt-3 mb-2">
                            <div className="widget-description mt-0 text-success">
                              <FontAwesomeIcon icon={faArrowUp} />
                              <span className="ps-2 pe-2">37.2%</span>
                              <span className="text-muted opacity-8">
                                performance increase
                              </span>
                            </div>
                          </div>
                        </div>
                        <CardBody className="pt-2">
                          <Row>
                            <Col md="6">
                              <div className="widget-content">
                                <div className="widget-content-outer">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left me-3">
                                      <div className="widget-numbers fsize-3 text-muted">
                                        23%
                                      </div>
                                    </div>
                                    <div className="widget-content-right">
                                      <div className="text-muted opacity-6">
                                        Deploys
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-progress-wrapper mt-1">
                                    <Progress
                                      className="progress-bar-sm progress-bar-animated-alt"
                                      color="warning"
                                      value="23"
                                    />
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col md="6">
                              <div className="widget-content">
                                <div className="widget-content-outer">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left me-3">
                                      <div className="widget-numbers fsize-3 text-muted">
                                        76%
                                      </div>
                                    </div>
                                    <div className="widget-content-right">
                                      <div className="text-muted opacity-6">
                                        Traffic
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-progress-wrapper mt-1">
                                    <Progress
                                      className="progress-bar-sm progress-bar-animated-alt"
                                      color="info"
                                      value="76"
                                    />
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>
                          <div className="divider mt-4" />
                          <Row>
                            <Col md="6">
                              <div className="widget-content">
                                <div className="widget-content-outer">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left me-3">
                                      <div className="widget-numbers fsize-3 text-muted">
                                        83%
                                      </div>
                                    </div>
                                    <div className="widget-content-right">
                                      <div className="text-muted opacity-6">
                                        Servers Load
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-progress-wrapper mt-1">
                                    <Progress
                                      className="progress-bar-sm progress-bar-animated-alt"
                                      color="danger"
                                      value="83"
                                    />
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col md="6">
                              <div className="widget-content">
                                <div className="widget-content-outer">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left me-3">
                                      <div className="widget-numbers fsize-3 text-muted">
                                        48%
                                      </div>
                                    </div>
                                    <div className="widget-content-right">
                                      <div className="text-muted opacity-6">
                                        Reported Bugs
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-progress-wrapper mt-1">
                                    <Progress
                                      className="progress-bar-sm progress-bar-animated-alt"
                                      color="alternate"
                                      value="48"
                                    />
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </TabPane>
                    </TabContent>
                  </Card>
                  <Row>
                    <Col lg="6">
                      <div className="card mb-3 widget-chart">
                        <div className="widget-chart-content">
                          <p id="learning">Tiến độ học tập</p>
                        </div>
                        <div className="widget-chart-wrapper chart-wrapper-relative">
                          <ResponsiveContainer height={300}>
                            <Doughnut
                              data={data3}
                              width={667}
                              height={270}
                              options={{ maintainAspectRatio: false }}
                            />
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="card mb-3 widget-chart">
                        <div className="widget-chart-content">
                          <div className="icon-wrapper rounded-circle">
                            <div className="icon-wrapper-bg bg-danger" />
                            <i className="lnr-laptop-phone text-danger" />
                          </div>
                          <div className="widget-numbers">5.82k</div>
                          <div className="widget-subheading">
                            Reports Submitted
                          </div>
                          <div className="widget-description text-danger">
                            <FontAwesomeIcon icon={faAngleDown} />
                            <span className="ps-1">54.1%</span>
                          </div>
                        </div>
                        <div className="widget-chart-wrapper chart-wrapper-relative">
                          <ResponsiveContainer height={165}>
                            <BarChart data={data}>
                              <Bar
                                dataKey="uv"
                                fill="#81a4ff"
                                stroke="#3f6ad8"
                                strokeWidth={2}
                              />
                              <XAxis dataKey="uv" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md="12" lg="6">
                  <Row>
                    <Col id="schedule" md="6">
                      <div
                        style={{ height: "100%", padding: "0" }}
                        className="card mb-3 bg-arielle-smile widget-chart text-white card-border"
                      >
                        <div className="numberschedule widget-numbers">3</div>
                        <div
                          style={{ height: "100%", padding: "5px 0 0 0" }}
                          className="widget-subheading"
                        >
                          Bạn có 3 lịch học trong tuần
                        </div>
                      </div>
                    </Col>
                    <Col id="schedule" md="6">
                      <div
                        style={{ height: "100%", padding: "0" }}
                        className="bg-love-kiss card mb-3 widget-chart text-white card-border"
                      >
                        <div className="numberschedule widget-numbers">1</div>
                        <div
                          style={{ height: "100%", padding: "5px 0 0 0" }}
                          className="widget-subheading"
                        >
                          Bạn có 0 lịch thi trong tuần
                        </div>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="card mb-3 widget-chart text-black card-border">
                        <div className="widget-chart-content ">
                          <div className="fs icon-wrapper rounded-circle">
                            <div className="icon-wrapper-bg bg-danger" />
                            <i className="fsicon lnr-laptop-phone text-danger" />
                          </div>
                          <div id="fee" className="widget-numbers">
                            3.250.000
                          </div>
                          <div className="widget-subheading">
                            Học phí phải đóng
                          </div>
                        </div>
                        <div className="widget-chart-wrapper chart-wrapper-relative">
                          <ResponsiveContainer height={91}>
                            <BarChart data={data}>
                              <Bar
                                dataKey="pv"
                                fill="#81a4ff"
                                stroke="#3f6ad8"
                                strokeWidth={2}
                              />
                              <XAxis dataKey="pv" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="card mb-3 widget-chart card-border">
                        <div className="widget-chart-content">
                          <div className=" fs icon-wrapper rounded-circle">
                            <div className="bg-icon icon-wrapper-bg opacity-2" />
                            <i class="fsicon lnr-graduation-hat text-primary" />
                          </div>
                          <div id="fee" className="widget-numbers">
                            7.24
                          </div>
                          <div className="widget-subheading">
                            Điểm trung bình tích lũy
                          </div>
                        </div>
                        <div className="widget-chart-wrapper position-relative">
                          <ResponsiveContainer height={106}>
                            <AreaChart data={data}
                            margin={{ top: 0, right: 0, left: 5, bottom: 0 }}
                            >
                              <Area type='stepAfter' dataKey='uv'
                              
                                fill="#2FC9EB"
                                stroke="#3f6ad8"
                              />
                              <XAxis dataKey="uv" />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="card mb-3 widget-chart">
                    <Selects/>
                  </div>
                </Col>
              </Row>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}
