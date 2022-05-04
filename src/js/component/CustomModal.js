import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Card } from "react-bootstrap";

export const CustomModal = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button className="m-auto" variant="primary" onClick={handleShow}>
				Launch Poke Modal
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Mi primer modal de Pokemon</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Card>
						<Card.Img
							variant="top"
							src="https://i.pinimg.com/564x/18/a4/65/18a465e3390622efc1f18b413b5a58d7.jpg"
						/>
					</Card>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
