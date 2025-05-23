import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function VagasScreen() {
  const vagas = [
    true, false, true, true, false, true, false, true, true, false, 
    true, true, false, true, true, true, true, false, true, true,
    false, true, true, false, true, false, true, true, false, true,
    true, true, false, true, false, true, true, false, true, false,
    true, false, true, true, true, true, false, true, true, true,
  ];

  const letras = ['A', 'B', 'C', 'D', 'E']; // A, B, C, D, E para as linhas

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vagas</Text>
      <Text style={styles.subtitle}>Visualize as vagas disponíveis no pátio.</Text>

      <View style={styles.grid}>
        {letras.map((letra, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {Array.from({ length: 10 }, (_, colIndex) => {
              const index = rowIndex * 10 + colIndex;
              return (
                <View
                  key={index}
                  style={[
                    styles.vaga,
                    { backgroundColor: vagas[index] ? '#006400' : '#FF0000' },
                  ]}
                >
                  <Text style={styles.vagaText}>{`${letra}${colIndex + 1}`}</Text>
                </View>
              );
            })}
          </View>
        ))}
      </View>

      <View style={styles.legendaContainer}>
        <View style={styles.legendaItem}>
          <View style={[styles.legendaCor, { backgroundColor: '#006400' }]} />
          <Text style={styles.legendaTexto}>Livre</Text>
        </View>
        <View style={styles.legendaItem}>
          <View style={[styles.legendaCor, { backgroundColor: '#FF0000' }]} />
          <Text style={styles.legendaTexto}>Ocupada</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 10, 
    color: '#333',
  },
  subtitle: { 
    fontSize: 16, 
    color: '#666', 
    marginBottom: 20, 
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: 350,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  vaga: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
    marginVertical:20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vagaText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  legendaContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  legendaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  legendaCor: {
    width: 20,
    height: 20,
    borderRadius: 4,
    marginRight: 8,
  },
  legendaTexto: {
    fontSize: 14,
    color: '#333',
  },
});
