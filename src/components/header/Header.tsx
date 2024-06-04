
const Header = () => {
    const navStyle: React.CSSProperties = {
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'left',
        padding: '5px 10px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    };

    const titleStyle: React.CSSProperties = {
        margin: '0',
        fontSize: '1.2rem',
        letterSpacing: '1px',
    };

    return (
        <nav style={navStyle}>
            <h1 style={titleStyle}>Movies Hunt</h1>
        </nav>
    );
};

export default Header;