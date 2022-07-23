import Icon from 'assets/img/new_page.png';
import { LinkHTMLAttributes } from 'react';

interface IUrl {
    url: string
}

export default function IconLink({url}: IUrl) {
    return (
        <a href={url} >
            <img className='IconNewPage' src={Icon} />
        </a>
    )
}