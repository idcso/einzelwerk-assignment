/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEventHandler, Dispatch, SetStateAction } from 'react';
import { useDropzone } from 'react-dropzone';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';

interface FileInputProps {
  multiple?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  setValue: UseFormSetValue<any>;
  watch: UseFormWatch<any>;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export const FileInput = ({
  multiple,
  onChange,
  setValue,
  watch,
  setVisible,
  ...rest
}: FileInputProps) => {
  const documents = watch('documents');
  const { getRootProps, getInputProps } = useDropzone({
    multiple,
    onDrop: (acceptedFiles) => {
      const newDocuments =
        (!!documents?.length && [...documents].concat(acceptedFiles)) ||
        acceptedFiles;
      setValue('documents', newDocuments);
      setVisible(false);
    },
    ...rest,
  });

  return (
    <div
      className="w-560 h-650 border-primary-400 grid cursor-pointer place-items-center rounded border border-dashed"
      {...getRootProps()}
    >
      <input {...getInputProps({ onChange })} />
      <p className="flex flex-col items-center gap-4">
        <span className='className="text-primary-950 text-xl font-medium'>
          Drop files here
        </span>
        <span className="text-primary-700 text-lg">
          Put your files in this field
        </span>
      </p>
    </div>
  );
};
