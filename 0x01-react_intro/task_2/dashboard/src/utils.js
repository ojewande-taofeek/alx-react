export function getFullYear() {
    const year = new Date().getFullYear();
    return year;
}

export function getFooterCopy(isIndex) {
    return (
        <div className="footer-school-name">
        {isIndex ? 'Holberton School' : 'Holberton School main dashboard'
    }
    </div>)
}
