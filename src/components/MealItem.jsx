import react from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export const MealItem = () => (
        <>
            <Card>
                <Card.Title title={title} subtitle="Card Subtitle" left={LeftContent} />
                <Card.Content>
                    <Title>Card title</Title>
                    <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: '{ image }' }} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>
        </>
    
)