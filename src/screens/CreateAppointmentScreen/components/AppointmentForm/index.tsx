import React from 'react';
import { ViewStyle } from 'react-native';
import { Input, Button } from 'react-native-elements';
import DoctorList from '../../../../components/DoctorList';
import TimeSlotList from '../../../../components/TimeSlotList';
import theme from '../../../../styles/theme';
import { Doctor } from '../../types';
import {
  Container,
  SectionTitle,
  ErrorText,
} from './styles';

interface AppointmentFormProps {
  date: string;
  selectedTime: string;
  selectedDoctor: Doctor | null;
  loading: boolean;
  error: string;
  doctors: Doctor[];
  loadingDoctors: boolean;
  onDateChange: (date: string) => void;
  onTimeSelect: (time: string) => void;
  onDoctorSelect: (doctor: Doctor) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

const styles = {
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
    width: '100%',
  },
  buttonStyle: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
  },
  cancelButton: {
    backgroundColor: theme.colors.secondary,
    paddingVertical: 12,
  },
};

const AppointmentForm: React.FC<AppointmentFormProps> = ({
  date,
  selectedTime,
  selectedDoctor,
  loading,
  error,
  doctors,
  loadingDoctors,
  onDateChange,
  onTimeSelect,
  onDoctorSelect,
  onSubmit,
  onCancel,
}) => {
  return (
    <Container>
      <Input
        placeholder="Data (DD/MM/AAAA)"
        value={date}
        onChangeText={onDateChange}
        containerStyle={styles.input}
        keyboardType="numeric"
      />

      <SectionTitle>Selecione um Horário</SectionTitle>
      <TimeSlotList
        onSelectTime={onTimeSelect}
        selectedTime={selectedTime}
      />

      <SectionTitle>Selecione um Médico</SectionTitle>
      {loadingDoctors ? (
        <ErrorText>Carregando médicos...</ErrorText>
      ) : (
        <DoctorList
          doctors={doctors}
          onSelectDoctor={onDoctorSelect}
          selectedDoctorId={selectedDoctor?.id}
        />
      )}

      {error ? <ErrorText>{error}</ErrorText> : null}

      <Button
        title="Agendar"
        onPress={onSubmit}
        loading={loading}
        containerStyle={styles.button as ViewStyle}
        buttonStyle={styles.buttonStyle}
      />

      <Button
        title="Cancelar"
        onPress={onCancel}
        containerStyle={styles.button as ViewStyle}
        buttonStyle={styles.cancelButton}
      />
    </Container>
  );
};

export default AppointmentForm;