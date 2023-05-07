import { useSelector } from "react-redux";

import { selectCategoriesIsLoad } from "../../store/categories/category.selector";

import ProductCard from "../product-card/product-card.component";
import Spinner from "../spinner/spinner.component";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  const isLoading = useSelector(selectCategoriesIsLoad);
  return (
    <CategoryPreviewContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <h2>
            <Title to={title}>{title.toUpperCase()}</Title>
          </h2>
          <Preview>
            {products
              .filter((_, idx) => idx < 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </Preview>
        </div>
      )}
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
