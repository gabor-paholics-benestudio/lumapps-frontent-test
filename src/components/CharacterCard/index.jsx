import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem, Size, Thumbnail, AspectRatio, Button,
} from '@lumx/react';
import './index.scss';

const CharacterCard = ({ character }) => (
	<ListItem size={Size.big} className="lumx-spacing-margin-huge">
		<div className="character__card">
			<div className="character__column lumx-spacing-margin-huge">
				<Thumbnail
					image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
					alt={character.name}
					aspectRatio={AspectRatio.square}
					size={Size.xxl}
				/>
			</div>
			<div className="character__column lumx-spacing-margin-huge">
				<div className="lumx-typography-display1">{character.name}</div>
				<div className="lumx-typography-subtitle2">{character.description}</div>
				<div><Button>See details</Button></div>
			</div>
		</div>
	</ListItem>
);

CharacterCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};


export default CharacterCard;
