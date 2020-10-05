import React from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_SHIRT } from '../../graphql/createShirt';
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
  size: {
    type: 'number',
    label: 'Size',
    defaultValue: 0,
  },
};

const NewShirt: React.FunctionComponent<unknown> = () => {
  const [createShirt] = useMutation(CREATE_SHIRT);

  const handleSubmit = React.useCallback((data) => {
    createShirt({
      variables: {
        name: data.name,
        color: data.color,
        size: parseInt(data.size),
      },
    });
  }, []);

  return (
    <Layout>
      <Form fields={fields} onSubmit={handleSubmit} />
    </Layout>
  );
};

export default NewShirt;
