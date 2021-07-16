import React from "react";
import axios from "axios";
import "../Form/style.css";

class TestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source_funds: [],
      project_type: [],

      selectProjectType: "โปรดเลือก",
      project_name: "",
      selectSourceFunds: "โปรดเลือก",
      project_budget: "",
      project_star: "โปรดเลือก",
      project_agency: "",
      project_latitude: "",
      project_Longitude: "",
      project_status: "",
      file: null,
    };

    this.form = React.createRef(null);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getProjectType = () => {
    axios
      .get("http://localhost:4000/api/get/project-type")
      .then((resp) => {
        // console.log(resp.data);
        this.setState({
          project_type: resp.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getSourceFunds = () => {
    axios
      .get("http://localhost:4000/api/get/source_funds")
      .then((res) => {
        this.setState({
          source_funds: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getUserIdCard = () => {
    axios.post("http://localhost:4000/api/get/bb-user/")
  }

  componentDidMount = () => {
    this.getProjectType();
    this.getSourceFunds();
  };

  handleFileUpload = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  };

  handleChangeDropdownYear = (event) => {
    this.setState({ project_star: event.target.value });
  };

  handleChangeDropdown = (event) => {
    this.setState({
      selectProjectType: event.target.value,
    });
  };

  handleChangeDropdownSourceFund = (event) => {
    this.setState({
      selectSourceFunds: event.target.value,
    });
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();

    const formData = new FormData(this.form.current);

    for (const entry of formData.entries()) {
      console.log(entry);
    }

    axios
      .post("http://localhost:4000/api/post/coordinator_fundingagency_project", formData)
      .then((res) => {
        console.log(res.data.massage);
        alert(res.data.massage);
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({
      selectProjectType: "โปรดเลือก",
      project_name: "",
      selectSourceFunds: "โปรดเลือก",
      project_budget: "",
      project_star: "โปรดเลือก",
      project_agency: "",
      project_latitude: "",
      project_Longitude: "",
      project_status: "",
      file: null,
    });
  };

  render() {
    const { project_type, source_funds } = this.state;

    return (
      <div className="form-cn">
        <div className="form card">
          <form
            ref={this.form}
            className="container"
            onSubmit={this.handleSubmit}
          >
            <h3>งานวิจัย</h3>
            <hr />
            <p>
              ประเภท :
              <select
                className="inline"
                name="project_type"
                value={this.state.selectProjectType}
                onChange={this.handleChangeDropdown}
              >
                <option select="true" value>
                  โปรดเลือก
                </option>
                {project_type.map(({ project_type_name }, index) => (
                  <option key={index} value={project_type_name}>
                    {project_type_name}
                  </option>
                ))}
              </select>
            </p>
            <p>
              ชื่อโครงงาน :
              <input
                className="inline"
                name="project_name"
                type="text"
                value={this.state.project_name}
                onChange={this.handleChange}
              />
            </p>
            <p>
              แหล่งทุน :
              <select
                className="inline"
                name="project_funding"
                value={this.state.selectSourceFunds}
                onChange={this.handleChangeDropdownSourceFund}
              >
                <option select="true" value>
                  โปรดเลือก
                </option>
                {source_funds.map(({ source_funds_name }, index) => (
                  <option key={index} value={source_funds_name}>
                    {source_funds_name}
                  </option>
                ))}
              </select>
            </p>

            <p>
              งบประมาณที่ได้รับ :
              <input
                className="inline"
                name="project_budget"
                type="text"
                value={this.state.project_budget}
                onChange={this.handleChange}
              />
              ปี :
              <select
                className="inline"
                name="project_star"
                value={this.state.project_star}
                onChange={this.handleChangeDropdownYear}
              >
                <option select="true" value>
                  โปรดเลือก
                </option>

                <option value="2564">2564</option>
              </select>
            </p>

            <p>
              หน่วยงานเข้าของโครงการ :
              <input
                className="inline"
                name="project_agency"
                type="text"
                value={this.state.project_agency}
                onChange={this.handleChange}
              />
            </p>
            <p>
              พื้นที่ศึกษา :
              <input
                className="inline"
                name="project_latitude"
                placeholder="latitude"
                type="text"
                value={this.state.project_latitude}
                onChange={this.handleChange}
              />
              <input
                className="inline"
                name="project_Longitude"
                placeholder="Longitude"
                type="text"
                value={this.state.project_Longitude}
                onChange={this.handleChange}
              />
            </p>

            <div>
              สถานะโครงการ :
              <input
                className="inline"
                type="radio"
                value="0"
                name="project_status"
              />
              อยู่ระหว่างดำเนินการ
              <input
                className="inline"
                type="radio"
                value="1"
                name="project_status"
              />
              โครงการวิจัยเสร็จสิ้น
            </div>

            <p>
              อัพโหลดเอกสาร :
              <input
                id="file"
                className="inline"
                type="file"
                name="project_upload"
                onChange={this.handleFileUpload}
              />
            </p>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default TestForm;
