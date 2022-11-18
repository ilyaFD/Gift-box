import Form from 'mobx-react-form';
import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';

validatorjs.register('phone', (value: string) => 
  value.match(/^\d{3}-\d{3}-\d{4}$/),
  'The :attribute phone number is not in the format XXX-XXX-XXXX.'
);

const plugins = { dvr: dvr(validatorjs) };

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
    placeholder: 'XXX-XXX-XXXX',
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

const hooks = {
  onSuccess(form: any) {
    console.log('Form Values!', form.values());
  },
  onError(form: any) {
    console.log('All form errors', form.errors());
  }
};

export const OrderForm = () => {
  return new Form({ fields }, { plugins, hooks });
}