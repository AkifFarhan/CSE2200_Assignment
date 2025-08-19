import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import photo from "../assets/nazrul.gif";

export default function ProfilePage() 
{
  const user =
  {
    fullName: "AKIF FARHAN",
    email: "akiffarhan@gmail.com",
    avatar: photo,
    phone: "+8801861252364",
  };

  return (
    <>
      <h1 style={{ marginBottom: 16 }}>Profile</h1>

      <Card style={{ maxWidth: 300 }}>
        <Card.Img variant="top" src={user.avatar} />
        <Card.Body>
          <Card.Title>{user.fullName}</Card.Title>
          <Card.Text className="text-muted">{user.email}</Card.Text>
        </Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Full Name:</strong> {user.fullName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Email:</strong> {user.email}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Phone:</strong> {user.phone}
          </ListGroup.Item>

        </ListGroup>
      </Card>
    </>
  );
}
