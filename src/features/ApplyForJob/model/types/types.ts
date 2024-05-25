import { FileWithPath } from 'react-dropzone';

export interface SkillSchema {
  value: string;
  label: string;
}

export interface ApplyFormSchema {
  name: string;
  phone: string;
  email: string;
  skill: SkillSchema[];
  documents: FileWithPath[];
  agreement: boolean;
}
