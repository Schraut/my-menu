import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export const Dinner = () => (
  <Card>
    <Card.Title
      title="Dinner Title"
      subtitle="Card Subtitle"
      left={LeftContent}
    />
    <Card.Content>
      <Title>Title of Dinner</Title>
      <Paragraph>Description of dinner</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/702' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);
