import Dropdown from 'react-bootstrap/Dropdown';

function DropdownProfile() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Danh mục sản phẩm
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/store">Tất cả Game</Dropdown.Item>
        <Dropdown.Item href="/detail">Thể loại game</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Game Free</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownProfile;