import { Card, Title } from 'react-native-paper';

const ExcuseCard = ({excuse}) => {
  return (
    <Card>
      <Card.Content>
        <Title>{excuse}</Title>
      </Card.Content>
    </Card>
  )
}
export default ExcuseCard;