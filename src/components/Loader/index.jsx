import './styles.scss';

export const Loader = () => {
    return (
        <div className='cssload-main'>
            <div className='cssload-heart'>
                <span className='cssload-heartL'></span>
                <span className='cssload-heartR'></span>
                <span className='cssload-square'></span>
            </div>
            <div className='cssload-shadow'></div>
            
        </div>
    );
};
