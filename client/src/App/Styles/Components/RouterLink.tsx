import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

export const RouterLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
    <Link ref={ref as any} {...props} />
));