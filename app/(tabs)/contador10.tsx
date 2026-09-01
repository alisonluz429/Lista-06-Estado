import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Contador() {
  const [contador, setContador] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const toggleTema = () => setIsDark(!isDark);

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#1a1a2e' : '#f8fafc' }]}>
      
      <View style={styles.topo}>
        <Button 
          title={isDark ? "☀️ Tema Claro" : "🌙 Tema Escuro"} 
          onPress={toggleTema} 
          color={isDark ? "#f1c40f" : "#34495e"}
        />
      </View>

      <Text style={[styles.titulo, { color: isDark ? '#ffffff' : '#0f172a' }]}>
        Contador
      </Text>

      <Text style={styles.numero}>{contador}</Text>
      
      <View style={styles.botoes}>
        <Button title="-" onPress={() => setContador(v => Math.max(0, v - 1))} />
        <Button title="+" onPress={() => setContador(v => Math.min(10, v + 1))} />
      </View>

      {(contador === 0 || contador === 10) && (
        <View style={styles.alerta}>
          {contador === 10 && <Text style={styles.aviso}>Aviso: Limite máximo!</Text>}
          {contador === 0 && <Text style={styles.aviso}>Aviso: Limite mínimo!</Text>}
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  topo: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  titulo: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  numero: { 
    fontSize: 72, 
    fontWeight: 'bold', 
    color: '#3b82f6' 
  },
  botoes: { 
    flexDirection: 'row', 
    gap: 20, 
    marginTop: 20 
  },
  alerta: {
    marginTop: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 8,
    backgroundColor: 'rgba(239, 68, 68, 0.85)'
  },
  aviso: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});