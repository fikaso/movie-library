import { Button } from '../../../style/components/Button';
import { FormButtons, FormStyled } from './FormStyled';
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
        <Input
          extended
          type="text"
          placeholder="Title"
          name="title"
          error={formErrors.title}
          value={formValues.title}
          onChange={handleChange}
        />
        {formErrors.title && <p>Title is required</p>}

        <Input
          type="text"
          placeholder="Publication year"
          name="year"
          error={formErrors.year}
          value={formValues.year}
          onChange={handleChange}
        />
        {formErrors.year && <p>Publication year is required</p>}

        <FormButtons>
          <Button secondary type="submit">
            Submit
          </Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </FormButtons>
      </form>
    </FormStyled>
  );
}

export default Form;
