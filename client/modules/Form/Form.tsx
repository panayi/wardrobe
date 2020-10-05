import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Text from '../../components/Text';
import Button from '../../components/Button';
import TextInput from './inputTypes/TextInput/TextInput';
import useFields from './useFields';

// TODO: more specific types
type FormProps = {
  fields: Array<any>;
  onSubmit: (data: any) => void;
};

const Root = styled.form`
  display: flex;
  flex-direction: column;
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const Label = styled.span`
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const mapInputTypeToComponent = {
  text: TextInput,
  number: TextInput,
};

const Form: React.FunctionComponent<FormProps> = (props) => {
  const { fields, onSubmit } = props;
  const { defaultValues, inputs } = useFields(fields);

  const { register, handleSubmit } = useForm({
    defaultValues,
  });

  return (
    <Root onSubmit={handleSubmit(onSubmit)}>
      {inputs.map(({ name, type, label }, index) => {
        const InputComponent = mapInputTypeToComponent[type];
        return (
          <Field key={name}>
            <Text as={Label}>{label}</Text>
            <InputComponent
              name={name}
              type={type}
              registerRef={register}
              autoFocus={index === 0}
            />
          </Field>
        );
      })}
      <Actions>
        <Link href="/" passHref>
          <Button as="a" size="large">
            Cancel
          </Button>
        </Link>
        <Button type="submit" variant="primary" size="large">
          Add
        </Button>
      </Actions>
    </Root>
  );
};

export default Form;
