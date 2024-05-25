import { Dispatch, SetStateAction } from 'react';
import {
  Control,
  Controller,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { FileInput } from 'shared/ui/FileInput/FileInput';
import { Modal } from 'shared/ui/Modal/Modal';
import { ApplyFormSchema } from '../../model/types/types';

interface ModalFileUploaderProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  control: Control<ApplyFormSchema>;
  setValue: UseFormSetValue<ApplyFormSchema>;
  watch: UseFormWatch<ApplyFormSchema>;
}

export const ModalFileUploader = (props: ModalFileUploaderProps) => {
  const { isModalOpen, setIsModalOpen, control, setValue, watch } = props;

  return (
    <Modal visible={isModalOpen} setVisible={setIsModalOpen}>
      <Controller
        control={control}
        name="documents"
        render={({ field: { onChange } }) => (
          <FileInput
            multiple={true}
            onChange={onChange}
            setValue={setValue}
            watch={watch}
            setVisible={setIsModalOpen}
          />
        )}
      />
    </Modal>
  );
};
