import { Dispatch, SetStateAction } from 'react';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { FormErrorMessage } from 'shared/ui/FormErrorMessage/FormErrorMessage';
import { ApplyFormSchema } from '../../model/types/types';
import { Document } from './Document';

interface FileUploaderProps {
  setValue: UseFormSetValue<ApplyFormSchema>;
  watch: UseFormWatch<ApplyFormSchema>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  errorMessage: string | undefined;
}

export const FileUploader = ({
  watch,
  setIsModalOpen,
  setValue,
  errorMessage,
}: FileUploaderProps) => {
  const uploadedDocuments = watch('documents');

  const onButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const onDeleteDocument = (name: string) => {
    setValue(
      'documents',
      uploadedDocuments.filter((document) => document.path !== name)
    );
  };

  return (
    <div className="flex">
      <div className="flex max-w-80 flex-col gap-3">
        <p className="text-regular text-primary-950 font-medium">
          Dokument hochladen
        </p>
        <p className="text-primary-400 text-sm">
          Klicken Sie auf die Schaltfläche oder ziehen Sie ein Dokument im PDF-,
          DOCX-, PNG.
        </p>
        <ul className="flex flex-row flex-wrap gap-2">
          {uploadedDocuments &&
            uploadedDocuments.map((document) => {
              if (document.path) {
                return (
                  <Document
                    key={document.path}
                    documentName={document.path}
                    onDeleteDocument={onDeleteDocument}
                  />
                );
              }
            })}
        </ul>
      </div>
      <div>
        <button
          className="w-56 border-primary-400 text text-primary-400 grid h-32 place-items-center rounded border border-dashed text-xl"
          onClick={onButtonClick}
          style={errorMessage && { border: '1px dashed #FF2525' }}
        >
          +
        </button>
        {errorMessage && <FormErrorMessage errorMessage={errorMessage} />}
      </div>
    </div>
  );
};
