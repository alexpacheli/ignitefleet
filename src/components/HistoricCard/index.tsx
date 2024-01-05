import { TouchableOpacityProps } from 'react-native/types';
import { Container } from './styles';

export type HistoricCardProps = {
  id: string
  licensePlate: string
  created: string
}

type Props = TouchableOpacityProps {

}

export function HistoricCard({}: Props) {
  return (
    <Container>

    </Container>
  );
}