import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMovie, editMovie } from '../../redux/moviesSlice';
import { H2 } from '../../style/components/Heading';
import Upload from '../../style/icons/Upload';
import { TextSmall } from '../../style/components/Text';
import { DropImageArea } from './MovieInputStyled';
import { CreateMovie } from './MovieInputStyled';
import Header from '../../components/Header/Header';
import { useDropzone } from 'react-dropzone';
import Form from './components/Form';
import Image from '../../components/Image/Image';
// import Image from '../../components/Image/Image';
function MovieInput() {
  const initialValues = { title: '', year: '', image: null };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFormValues({ ...formValues, image: acceptedFiles[0] });
    },
  });

  const editMode = useParams();
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      setFormValues({
        title: state.prevTitle,
        year: state.prevYear,
        image: state.image,
      });
    }
  }, [state]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = (formValues) => {
    const errors = {};
    if (formValues.title === '' || !formValues.title) {
      errors.title = 'Title is required';
    }
    if (formValues.year === '' || !formValues.year) {
      errors.year = 'Publication year is required';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormErrors({});
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate(formValues);

    if (errors && Object.entries(errors).length !== 0) {
      setFormErrors(errors);
    } else {
      if (editMode.id) {
        dispatch(
          editMovie({
            title: formValues.title,
            year: formValues.year,
            id: editMode.id,
            image: formValues.image,
          })
        );
      } else {
        dispatch(
          addMovie({
            title: formValues.title,
            year: formValues.year,
            image: formValues.image,
          })
        );
      }
      setFormValues(initialValues);
      navigate('/');
    }
  };
  return (
    <div>
      <Header>
        {editMode.id ? <H2>Edit</H2> : <h2>Create a new movie</h2>}
      </Header>

      <CreateMovie>
        <DropImageArea {...getRootProps()}>
          <input {...getInputProps()} />
          {formValues.image ? (
            <Image
              src={
                typeof formValues.image === 'object'
                  ? URL.createObjectURL(formValues.image)
                  : formValues.image
              }
              alt="MovieImage"
            />
          ) : (
            <>
              <Upload />
              <TextSmall>Drop an image here</TextSmall>
            </>
          )}
        </DropImageArea>

        <Form
          formValues={formValues}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleCancel={() => navigate('/')}
          formErrors={formErrors}
        />
      </CreateMovie>
    </div>
  );
}

export default MovieInput;
