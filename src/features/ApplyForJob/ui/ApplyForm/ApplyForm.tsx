import { zodResolver } from '@hookform/resolvers/zod';
import { ApplyFormSchema } from 'features/ApplyForJob/model/types/types';
import { zodSchema } from 'features/ApplyForJob/model/types/zodSchema';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { FormErrorMessage } from 'shared/ui/FormErrorMessage/FormErrorMessage';
import { Input } from 'shared/ui/Input/Input';
import { MultiSelect } from 'shared/ui/MultiSelect/MultiSelect';
import { PhoneInput } from 'shared/ui/PhoneInput/PhoneInput';
import { FileUploader } from '../FIleUploader/FileUploader';
import { ModalFileUploader } from '../ModalFileUploader/ModalFileUploader';

const SELECT_OPTIONS = [
  { value: 'junior', label: 'Junior' },
  { value: 'middle', label: 'Middle' },
  { value: 'senior', label: 'Senior' },
  { value: 'lead', label: 'Lead' },
  { value: 'CTO', label: 'CTO' },
];

export const ApplyForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    watch,
  } = useForm<ApplyFormSchema>({
    resolver: zodResolver(zodSchema),
  });

  const onSubmit: SubmitHandler<ApplyFormSchema> = (data) => {
    console.log({
      ...data,
      phone: data.phone.replace(/[()\-_ ]/g, ''),
      skill: data.skill.map((skill) => skill.value),
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-640 bg-white rounded-xl p-10"
    >
      <h2 className="text-primary-950 mb-4 text-2xl font-semibold">
        Drop us a line
      </h2>
      <p className="text-primary-700 mb-8 text-lg">
        Our documentary campaigns feature leading figures, organisations and
        leaders, in open and candid discussions.
      </p>
      <div className="mb-6 flex flex-wrap gap-4">
        <div className="w-full">
          <Input
            type="text"
            placeholder="Name"
            {...register('name')}
            className="w-full"
            style={errors.name && { border: '1px solid #FF2525' }}
          />
          {errors.name && (
            <FormErrorMessage errorMessage={errors.name.message} />
          )}
        </div>
        <div className="grow">
          <PhoneInput
            type="tel"
            placeholder="Phone"
            {...register('phone')}
            style={errors.phone && { border: '1px solid #FF2525' }}
          />
          {errors.phone && (
            <FormErrorMessage errorMessage={errors.phone.message} />
          )}
        </div>
        <div className="grow">
          <Input
            type="text"
            placeholder="E-mail"
            {...register('email')}
            style={errors.email && { border: '1px solid #FF2525' }}
          />
          {errors.email && (
            <FormErrorMessage errorMessage={errors.email.message} />
          )}
        </div>
        <div>
          <Controller
            control={control}
            name="skill"
            rules={{ required: true }}
            render={({ field: { onChange, value, name } }) => (
              <MultiSelect
                onChange={onChange}
                value={value}
                name={name}
                errors={errors.skill}
                options={SELECT_OPTIONS}
                placeholder="Your skill"
              />
            )}
          />
          {errors?.skill && (
            <FormErrorMessage errorMessage={errors.skill.message} />
          )}
        </div>
        <FileUploader
          watch={watch}
          setIsModalOpen={setIsModalOpen}
          setValue={setValue}
          errorMessage={errors?.documents?.message}
        />
        <ModalFileUploader
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          control={control}
          setValue={setValue}
          watch={watch}
        />
        <div>
          <Checkbox
            className="mt-2"
            label="I’m agree with every data you collect"
            {...register('agreement')}
          />
          {errors.agreement && (
            <FormErrorMessage errorMessage={errors.agreement.message} />
          )}
        </div>
      </div>
      <button
        type="submit"
        className="w-full rounded-full hover:bg-button-hover h-16 cursor-pointer bg-secondary text-base font-medium text-white"
      >
        Send
      </button>
    </form>
  );
};
