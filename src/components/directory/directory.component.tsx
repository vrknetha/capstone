import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({
  categories,
}: {
  categories: { id: number; imageUrl: string; title: string }[];
}) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category}></CategoryItem>
      ))}
    </div>
  );
};

export default Directory;
