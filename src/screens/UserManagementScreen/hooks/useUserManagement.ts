import { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../../contexts/AuthContext';
import { RootStackParamList } from '../../../types/navigation';
import { User, UserRole } from '../types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'UserManagement'>;

export const useUserManagement = () => {
  const { user: currentUser } = useAuth();
  const navigation = useNavigation<NavigationProp>();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  /**
   * Carrega todos os usuários do AsyncStorage
   */
  const loadUsers = useCallback(async () => {
    try {
      setLoading(true);
      const storedUsers = await AsyncStorage.getItem('@MedicalApp:users');
      
      if (storedUsers) {
        const allUsers: User[] = JSON.parse(storedUsers);
        // Filtra o usuário atual da lista (opcional)
        const filteredUsers = allUsers.filter(user => user.id !== currentUser?.id);
        setUsers(filteredUsers);
      }
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
      Alert.alert('Erro', 'Não foi possível carregar os usuários');
    } finally {
      setLoading(false);
    }
  }, [currentUser?.id]);

  /**
   * Deleta um usuário específico
   */
  const deleteUser = useCallback(async (userId: string) => {
    Alert.alert(
      'Confirmar Exclusão',
      'Tem certeza que deseja excluir este usuário?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            try {
              const storedUsers = await AsyncStorage.getItem('@MedicalApp:users');
              
              if (storedUsers) {
                const allUsers: User[] = JSON.parse(storedUsers);
                const updatedUsers = allUsers.filter(user => user.id !== userId);
                
                await AsyncStorage.setItem('@MedicalApp:users', JSON.stringify(updatedUsers));
                await loadUsers(); // Recarrega a lista
                
                Alert.alert('Sucesso', 'Usuário excluído com sucesso');
              }
            } catch (error) {
              console.error('Erro ao deletar usuário:', error);
              Alert.alert('Erro', 'Não foi possível excluir o usuário');
            }
          }
        }
      ]
    );
  }, [loadUsers]);

  /**
   * Calcula estatísticas dos usuários
   */
  const getUserStats = useCallback(() => {
    const total = users.length;
    const admins = users.filter(user => user.role === 'admin').length;
    const doctors = users.filter(user => user.role === 'doctor').length;
    const patients = users.filter(user => user.role === 'patient').length;

    return { total, admins, doctors, patients };
  }, [users]);

  /**
   * Funções de navegação
   */
  const navigateToAddUser = useCallback(() => {
    // navigation.navigate('AddUser');
    Alert.alert('Em desenvolvimento', 'Funcionalidade em construção');
  }, []);

  const navigateToEditUser = useCallback((userId: string) => {
    // navigation.navigate('EditUser', { userId });
    Alert.alert('Em desenvolvimento', 'Funcionalidade em construção');
  }, []);

  const navigateBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const refreshUsers = useCallback(() => {
    loadUsers();
  }, [loadUsers]);

  // Carrega usuários quando a tela entra em foco
  useFocusEffect(loadUsers);

  return {
    // Estados
    users,
    loading,
    
    // Dados calculados
    userStats: getUserStats(),
    
    // Ações
    deleteUser,
    refreshUsers,
    navigateToAddUser,
    navigateToEditUser,
    navigateBack,
  };
};