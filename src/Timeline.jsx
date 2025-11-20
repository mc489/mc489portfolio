import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

function ColorsTimeline() {
  return (
    <Timeline position="alternate">

      {/* START — 2023 */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot 
            variant="outlined" 
              sx={{
        display: "flex",
        flexDirection: "column-reverse",  // 👈 flips timeline upward
      }}
      position="right"
    />
          <TimelineConnector sx={{ backgroundColor: "black" }} />
        </TimelineSeparator>
        <TimelineContent>2023 • Started BSIT</TimelineContent>
      </TimelineItem>

      {/* CURRENT — 2027 */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot 
            sx={{ backgroundColor: "black" }} 
          />
        </TimelineSeparator>
        <TimelineContent>2027 • Expected Graduation (Current Progress)</TimelineContent>
      </TimelineItem>

    </Timeline>
  );
}

export default ColorsTimeline;
