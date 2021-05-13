import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export const Lunch = () => (
  <Card>
    <Card.Title
      title="Lunch Title"
      subtitle="Lunch Subtitle"
      left={LeftContent}
    />
    <Card.Content>
      <Title>Title of Lunch</Title>
      <Paragraph>Description of lunch</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/703' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);
