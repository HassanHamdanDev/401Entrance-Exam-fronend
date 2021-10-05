import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


class UpdateModel extends Component {
    render() {
        return (
            <>
                <Modal show={this.props.isOpen} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Fav</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={() => this.props.handleUpdateSubmit(this.props.watchId)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" value={this.props.title} onChange={this.props.handleTitle} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" value={this.props.description} onChange={this.props.handleDescription} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" value={this.props.image_url} onChange={this.props.handleImage_url} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" value={this.props.toUSD} onChange={this.props.handleToUSD} />
                            </Form.Group>
                            <Button variant="secondary" onClick={this.props.handleClose}>
                                Close
                            </Button>
                            <Button type='submit' variant="primary" onClick={this.props.handleClose}>
                                Save Changes
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default UpdateModel
