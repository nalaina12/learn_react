// UserList component to display a list of users: ChildComponent
import PropTypes from 'prop-types';

function UserList(props) {
  return (
    <ul>
      {props.users.map(user => (
        <li key={user.id}>
          {user.name} - {user.role}
        </li>
      ))}
    </ul>
  )
}

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UserList;
