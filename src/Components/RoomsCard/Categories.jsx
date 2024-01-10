import Container from "../Container/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";
import { useSearchParams } from "react-router-dom";

const Categories = () => {
    const [params,setParams] = useSearchParams()
    const categorys = params.get('category')
    return (
        <Container>
            <div className="py-4 flex items-center justify-between overflow-x-auto">
                {
                categories.map((category,index)=> <CategoryBox key={index} label={category.label} icon={category?.icon} selected={categorys === category?.label}></CategoryBox>)
                }
            </div>
        </Container>
    );
};

export default Categories;