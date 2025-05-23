import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const motoImages = {
  'Mottu_Sport_110i': require('../assets/motos/Mottu_Sport_110i/Mottu_Sport_110i.png'),
  'Mottu-e': require('../assets/motos/Mottu-e/Mottu-e.png'),
  'Mottu': require('../assets/motos/Mottu/Mottu.png'),
};

const motos = [
  {
    key: 'Mottu_Sport_110i',
    modelo: 'Mottu Sport 110i',
    placa: 'ABC-1234',
    vaga: 'A2',
    cor: 'Preta',
    ano: '2023',
    patio: 'Vila Prudente',
    chassi: '9C2KC1660HR123456',
    combustivel: '50%',
  },
  {
    key: 'Mottu-e',
    modelo: 'Mottu-e',
    placa: 'DEF-5678',
    vaga: 'B4',
    cor: 'Azul',
    ano: '2021',
    patio: 'Centro',
    chassi: 'XYZ1234567890ABC',
    combustivel: '70%',
  },
  {
    key: 'Mottu',
    modelo: 'Mottu',
    placa: 'GHI-9012',
    vaga: 'C1',
    cor: 'Vermelha',
    ano: '2022',
    patio: 'Zona Sul',
    chassi: 'LMN0987654321XYZ',
    combustivel: '85%',
  },
];

export default function HomeScreen() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleInfo = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🏠 Bem-vindo ao Pátio de Motos</Text>
      <Text style={styles.subtitle}>Veja abaixo as motos registradas:</Text>

      {motos.map((moto, index) => (
        <TouchableOpacity
          key={moto.key}
          style={styles.motoContainer}
          onPress={() => toggleInfo(index)}
          activeOpacity={0.8}
        >
          {!expandedIndex || expandedIndex !== index ? (
            <>
              <Image
                source={motoImages[moto.key]}
                style={styles.motoImageSmall}
              />
              <View style={styles.initialInfoContainer}>
                <Text style={styles.label}>Modelo: <Text style={styles.info}>{moto.modelo}</Text></Text>
                <Text style={styles.label}>Placa: <Text style={styles.info}>{moto.placa}</Text></Text>
                <Text style={styles.label}>Vaga: <Text style={styles.info}>{moto.vaga}</Text></Text>
              </View>
            </>
          ) : (
            <View style={styles.expandedContainer}>
              <Image
                source={motoImages[moto.key]}
                style={styles.motoImageLarge}
              />
              <View style={styles.infoContainer}>
                <InfoItem label="Placa" value={moto.placa} />
                <InfoItem label="Modelo" value={moto.modelo} />
                <InfoItem label="Cor" value={moto.cor} />
                <InfoItem label="Ano" value={moto.ano} />
                <InfoItem label="Vaga" value={moto.vaga} />
                <InfoItem label="Pátio" value={moto.patio} />
                <InfoItem label="Chassi" value={moto.chassi} />
                <InfoItem label="Combustível" value={moto.combustivel} />
              </View>
            </View>
          )}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

function InfoItem({ label, value }) {
  return (
    <View style={styles.infoBox}>
      <Text style={styles.label}>{label}:</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 20, 
    backgroundColor: '#f9f9f9',
    flexGrow: 1,
    alignItems: 'center',
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    marginBottom: 10, 
    color: '#333',
    textAlign: 'center',
  },
  subtitle: { 
    fontSize: 16, 
    color: '#666', 
    marginBottom: 20, 
    textAlign: 'center',
  },
  motoContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  motoImageSmall: {
    width: 120,
    height: 80,
    borderRadius: 8,
    resizeMode: 'cover',
    marginRight: 15,
  },
  motoImageLarge: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  initialInfoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  expandedContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  infoContainer: {
    width: '100%',
  },
  infoBox: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },
  value: {
    fontSize: 16,
    fontWeight: '400',
    color: '#222',
  },
  info: {
    fontWeight: '400',
    color: '#222',
  },
});
