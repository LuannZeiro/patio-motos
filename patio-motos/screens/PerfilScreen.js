import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Perfil.webp')}
        style={styles.avatar}
      />
      <Text style={styles.name}>Perfil Demonstração</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>📧 Email</Text>
        <Text style={styles.info}>rmxxxxxx@fiap.com.br</Text>

        <Text style={styles.label}>📞 Telefone</Text>
        <Text style={styles.info}>(11) 99999-9999</Text>

        <Text style={styles.label}>🏢 Cargo</Text>
        <Text style={styles.info}>Operador de Pátio</Text>

        <Text style={styles.label}>🆔 ID</Text>
        <Text style={styles.info}>12345</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 24, 
    backgroundColor: '#FFFFFF',
  },
  avatar: { 
    width: 120, 
    height: 120, 
    borderRadius: 60, 
    marginBottom: 24, 
    borderWidth: 3, 
    borderColor: '#006400',
  },
  name: { 
    fontSize: 24, 
    fontWeight: '600', 
    color: '#006400',
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginTop: 10,
  },
  info: { 
    fontSize: 16, 
    color: '#333', 
    fontWeight: '500',
  },
});
