import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'

const eventsDashboard = [
  {
    id: '1',
    voter: 'Trip to Tower of London',
    date: '2018-03-27T11:00:00+00:00',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    ward: 'London, UK',
    address: "Tower of London, St Katharine's & Wapping, London",
    contactedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    issues: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    voter: 'Trip to Punch and Judy Pub',
    date: '2018-03-28T14:00:00+00:00',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    ward: 'London, UK',
    address: 'Punch & Judy, Henrietta Street, London, UK',
    contactedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    issues: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]


class EventDashboard extends Component {
  state = {
      events: eventsDashboard,
      isOpen: false
    }

  

  handleFormOpen = () => {
    this.setState({
      isOpen: true
    })
  }

  handleCancel = () => {
    this.setState({
      isOpen: false
    })
  }

  render() {
    return (
        <Grid>

        <Grid.Column width={10}>

          <EventList events={this.state.events}/>

        </Grid.Column>

        <Grid.Column width={6}>

          <Button onClick={this.handleFormOpen} positive content='Log Contact'/>

          {this.state.isOpen &&
          
          <EventForm handleCancel={this.handleCancel}/>}

        </Grid.Column>

        </Grid>
    )
  }
}

export default EventDashboard
