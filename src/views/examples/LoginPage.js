import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ReactSession } from "react-client-session";

// reactstrap components
import {
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

function LoginPage({ user, setuser }) {

  const history = useHistory();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [alertDanger, setAlertDanger] = React.useState(false);
  const [message, setmessage] = useState("");

  const login = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:8070/users/check/${Email}`).then((res) => {
      if (res.data === true) {
        axios.get(`http://localhost:8070/users/get/${Email}`).then((res) => {
          if (Password != res.data.Password) {
            setmessage("Incorrect password!");
            setAlertDanger(true);
          } else {
            ReactSession.set("user", res.data);
            console.log(res.data);
            console.log(ReactSession.get("user"));
            dashboard();
            setAlertDanger(false);
          }
        });
      } else {
        setmessage("Please check your email");
        setAlertDanger(true);
      }
    });
  };

  const dashboard = () => {
    history.push({
      pathname: "/account-managment",
    });
  };

  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/login_bg.jpg").default + ")",
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="" onSubmit={login}>
                <Alert
                className="alert-with-icon"
                color="danger"
                isOpen={alertDanger}
              >
                <Container>
                  <div className="alert-wrapper">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                      onClick={() => setAlertDanger(false)}
                    >
                      <i className="nc-icon nc-simple-remove" />
                    </button>
                    <div className="message">{message}</div>
                  </div>
                </Container>
              </Alert>
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <img
                        alt="..."
                        src={require("assets/img/shopsy.png").default}
                      ></img>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >



                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        value={Email}
                        required
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >



                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_caps-small"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={Password}
                        required
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      type = "submit"
                      size="lg"
                    >
                      SIGN IN
                    </Button>
                    <div className="pull-center">
                    <label color="black">
                       Don't have an account?{" "}
                         <a href="/signup">
                          <strong>Create an account</strong>
                </a>
              </label>
                    </div>
                
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default LoginPage;
