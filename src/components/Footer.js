import React from 'react';

function Footer() {
  const[year, setYear] = React.useState('')

  React.useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear())
  }, [year]);

  return ( 
    <footer className="footer">
      <p className="footer__copyright">© {year} Mesto Russia</p>
    </footer>
  );
}

export default Footer;