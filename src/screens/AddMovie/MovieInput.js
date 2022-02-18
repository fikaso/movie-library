import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMovie, editMovie } from '../../redux/moviesSlice';
import { H2 } from '../../style/components/Heading';
import { Input } from '../../style/components/Input';
import { Button } from '../../style/components/Button';
import Upload from '../../style/icons/Upload';
import { TextSmall } from '../../style/components/Text';
import { DropImageArea } from '../../style/components/DropImageArea';
import { CreateMovie } from '../../style/components/CreateMovie';
import { Form } from '../../style/components/Form';
import Header from '../../components/Header';

function MovieInput() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const editMode = useParams();
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      setTitle(state.prevTitle);
      setYear(state.prevYear);
    }
  }, [state]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editMode.id) {
      dispatch(
        editMovie({
          title: title,
          year: year,
          id: editMode.id,
        })
      );
    } else {
      dispatch(
        addMovie({
          title: title,
          year: year,
        })
      );
    }

    setTitle('');
    setYear('');

    navigate('/');
  };
  return (
    <>
      <Header>
        {editMode.id ? <H2>Edit movie</H2> : <h2>Create a new movie</h2>}
      </Header>

      <CreateMovie>
        <DropImageArea>
          <Upload />
          <TextSmall>Drop an image here</TextSmall>
        </DropImageArea>
        <Form>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Publication year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />

            <div>
              <Button secondary type="submit">
                Submit
              </Button>
              <Button onClick={() => navigate('/')}>Cancel</Button>
            </div>
          </form>
        </Form>
      </CreateMovie>
    </>
  );
}

export default MovieInput;
