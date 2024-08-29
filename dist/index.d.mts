import * as React from 'react';

declare const ReactImageUpload: React.FC<{
    initImage?: string[];
    label?: string;
    description?: string;
    maxFiles?: number;
    onImageChange: (images: (File | string)[]) => void;
}>;

export { ReactImageUpload as default };
