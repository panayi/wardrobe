import React from 'react';

const useFields = (fields: Array<any>) => {
  const defaultValues = React.useMemo(() => {
    return Object.entries(fields).reduce((acc, [name, field]) => {
      acc[name] = field.defaultValue;

      return acc;
    }, {});
  }, [fields]);

  const inputs = React.useMemo(() => {
    return Object.entries(fields).map(([name, field]) => ({
      ...field,
      name,
    }));
  }, [fields]);

  return {
    defaultValues,
    inputs,
  };
};

export default useFields;
