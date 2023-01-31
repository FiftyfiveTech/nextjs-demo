import axios from 'axios';
import FileUploadButton from '../components/fileUploadButton';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import { useState } from 'react';

const Register = () => {
  const [imageUrl, setImageUrl] = useState('/images/profile.jpg');
  const [db, setDB] = useState('mongo');

  const onChange = async (formData) => {
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event) => {
        console.log(
          `Current progress:`,
          Math.round((event.loaded * 100) / event.total)
        );
      },
    };

    const response = await axios.post('/api/upload-image', formData, config);

    setImageUrl(response.data.url);

    console.log('response', response.data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post(
      `/api/form-${db}`,
      JSON.stringify({
        firstName: event.target.first.value,
        lastName: event.target.last.value,
        imageUrl,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const { data } = response.data;

    alert(`Is this your full name: ${JSON.stringify(data)}`);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '2rem',
      }}
    >
      <Image
        priority
        src={imageUrl}
        className={utilStyles.borderCircle}
        height={144}
        width={144}
        alt={'avatar'}
      />
      <FileUploadButton
        label={'Upload avatar'}
        uploadFileName={'avatar'}
        onChange={onChange}
        acceptedFileTypes={'image/jpeg, image/png'}
        allowMultipleFiles={false}
      />
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '1rem',
        }}
      >
        <label htmlFor="first">First name:</label>
        <input type="text" id="first" name="first" />
        <label htmlFor="last">Last name:</label>
        <input type="text" id="last" name="last" />
        <div>
          <input
            type="radio"
            id="mongo"
            name="db"
            value="mongo"
            checked={db == 'mongo'}
            onChange={(e) => setDB(e.target.value)}
          />{' '}
          <label htmlFor="mongo">MongoDB</label> {' '}
          <input
            type="radio"
            id="mysql"
            name="db"
            value="mysql"
            checked={db == 'mysql'}
            onChange={(e) => setDB(e.target.value)}
          />{' '}
          <label htmlFor="mysql">MySQL</label>
        </div>
        <button
          style={{
            marginTop: '1rem',
            width: '100%',
            background: '#007cff',
            border: 'none',
            borderRadius: '5px',
            height: '30px',
            color: '#fff',
            fontSize: '0.875rem',
            cursor: 'pointer',
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Register;
