import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export const Breakfast = ({ item, image, data }) => (
  <>
    <Card>
      <Card.Title
        title={dummyData}
        subtitle="Card Subtitle"
        left={LeftContent}
      />
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      {/* <Card.Cover source={} /> */}
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  </>
);
