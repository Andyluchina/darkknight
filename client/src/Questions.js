import React from "react";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import LoadingOverlay from "react-loading-overlay";
import axios from "axios";
const styles = {
  select: {
    minWidth: 120
  }
};
class Questions extends React.Component {
  componentDidMount() {
    document.title = "参会报名表";
  }

  state = {
    name: "",
    phone: "",
    people: 1,
    grade: "",
    abroad: "",
    country: "",
    toefl: "",
    question: "",
    active: false,
    messages: []
  };

  async validateCode() {
    this.setState({
      messages: []
    });
    var m = [];
    if (this.state.name === "") {
      m.push("请填写姓名");
    }
    if (this.state.phone === "") {
      m.push("请填写电话或者微信号");
    }
    if (this.state.people === "") {
      m.push("请填写参会人数");
    }
    if (this.state.grade === "") {
      m.push("请填写年级");
    }
    if (this.state.abroad === "") {
      m.push("请填写是否有留学意向");
    }
    this.setState({
      messages: m
    });
  }

  renderCountry() {
    if (this.state.abroad === "无") {
      return <div />;
    } else {
      return (
        <FormControl component="fieldset" style={{ marginTop: 7 }}>
          <FormLabel component="legend">留学意向国家</FormLabel>
          <RadioGroup
            aria-label="position"
            name="position"
            row
            value={this.state.country}
            onChange={event => {
              this.setState({ country: event.target.value });
            }}
          >
            <FormControlLabel
              value={"美国"}
              control={<Radio color="primary" />}
              label="美国"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value={"加拿大"}
              control={<Radio color="primary" />}
              label="加拿大"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value={"英国"}
              control={<Radio color="primary" />}
              label="英国"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value={"澳大利亚"}
              control={<Radio color="primary" />}
              label="澳大利亚"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value={"其他"}
              control={<Radio color="primary" />}
              label="其他"
              labelPlacement="bottom"
            />
          </RadioGroup>
        </FormControl>
      );
    }
  }
  render() {
    return (
      <div
        style={{
          marginRight: 10,
          marginLeft: 10
        }}
      >
        <LoadingOverlay active={this.state.active} spinner text="玩命提交中">
          <h3>参会报名表</h3>
          <TextField
            id="standard-name"
            label="姓名"
            className={styles.textField}
            margin="normal"
            required
            variant="outlined"
            value={this.state.name}
            onChange={event => {
              this.setState({ name: event.target.value });
            }}
          />
          <br />
          <TextField
            id="standard-name"
            label="微信/手机号"
            className={styles.textField}
            margin="normal"
            variant="outlined"
            value={this.state.phone}
            onChange={event => {
              this.setState({ phone: event.target.value });
            }}
          />
          <br />
          <TextField
            id="standard-name"
            label="到场参加人数"
            className={styles.textField}
            margin="normal"
            type="number"
            variant="outlined"
            value={this.state.people}
            onChange={event => {
              this.setState({ people: event.target.value });
            }}
          />
          <br />
          <FormControl variant="outlined" className={styles.select}>
            <InputLabel htmlFor="outlined-age-simple">年级</InputLabel>
            <Select
              input={
                <OutlinedInput
                  name="年级"
                  id="outlined-age-simple"
                  value={this.state.grade}
                  onChange={event => {
                    this.setState({ grade: event.target.value });
                  }}
                />
              }
            >
              <MenuItem value="">
                <em>请选择</em>
              </MenuItem>
              <MenuItem value={"小学以下"}>小学以下</MenuItem>
              <MenuItem value={"初中"}>初中</MenuItem>
              <MenuItem value={"高中"}>高中</MenuItem>
              <MenuItem value={"大学"}>大学</MenuItem>
              <MenuItem value={"研究生及以上"}>研究生及以上</MenuItem>
            </Select>
          </FormControl>
          <br />
          <FormControl component="fieldset" style={{ marginTop: 7 }}>
            <FormLabel component="legend">有无留学意向</FormLabel>
            <RadioGroup
              aria-label="position"
              name="position"
              row
              value={this.state.abroad}
              onChange={event => {
                this.setState({ abroad: event.target.value });
              }}
            >
              <FormControlLabel
                value={"有"}
                control={<Radio color="primary" />}
                label="有"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value={"无"}
                control={<Radio color="primary" />}
                label="无"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </FormControl>
          <br />
          {this.renderCountry()}
          <br />
          <FormControl component="fieldset" style={{ marginTop: 7 }}>
            <FormLabel component="legend">有没有接触过托福</FormLabel>
            <RadioGroup
              aria-label="position"
              name="position"
              row
              value={this.state.toefl}
              onChange={event => {
                this.setState({
                  toefl: event.target.value
                });
              }}
            >
              <FormControlLabel
                value={"有"}
                control={<Radio color="primary" />}
                label="有"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value={"无"}
                control={<Radio color="primary" />}
                label="无"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </FormControl>
          <br />
          <TextField
            id="standard-multiline-static"
            label="你最想问我们的问题"
            multiline
            rows="4"
            placeholder="我想问。。。"
            className={styles.textField}
            margin="normal"
            variant="outlined"
            value={this.state.question}
            onChange={event => {
              this.setState({ question: event.target.value });
            }}
            style={{ marginTop: 7 }}
          />
          <br />
          {this.state.messages.map(m => {
            return (
              <div>
                {m}
                <br />
              </div>
            );
          })}
          <Button
            variant="outlined"
            color="primary"
            style={{ marginTop: 5, marginBottom: 100 }}
            onClick={async event => {
              await this.validateCode();
              console.log(this.state.messages.length);
              if (this.state.messages.length === 0) {
                console.log(this.state);
                this.setState({
                  active: true
                });
                const res = await axios.post("/func/submit", this.state);
                console.log(res);
                this.props.history.push("/success_page", { res: res.data });
              } else {
                return;
              }
            }}
          >
            提交
          </Button>
        </LoadingOverlay>
      </div>
    );
  }
}

export default Questions;
