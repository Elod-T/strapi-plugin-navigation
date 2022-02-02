import React from 'react';
import { useIntl } from 'react-intl';

import { Flex } from '@strapi/design-system/Flex';
import { IconButton } from '@strapi/design-system/IconButton';
import { Typography } from '@strapi/design-system/Typography';
import { Icon } from '@strapi/design-system/Icon';
import PencilIcon from '@strapi/icons/Pencil';
import TrashIcon from '@strapi/icons/Trash';
import RefreshIcon from '@strapi/icons/Refresh';

import Wrapper from './Wrapper';
import ItemCardBadge from '../ItemCardBadge';
import { getTrad } from "../../../translations";

const ItemCardHeader = ({ title, path, icon, removed, onItemRemove, onItemEdit, onItemRestore }) => {

	const { formatMessage } = useIntl();

	return (
		<Wrapper>
			<Flex alignItems="center">
				<Icon as={icon} />
				<Typography variant="omega" fontWeight="bold">
					{title}
				</Typography>
				<Typography variant="omega" fontWeight="bold" textColor='neutral500'>
					{path}
				</Typography>
			</Flex>
			<Flex alignItems="center" style={{ zIndex: 2 }}>
				{removed && 
					(<ItemCardBadge
						borderColor={`danger200`}
						backgroundColor={`danger100`}
						textColor={`danger600`}
					>
						{formatMessage(getTrad("navigation.item.badge.removed"))}
					</ItemCardBadge>)
				}

				<IconButton disabled={removed} onClick={onItemEdit} label="Edit" icon={<PencilIcon />} />
				{removed ?
					<IconButton onClick={onItemRestore} label="Restore" icon={<RefreshIcon />} /> :
					<IconButton onClick={onItemRemove} label="Remove" icon={<TrashIcon />} />
				}
			</Flex>
		</Wrapper>
	);
}

export default ItemCardHeader;