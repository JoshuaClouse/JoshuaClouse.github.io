import PropTypes from 'prop-types';

const Entry = (props) => {
    console.log(props.imgPath);
    return(
        <div className="flex-container-bottom">
				<div className="column-flex">
					<h3>{props.title}</h3>
					<p>{props.date}</p>
					<img src={props.imgPath}></img>
				</div>
				<p className="align-bottom">
					{props.content}
				</p>
		</div>
    );
};

Entry.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    imgPath: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default Entry;