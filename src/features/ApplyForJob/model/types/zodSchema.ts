import { ZodType, z } from 'zod';
import { ApplyFormSchema, SkillSchema } from './types';

const ACCEPTED_FILE_TYPES = [
  'application/pdf',
  'image/png',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const skillSchema: ZodType<SkillSchema> = z.object({
  value: z.string(),
  label: z.string(),
});

const documentSchema = z.instanceof(File);

export const zodSchema: ZodType<ApplyFormSchema> = z
  .object({
    name: z.string().min(2, 'Minimum 2 characters allowed'),
    phone: z.string().min(16, 'Invalid phone number'),
    email: z.string().email(),
    skill: z
      .array(skillSchema, { required_error: 'Please select your skill level' })
      .nonempty(),
    documents: z
      .array(documentSchema, { required_error: 'No documents uploaded' })
      .nonempty('No documents uploaded'),
    agreement: z.boolean({ required_error: 'Agreement required' }),
  })
  .refine(
    (data) => {
      for (const document of data.documents) {
        if (!ACCEPTED_FILE_TYPES.includes(document.type)) return false;
      }
      return true;
    },
    {
      message: 'Unsupported file format',
      path: ['documents'],
    }
  )
  .refine((value) => value.agreement, {
    message: 'Agreement required',
    path: ['agreement'],
  });
