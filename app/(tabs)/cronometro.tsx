import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Cronometro() {
  const [segundos, setSegundos] = useState<number>(0);
  const [rodando, setRodando] = useState<boolean>(false);

  useEffect(() => {
    let intervalo: ReturnType<typeof setInterval>;

    if (rodando) {
      intervalo = setInterval(() => {
        setSegundos((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalo);
  }, [rodando]);

  const formatarTempo = (totalSegundos: number): string => {
    const min = Math.floor(totalSegundos / 60);
    const seg = totalSegundos % 60;
    return `${min.toString().padStart(2, "0")}:${seg.toString().padStart(2, "0")}`;
  };

  const iniciar = () => setRodando(true);
  const pausar = () => setRodando(false);
  const resetar = () => {
    setRodando(false);
    setSegundos(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tempo}>{formatarTempo(segundos)}</Text>
      <View style={styles.botoes}>
        <Button
          title={rodando ? "Pausar" : "Iniciar"}
          onPress={rodando ? pausar : iniciar}
        />
        <Button title="Resetar" onPress={resetar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tempo: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 20,
  },
  botoes: {
    flexDirection: "row",
    gap: 10,
  },
});
