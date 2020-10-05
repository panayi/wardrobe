import React from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { CREATE_SHIRT } from '../../graphql/createShirt';
import Layout from '../../modules/Layout/Layout';
import Form from '../../modules/Form/Form';

// TODO:
// 1. Implement a color selection input
// 2. Validate required fields and color for Shirt

const fields: any = {
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
  const router = useRouter();

  const handleSubmit = React.useCallback(async (data) => {
    console.log(data);
    await createShirt({
      variables: {
        name: data.name,
        color: data.color,
        size: parseInt(data.size),
      },
    });

    router.push('/');
  }, []);

  return (
    <Layout>
      <Form fields={fields} onSubmit={handleSubmit} />
    </Layout>
  );
};

export default NewShirt;
