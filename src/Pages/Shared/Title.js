import React from 'react';

const Title = ({content}) => {
    const {title , des , head} = content
    return (
        <div className="hero">
            <div className="hero-content text-center">
                <div className="max-w-md">
                <p className='text-main font-bold mb-3 text-xl capitalize'>{head}</p>
                <h1 className="text-4xl font-bold capitalize">{title}</h1>
                <p className="py-6 capitalize">{des}</p>
                </div>
            </div>
        </div>
    );
};

export default Title;