import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee'

 class EventListItem extends Component {
  render() {
    const {event} =this.props;
    return (
        <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{event.voter}</Item.Header>
                <Item.Description>
                  Contacted by <a>{event.contactedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {event.date}|
            <Icon name="marker" /> {event.address}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
          {event.issues.map((issue) => (
            <EventListAttendee key={issue.id} issue={issue} />
          ))}
          </List>
        </Segment>
        <Segment clearing>
        <span>{event.description}</span>
          <Button as="a" color="teal" floated="right" content="View" />
        </Segment>
      </Segment.Group>
    )
  }
}

export default EventListItem