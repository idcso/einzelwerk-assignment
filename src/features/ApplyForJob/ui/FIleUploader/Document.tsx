import FileIcon from 'shared/assets/icons/file.svg?react';

interface DocumentProps {
  documentName: string;
  onDeleteDocument: (name: string) => void;
}

export const Document = ({ documentName, onDeleteDocument }: DocumentProps) => {
  return (
    <li className="bg-input text-primary-950 w-fit flex flex-row items-center gap-2 rounded px-1">
      <div className="flex items-center text-sm">
        {<FileIcon className="mr-1" />}
        {documentName}
      </div>
      <button
        className="w-5 h-5 text-sm font-semibold"
        onClick={() => onDeleteDocument(documentName)}
      >
        x
      </button>
    </li>
  );
};
