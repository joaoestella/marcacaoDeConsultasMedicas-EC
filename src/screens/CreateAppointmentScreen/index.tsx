import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../../components/Header';

// Componentes locais
import AppointmentForm from './components/AppointmentForm';
import AppointmentHeader from './components/AppointmentHeader';

// Hooks customizados
import { useCreateAppointment } from './hooks/useCreateAppointment';

// Estilos
import {
  Container,
  ScrollContainer,
} from './styles';


const CreateAppointmentScreen: React.FC = () => {
  const { user } = useAuth();
  const {
    // Estados do formulário
    date,
    selectedTime,
    selectedDoctor,
    loading,
    error,
    doctors,
    loadingDoctors,
    
    // Handlers
    setDate,
    setSelectedTime,
    setSelectedDoctor,
    handleCreateAppointment,
    handleCancel,
    
    // Dados processados
    doctorsList,
  } = useCreateAppointment();

  return (
    <Container>
      <Header />
      <ScrollContainer>
        {/* Cabeçalho da tela */}
        <AppointmentHeader />

        {/* Formulário de agendamento */}
        <AppointmentForm
          date={date}
          selectedTime={selectedTime}
          selectedDoctor={selectedDoctor}
          loading={loading}
          error={error}
          doctors={doctorsList}
          loadingDoctors={loadingDoctors}
          onDateChange={setDate}
          onTimeSelect={setSelectedTime}
          onDoctorSelect={setSelectedDoctor}
          onSubmit={handleCreateAppointment}
          onCancel={handleCancel}
        />
      </ScrollContainer>
    </Container>
  );
};

export default CreateAppointmentScreen;