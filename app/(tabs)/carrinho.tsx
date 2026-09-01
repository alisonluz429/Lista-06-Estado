import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput, FlatList, Alert, TouchableOpacity } from 'react-native';

type Item = {
  id: string;
  nome: string;
};

export default function Carrinho() {
  const [itens, setItens] = useState<Item[]>([]);
  const [novoItem, setNovoItem] = useState('');

  const adicionar = () => {
    if (!novoItem.trim()) {
      Alert.alert('Erro', 'Digite um item');
      return;
    }
    const item: Item = {
      id: Date.now().toString(),
      nome: novoItem.trim(),
    };
    setItens([...itens, item]);
    setNovoItem('');
  };

  const remover = (id: string) => {
    setItens(itens.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          value={novoItem} 
          onChangeText={setNovoItem} 
          placeholder="Novo item..." 
        />
        <Button title="Adicionar" onPress={adicionar} />
      </View>

      <FlatList
        data={itens}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <Text style={styles.itemTexto}>{item.nome}</Text>
            <TouchableOpacity onPress={() => remover(item.id)}>
              <Text style={styles.remover}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 6,
    marginBottom: 8,
  },
  itemTexto: {
    fontSize: 16,
  },
  remover: {
    color: '#ef4444',
    fontWeight: 'bold',
    fontSize: 16,
    paddingHorizontal: 8,
  },
});