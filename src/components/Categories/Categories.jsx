import Container from "../shared/Container/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./categoriesData";

const Categories = () => {

    return (
        <Container>
            <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
                {categories.map(category => (
                    <CategoryBox
                        label={category.label}
                        icon={category.icon}
                        key={category.label}
                    />
                ))}
            </div>
        </Container>
    );
};

export default Categories;