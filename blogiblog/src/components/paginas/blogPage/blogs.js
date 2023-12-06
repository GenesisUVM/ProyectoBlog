import "./blogs.css";
import MenuGorup from "./menuLateral";

function Blogs() {
  let items = [
    "Arte",
    "Belleza",
    "Cientifico",
    "Historia",
    "Ingenieria",
    "Recetas",
    "Salud",
    "Social",
  ];
  const handleSelectItem = (item) => {
    console.log(item);
  };
  return (
    <>
      <MenuGorup
        items={items}
        heading="Categorias"
        onSelectItem={handleSelectItem}
      />
      <section></section>
    </>
  );
}

export default Blogs;
