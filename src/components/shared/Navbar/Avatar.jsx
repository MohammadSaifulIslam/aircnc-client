import { useContext } from 'react';
import avaterImg from '../../../assets/images/placeholder.jpg';
import { AuthContext } from '../../../providers/AuthProvider';
const Avatar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <img src={user && user?.photoURL ? user?.photoURL : avaterImg} width={30} height={30}  alt="profile" className='rounded-full' />
        </div>
    );
};

export default Avatar;