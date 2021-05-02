import React, { useRef } from 'react';
import {Container, Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const Login = ({ onSubmitValue }) => {
    const idRef = useRef();

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(idRef.current.value)
        // onSubmitValue(idRef.current.value)
      
    }

    const idGenerator  =()=>{
        console.log(uuidv4())
        onSubmitValue(uuidv4)
    }

    return (
        <Container>
            <Form onSubmit={formSubmit}>
               
                    <Form.Group >
                        <Form.Label>
                            Enter Your ID
                        </Form.Label>
                        <Form.Control type='text' ref={idRef}   required>
                        </Form.Control>
                       <div className="mt-3">
                        <Button type="submit">Login</Button>
                        <Button onClick={idGenerator} variant='secondary' className="ml-2">Create User ID</Button>
                        </div>
                    </Form.Group>
               
            </Form>
            

        </Container>
    );
};

export default Login;