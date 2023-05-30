import Container from "../Container/Container";
import Logo from "./Logo";
import MenuDropdown from "./MenuDropdown";
import Search from "./Search";

const Navbar = () => {
    return (
        <nav className="shadow-sm py-4 border-b-[1px]">
            <Container>
                <div className="flex justify-between gap-3 md:gap-0">
                  <div className='hidden md:block my-auto'>
                  <Logo />
                  </div>
                    <Search />
                    <MenuDropdown/>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;