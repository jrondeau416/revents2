import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react'

 class EventForm extends Component {
  render() {

    const {handleCancel} = this.props;

    return (
              <Segment>
                <Form>
                  <Form.Field>
                    <label>Voter Name</label>
                    <input placeholder="Voter Name" />
                  </Form.Field>
                  <Form.Field>
                    <label>Contact Date</label>
                    <input type="date" placeholder="Contact Date" />
                  </Form.Field>
                  <Form.Field>
                    <label>Address</label>
                    <input placeholder="Address of the voter" />
                  </Form.Field>
                  <Form.Field>
                    <label>Ward</label>
                    <input placeholder="Enter the ward of the voter" />
                  </Form.Field>
                  <Form.Field>
                    <label>Contacted By</label>
                    <input placeholder="Enter the name of person who contacted the voter" />
                  </Form.Field>
                  <Button positive type="submit">
                    Submit
                  </Button>
                  <Button onClick={handleCancel} type="button">Cancel</Button>
                </Form>
              </Segment>
    )
  }
}

export default EventForm