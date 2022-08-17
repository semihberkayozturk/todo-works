function Footer() {
    const date = new Date().getFullYear();
    return (
        <footer>
            <h3>Made by Semih Berkay Öztürk - {date}</h3>
        </footer>
    );
}
export default Footer;