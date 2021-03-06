import React from 'react';

import { Typography } from '@material-ui/core';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
//import WorkIcon from '@material-ui/icons/Work';

import './Timeline.css';

const CustomTimeline = ({ title, icon, children }) => {
	return (
		<Timeline className={'timeline'}>
			{/* Item Header */}
			<TimelineItem className={'timeline_firstItem'}>
				<TimelineSeparator>
					<TimelineDot className={'timeline_dot_header'}>{icon}</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					<Typography variant="h6" className={'timeline_header'}>
						{title}
					</Typography>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator />
				<TimelineContent>
					<Typography variant="h6" className={'timeline_header'}>
						{children}
					</Typography>
				</TimelineContent>
			</TimelineItem>
		</Timeline>

		//======= Proba =======
		/*<Timeline className={'timeline'}>
			{/!* Item Header *!/}
			<TimelineItem className={'timeline_firstItem'}>
				<TimelineSeparator>
					<TimelineDot className={'timeline_dot_header'}>{icon}</TimelineDot>
					<TimelineConnector className={'timeline_line'} />
				</TimelineSeparator>
				<TimelineContent>
					<Typography variant="h6" className={'timeline_header'}>
						{title}
					</Typography>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineDot className={'timeline_dot'} />
					<TimelineConnector className={'timeline_line'} />
				</TimelineSeparator>
				<TimelineContent>
					<Typography variant="h6" className={'timeline_header'}>
						{children}
					</Typography>
				</TimelineContent>
			</TimelineItem>
		
		<TimelineItem className={'timeline_firstItem'}>
				<TimelineSeparator>
			 		<TimelineDot/>
				 	<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
				 <Typography variant="h6" className={'timeline_header'}>
					{children}
				 </Typography>
				</TimelineContent>
			</TimelineItem>
		 	<TimelineItem className={'timeline_firstItem'}>
				<TimelineSeparator>
			 		<TimelineDot/>
				</TimelineSeparator>
				<TimelineContent>
					Tel: 12313-323323
				</TimelineContent>
			</TimelineItem>
		</Timeline>*/
	);
};

export const CustomTimelineSeparator = () => (
	<TimelineSeparator className={'separator_padding'}>
		<TimelineDot variant={'outlined'} className={'timeline_dot'} />
		{/* <TimelineConnector /> */}
	</TimelineSeparator>
);

export default CustomTimeline;
