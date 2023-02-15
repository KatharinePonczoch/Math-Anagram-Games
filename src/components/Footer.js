import React from "react";

function Footer() {
  return (
    <footer className="navbar fixed-bottom">
      <div className="container-fluid">
        <div>
          Copyright &copy; {new Date().getFullYear()} Katharine Ponczoch
        </div>
      </div>
    </footer>
  );
}

export default Footer;
