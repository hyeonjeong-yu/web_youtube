import Logo from '../header/Logo.jsx';
import Menu from '../header/Menu.jsx';
import Sns from '../header/Sns.jsx';

const Header = props => {
    return (
        <header id='header' role='banner'>
            {/* 컴포넌트화 */}
            <Logo />
            <Menu />
            <Sns />
        </header>
    )
}

Header.propTypes = {}

export default Header