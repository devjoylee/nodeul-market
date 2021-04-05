import React, { useState } from 'react';

export const useForm = () => {
  const [values, setValues] = useState({
    id: Date.now(),
    name: '',
    category: '',
    amount: '',
    price: '',
    description: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(values);
  };

  return { values, handleChange, handleSubmit };
};
