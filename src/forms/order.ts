import Form from 'mobx-react-form';
import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';

validatorjs.register('phone', (value: string) => 
  value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im),
  'Incorrect phone number'
);
const plugins = {
  dvr: dvr(validatorjs),
};

const fields = [
  {
    name: 'name',
    label: 'Name',
    placeholder: 'Name',
    rules: 'required|string|between:1,25'
  },
  {
    name: 'surname',
    label: 'Surname',
    placeholder: 'Surname',
    rules: 'required|string|between:1,25'
  },
  {
    name: 'phone',
    label: 'Phone Number',
    placeholder: 'Phone Number',
    rules: 'required|phone'
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Email',
    rules: 'required|email|string|between:5,25'
  },
  {
    name: 'dob',
    label: 'Date of birth',
    placeholder: 'dd/mm/yyyy',
    rules: 'required|date'
  },
  {
    name: 'adress',
    label: 'Adress',
    placeholder: 'Adress',
    rules: 'required|string'
  },
  {
    name: 'city',
    label: 'City',
    placeholder: 'City',
    rules: 'required|string'
  },
  {
    name: 'city',
    label: 'City',
    placeholder: 'City',
    rules: 'required|string'
  },
  {
    name: 'state',
    label: 'State',
    placeholder: 'State',
    rules: 'required|string'
  },
  {
    name: 'zip',
    label: 'Zip Code',
    placeholder: 'Zip Code',
    rules: 'required|string'
  }
];


export const OrderForm = (hooks: any) => {
  return new Form({ fields }, { plugins, hooks });
}