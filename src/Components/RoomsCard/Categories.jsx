import Container from "../Container/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {
    return (
        <Container>
            <div className="py-4 flex items-center justify-between overflow-x-auto">
                {
                categories.map((category,index)=> <CategoryBox key={index} label={category.label} icon={category?.icon}></CategoryBox>)
                }
            </div>
        </Container>
    );
};

export default Categories;