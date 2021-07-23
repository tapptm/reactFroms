import React from "react";
import axios from "axios";
import "../Form/style.css";

class TestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      institution: "",
      paln_master: "",
      paln_sub: "",
      platform: "",
      program: "",
      point: "",
      goal: "",
      achievement_main: "",
      achievement_small: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  checkValueEmpty = (value) => {
    if (value === "") {
      console.log("pls set value");
      alert("pls set value");
    } else {
      console.log(value);
      alert("Your favorite flavor is: " + value);
    }
  };

  handleSubmit = (event) => {
    console.log(this.state);

    event.preventDefault();

    const fundingagencyObj = {
      name: this.state.name,
      institution: this.state.institution,
      paln_master: this.state.paln_master,
      paln_sub: this.state.paln_sub,
      platform: this.state.platform,
      program: this.state.program,
      point: this.state.point,
      goal: this.state.goal,
      achievement_main: this.state.achievement_main,
      achievement_small: this.state.achievement_small,
    };

    axios
      .post("https://api.rmutiresmonitoring.com/api/post/coordinator_about_fundingagency", fundingagencyObj)
      .then((res) => {
        console.log(res.data.massage);
        alert(res.data.massage);
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({
      name: "",
      institution: "",
      paln_master: "",
      paln_sub: "",
      platform: "",
      program: "",
      point: "",
      goal: "",
      achievement_main: "",
      achievement_small: "",
    });
  };

  render() {
    return (
      <div className="form-cn">
        <div className="form card">
          <form className="container" onSubmit={this.handleSubmit}>
            <h3>ข้อมูลทั่วไปเกี่ยวกับทุน</h3>
            <hr />
            <p>
              ชื่อทุน :
              <input
                className="inline"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </p>
            <p>
              หน่วยงาน :
              <input
                className="inline"
                name="institution"
                type="text"
                value={this.state.institution}
                onChange={this.handleChange}
              />
            </p>
            <p>
              แผนงานหลัก :
              <input
                className="inline"
                name="paln_master"
                type="text"
                value={this.state.paln_master}
                onChange={this.handleChange}
              />
            </p>
            <p>
              แผนงานย่อย :
              <input
                className="inline"
                name="paln_sub"
                type="text"
                value={this.state.paln_sub}
                onChange={this.handleChange}
              />
            </p>
            <p>
              แพลตฟอร์ม :
              <input
                className="inline"
                name="platform"
                type="text"
                value={this.state.platform}
                onChange={this.handleChange}
              />
            </p>
            <p>
              โปรแกรม :
              <input
                className="inline"
                name="program"
                type="text"
                value={this.state.program}
                onChange={this.handleChange}
              />
            </p>
            <p>
              ประเด็นเริ่มสำคัญ :
              <input
                className="inline"
                name="point"
                type="text"
                value={this.state.point}
                onChange={this.handleChange}
              />
            </p>
            <p>
              เป้าหมาย :
              <input
                className="inline"
                name="goal"
                type="text"
                value={this.state.goal}
                onChange={this.handleChange}
              />
            </p>
            <p>
              ผลสัมฤทธิ์ที่สำคัญ (หลัก) :
              <input
                className="inline"
                name="achievement_main"
                type="text"
                value={this.state.achievement_main}
                onChange={this.handleChange}
              />
            </p>
            <p>
              ผลสัมฤทธิ์ที่สำคัญ (รอง) :
              <input
                className="inline"
                name="achievement_small"
                type="text"
                value={this.state.achievement_small}
                onChange={this.handleChange}
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
