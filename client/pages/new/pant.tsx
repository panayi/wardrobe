import React from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_PANT } from '../../graphql/createPant';
import Layout from '../../modules/Layout/Layout';
import Form from '../../modules/Form/Form';

const fields = {
  name: {
    type: 'text',
    label: 'Name',
    defaultValue: '',
  },
  color: {
    type: 'text',
    label: 'Color',
    defaultValue: '',
  },
  width: {
    type: 'number',
    label: 'Width',
    defaultValue: 0,
  },
  length: {
    type: 'number',
    label: 'Length',
    defaultValue: 0,
  },
};

const NewPant: React.FunctionComponent<unknown> = () => {
  const [createPant] = useMutation(CREATE_PANT);

  const handleSubmit = React.useCallback((data) => {
    createPant({
      variables: {
        name: data.name,
        color: data.color,
        width: parseInt(data.width),
        length: parseInt(data.length),
      },
    });
  }, []);

  return (
    <Layout>
      <Form fields={fields} onSubmit={handleSubmit} />
    </Layout>
  );
};

export default NewPant;
