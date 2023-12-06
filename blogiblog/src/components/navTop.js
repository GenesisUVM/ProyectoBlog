import "./navTop.css";

function Navbar() {
  return (
    <nav>
      <div class="barraBuscadora">
        <i class=" logo fa-solid fa-book"></i>
        <i class=" searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
      <ul class="paginas">
        <li class="secciones">Home</li>
        <li class="secciones">Blogs</li>
        <li class="secciones">Contact</li>
        <li class="secciones">Log Out</li>
      </ul>
      <div class="socialMedia">
        <i class="social fa-brands fa-facebook"></i>
        <i class="social fa-brands fa-instagram"></i>
        <i class="social fa-brands fa-pinterest"></i>
        <i class="social fa-brands fa-twitter"></i>
      </div>
    </nav>
  );
}

export default Navbar;
