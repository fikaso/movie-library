import { Button } from '../../../style/components/Button';
import { FormStyled } from './FormStyled';
import { Input } from '../../../style/components/Input';

function Form({
  formValues,
  handleChange,
  handleSubmit,
  handleCancel,
  formErrors,
}) {
  return (
    <FormStyled>
      <form onSubmit={handleSubmit}>
        {(formErrors.title || formErrors.year) && <p>Fields are required</p>}
        <Input
          extended
          type="text"
          placeholder="Title"
          name="title"
          error={formErrors.title}
          value={formValues.title}
          onChange={handleChange}
        />

        <Input
          type="text"
          placeholder="Publication year"
          name="year"
          error={formErrors.year}
          value={formValues.year}
          onChange={handleChange}
        />

        <div>
          <Button secondary type="submit">
            Submit
          </Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </div>
      </form>
    </FormStyled>
  );
}

export default Form;
