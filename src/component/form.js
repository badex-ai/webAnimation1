import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// Yup validation schema
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  address: Yup.string().required('Address is required'),
  zipCode: Yup.string().required('Zip Code is required').matches(/^\d{5}$/, 'Zip Code must be 5 digits'),
  phoneNumber: Yup.string().required('Phone Number is required').matches(/^\d{10}$/, 'Phone Number must be 10 digits'),
  ownership: Yup.string().required('Ownership status is required'),
});

const QuoteForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <div className="w-[40rem] mx-auto p-8 bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Get a free personalized quote</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        
        {/* First Name */}
        <div className="mb-4">
          <label className="block text-md font-medium">First Name</label>
          <input
            type="text"
            {...register('firstName')}
            className={`border p-2 w-full rounded ${errors.firstName ? 'border-red-500' : ''}`}
            placeholder="First Name"
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label className="block text-md font-medium">Last Name</label>
          <input
            type="text"
            {...register('lastName')}
            className={`border p-2 w-full rounded ${errors.lastName ? 'border-red-500' : ''}`}
            placeholder="Last Name"
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-md font-medium">Address</label>
          <input
            type="text"
            {...register('address')}
            className={`border p-2 w-full rounded ${errors.address ? 'border-red-500' : ''}`}
            placeholder="Address"
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
        </div>

        {/* Zip Code */}
        <div className="mb-4">
          <label className="block text-md font-medium">Zip Code</label>
          <input
            type="text"
            {...register('zipCode')}
            className={`border p-2 w-full rounded ${errors.zipCode ? 'border-red-500' : ''}`}
            placeholder="Zip Code"
          />
          {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode.message}</p>}
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-md font-medium">Phone Number</label>
          <input
            type="text"
            {...register('phoneNumber')}
            className={`border p-2 w-full rounded ${errors.phoneNumber ? 'border-red-500' : ''}`}
            placeholder="Phone Number"
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
        </div>

        {/* Ownership */}
        <div className="mb-4">
          <label className="block text-md font-medium">Do you own your own home?</label>
          <div className="flex items-center">
            <input
              type="radio"
              value="yes"
              {...register('ownership')}
              className="mr-2"
            />
            <label className="mr-4">Yes</label>
            <input
              type="radio"
              value="no"
              {...register('ownership')}
              className="mr-2"
            />
            <label>No</label>
          </div>
          {errors.ownership && <p className="text-red-500 text-sm">{errors.ownership.message}</p>}
        </div>

        {/* Terms of Service */}
        <div className="mb-4">
          <a href="/terms" className="text-blue-600 underline">Terms of Service</a>
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg">
            Get a Quote
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
