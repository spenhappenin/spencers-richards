import React from 'react';
import styled from 'styled-components';
import { Container, Header } from '../styles/shared';

class Contact extends React.Component {

  render() {
    const { mobile } = this.props;

    return (
      <Container mobile={mobile}>
        <Header>Contact</Header>'
        <p>If you have any questions please let me know!</p>
        <Form action="https://formspree.io/spencer.richards7@gmail.com" method="POST">
          <Label>Name:</Label>
          <Input
            name="name"
            placeholder="Name*"
            required
            type="text"
          />
          <br />
          <Label>Email:</Label>
          <Input
            name="_replyto"
            placeholder="Email*"
            required
            type="email"
          />
          <br />
          <Label>Subject:</Label>
          <Input
            name="subject"
            placeholder="Subject*"
            required
            type="text"
          />
          <br />
          <Label>Message:</Label>
          <TextArea
            name="message"
            placeholder="Message*"
            required
            rows="10"
            type="text"
          />
          <br />
          <Button type="submit">Send</Button>
        </Form>
      </Container>
    );
  };
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  background: #37393b;
  border: 1px solid #181818;
  color: #7c7c7c;
  font-size: 15px;
  height: 50px;
  padding: 0 20px;
`;

const TextArea = styled.textarea`
  background: #37393b;
  border: 1px solid #181818;
  color: #7c7c7c;
  font-size: 15px;
  padding: 20px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Button = styled.button`
  align-items: center;
  background: #262627;
  border: 2px solid #00abff;
  color: #00abff;
  cursor: pointer;
  display: flex;
  font-size: 12px;
  height: 45px;
  justify-content: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  width: 100px;

  &:hover {
    background: #00abff;
    color: #262627;
  }
`;

export default Contact;
