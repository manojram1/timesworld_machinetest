import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Form } from 'react-bootstrap';
import PERSON_IMAGE from "../../../assets/images/person_image.jpg"
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState([]);

  const handleSubmit = () => {
    const errors = [];
    const capitalLetterRegex = /[A-Z]/;
    const numberRegex = /\d/;
    const symbolRegex = /[@$!%*?&]/;

    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    }
    if (!capitalLetterRegex.test(password)) {
      errors.push("Password must contain at least 1 capital letter.");
    }
    if (!numberRegex.test(password)) {
      errors.push("Password must contain at least 1 number.");
    }
    if (!symbolRegex.test(password)) {

      errors.push("Password must contain at least 1 symbol.");
    }

    if (errors.length > 0) {
      setPasswordErrors(errors);
      return;
    }
    setPasswordErrors([]);
    navigate("/home");
  };

  return (
       <Container fluid style={{ height: "100vh", justifyContent:"center", alignItems:"center", fontFamily:"Noto Sans" }}>
      <Row className="justify-content-center align-items-center h-100 w-100">
        <Col xs={12} sm={12} lg={6} xl={6} className="d-grid justify-content-center text-align-center">
        <div>
        <h2 style={{fontWeight: 700}}>Sign In</h2>
        <h6 style={{fontWeight: 700}}>New user? <span className="text-primary">Create an account</span></h6>
    <Form>
        <div>
      <Form.Group className="mb-3 mt-3">
        <Form.Control style={{ borderRadius: "0", border:"2px solid black", width:"280px", height:"48px",  marginBottom:"3vh"}} type="text" placeholder="Username or email" />
        <Form.Control  style={{ borderRadius: "0", border:"2px solid black",width:"280px", height:"48px"}} type="password" placeholder="password"  
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordErrors.length > 0 && (
                  <ul
                    style={{
                      color: "red",
                      fontWeight: 600,
                      paddingLeft: "1rem",
                      marginTop: "1rem",
                      marginBottom: "0",
                      maxWidth: "280px",

                    }}
                  >
                    {passwordErrors.map((err, index) => (
                      <li key={index}>{err}</li>
                    ))}
                  </ul>
                )}
      </Form.Group>
    <Form.Check type="checkbox" style={{ borderRadius: "0", fontWeight:600, fontSize:16,}} label="Keep me signed in"/>
      <Button className="mt-3" style={{backgroundColor:"black",border:"2px solid black",width:"280px", height:"48px"}} onClick={handleSubmit}>Sign In</Button>
      <Row className='mt-3'>
        <Col xs={3} md={3} lg={3} xl={3}>
        <hr/>
        </Col>
        <Col xs={6} md={6} lg={6} xl={6} className='d-flex justify-content-center align-item-center'>
          <span style={{fontSize:"13px", fontWeight:700, marginTop:"5px"}}>Or Sign In With</span>
        </Col>
        <Col xs={3} md={3} lg={3} xl={3}>
          <hr/>
        </Col>
      </Row>
      <Row className="justify-content-center mb-3 mt-3">
          <Col xs="auto">
            <a href=" " className="d-inline-flex align-items-center justify-content-center border border-secondary rounded-circle p-2 mx-2 text-dark text-decoration-none" style={{ width: "40px", height: "40px" }} >
              <FaFacebookF />
            </a>
          </Col>
          <Col xs="auto">
            <a href=" " className="d-inline-flex align-items-center justify-content-center border border-secondary rounded-circle p-2 mx-2 text-dark text-decoration-none" style={{ width: "40px", height: "40px" }} >
              <FaTwitter />
            </a>
          </Col>
          <Col xs="auto">
            <a href=" " className="d-inline-flex align-items-center justify-content-center border border-secondary rounded-circle p-2 mx-2 text-dark text-decoration-none" style={{ width: "40px", height: "40px" }} >
              <FaLinkedinIn />
            </a>
          </Col>
          <Col xs="auto">
            <a href=" " className="d-inline-flex align-items-center justify-content-center border border-secondary rounded-circle p-2 mx-2 text-dark text-decoration-none" style={{ width: "40px", height: "40px" }} > 
                <FaYoutube />
            </a>
          </Col>
        </Row>
      </div>
    </Form>
    </div>
        </Col>
        <Col xs={12} sm={12} lg={6} xl={6} className='d-none d-lg-block'>
        <img alt="person"style={{width:"500px", height:"509px"}} src={PERSON_IMAGE}/>
        </Col>
      </Row>
     </Container>
  )
}

export default LoginPage
