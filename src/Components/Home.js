import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            watchList: [],
            userData: [],
        }
    }
    componentDidMount = async () => {
        let url = `${process.env.REACT_APP_HEROKU}/getData`;
        let watchList = await axios.get(url);
        this.setState({
            watchList: watchList.data
        });
        let userUrl = `${process.env.REACT_APP_HEROKU}/createUser/${this.props.auth0.user.email}`;
        await axios.post(userUrl);
        this.forceUpdate();
    }

    handleAddToFav = async (watchId) => {
        let url = `${process.env.REACT_APP_HEROKU}/addToFav/${this.props.auth0.user.email}/${watchId}`;
        let user = await axios.post(url);
        this.setState({
            userData: user.data
        })
        this.forceUpdate();
    }

    render() {
        return (
            <Container>
                <Row xs={1} md={3} className="g-3">
                    {this.state.watchList.map((elem, index) => {
                        return (
                            <Col key={index}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={elem.image_url} />
                                    <Card.Body>
                                        <Card.Title>{elem.title}</Card.Title>
                                        <Card.Text>{elem.description}</Card.Text>
                                        <Card.Text>{elem.toUSD}</Card.Text>
                                        <Button onClick={() => this.handleAddToFav(elem._id)} variant="primary">Add-To-list</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                    }
                </Row>
            </Container >
        )
    }
}

export default withAuth0(Home)
