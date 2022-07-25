import Icon from 'assets/img/new_page.png';
import style from './IconLink.module.scss';

interface IProps {
    url: string
}

export default function IconLink({url}: IProps) {
    return (
        <a className={style.IconLink} target="_blank" href={url} >
            <img className={style.IconLink__icon} src={Icon} />
        </a>
    )
}