import { Pagination as PaginationAnt } from 'antd';
import type { PaginationProps } from 'antd';

const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    if (type === 'prev') {
        return <a>Previous</a>;
    }
    if (type === 'next') {
        return <a>Next</a>;
    }
    return originalElement;
}
export function Pagination(props: PaginationProps) {
    return (
        <PaginationAnt {...props} itemRender={itemRender} />
    )
}


