import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Menu, Container, Icon } from 'semantic-ui-react'

const Header = ({ siteTitle }) => (
  <Menu size='large' inverted style={{ borderRadius: 0 }}>
    <Container>
      <Menu.Item as={Link} to='/'><Icon name='home' /> Home</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item as={Link} to='/projects'><Icon name='code' />Projects</Menu.Item>
        <Menu.Item as={Link} to='/about'><Icon name='user' />About Me</Menu.Item>
        <Menu.Item as={Link} to='/contact'><Icon name='mail' />Contact</Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
