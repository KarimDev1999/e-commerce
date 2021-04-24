import React from "react";
import ContentLoader from 'react-content-loader';

const LoadingCard: React.FC = () => (
    <ContentLoader
        speed={2}
        width={271}
        height={343}
        viewBox="0 0 271 343"
        backgroundColor="#e3e7e8"
        foregroundColor="#ecebeb"

    >
        <rect x="4" y="5" rx="15" ry="15" width="271" height="343" />
    </ContentLoader>
)

export default LoadingCard