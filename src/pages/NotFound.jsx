import { useNavigate } from 'react-router';
import goBack from '../assets/404.png';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ fontSize: '40px' }}>Page Not Found</div>
      <img src={goBack} alt="404" width={750} onClick={() => navigate('/')} />
    </div>
  );
};

export default NotFound;
