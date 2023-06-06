import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance/insex';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta Luz',
    value: 'R$ 440,00',
    date: '13/05/2023',
    type: 0 // gastos
  },
  {
    id: 2,
    label: 'Boleto conta Água',
    value: 'R$ 130,00',
    date: '12/04/2023',
    type: 1 // gastos
  },
  {
    id: 3,
    label: 'Pix do Adriano',
    value: 'R$ 200,00',
    date: '05/06/2023',
    type: 1 // gastos
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Luigi Capoia" />

      <Balance saldo="10.030,00" gastos="-874,00" />

      <Actions />

      <Text style={styles.title}>Ultimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
