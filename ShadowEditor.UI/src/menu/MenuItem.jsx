import './css/MenuItem.css';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

/**
 * 菜单项
 * @author tengge / https://github.com/tengge1
 */
class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this, props.onClick);
    }

    handleClick(onClick, event) {
        event.stopPropagation();
        onClick && onClick(event);
    }

    render() {
        const { title, className, style, children, show, onClick, ...others } = this.props;

        const subMenu = children && children.length && <><div className={'suffix'}>
            <i className={'iconfont icon-right-triangle'}></i>
        </div>
            <div className={'sub'}>
                <ul className={'wrap'}>{children}</ul>
            </div></>;

        return <li
            className={classNames('MenuItem', !show && 'hidden', className)}
            style={style}
            onClick={this.handleClick}
            {...others}>
            <span>{title}</span>
            {subMenu}
        </li>;
    }
}

MenuItem.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
    show: PropTypes.bool,
    onClick: PropTypes.func,
};

MenuItem.defaultProps = {
    title: null,
    className: null,
    style: null,
    children: null,
    show: true,
    onClick: null,
};

export default MenuItem;