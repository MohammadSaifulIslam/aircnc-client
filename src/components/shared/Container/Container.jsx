
const Container = ({children}) => {
    return (
        <div className='max-2-[2520px] mx-auto px-5 sm:px-3 md:px-10 xl:px-20'>
            {children}
        </div>
    );
};

export default Container;